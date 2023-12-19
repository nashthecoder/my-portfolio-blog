/* eslint-disable jsx-a11y/alt-text */
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image"

type Props = {
    params: { slug: string }
}
export default async function Page({ params }: Props) {

    const page = await getPage(params.slug);

    if (!page) {
        // You might want to handle the case where page is null or undefined
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="bg-gradient-to-r from-blue-400 via-white-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold py-1">{page.title}</h1>

            {page.image && (
                <Image
                    src={page.image}
                    width={1920}
                    height={900}
                    className="mt-10 border-2 border-gray-700 object-cover"
                    alt={page.image.alt || ""} />
            )}

            {page.content && (
                <div className="text-lg text-gray-500 mt-10"><PortableText value={page.content} /></div>
            )}
        </div>
    )
}
