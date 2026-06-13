# Deploying Tony Taxi Whistler to Netlify + Render + MongoDB Atlas

This is the split-deploy path:
- **Frontend (React)** → Netlify
- **Backend (FastAPI)** → Render free tier
- **Database (MongoDB)** → MongoDB Atlas free tier (512 MB)
- **Domain (tonytaxiwhistler.com)** → DNS pointed at Netlify

Estimated time: 45–60 min, $0/month if you stay within free tiers.

---

## Step 1 — Save your code to GitHub

In the Emergent chat input, click **"Save to GitHub"**. Authorize and pick a repo name like `tony-taxi-whistler`. Wait until it confirms "Saved".

---

## Step 2 — Set up MongoDB Atlas (free tier)

1. Go to https://www.mongodb.com/cloud/atlas → **Sign up** (free)
2. Create a new project: `Tony Taxi Whistler`
3. Click **Build a Database** → choose **M0 Free** tier → region nearest you (Vancouver / North America West)
4. **Create cluster** (takes ~3 minutes)
5. Once ready: **Database Access** → Add Database User
   - Username: `tony`
   - Password: generate a strong one and **save it**
   - Privileges: **Atlas admin**
6. **Network Access** → Add IP Address → **Allow Access from Anywhere** (`0.0.0.0/0`) — for Render to connect
7. **Connect** → **Drivers** → copy the connection string. It looks like:
   ```
   mongodb+srv://tony:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
   Replace `<password>` with the password you saved.

📌 **Save this connection string** — you'll paste it into Render.

---

## Step 3 — Deploy the backend on Render

1. Go to https://render.com → sign up (you can use your GitHub account)
2. Click **New +** → **Web Service**
3. Connect your GitHub → pick the `tony-taxi-whistler` repo
4. Configure:
   - **Name**: `tony-taxi-backend`
   - **Region**: Oregon (West US — closest to Vancouver)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
   - **Instance Type**: **Free**
5. Scroll to **Environment Variables** and add:
   | Key | Value |
   |---|---|
   | `MONGO_URL` | (paste your MongoDB Atlas connection string from Step 2) |
   | `DB_NAME` | `tony_taxi_whistler` |
   | `EMERGENT_LLM_KEY` | (copy from `/app/backend/.env` — ask me if you can't find it) |
   | `CORS_ORIGINS` | `https://tonytaxiwhistler.com,https://www.tonytaxiwhistler.com` |
6. Click **Create Web Service** → wait ~5 min for first deploy
7. You'll get a URL like `https://tony-taxi-backend.onrender.com`

📌 **Save this backend URL** — you'll paste it into Netlify next.

✅ Test it: open `https://tony-taxi-backend.onrender.com/api/` in your browser. You should see `{"service":"Tony Taxi Whistler","status":"ok"}`.

⚠️ **Render free tier sleeps after 15 min of no traffic** — first request after a sleep takes ~30 sec. Upgrade to the $7/mo Starter plan if you want always-on (recommended for production).

---

## Step 4 — Deploy the frontend on Netlify

1. Go to https://netlify.com → sign up (can use GitHub login)
2. **Add new site** → **Import an existing project**
3. Connect to GitHub → pick the `tony-taxi-whistler` repo
4. Build settings (Netlify should auto-detect the `netlify.toml` we shipped):
   - **Base directory**: `frontend/`
   - **Build command**: `yarn install --frozen-lockfile && yarn build`
   - **Publish directory**: `frontend/build/`
5. Click **Show advanced** → **New variable**:
   | Key | Value |
   |---|---|
   | `REACT_APP_BACKEND_URL` | `https://tony-taxi-backend.onrender.com` (from Step 3) |
6. Click **Deploy site** → wait ~3 min

✅ Test the temporary URL Netlify gives you (something like `https://random-name.netlify.app`) — calculator should work end-to-end.

---

## Step 5 — Connect your domain (tonytaxiwhistler.com)

