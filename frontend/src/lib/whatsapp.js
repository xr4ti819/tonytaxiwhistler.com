/**
 * WhatsApp deep-link helpers.
 * Builds wa.me URLs with a prefilled, multi-language message body so the
 * conversation starts already in context.
 */

const WHATSAPP_NUMBER = "17789173030"; // Canada country code + Tony's line

const T = {
  en: {
    greet: "Hi Tony! I need a ride.",
    pickup: "Pickup",
    dropoff: "Drop-off",
    pax: "Passengers",
    service: "Service",
    estimate: "Quoted estimate",
    when: "When",
    later: "Send me availability",
  },
  ko: {
    greet: "안녕하세요! Tony Taxi 예약하고 싶습니다.",
    pickup: "출발지",
    dropoff: "도착지",
    pax: "인원",
    service: "서비스",
    estimate: "견적",
    when: "시간",
    later: "예약 가능한 시간 알려주세요",
  },
  zh: {
    greet: "您好 Tony！我想预订一辆车。",
    pickup: "出发地",
    dropoff: "目的地",
    pax: "乘客人数",
    service: "服务类型",
    estimate: "报价",
    when: "时间",
    later: "请告诉我可用时间",
  },
  ja: {
    greet: "こんにちは、Tony Taxiを予約したいです。",
    pickup: "出発",
    dropoff: "到着",
    pax: "人数",
    service: "サービス",
    estimate: "料金見積もり",
    when: "時間",
    later: "空き時間を教えてください",
  },
  es: {
    greet: "Hola Tony, necesito un viaje.",
    pickup: "Recogida",
    dropoff: "Destino",
    pax: "Pasajeros",
    service: "Servicio",
    estimate: "Cotización",
    when: "Hora",
    later: "Avísame de la disponibilidad",
  },
  fr: {
    greet: "Bonjour Tony, je voudrais réserver une course.",
    pickup: "Départ",
    dropoff: "Arrivée",
    pax: "Passagers",
    service: "Service",
    estimate: "Estimation",
    when: "Quand",
    later: "Indiquez-moi les disponibilités",
  },
  pt: {
    greet: "Olá Tony! Preciso de uma corrida.",
    pickup: "Embarque",
    dropoff: "Destino",
    pax: "Passageiros",
    service: "Serviço",
    estimate: "Estimativa",
    when: "Quando",
    later: "Me avise sobre a disponibilidade",
  },
};

const SERVICE_LABEL = {
  airport: "Airport · YVR",
  fifa: "FIFA 2026 · BC Place",
  designated: "Designated Driver",
  activity: "Activity / Trailhead",
  nightlife: "Late Night",
  local: "Local · Whistler",
  tour: "Custom Tour",
};

function pickLang() {
  if (typeof window === "undefined") return "en";
  const url = new URLSearchParams(window.location.search).get("lang");
  if (url && T[url]) return url;
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return T[nav] ? nav : "en";
}

export function whatsappUrlForTrip(trip = {}) {
  const lang = pickLang();
  const t = T[lang] || T.en;
  const lines = [t.greet, ""];
  if (trip.pickup) lines.push(`📍 ${t.pickup}: ${trip.pickup}`);
  if (trip.dropoff) lines.push(`🏁 ${t.dropoff}: ${trip.dropoff}`);
  if (trip.passengers) lines.push(`👥 ${t.pax}: ${trip.passengers}`);
  if (trip.service)
    lines.push(`🚗 ${t.service}: ${SERVICE_LABEL[trip.service] || trip.service}`);
  if (trip.estimate != null) lines.push(`💵 ${t.estimate}: $${trip.estimate} CAD`);
  if (trip.when) lines.push(`⏰ ${t.when}: ${trip.when}`);
  if (!trip.when) lines.push(t.later);
  const body = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${body}`;
}

export function whatsappUrlDefault() {
  return whatsappUrlForTrip({});
}
