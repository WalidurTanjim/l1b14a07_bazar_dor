import ProfileBasic from "@/components/(profile)/ProfileBasic/ProfileBasic"
import UpdateProfile from "@/components/(profile)/UpdateProfile/UpdateProfile"

const ProfilePage = () => {


     return (
          <div className='profile'>
               <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10'>
                    {/* profile-header div */}
                    <div className='profile-header'>
                         <h1 className='text-2xl lg:text-3xl font-semibold text-slate-800'>আপনার প্রোফাইল</h1>
                         <p className='text-slate-500'>আপনার প্রোফাইলের তথ্য এখানে দেখুন</p>
                    </div>

                    {/* profile basic info */}
                    <div className='basic-info mt-5'>
                         <ProfileBasic />
                         <UpdateProfile />
                    </div>
               </div>
          </div>
     )
}

export default ProfilePage