### 5a. In Netlify
1. Inside your new Netlify site → **Domain settings** → **Add custom domain**
2. Enter `tonytaxiwhistler.com` → **Verify** → **Yes, add domain**
3. Netlify will also auto-add `www.tonytaxiwhistler.com`
4. Click **Set up Netlify DNS** OR just keep DNS at your current registrar

### 5b. At your domain registrar (where you bought tonytaxiwhistler.com)
Log in to GoDaddy/Namecheap/Cloudflare/wherever, find DNS settings, then either:

**Option A — Use Netlify DNS (easier, recommended)**
- At your registrar, replace the **nameservers** with the 4 Netlify nameservers shown in Step 5a (they look like `dns1.p01.nsone.net`, etc.)
- Save. DNS propagates in 5 min – 24 hrs.

**Option B — Keep your DNS at the registrar (more control)**
- Add these records:
  | Type | Name | Value |
  |---|---|---|
  | A | @ | `75.2.60.5` (Netlify load balancer) |
  | CNAME | www | `apex-loadbalancer.netlify.com` |
- Delete any old A records pointing elsewhere

### 5c. Wait + verify
- Check propagation at https://dnschecker.org → enter `tonytaxiwhistler.com`
- Netlify auto-provisions Let's Encrypt SSL once DNS resolves — usually 5–15 min after propagation
- Visit `https://tonytaxiwhistler.com` → 🎉

---

## Step 6 — Update CORS on the backend

Once your Netlify temporary URL is replaced by `tonytaxiwhistler.com`, return to Render:
- Settings → Environment → `CORS_ORIGINS`
- Confirm value is exactly: `https://tonytaxiwhistler.com,https://www.tonytaxiwhistler.com`
- Manual Deploy → Clear build cache & deploy

---

## Step 7 — Submit to search engines (post-deploy)

Now that `tonytaxiwhistler.com` is live, submit your sitemap to:

| Engine | URL | Verification meta-tag goes in `index.html` |
|---|---|---|
| Google | https://search.google.com/search-console | `google-site-verification` |
| Bing | https://www.bing.com/webmasters | `msvalidate.01` |
| Naver 🇰🇷 | https://searchadvisor.naver.com | `naver-site-verification` |
| Baidu 🇨🇳 | https://ziyuan.baidu.com | `baidu-site-verification` |
| Yandex 🇷🇺 | https://webmaster.yandex.com | `yandex-verification` |

Send me the 5 verification codes and I'll wire them in, then you redeploy (Netlify will auto-rebuild on git push).

---

## Cost summary

| Service | Free tier limit | Sufficient for Tony Taxi? |
|---|---|---|
| Netlify | 100 GB bandwidth, 300 build min / mo | ✅ Yes for years |
| Render free | 750 hrs / mo, sleeps after 15 min idle | ⚠️ OK to start. $7/mo Starter for always-on |
| MongoDB Atlas M0 | 512 MB storage | ✅ Yes — bookings are tiny |
| **Total to launch** | **$0/mo** | (or $7/mo for always-on backend) |

vs Emergent: $20/mo subscription + 50 credits/mo deploy = ~$30+/mo all-in.

---

## Troubleshooting

**Calculator returns "Couldn't estimate right now"**
- Backend probably sleeping (Render free tier). Wait 30 sec and retry, or upgrade to $7/mo Starter.

**CORS error in browser console**
- Render env var `CORS_ORIGINS` must include `https://tonytaxiwhistler.com` (with https, no trailing slash). Redeploy backend after changing.

**Domain shows "Not Secure"**
- SSL cert is still provisioning. Wait 15 min. If still failing 24 hrs after DNS resolves, click **Renew certificate** in Netlify Domain settings.

**404 on `/yvr-airport-taxi-whistler` etc.**
- The `_redirects` file isn't being picked up. Check `frontend/public/_redirects` is in your GitHub repo and contains `/*  /index.html  200`.

---

Built with care for tonytaxiwhistler.com 🚖 ✝
