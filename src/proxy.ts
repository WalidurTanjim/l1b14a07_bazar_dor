import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
     const session = await auth.api.getSession({
          headers: await headers()
     })
     console.log("Session form proxy:", session);

     if(!session) {
          return NextResponse.redirect(new URL('/signin', request.url))
     }

     return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
     matcher: [
          '/product/:path*'
     ],
}