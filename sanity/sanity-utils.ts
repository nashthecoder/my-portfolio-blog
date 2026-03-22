import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Post } from "@/types/Post";

export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content }`
    );
}

export async function getProject(slug: string): Promise<Project> {
    
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content 
        }`,
        { slug }
    )
}

export async function getPages(): Promise<Page[]> { 
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current, 
            "image": image.asset->url,
        }`
    );
}

export async function getPage(slug: string): Promise<Page> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
             "image": image.asset->url,
            content
        }`,
        { slug }
    );
}

// ─── Case Studies ────────────────────────────────────────────────────────────

export async function getFeaturedCaseStudies() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "caseStudy" && is_featured == true] | order(order asc) {
      _id,
      title,
      slug,
      client,
      sector,
      my_role,
      summary,
      impact_metric,
      tags,
      external_url,
      live_url,
      year,
      "cover_image": cover_image.asset->url,
    }`
  )
}

export async function getAllCaseStudies() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "caseStudy"] | order(order asc) {
      _id,
      title,
      slug,
      client,
      sector,
      my_role,
      summary,
      impact_metric,
      tags,
      external_url,
      live_url,
      year,
      "cover_image": cover_image.asset->url,
    }`
  )
}

// ─── Posts ───────────────────────────────────────────────────────────────────

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      publishedAt,
      tags,
      "image": image.asset->url,
    }`
  )
}

export async function getPost(slug: string): Promise<Post | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      content,
      excerpt,
      publishedAt,
      tags,
      "image": image.asset->url,
    }`,
    { slug }
  )
}