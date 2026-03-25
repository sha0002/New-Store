import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Provider from './component/Provider'
import { merriweather } from './fonts'
import './globals.css'

export const metadata = {
    title: 'Stylish Shirts',
    description: 'New Stylish Generation Shirts',
    keywords: ['new shirts', 'style shirts', 'modern shirts']
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={merriweather.className}>
                <Provider >
                    <Navbar />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
