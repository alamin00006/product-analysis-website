import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
          <h2>What is Contex API : </h2>
          <p>Context API মূলত Props সিস্টেম কে Avoid করে.Props এর মাধ্যমে একটি কম্পনেন্ট থেকে আরেকটি কম্পোনেন্ট data পাঠানো যায়. এক্ষেত্রে আমাদের নির্দিষ্ট কম্পোনেন্টে ডাটা  পাঠানোর জন্য অনেক সময় child কম্পনেন্টগুলুতে   একটার পর একটায় ডাটা পাঠিয়ে পাঠিয়ে নির্দিষ্ট কম্পনেন্টএ ডাটা রিসিভ করতে হয়. আর এটা অনেক ঝামেলা পূর্ণ কাজএবং অনেক সময়ের প্রয়োজন। তাই এই ধরনের সিস্টেম কে Context API,  Avoid করে.  Context API এর  মাধ্যমে শুধু একটি কম্পনেন্ট  থেকে data পাঠানো হয়, আর নির্দিষ্ট কম্পনেন্ট থেকে ডাটা রিসিভ করা হয়, এর জন্য আর অন্য কোন কম্পোনেন্ট ব্যবহার করতে হয় না.</p>
          <br />
          <h2>What is Semantic Tag: </h2>
          <p>
          Semantic Tag :
            যে tag এর নামের সাথে একটি মিনিংফুল অর্থ আছে অর্থাৎ তাদের নাম শুনলে বোঝা যায় যে এর ভিতরে কি টাইপের কনটেন্ট আছে এগুলোকে Semantic Tag  বলে।Semantic Tag এর উদাহরণ হল :
            form, table, article, header, and footer.
            সবকটির মিনিংফুল অর্থ আছে , কারণ তারা উপাদানটির উদ্দেশ্য এবং তাদের ভিতরে থাকা বিষয়বস্তুর ধরন সঠিকভাবে বর্ণনা করে. 
          </p>
        </div>
    );
};

export default Blogs;