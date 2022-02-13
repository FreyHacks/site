import React from 'react';
import data from '../lib/faq';
import Bounce from 'react-reveal/Bounce';

const Faq = () => {
	const a=[1,2,3,4,5,6,7]
  return (
		<div className='w-full flex   -mt-10 sm:-mt-40'>
			<div className='w-full flex flex-col items-center'>
				<svg className="w-[500%] md:w-[200%] z-99"  viewBox="0 0 2142 1107" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M1821.49 36.4692L1125.31 886.722L1157.09 916.561L1934.12 142.227L1821.49 36.4692Z" fill="url(#paint0_linear_241_125)" fillOpacity="0.98"/>
	<path d="M359.277 39.0728L1060.52 894.722L1028.74 924.56L246.646 144.83L359.277 39.0728Z" fill="url(#paint1_linear_241_125)" fillOpacity="0.98"/>
	<path d="M71.1634 467L1073.78 939.349L1053.7 994.383L8.60653e-07 662.059L71.1634 467Z" fill="url(#paint2_linear_241_125)" fillOpacity="0.98"/>
	<path d="M2024.93 506L1022.31 978.349L1042.39 1033.38L2096.09 701.059L2024.93 506Z" fill="url(#paint3_linear_241_125)" fillOpacity="0.98"/>
	<path d="M994 0L1068.49 1001H1112.08L1148.5 0L994 0Z" fill="url(#paint4_linear_241_125)" fillOpacity="0.98"/>
	<path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M952.015 1054H1218.98C1234.82 1029.33 1244 999.988 1244 968.5C1244 880.963 1173.04 810 1085.5 810C997.963 810 927 880.963 927 968.5C927 999.988 936.182 1029.33 952.015 1054Z" fill="white"/>
	<path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M921.964 1054H1249.04C1262.43 1028.44 1270 999.355 1270 968.5C1270 866.603 1187.4 784 1085.5 784C983.603 784 901 866.603 901 968.5C901 999.355 908.574 1028.44 921.964 1054Z" fill="#F0B16A"/>
	<path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M952.015 1054H1218.98C1234.82 1029.33 1244 999.988 1244 968.5C1244 880.963 1173.04 810 1085.5 810C997.963 810 927 880.963 927 968.5C927 999.988 936.182 1029.33 952.015 1054Z" fill="#EFB068"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M974.755 1054H1194.24C1212.28 1030.62 1223 1001.31 1223 969.5C1223 893.009 1160.99 831 1084.5 831C1008.01 831 946 893.009 946 969.5C946 1001.31 956.725 1030.62 974.755 1054Z" fill="url(#paint5_linear_241_125)"/>
	<path d="M336.758 936C364.114 936 390.738 969.342 429.519 971.993C468.301 974.644 489.255 936 556.828 936C624.402 936 622.736 970.469 664 971.993C705.265 973.518 729.649 936 792.588 936C855.528 936 864.838 969.156 900.217 971.993C935.597 974.831 969.833 937.062 991.242 937.062C1012.65 937.062 1031 961.695 1031 992.292V1051.77C1031 1082.37 1013.27 1107 991.242 1107H336.758C314.732 1107 297 1082.37 297 1051.77V992.292C297 961.695 309.403 936 336.758 936Z" fill="#55ACEE"/>
	<path d="M991.758 936C1019.11 936 1045.74 969.342 1084.52 971.993C1123.3 974.644 1144.25 936 1211.83 936C1279.4 936 1277.74 970.469 1319 971.993C1360.26 973.518 1384.65 936 1447.59 936C1510.53 936 1519.84 969.156 1555.22 971.993C1590.6 974.831 1624.83 937.062 1646.24 937.062C1667.65 937.062 1686 961.695 1686 992.292V1051.77C1686 1082.37 1668.27 1107 1646.24 1107H991.758C969.732 1107 952 1082.37 952 1051.77V992.292C952 961.695 964.403 936 991.758 936Z" fill="url(#paint6_linear_241_125)"/>
	<path d="M1447.76 936C1475.11 936 1501.74 969.342 1540.52 971.993C1579.3 974.644 1600.25 936 1667.83 936C1735.4 936 1733.74 970.469 1775 971.993C1816.26 973.518 1840.65 936 1903.59 936C1966.53 936 1975.84 969.156 2011.22 971.993C2046.6 974.831 2080.83 937.062 2102.24 937.062C2123.65 937.062 2142 961.695 2142 992.292V1051.77C2142 1082.37 2124.27 1107 2102.24 1107H1447.76C1425.73 1107 1408 1082.37 1408 1051.77V992.292C1408 961.695 1420.4 936 1447.76 936Z" fill="#55ACEE"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M27 1107H546.242C568.268 1107 586 1082.37 586 1051.77V992.292C586 961.695 567.65 937.062 546.242 937.062C537.207 937.062 525.887 943.789 513.161 951.351C495.733 961.708 475.666 973.633 455.217 971.993C440.653 970.825 430.506 964.519 419.218 957.503C403.084 947.477 384.618 936 347.588 936C313.381 936 290.562 947.082 270.233 956.956C253.157 965.249 237.837 972.689 219 971.993C201.177 971.335 191.363 964.53 180.519 957.012C166.257 947.123 150.215 936 111.828 936C74.4234 936 51.3034 947.841 31.5371 957.964C30.0063 958.748 28.4956 959.522 27 960.279V1107Z" fill="#55ACEE"/>
	<defs>
	<linearGradient id="paint0_linear_241_125" x1="1446.24" y1="436.101" x2="1558.88" y2="541.858" gradientUnits="userSpaceOnUse">
	<stop stopColor="#FFCB44" stopOpacity="0.64"/>
	<stop offset="1" stopColor="white" stopOpacity="0.41"/>
	</linearGradient>
	<linearGradient id="paint1_linear_241_125" x1="737.052" y1="441.402" x2="624.42" y2="547.159" gradientUnits="userSpaceOnUse">
	<stop stopColor="#FFCB44" stopOpacity="0.64"/>
	<stop offset="1" stopColor="white" stopOpacity="0.41"/>
	</linearGradient>
	<linearGradient id="paint2_linear_241_125" x1="589.627" y1="656.151" x2="518.464" y2="851.21" gradientUnits="userSpaceOnUse">
	<stop stopColor="#FFCB44" stopOpacity="0.64"/>
	<stop offset="1" stopColor="white" stopOpacity="0.41"/>
	</linearGradient>
	<linearGradient id="paint3_linear_241_125" x1="1506.46" y1="695.151" x2="1577.63" y2="890.21" gradientUnits="userSpaceOnUse">
	<stop stopColor="#FFCB44" stopOpacity="0.64"/>
	<stop offset="1" stopColor="white" stopOpacity="0.41"/>
	</linearGradient>
	<linearGradient id="paint4_linear_241_125" x1="994" y1="500.5" x2="1148.5" y2="500.5" gradientUnits="userSpaceOnUse">
	<stop stopColor="#FFCB44" stopOpacity="0.64"/>
	<stop offset="1" stopColor="white" stopOpacity="0.41"/>
	</linearGradient>
	<linearGradient id="paint5_linear_241_125" x1="946" y1="969.5" x2="1223" y2="969.5" gradientUnits="userSpaceOnUse">
	<stop stopColor="#E9A254"/>
	<stop offset="1" stopColor="#F4BB79"/>
	</linearGradient>
	<linearGradient id="paint6_linear_241_125" x1="1319" y1="936" x2="1319" y2="1107" gradientUnits="userSpaceOnUse">
	<stop stopColor="#55ACEE"/>
	<stop offset="1" stopColor="#55ACEE"/>
	</linearGradient>
	</defs>
				</svg>
			</div>

			<div className='z-100 -ml-[100%] w-full flex flex-col items-center pt-20 pb-10 '>
				<p className='text-3xl sm:text-5xl text-center font-bold py-8 sm:py-20'>Frequently Asked Questions</p>
				<div   className='bg-white/25 w-[90%] border-t-[1.5px] border-black flex flex-col items-center'>
				<Bounce left>
					{data.map(a=><details key={a.head} className='w-full text-lg sm:text-xl border-b-[1.5px] border-black px-8 '>
						<summary className='sm:text-2xl py-10 flex justify-between items-center'>
							<p>{a.head}</p>
							<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.9584 13.2918H15.7084V6.04183C15.7084 5.72136 15.5811 5.41402 15.3545 5.18741C15.1279 4.9608 14.8205 4.8335 14.5 4.8335C14.1796 4.8335 13.8722 4.9608 13.6456 5.18741C13.419 5.41402 13.2917 5.72136 13.2917 6.04183V13.2918H6.04171C5.72124 13.2918 5.41389 13.4191 5.18729 13.6457C4.96068 13.8723 4.83337 14.1797 4.83337 14.5002C4.83337 14.8206 4.96068 15.128 5.18729 15.3546C5.41389 15.5812 5.72124 15.7085 6.04171 15.7085H13.2917V22.9585C13.2917 23.279 13.419 23.5863 13.6456 23.8129C13.8722 24.0395 14.1796 24.1668 14.5 24.1668C14.8205 24.1668 15.1279 24.0395 15.3545 23.8129C15.5811 23.5863 15.7084 23.279 15.7084 22.9585V15.7085H22.9584C23.2788 15.7085 23.5862 15.5812 23.8128 15.3546C24.0394 15.128 24.1667 14.8206 24.1667 14.5002C24.1667 14.1797 24.0394 13.8723 23.8128 13.6457C23.5862 13.4191 23.2788 13.2918 22.9584 13.2918Z" fill="black"/>
							</svg>
						</summary>
						<div className='pb-8'>{a.info}</div>
					</details>)}
					</Bounce>
				</div>
			</div>
		</div>
  );
};

export default Faq;
