import React from 'react';
import mongoDb from '@/assets/mongodb.png'

const SkillsIcons = () => {
  return (
    <div className='flex flex-col gap-5'>
      <section className="flex flex-wrap gap-3">
        <svg width="43" height="50" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L3.89509 44.1741L21.3728 50L38.9621 44.1741L42.8571 0H0ZM34.3973 14.2746H13.8839L14.3415 19.7879H33.9397L32.4219 36.3504L21.4955 39.3638V39.3973H21.3728L10.3571 36.3504L9.6875 27.8906H15.0112L15.4018 32.1429L21.3728 33.7612L27.3661 32.1429L28.0357 25.2009H9.40848L7.97991 8.95089H34.8884L34.3973 14.2746Z" fill="#AD5421" />
        </svg>
        <svg width="43" height="50" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L3.89509 44.1741L21.4286 50L38.9621 44.1741L42.8571 0H0ZM34.9442 8.92857L34.4085 14.2076L21.5402 19.7098L21.5067 19.721H33.9509L32.5223 36.0826L21.5625 39.2857L10.5357 36.0268L9.82143 27.779H15.279L15.6362 32.0536L21.5067 33.5379L27.6116 31.8192L28.0246 24.9442L9.46429 24.8884V24.8772L9.44196 24.8884L9.04018 19.721L21.5513 14.5089L22.2768 14.2076H8.56027L7.91295 8.92857H34.9442Z" fill="#23A0E7" />
        </svg>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V50H50V0H0ZM27.2098 38.9955C27.2098 43.8616 24.3527 46.0826 20.1897 46.0826C16.4286 46.0826 14.2522 44.1406 13.1362 41.7857L16.9643 39.4754C17.7009 40.7812 18.3705 41.8862 19.9888 41.8862C21.529 41.8862 22.5112 41.2835 22.5112 38.9286V22.9576H27.2098V38.9955ZM38.3259 46.0826C33.9621 46.0826 31.1384 44.0067 29.7656 41.2835L33.5938 39.0737C34.5982 40.7143 35.9152 41.9308 38.2254 41.9308C40.1674 41.9308 41.4174 40.9598 41.4174 39.6094C41.4174 38.0022 40.1451 37.433 37.9911 36.4844L36.8192 35.9821C33.4263 34.5424 31.183 32.7232 31.183 28.8951C31.183 25.3683 33.8728 22.6897 38.058 22.6897C41.0491 22.6897 43.192 23.7277 44.7321 26.4509L41.0714 28.7946C40.2679 27.3549 39.3973 26.7857 38.0469 26.7857C36.6741 26.7857 35.8036 27.6562 35.8036 28.7946C35.8036 30.2009 36.6741 30.7701 38.6942 31.6518L39.8661 32.154C43.8616 33.8616 46.1049 35.6138 46.1049 39.5424C46.1049 43.7612 42.779 46.0826 38.3259 46.0826Z" fill="#E4DE3E" />
        </svg>
      </section>
      <section className='flex gap-3'>
        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M46.6716 16.2031C46.069 16.0022 45.4663 15.8125 44.8637 15.6339C44.9641 15.221 45.0534 14.8081 45.1427 14.3952C46.5154 7.74373 45.6114 2.39803 42.5647 0.634731C39.6296 -1.05045 34.8419 0.701692 29.9984 4.92022C29.5185 5.33314 29.0498 5.76839 28.6034 6.20363C28.3021 5.91347 27.9896 5.6233 27.6771 5.3443C22.5992 0.835613 17.5102 -1.06161 14.4635 0.712852C11.5396 2.40919 10.6691 7.4424 11.8967 13.7367C12.0194 14.3617 12.1534 14.9755 12.3096 15.6004C11.5954 15.8013 10.8923 16.0245 10.2338 16.2589C4.27432 18.3235 0 21.5823 0 24.9526C0 28.4346 4.55333 31.9277 10.7472 34.0481C11.2494 34.2155 11.7516 34.3829 12.265 34.528C12.0976 35.1976 11.9525 35.8561 11.8186 36.5368C10.6468 42.7307 11.5619 47.6411 14.4858 49.3263C17.4991 51.0673 22.5658 49.2817 27.4985 44.9627C27.8891 44.6168 28.2797 44.2596 28.6703 43.8802C29.1614 44.3601 29.6748 44.8176 30.1881 45.264C34.9646 49.371 39.6854 51.0338 42.5982 49.3486C45.6114 47.6077 46.5935 42.3289 45.3212 35.9007C45.2208 35.4097 45.1092 34.9075 44.9864 34.3941C45.3436 34.2936 45.6895 34.182 46.0355 34.0704C52.4749 31.9389 57.1398 28.4904 57.1398 24.9526C57.1398 21.5711 52.7427 18.29 46.6716 16.2031ZM31.572 6.72816C35.7235 3.11228 39.5961 1.69494 41.3594 2.71051C43.2455 3.79304 43.9709 8.16781 42.7879 13.9153C42.7098 14.2947 42.6317 14.663 42.5312 15.0313C40.0537 14.4733 37.5426 14.0715 35.0205 13.8483C33.5696 11.7725 31.9849 9.78603 30.2662 7.92229C30.7015 7.50936 31.1256 7.11876 31.572 6.72816ZM18.6597 30.7447C19.2289 31.7157 19.8092 32.6866 20.423 33.6352C18.682 33.4455 16.9522 33.1665 15.2447 32.7982C15.7358 31.1911 16.3496 29.5283 17.0638 27.8319C17.5772 28.814 18.1017 29.785 18.6597 30.7447ZM15.2782 17.3191C16.8853 16.962 18.5928 16.6718 20.3672 16.4486C19.7757 17.3749 19.1954 18.3235 18.6486 19.2833C18.1017 20.2319 17.566 21.2028 17.0638 22.1849C16.3607 20.5221 15.7692 18.8927 15.2782 17.3191ZM18.3361 25.0084C19.0726 23.4683 19.8762 21.9617 20.7243 20.4774C21.5725 18.9931 22.4876 17.5535 23.4474 16.1361C25.1214 16.0134 26.8289 15.9464 28.5699 15.9464C30.3109 15.9464 32.0295 16.0134 33.6924 16.1361C34.641 17.5423 35.545 18.982 36.4043 20.4551C37.2636 21.9282 38.0672 23.4349 38.826 24.9638C38.0783 26.5039 37.2748 28.0217 36.4155 29.5171C35.5673 31.0014 34.6633 32.4411 33.7147 33.8696C32.0519 33.9923 30.322 34.0481 28.5699 34.0481C26.8178 34.0481 25.1214 33.9923 23.4809 33.8919C22.51 32.4745 21.5948 31.0237 20.7355 29.5394C19.8762 28.0551 19.0838 26.5485 18.3361 25.0084ZM38.4912 30.7224C39.0604 29.7403 39.5961 28.7471 40.1206 27.7427C40.8349 29.3609 41.4598 31.0014 42.0067 32.6866C40.2769 33.0772 38.5247 33.3785 36.7614 33.5794C37.3641 32.6419 37.9332 31.6822 38.4912 30.7224ZM40.0983 22.1849C39.5738 21.2028 39.0381 20.2207 38.4801 19.261C37.9332 18.3124 37.3641 17.3749 36.7726 16.4486C38.5694 16.6718 40.288 16.9731 41.8951 17.3414C41.3817 18.9931 40.7791 20.6002 40.0983 22.1849ZM28.5922 9.62979C29.764 10.902 30.8689 12.2413 31.8956 13.6251C29.6859 13.5247 27.4651 13.5247 25.2553 13.6251C26.349 12.1855 27.4762 10.8462 28.5922 9.62979ZM15.6465 2.78863C17.5214 1.69494 21.6841 3.25736 26.07 7.14108C26.349 7.3866 26.628 7.65445 26.9182 7.92229C25.1884 9.78603 23.5925 11.7725 22.1305 13.8483C19.6083 14.0715 17.1085 14.4621 14.6309 15.009C14.4858 14.4398 14.3631 13.8595 14.2403 13.2791C13.1913 7.87765 13.8832 3.8042 15.6465 2.78863ZM12.9123 32.2067C12.4435 32.0728 11.986 31.9277 11.5284 31.7715C9.1513 31.0237 6.45055 29.8408 4.49753 28.2895C3.37036 27.5083 2.61147 26.303 2.39943 24.9526C2.39943 22.9103 5.92602 20.2989 11.015 18.5244C11.6512 18.3012 12.2985 18.1003 12.9457 17.9106C13.7046 20.3323 14.6198 22.7094 15.68 25.0084C14.6086 27.3409 13.6823 29.7515 12.9123 32.2067ZM25.925 43.1436C24.0835 44.8288 21.952 46.168 19.6306 47.0831C18.3919 47.6746 16.9634 47.7304 15.6911 47.2282C13.9167 46.2015 13.1801 42.262 14.1845 36.9609C14.3073 36.3359 14.4412 35.711 14.5974 35.0972C17.0973 35.6329 19.6195 36.0011 22.1752 36.1909C23.6483 38.2778 25.2665 40.2755 26.9963 42.1504C26.6392 42.4963 26.2821 42.8311 25.925 43.1436ZM28.6592 40.4317C27.5208 39.2041 26.3825 37.8426 25.2777 36.3806C26.349 36.4252 27.4539 36.4476 28.5699 36.4476C29.7194 36.4476 30.8466 36.4252 31.9626 36.3694C30.9358 37.7868 29.831 39.1371 28.6592 40.4317ZM43.2455 43.7797C43.145 45.1413 42.4754 46.4135 41.404 47.2729C39.6296 48.2996 35.8463 46.9604 31.7617 43.4561C31.293 43.0543 30.8242 42.6191 30.3444 42.1727C32.0519 40.2866 33.6254 38.289 35.0539 36.1909C37.6096 35.9788 40.1541 35.5882 42.6651 35.0191C42.7767 35.4766 42.8772 35.9342 42.9665 36.3806C43.5133 38.7912 43.6026 41.3022 43.2455 43.7797ZM45.2766 31.7826C44.9641 31.8831 44.6516 31.9835 44.328 32.0728C43.5468 29.6399 42.587 27.2628 41.4822 24.9526C42.5535 22.676 43.4575 20.3323 44.2164 17.9329C44.7967 18.1003 45.3547 18.2789 45.8904 18.4574C51.091 20.2431 54.7404 22.8992 54.7404 24.9303C54.7404 27.1177 50.8455 29.9412 45.2766 31.7826ZM28.5699 30.1086C31.3934 30.1086 33.6812 27.8208 33.6812 24.9973C33.6812 22.1738 31.3934 19.8859 28.5699 19.8859C25.7464 19.8859 23.4586 22.1738 23.4586 24.9973C23.4586 27.8208 25.7464 30.1086 28.5699 30.1086Z"
            fill="#4DA0DC"
          />
        </svg>
        <svg width="82" height="50" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40.3459 50C40.078 50 39.8102 49.9235 39.5678 49.7959L37.1187 48.3418C36.7488 48.1377 36.9274 48.0611 37.0549 48.0229C37.5397 47.8571 37.6417 47.8188 38.1647 47.5127C38.2157 47.4871 38.2922 47.4999 38.3433 47.5254L40.2311 48.6479C40.2949 48.6862 40.3969 48.6862 40.4607 48.6479L47.8334 44.3875C47.8972 44.3493 47.9482 44.2727 47.9482 44.1835V35.6755C47.9482 35.5862 47.9099 35.5097 47.8334 35.4714L40.4607 31.2238C40.3969 31.1855 40.3076 31.1855 40.2311 31.2238L32.8584 35.4714C32.7818 35.5097 32.7436 35.599 32.7436 35.6755V44.1835C32.7436 44.26 32.7946 44.3365 32.8584 44.3748L34.8737 45.5355C35.9707 46.084 36.6468 45.4335 36.6468 44.7957V36.3898C36.6468 36.275 36.7361 36.173 36.8636 36.173H37.7948C37.9096 36.173 38.0116 36.2622 38.0116 36.3898V44.7957C38.0116 46.2626 37.2208 47.0917 35.8304 47.0917C35.4095 47.0917 35.0651 47.0917 34.1339 46.6325L32.1951 45.5228C31.7231 45.2422 31.417 44.7319 31.417 44.1835V35.6755C31.417 35.127 31.7104 34.604 32.1951 34.3362L39.5678 30.0758C40.0398 29.8079 40.652 29.8079 41.1112 30.0758L48.4839 34.3362C48.9559 34.6168 49.262 35.127 49.262 35.6755V44.1835C49.262 44.7319 48.9687 45.2549 48.4839 45.5228L41.1112 49.7832C40.8944 49.9235 40.6265 50 40.3459 50ZM46.3027 41.6068C46.3027 40.0124 45.2313 39.5914 42.9608 39.2853C40.6648 38.9792 40.4352 38.8261 40.4352 38.2904C40.4352 37.8439 40.6265 37.2572 42.323 37.2572C43.8409 37.2572 44.4022 37.5888 44.6318 38.6093C44.6573 38.7113 44.7338 38.7751 44.8358 38.7751H45.7925C45.8563 38.7751 45.9073 38.7496 45.9456 38.7113C45.9839 38.6603 46.0094 38.6093 45.9966 38.5455C45.8435 36.7852 44.6828 35.9689 42.323 35.9689C40.2183 35.9689 38.9683 36.8618 38.9683 38.3414C38.9683 39.9614 40.2183 40.3951 42.2337 40.5991C44.6445 40.8415 44.8358 41.1859 44.8358 41.6579C44.8358 42.487 44.1726 42.8314 42.6164 42.8314C40.6648 42.8314 40.2311 42.3467 40.0908 41.3772C40.078 41.2752 39.9887 41.1987 39.8739 41.1987H38.9173C38.8025 41.1987 38.7004 41.2879 38.7004 41.4155C38.7004 42.6528 39.3765 44.1324 42.6036 44.1324C44.9634 44.1324 46.3027 43.214 46.3027 41.6068ZM53.2545 35.2163C53.2545 35.9944 52.6167 36.6322 51.8387 36.6322C51.0606 36.6322 50.4228 35.9944 50.4228 35.2163C50.4228 34.4127 51.0861 33.8004 51.8387 33.8004C52.604 33.7877 53.2545 34.4127 53.2545 35.2163ZM53.0249 35.2163C53.0249 34.553 52.4892 34.03 51.8259 34.03C51.1754 34.03 50.6396 34.553 50.6396 35.2163C50.6396 35.8796 51.1754 36.4153 51.8259 36.4153C52.4892 36.4026 53.0249 35.8668 53.0249 35.2163ZM52.4509 36.0071H52.1193C52.1065 35.9306 52.0555 35.5224 52.0555 35.5097C52.03 35.4204 52.0045 35.3694 51.8897 35.3694H51.6091V36.0071H51.3029V34.4127H51.8514C52.0427 34.4127 52.4127 34.4127 52.4127 34.8336C52.4127 35.127 52.2213 35.1908 52.1065 35.229C52.3234 35.2418 52.3361 35.3821 52.3744 35.5862C52.3871 35.7138 52.4127 35.9306 52.4509 36.0071ZM52.0938 34.8846C52.0938 34.6678 51.9407 34.6678 51.8642 34.6678H51.6091V35.1142H51.8514C52.0555 35.1142 52.0938 34.9739 52.0938 34.8846ZM17.5134 16.7079C17.5134 16.3635 17.3348 16.0574 17.0415 15.8916L9.22228 11.3889C9.09473 11.3123 8.94166 11.2741 8.78859 11.2613H8.71206C8.55899 11.2613 8.41868 11.3123 8.27837 11.3889L0.471956 15.8916C0.178578 16.0574 0 16.3763 0 16.7079L0.0127556 28.8257C0.0127556 28.9916 0.102045 29.1446 0.242356 29.2339C0.382667 29.3232 0.561245 29.3232 0.714312 29.2339L5.35734 26.568C5.65072 26.3894 5.8293 26.0833 5.8293 25.7516V20.0882C5.8293 19.7565 6.00788 19.4376 6.30125 19.2718L8.27837 18.1366C8.43144 18.0473 8.5845 18.009 8.75033 18.009C8.91615 18.009 9.08197 18.0473 9.22228 18.1366L11.1994 19.2718C11.4928 19.4376 11.6714 19.7565 11.6714 20.0882V25.7516C11.6714 26.0833 11.8499 26.4022 12.1433 26.568L16.7863 29.2339C16.9266 29.3232 17.118 29.3232 17.2583 29.2339C17.3986 29.1574 17.4879 28.9916 17.4879 28.8257L17.5134 16.7079ZM60.2701 3.48042V25.9813C60.2701 26.3129 60.0915 26.6318 59.7981 26.7976L51.979 31.3131C51.6856 31.4789 51.3284 31.4789 51.0351 31.3131L43.2159 26.7976C42.9225 26.6318 42.7439 26.3129 42.7439 25.9813V16.9503C42.7439 16.6187 42.9225 16.2998 43.2159 16.1339L51.0351 11.6185C51.3284 11.4527 51.6856 11.4527 51.979 11.6185L53.9306 12.741C54.1474 12.8685 54.428 12.7027 54.428 12.4603V0.470104C54.428 0.112948 54.8107 -0.116653 55.1296 0.0619254L59.7854 2.66406C60.0788 2.81713 60.2701 3.13602 60.2701 3.48042ZM54.4025 19.9224C54.4025 19.8331 54.3515 19.7565 54.2877 19.7183L51.6091 18.1621C51.5325 18.1238 51.4432 18.1238 51.3667 18.1621L48.688 19.7183C48.6115 19.7565 48.5732 19.8331 48.5732 19.9224V23.022C48.5732 23.1112 48.6243 23.1878 48.688 23.226L51.3667 24.7695C51.4432 24.8077 51.5325 24.8077 51.5963 24.7695L54.275 23.226C54.3515 23.1878 54.3898 23.1112 54.3898 23.022V19.9224H54.4025ZM81.1637 19.8331C81.4571 19.6672 81.6357 19.3484 81.6357 19.0167V16.8355C81.6357 16.5039 81.4571 16.185 81.1637 16.0191L73.3956 11.5037C73.1022 11.3379 72.745 11.3379 72.4517 11.5037L64.6325 16.0191C64.3391 16.185 64.1605 16.5039 64.1605 16.8355V25.8664C64.1605 26.2108 64.3391 26.517 64.6325 26.6828L72.4006 31.109C72.6813 31.2748 73.0384 31.2748 73.3318 31.109L78.0259 28.4941C78.3447 28.3155 78.3447 27.8563 78.0259 27.6777L70.1557 23.1623C70.0026 23.073 69.9133 22.9199 69.9133 22.7541V19.9224C69.9133 19.7565 70.0026 19.6035 70.1557 19.5142L72.6047 18.0983C72.745 18.009 72.9364 18.009 73.0767 18.0983L75.5258 19.5142C75.6661 19.6035 75.7681 19.7565 75.7681 19.9224V22.1418C75.7681 22.499 76.1635 22.7286 76.4824 22.55L81.1637 19.8331ZM71.3037 20.2795C71.2526 20.3178 71.2144 20.3688 71.2144 20.4326V22.1673C71.2144 22.2311 71.2526 22.2949 71.3037 22.3204L72.8088 23.1878C72.8598 23.226 72.9364 23.226 72.9874 23.1878L74.4926 22.3204C74.5436 22.2821 74.5819 22.2311 74.5819 22.1673V20.4326C74.5819 20.3688 74.5436 20.305 74.4926 20.2795L72.9874 19.4121C72.9364 19.3739 72.8598 19.3739 72.8088 19.4121L71.3037 20.2795ZM38.879 25.8282V16.8483C38.879 16.5166 38.6749 16.1977 38.3815 16.0319L30.5879 11.5419C30.32 11.3889 29.9501 11.3634 29.644 11.5419L21.8503 16.0319C21.5569 16.1977 21.3528 16.5039 21.3528 16.8483V25.8282C21.3528 26.1853 21.5952 26.4915 21.8631 26.6445L29.6695 31.1345C29.9756 31.3131 30.3328 31.3003 30.6134 31.1345L38.3943 26.6445C38.6239 26.517 38.7897 26.3001 38.8535 26.045C38.8662 25.9813 38.879 25.9047 38.879 25.8282ZM29.4016 9.89647L29.2996 9.96025H29.4399L29.4016 9.89647ZM39.1214 26.5042L39.0703 26.4149V26.5297L39.1214 26.5042Z"
            fill="#48B74C"
          />
        </svg>
        <svg width="105" height="50" viewBox="0 0 105 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.495 21.525V23.655H6.93V25.635H3.495V27.945H7.38V30H0.93V19.47H7.38V21.525H3.495ZM13.9952 30L12.3902 27.675L11.0402 30H8.26523L11.0252 25.725L8.19023 21.63H11.0702L12.6752 23.94L14.0252 21.63H16.8002L13.9952 25.845L16.8752 30H13.9952ZM20.4286 22.815C20.6786 22.425 21.0236 22.11 21.4636 21.87C21.9036 21.63 22.4186 21.51 23.0086 21.51C23.6986 21.51 24.3236 21.685 24.8836 22.035C25.4436 22.385 25.8836 22.885 26.2036 23.535C26.5336 24.185 26.6986 24.94 26.6986 25.8C26.6986 26.66 26.5336 27.42 26.2036 28.08C25.8836 28.73 25.4436 29.235 24.8836 29.595C24.3236 29.945 23.6986 30.12 23.0086 30.12C22.4286 30.12 21.9136 30 21.4636 29.76C21.0236 29.52 20.6786 29.21 20.4286 28.83V33.99H17.8636V21.63H20.4286V22.815ZM24.0886 25.8C24.0886 25.16 23.9086 24.66 23.5486 24.3C23.1986 23.93 22.7636 23.745 22.2436 23.745C21.7336 23.745 21.2986 23.93 20.9386 24.3C20.5886 24.67 20.4136 25.175 20.4136 25.815C20.4136 26.455 20.5886 26.96 20.9386 27.33C21.2986 27.7 21.7336 27.885 22.2436 27.885C22.7536 27.885 23.1886 27.7 23.5486 27.33C23.9086 26.95 24.0886 26.44 24.0886 25.8ZM30.6093 23.025C30.9093 22.565 31.2843 22.205 31.7343 21.945C32.1843 21.675 32.6843 21.54 33.2343 21.54V24.255H32.5293C31.8893 24.255 31.4093 24.395 31.0893 24.675C30.7693 24.945 30.6093 25.425 30.6093 26.115V30H28.0443V21.63H30.6093V23.025ZM42.3503 25.68C42.3503 25.92 42.3353 26.17 42.3053 26.43H36.5003C36.5403 26.95 36.7053 27.35 36.9953 27.63C37.2953 27.9 37.6603 28.035 38.0903 28.035C38.7303 28.035 39.1753 27.765 39.4253 27.225H42.1553C42.0153 27.775 41.7603 28.27 41.3903 28.71C41.0303 29.15 40.5753 29.495 40.0253 29.745C39.4753 29.995 38.8603 30.12 38.1803 30.12C37.3603 30.12 36.6303 29.945 35.9903 29.595C35.3503 29.245 34.8503 28.745 34.4903 28.095C34.1303 27.445 33.9503 26.685 33.9503 25.815C33.9503 24.945 34.1253 24.185 34.4753 23.535C34.8353 22.885 35.3353 22.385 35.9753 22.035C36.6153 21.685 37.3503 21.51 38.1803 21.51C38.9903 21.51 39.7103 21.68 40.3403 22.02C40.9703 22.36 41.4603 22.845 41.8103 23.475C42.1703 24.105 42.3503 24.84 42.3503 25.68ZM39.7253 25.005C39.7253 24.565 39.5753 24.215 39.2753 23.955C38.9753 23.695 38.6003 23.565 38.1503 23.565C37.7203 23.565 37.3553 23.69 37.0553 23.94C36.7653 24.19 36.5853 24.545 36.5153 25.005H39.7253ZM47.1084 30.12C46.3784 30.12 45.7284 29.995 45.1584 29.745C44.5884 29.495 44.1384 29.155 43.8084 28.725C43.4784 28.285 43.2934 27.795 43.2534 27.255H45.7884C45.8184 27.545 45.9534 27.78 46.1934 27.96C46.4334 28.14 46.7284 28.23 47.0784 28.23C47.3984 28.23 47.6434 28.17 47.8134 28.05C47.9934 27.92 48.0834 27.755 48.0834 27.555C48.0834 27.315 47.9584 27.14 47.7084 27.03C47.4584 26.91 47.0534 26.78 46.4934 26.64C45.8934 26.5 45.3934 26.355 44.9934 26.205C44.5934 26.045 44.2484 25.8 43.9584 25.47C43.6684 25.13 43.5234 24.675 43.5234 24.105C43.5234 23.625 43.6534 23.19 43.9134 22.8C44.1834 22.4 44.5734 22.085 45.0834 21.855C45.6034 21.625 46.2184 21.51 46.9284 21.51C47.9784 21.51 48.8034 21.77 49.4034 22.29C50.0134 22.81 50.3634 23.5 50.4534 24.36H48.0834C48.0434 24.07 47.9134 23.84 47.6934 23.67C47.4834 23.5 47.2034 23.415 46.8534 23.415C46.5534 23.415 46.3234 23.475 46.1634 23.595C46.0034 23.705 45.9234 23.86 45.9234 24.06C45.9234 24.3 46.0484 24.48 46.2984 24.6C46.5584 24.72 46.9584 24.84 47.4984 24.96C48.1184 25.12 48.6234 25.28 49.0134 25.44C49.4034 25.59 49.7434 25.84 50.0334 26.19C50.3334 26.53 50.4884 26.99 50.4984 27.57C50.4984 28.06 50.3584 28.5 50.0784 28.89C49.8084 29.27 49.4134 29.57 48.8934 29.79C48.3834 30.01 47.7884 30.12 47.1084 30.12ZM55.4727 30.12C54.7427 30.12 54.0927 29.995 53.5227 29.745C52.9527 29.495 52.5027 29.155 52.1727 28.725C51.8427 28.285 51.6577 27.795 51.6177 27.255H54.1527C54.1827 27.545 54.3177 27.78 54.5577 27.96C54.7977 28.14 55.0927 28.23 55.4427 28.23C55.7627 28.23 56.0077 28.17 56.1777 28.05C56.3577 27.92 56.4477 27.755 56.4477 27.555C56.4477 27.315 56.3227 27.14 56.0727 27.03C55.8227 26.91 55.4177 26.78 54.8577 26.64C54.2577 26.5 53.7577 26.355 53.3577 26.205C52.9577 26.045 52.6127 25.8 52.3227 25.47C52.0327 25.13 51.8877 24.675 51.8877 24.105C51.8877 23.625 52.0177 23.19 52.2777 22.8C52.5477 22.4 52.9377 22.085 53.4477 21.855C53.9677 21.625 54.5827 21.51 55.2927 21.51C56.3427 21.51 57.1677 21.77 57.7677 22.29C58.3777 22.81 58.7277 23.5 58.8177 24.36H56.4477C56.4077 24.07 56.2777 23.84 56.0577 23.67C55.8477 23.5 55.5677 23.415 55.2177 23.415C54.9177 23.415 54.6877 23.475 54.5277 23.595C54.3677 23.705 54.2877 23.86 54.2877 24.06C54.2877 24.3 54.4127 24.48 54.6627 24.6C54.9227 24.72 55.3227 24.84 55.8627 24.96C56.4827 25.12 56.9877 25.28 57.3777 25.44C57.7677 25.59 58.1077 25.84 58.3977 26.19C58.6977 26.53 58.8527 26.99 58.8627 27.57C58.8627 28.06 58.7227 28.5 58.4427 28.89C58.1727 29.27 57.7777 29.57 57.2577 29.79C56.7477 30.01 56.1527 30.12 55.4727 30.12Z"
            fill="white"
          />
          <path
            d="M82.155 50C81.4902 50 80.8156 49.8214 80.2302 49.4841L74.1085 45.8627C73.1958 45.3468 73.6422 45.1682 73.9399 45.069C75.1602 44.6423 75.4083 44.553 76.708 43.8089C76.8469 43.7295 77.0255 43.7593 77.1644 43.8486L81.8672 46.6366C82.0359 46.7358 82.274 46.7358 82.4328 46.6366L100.758 36.0601C100.927 35.9609 101.036 35.7625 101.036 35.564V14.4112C101.036 14.2028 100.927 14.0143 100.748 13.9051L82.4328 3.33862C82.2641 3.23941 82.0359 3.23941 81.8672 3.33862L63.5619 13.9151C63.3833 14.0143 63.2741 14.2127 63.2741 14.4211V35.564C63.2741 35.7625 63.3833 35.9609 63.5619 36.0502L68.5822 38.9473C71.3106 40.3066 72.9775 38.7092 72.9775 37.092V16.2169C72.9775 15.9192 73.2156 15.691 73.5132 15.691H75.8349C76.1226 15.691 76.3707 15.9192 76.3707 16.2169V37.1019C76.3707 40.7332 74.3863 42.8167 70.9435 42.8167C69.8819 42.8167 69.0485 42.8167 66.7269 41.6658L61.9248 38.8977C60.7342 38.2131 60 36.9332 60 35.5541V14.4112C60 13.042 60.7342 11.7522 61.9248 11.0676L80.2302 0.49112C81.391 -0.163707 82.9289 -0.163707 84.0798 0.49112L102.405 11.0775C103.596 11.7621 104.33 13.042 104.33 14.4211V35.564C104.33 36.9332 103.596 38.2131 102.405 38.9076L84.0798 49.4841C83.4944 49.8214 82.8296 50 82.155 50ZM96.9481 29.1547C96.9481 25.196 94.2693 24.1443 88.6437 23.4001C82.9487 22.6461 82.3732 22.2592 82.3732 20.9297C82.3732 19.8284 82.8594 18.36 87.0761 18.36C90.8364 18.36 92.2254 19.1735 92.8009 21.7135C92.8505 21.9516 93.0688 22.1302 93.3168 22.1302H95.698C95.8468 22.1302 95.9857 22.0706 96.0849 21.9615C96.1841 21.8524 96.2337 21.7035 96.2238 21.5547C95.8567 17.1793 92.9497 15.1454 87.0761 15.1454C81.8474 15.1454 78.732 17.3479 78.732 21.0487C78.732 25.057 81.8375 26.1683 86.8479 26.6644C92.8505 27.2497 93.3168 28.1328 93.3168 29.3134C93.3168 31.3573 91.6698 32.2304 87.8103 32.2304C82.9586 32.2304 81.897 31.01 81.5398 28.5991C81.5001 28.3411 81.2819 28.1526 81.014 28.1526H78.6427C78.3451 28.1526 78.1169 28.3907 78.1169 28.6784C78.1169 31.7641 79.7936 35.445 87.8202 35.445C93.6144 35.4351 96.9481 33.1432 96.9481 29.1547Z"
            fill="#5DD552"
          />
        </svg>
        <img src={mongoDb} alt="Photo" className='w-12 h-15'/>
      </section>
    </div>
  );
};

export default SkillsIcons;
