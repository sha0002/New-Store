import { stripe } from "../../utilis/stripe"

export async function POST(req, res) {
    const body = await req.json()

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: body,
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/cart?success=true`,
            cancel_url: `${req.headers.get('origin')}/cart?canceled=true`,
        });
        return Response.json({ sessions_url: session.url })
    } catch (error) {
        console.log('error while checkout', error)
        return Response.json({ error: 'internalv server error' }, { status: 500 })
    }

}