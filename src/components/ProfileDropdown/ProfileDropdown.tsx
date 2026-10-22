"use client"

import { authClient } from "@/lib/auth-client"

const ProfileDropdown = () => {
     const session = authClient.useSession();
     console.log(session);

     return (
          <div>
               hi
          </div>
     )
}

export default ProfileDropdown
