import React from "react";
import { useParams, Navigate } from "react-router-dom";
import RoutePage from "@/components/RoutePage";
import { ROUTES } from "@/routes-data";

export default function SeoRoute() {
  const { slug } = useParams();
  const data = ROUTES[slug];
  if (!data) return <Navigate to="/" replace />;
  return <RoutePage {...data} />;
}
