'use client';

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen">
        <main className="flex min-h-screen items-center justify-center px-4">
            <div className="glass max-w-xl p-8 text-center">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                    Something went wrong
                </p>
                <h1 className="mt-4 font-display text-4xl text-white">
                    We hit an unexpected error
                </h1>
                <p className="mt-4 text-sm leading-7 text-white/72">
                    Please try again. If the issue continues, contact Royalway.
                </p>
                <button onClick={reset} className="gold-button mt-8">
                    Try again
                </button>
            </div>
        </main>
        </body>
        </html>
    );
}