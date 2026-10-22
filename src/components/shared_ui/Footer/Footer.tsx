const Footer = () => {
     return (
          <footer className="w-full bg-[#f8faf8] border-t border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
               <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
                    {/* বাম পাশের টেক্সট */}
                    <p className="text-gray-800 text-sm font-normal">বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>

                    {/* ডান পাশের টেক্সট */}
                    <p className="text-gray-800 text-sm font-normal">সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
               </div>
          </footer>
     );
};

export default Footer;