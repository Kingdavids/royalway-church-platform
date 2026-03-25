import type { Metadata } from 'next';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/site';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: {
        default: `${siteConfig.name} | ${siteConfig.tagline}`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.mission,
    applicationName: siteConfig.name,
    keywords: [
        'Royalway Christian Centre',
        'church in Ellicott City',
        'Christian church Maryland',
        'sermons',
        'worship',
        'prayer',
    ],
    openGraph: {
        title: `${siteConfig.name} | ${siteConfig.tagline}`,
        description: siteConfig.mission,
        url: '/',
        siteName: siteConfig.name,
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} social preview`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} | ${siteConfig.tagline}`,
        description: siteConfig.mission,
        images: ['/opengraph-image.jpg'],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}