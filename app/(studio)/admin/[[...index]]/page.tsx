"use client" // ensures Sanity Studio is rendered on browser on the client and not the server
import { NextStudio } from 'next-sanity/studio';
import config from "@/sanity.config";

export default function AdminPage() {
    return <NextStudio config={config} />;
}