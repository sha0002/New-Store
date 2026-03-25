import Link from "next/link";

export default function ProductLayout({ children }) {
    // console.log("Hello World...")
    return (
        <html lang="en">
            <body>
                <Link href={"/products"} className="text-orange-700 text-3xl hover:text-red-600 transition p-4 hover:underline">All Products {">"} </Link>
                {children}
            </body>
        </html>
    )
}