import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image"
import { Metadata } from "next";

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = await getPage(params.slug);
    return {
        title: page ? `${page.title} — Naijeria Toweett` : 'Page not found',
        description: 'Systems Architect · Fractional Product CTO · FemTech Founder',
        openGraph: {
            title: page ? `${page.title} — Naijeria Toweett` : 'Naijeria Toweett',
            images: page?.image ? [page.image] : [],
        }
    }
}

export default async function Page({ params }: Props) {

    const page = await getPage(params.slug);

    if (!page) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <p className="text-stone-500">Page not found</p>
            </div>
        );
    }

    return (
        <div className="page-container--prose py-12">
            <h1 className="font-serif text-stone-900 tracking-tight mb-8"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                {page.title}
            </h1>

            {page.image && (
                <div className="mb-10 rounded-xl overflow-hidden">
                    <Image
                        src={page.image}
                        width={1920}
                        height={900}
                        className="w-full object-cover"
                        alt={page.title}
                    />
                </div>
            )}

            {page.content && (
                <div className="prose">
                    <PortableText value={page.content} />
                </div>
            )}
        </div>
    )
}
