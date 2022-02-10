
import React from 'react';
import Timer from "./Timer";

const Hero = () => {

  return (
    <div id='home' className='w-full mt-1 mb-3 sm:my-1'>
			<div className='flex flex-col lg:flex-row justify-around items-center'>
				<div data-aos="fade-right" className='w-[70%] lg:w-[40%] flex flex-col sm:flex-row lg:flex-col items-center lg:ml-4 lg:-mt-28'>
					<svg width="100%" height="268" viewBox="0 0 411 268" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M197.5 211C246.377 211 286 171.377 286 122.5C286 73.6228 246.377 34 197.5 34C148.623 34 109 73.6228 109 122.5C109 171.377 148.623 211 197.5 211Z" fill="#FFCF68"/>
<path opacity="0.2" d="M197 268C271.006 268 331 208.006 331 134C331 59.9939 271.006 0 197 0C122.994 0 63 59.9939 63 134C63 208.006 122.994 268 197 268Z" fill="#F0B16A"/>
<path opacity="0.3" d="M197 249C260.513 249 312 197.513 312 134C312 70.4873 260.513 19 197 19C133.487 19 82 70.4873 82 134C82 197.513 133.487 249 197 249Z" fill="#EFB068"/>
<path d="M196.5 235C252.005 235 297 190.005 297 134.5C297 78.9954 252.005 34 196.5 34C140.995 34 96 78.9954 96 134.5C96 190.005 140.995 235 196.5 235Z" fill="url(#paint0_linear_214_317)"/>
<g filter="url(#filter0_dd_214_317)">
<path d="M73.466 96.072V104.84H55.162V114.312H68.858V122.824H55.162V141H44.218V96.072H73.466ZM90.162 111.24C91.442 109.277 93.042 107.741 94.962 106.632C96.882 105.48 99.0153 104.904 101.362 104.904V116.488H98.354C95.6233 116.488 93.5753 117.085 92.21 118.28C90.8447 119.432 90.162 121.48 90.162 124.424V141H79.218V105.288H90.162V111.24ZM140.257 122.568C140.257 123.592 140.193 124.659 140.065 125.768H115.297C115.468 127.987 116.172 129.693 117.409 130.888C118.689 132.04 120.246 132.616 122.081 132.616C124.812 132.616 126.71 131.464 127.777 129.16H139.425C138.828 131.507 137.74 133.619 136.161 135.496C134.625 137.373 132.684 138.845 130.337 139.912C127.99 140.979 125.366 141.512 122.465 141.512C118.966 141.512 115.852 140.765 113.121 139.272C110.39 137.779 108.257 135.645 106.721 132.872C105.185 130.099 104.417 126.856 104.417 123.144C104.417 119.432 105.164 116.189 106.657 113.416C108.193 110.643 110.326 108.509 113.057 107.016C115.788 105.523 118.924 104.776 122.465 104.776C125.921 104.776 128.993 105.501 131.681 106.952C134.369 108.403 136.46 110.472 137.953 113.16C139.489 115.848 140.257 118.984 140.257 122.568ZM129.057 119.688C129.057 117.811 128.417 116.317 127.137 115.208C125.857 114.099 124.257 113.544 122.337 113.544C120.502 113.544 118.945 114.077 117.665 115.144C116.428 116.211 115.66 117.725 115.361 119.688H129.057ZM182.511 105.288L160.111 157.96H148.335L156.527 139.784L141.998 105.288H154.223L162.479 127.624L170.671 105.288H182.511ZM225.38 96.072V141H214.436V122.504H197.412V141H186.468V96.072H197.412V113.672H214.436V96.072H225.38ZM231.105 123.08C231.105 119.411 231.787 116.189 233.153 113.416C234.561 110.643 236.459 108.509 238.849 107.016C241.238 105.523 243.905 104.776 246.849 104.776C249.366 104.776 251.563 105.288 253.441 106.312C255.361 107.336 256.833 108.68 257.857 110.344V105.288H268.801V141H257.857V135.944C256.79 137.608 255.297 138.952 253.377 139.976C251.499 141 249.302 141.512 246.785 141.512C243.883 141.512 241.238 140.765 238.849 139.272C236.459 137.736 234.561 135.581 233.153 132.808C231.787 129.992 231.105 126.749 231.105 123.08ZM257.857 123.144C257.857 120.413 257.089 118.259 255.553 116.68C254.059 115.101 252.225 114.312 250.049 114.312C247.873 114.312 246.017 115.101 244.481 116.68C242.987 118.216 242.241 120.349 242.241 123.08C242.241 125.811 242.987 127.987 244.481 129.608C246.017 131.187 247.873 131.976 250.049 131.976C252.225 131.976 254.059 131.187 255.553 129.608C257.089 128.029 257.857 125.875 257.857 123.144ZM274.542 123.144C274.542 119.432 275.289 116.189 276.782 113.416C278.318 110.643 280.43 108.509 283.118 107.016C285.849 105.523 288.963 104.776 292.462 104.776C296.942 104.776 300.675 105.949 303.662 108.296C306.691 110.643 308.675 113.949 309.614 118.216H297.966C296.985 115.485 295.086 114.12 292.27 114.12C290.265 114.12 288.665 114.909 287.47 116.488C286.275 118.024 285.678 120.243 285.678 123.144C285.678 126.045 286.275 128.285 287.47 129.864C288.665 131.4 290.265 132.168 292.27 132.168C295.086 132.168 296.985 130.803 297.966 128.072H309.614C308.675 132.253 306.691 135.539 303.662 137.928C300.633 140.317 296.899 141.512 292.462 141.512C288.963 141.512 285.849 140.765 283.118 139.272C280.43 137.779 278.318 135.645 276.782 132.872C275.289 130.099 274.542 126.856 274.542 123.144ZM337.292 141L326.412 126.024V141H315.468V93.64H326.412V119.816L337.228 105.288H350.732L335.884 123.208L350.86 141H337.292ZM369.559 141.512C366.444 141.512 363.671 140.979 361.239 139.912C358.807 138.845 356.887 137.395 355.479 135.56C354.071 133.683 353.281 131.592 353.111 129.288H363.927C364.055 130.525 364.631 131.528 365.655 132.296C366.679 133.064 367.937 133.448 369.431 133.448C370.796 133.448 371.841 133.192 372.567 132.68C373.335 132.125 373.719 131.421 373.719 130.568C373.719 129.544 373.185 128.797 372.119 128.328C371.052 127.816 369.324 127.261 366.935 126.664C364.375 126.067 362.241 125.448 360.535 124.808C358.828 124.125 357.356 123.08 356.119 121.672C354.881 120.221 354.263 118.28 354.263 115.848C354.263 113.8 354.817 111.944 355.927 110.28C357.079 108.573 358.743 107.229 360.919 106.248C363.137 105.267 365.761 104.776 368.791 104.776C373.271 104.776 376.791 105.885 379.351 108.104C381.953 110.323 383.447 113.267 383.831 116.936H373.719C373.548 115.699 372.993 114.717 372.055 113.992C371.159 113.267 369.964 112.904 368.471 112.904C367.191 112.904 366.209 113.16 365.527 113.672C364.844 114.141 364.503 114.803 364.503 115.656C364.503 116.68 365.036 117.448 366.103 117.96C367.212 118.472 368.919 118.984 371.223 119.496C373.868 120.179 376.023 120.861 377.687 121.544C379.351 122.184 380.801 123.251 382.039 124.744C383.319 126.195 383.98 128.157 384.023 130.632C384.023 132.723 383.425 134.6 382.231 136.264C381.079 137.885 379.393 139.165 377.175 140.104C374.999 141.043 372.46 141.512 369.559 141.512Z" fill="white"/>
</g>
<path d="M128.15 163.152V174.624C128.15 176.4 127.646 177.768 126.638 178.728C125.646 179.688 124.302 180.168 122.606 180.168C120.83 180.168 119.406 179.664 118.334 178.656C117.262 177.648 116.726 176.216 116.726 174.36H120.806C120.806 175.064 120.95 175.6 121.238 175.968C121.526 176.32 121.942 176.496 122.486 176.496C122.982 176.496 123.366 176.336 123.638 176.016C123.91 175.696 124.046 175.232 124.046 174.624V163.152H128.15ZM144.689 166.608V180H140.585V178.176C140.169 178.768 139.601 179.248 138.881 179.616C138.177 179.968 137.393 180.144 136.529 180.144C135.505 180.144 134.601 179.92 133.817 179.472C133.033 179.008 132.425 178.344 131.993 177.48C131.561 176.616 131.345 175.6 131.345 174.432V166.608H135.425V173.88C135.425 174.776 135.657 175.472 136.121 175.968C136.585 176.464 137.209 176.712 137.993 176.712C138.793 176.712 139.425 176.464 139.889 175.968C140.353 175.472 140.585 174.776 140.585 173.88V166.608H144.689ZM151.74 162.24V180H147.636V162.24H151.74ZM168.395 166.608L159.995 186.36H155.579L158.651 179.544L153.203 166.608H157.787L160.883 174.984L163.955 166.608H168.395ZM174.125 166.296V162.48H180.773V180H176.501V166.296H174.125ZM194.308 169.872V173.28H183.748V169.872H194.308ZM197.358 176.712C197.902 176.28 198.15 176.08 198.102 176.112C199.67 174.816 200.902 173.752 201.798 172.92C202.71 172.088 203.478 171.216 204.102 170.304C204.726 169.392 205.038 168.504 205.038 167.64C205.038 166.984 204.886 166.472 204.582 166.104C204.278 165.736 203.822 165.552 203.214 165.552C202.606 165.552 202.126 165.784 201.774 166.248C201.438 166.696 201.27 167.336 201.27 168.168H197.31C197.342 166.808 197.63 165.672 198.174 164.76C198.734 163.848 199.462 163.176 200.358 162.744C201.27 162.312 202.278 162.096 203.382 162.096C205.286 162.096 206.718 162.584 207.678 163.56C208.654 164.536 209.142 165.808 209.142 167.376C209.142 169.088 208.558 170.68 207.39 172.152C206.222 173.608 204.734 175.032 202.926 176.424H209.406V179.76H197.358V176.712ZM216.037 176.208L213.373 183.096H210.757L212.149 176.208H216.037ZM223.045 176.712C223.589 176.28 223.837 176.08 223.789 176.112C225.357 174.816 226.589 173.752 227.485 172.92C228.397 172.088 229.165 171.216 229.789 170.304C230.413 169.392 230.725 168.504 230.725 167.64C230.725 166.984 230.573 166.472 230.269 166.104C229.965 165.736 229.509 165.552 228.901 165.552C228.293 165.552 227.813 165.784 227.461 166.248C227.125 166.696 226.957 167.336 226.957 168.168H222.997C223.029 166.808 223.317 165.672 223.861 164.76C224.421 163.848 225.149 163.176 226.045 162.744C226.957 162.312 227.965 162.096 229.069 162.096C230.973 162.096 232.405 162.584 233.365 163.56C234.341 164.536 234.829 165.808 234.829 167.376C234.829 169.088 234.245 170.68 233.077 172.152C231.909 173.608 230.421 175.032 228.613 176.424H235.093V179.76H223.045V176.712ZM236.9 171C236.9 168.248 237.428 166.08 238.484 164.496C239.556 162.912 241.276 162.12 243.644 162.12C246.012 162.12 247.724 162.912 248.78 164.496C249.852 166.08 250.388 168.248 250.388 171C250.388 173.784 249.852 175.968 248.78 177.552C247.724 179.136 246.012 179.928 243.644 179.928C241.276 179.928 239.556 179.136 238.484 177.552C237.428 175.968 236.9 173.784 236.9 171ZM246.356 171C246.356 169.384 246.18 168.144 245.828 167.28C245.476 166.4 244.748 165.96 243.644 165.96C242.54 165.96 241.812 166.4 241.46 167.28C241.108 168.144 240.932 169.384 240.932 171C240.932 172.088 240.996 172.992 241.124 173.712C241.252 174.416 241.508 174.992 241.892 175.44C242.292 175.872 242.876 176.088 243.644 176.088C244.412 176.088 244.988 175.872 245.372 175.44C245.772 174.992 246.036 174.416 246.164 173.712C246.292 172.992 246.356 172.088 246.356 171ZM252.413 176.712C252.957 176.28 253.205 176.08 253.157 176.112C254.725 174.816 255.957 173.752 256.853 172.92C257.765 172.088 258.533 171.216 259.157 170.304C259.781 169.392 260.093 168.504 260.093 167.64C260.093 166.984 259.941 166.472 259.637 166.104C259.333 165.736 258.877 165.552 258.269 165.552C257.661 165.552 257.181 165.784 256.829 166.248C256.493 166.696 256.325 167.336 256.325 168.168H252.365C252.397 166.808 252.685 165.672 253.229 164.76C253.789 163.848 254.517 163.176 255.413 162.744C256.325 162.312 257.333 162.096 258.437 162.096C260.341 162.096 261.773 162.584 262.733 163.56C263.709 164.536 264.197 165.808 264.197 167.376C264.197 169.088 263.613 170.68 262.445 172.152C261.277 173.608 259.789 175.032 257.981 176.424H264.461V179.76H252.413V176.712ZM266.124 176.712C266.668 176.28 266.916 176.08 266.868 176.112C268.436 174.816 269.668 173.752 270.564 172.92C271.476 172.088 272.244 171.216 272.868 170.304C273.492 169.392 273.804 168.504 273.804 167.64C273.804 166.984 273.652 166.472 273.348 166.104C273.044 165.736 272.588 165.552 271.98 165.552C271.372 165.552 270.892 165.784 270.54 166.248C270.204 166.696 270.036 167.336 270.036 168.168H266.076C266.108 166.808 266.396 165.672 266.94 164.76C267.5 163.848 268.228 163.176 269.124 162.744C270.036 162.312 271.044 162.096 272.148 162.096C274.052 162.096 275.484 162.584 276.444 163.56C277.42 164.536 277.908 165.808 277.908 167.376C277.908 169.088 277.324 170.68 276.156 172.152C274.988 173.608 273.5 175.032 271.692 176.424H278.172V179.76H266.124V176.712Z" fill="white"/>
<defs>
<filter id="filter0_dd_214_317" x="40.2178" y="93.6399" width="347.805" height="72.3201" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_317"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_214_317" result="effect2_dropShadow_214_317"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_214_317" result="shape"/>
</filter>
<linearGradient id="paint0_linear_214_317" x1="96" y1="134.5" x2="297" y2="134.5" gradientUnits="userSpaceOnUse">
<stop stopColor="#E9A254"/>
<stop offset="1" stopColor="#F4BB79"/>
</linearGradient>
</defs>
					</svg>
					<button className='bg-gradient-to-b from-[#5BA558] to-[#83C280] w-64 sm:w-[300px] h-20 rounded-3xl lg:mt-10 text-3xl text-white font-extrabold'>
						Register
					</button>
				</div>
				<div className='sm:h-[700px] w-[75%] mt-10 lg:mt-3 sm:ml-20 flex flex-col items-end justify-end'>
					<svg className='w-full'  viewBox="0 0 650 711" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="191.482" y1="70.8656" x2="325.482" y2="550.866" stroke="white"/>
<line x1="185.312" y1="439.61" x2="320.312" y2="547.61" stroke="white"/>
<line x1="513.47" y1="75.1708" x2="340.47" y2="551.171" stroke="white"/>
<line x1="531.289" y1="415.408" x2="342.289" y2="549.408" stroke="white"/>
<line x1="325.132" y1="1.48225" x2="157.132" y2="47.4823" stroke="white"/>
<line x1="338.116" y1="0.513624" x2="531.116" y2="46.5136" stroke="white"/>
<rect x="325" y="1" width="15" height="555" fill="#FCCA83"/>
<path d="M481.565 47.5198C483.175 46.8237 484.909 46.8272 486.518 47.5298C488.126 48.2324 489.524 49.5977 490.51 51.4277C491.495 53.2578 492.017 55.4576 492 57.7085C491.982 59.9593 491.426 62.1442 490.412 63.9466C436.772 159.328 436.772 252.378 490.412 347.971C491.299 349.553 491.836 351.433 491.962 353.399C492.089 355.365 491.8 357.339 491.129 359.099C490.467 360.847 489.453 362.316 488.201 363.345C486.949 364.374 485.507 364.922 484.036 364.928H324.63C322.754 364.973 320.927 364.137 319.469 362.567C318.011 360.997 317.016 358.793 316.66 356.343C294.742 208.078 350.215 104.219 481.565 47.5198Z" fill="#F5A162"/>
<path d="M555.708 438.909C557.582 439.717 559.573 439.652 561.392 438.722C563.211 437.793 564.764 436.047 565.826 433.739C566.888 431.431 567.403 428.679 567.297 425.883C567.191 423.087 566.47 420.392 565.237 418.189C500.039 301.57 496.498 185.962 554.428 65.3083C555.386 63.3115 555.931 60.957 556.002 58.5099C556.072 56.0628 555.666 53.6204 554.828 51.4576C554.002 49.3094 552.783 47.519 551.306 46.2848C549.83 45.0505 548.154 44.4207 546.465 44.4651L363.497 50.0693C361.342 50.0789 359.276 51.1819 357.662 53.184C356.049 55.1862 354.991 57.9593 354.675 61.015C335.16 245.994 402.785 373.082 555.708 438.909Z" fill="#F5A162"/>
<path d="M145.938 48.9618C147.061 47.3799 154.872 54.677 156.521 54.2126C158.17 53.7482 159.889 53.9466 161.428 54.779C162.967 55.6114 164.246 57.0345 165.08 58.8423C165.914 60.65 166.26 62.7485 166.068 64.8335C155.898 175.157 191.011 249.425 273.246 291.531C274.606 292.228 275.777 293.386 276.628 294.875C277.479 296.363 277.976 298.123 278.062 299.955C278.152 301.772 277.834 303.592 277.145 305.211C276.456 306.83 275.421 308.187 274.157 309.13L184.157 441.425L177 444.044C175.403 445.276 141.739 423.015 131.64 412.15C121.541 401.286 121.788 402.301 120.557 400.573C45.746 296.206 54.2941 177.947 145.938 48.9618Z" fill="#F5A162"/>
<path d="M488.153 366.921C489.078 368.802 491.986 381.908 491.5 384.033C491.013 386.158 489.829 388.138 488.118 389.686C486.407 391.234 484.259 392.27 481.985 392.644C479.711 393.018 477.429 392.71 475.469 391.765C371.778 341.794 277.863 358.156 188.803 441.71C187.329 443.092 185.506 444.091 183.539 444.594C181.573 445.098 179.54 445.086 177.671 444.56C175.816 444.043 174.192 443.04 172.98 441.663C171.769 440.286 171.016 438.589 170.807 436.758L148.749 238.409C148.444 236.083 149.035 233.662 150.418 231.571C151.801 229.481 153.888 227.856 156.311 226.982C302.922 173.637 412.751 213.452 488.153 366.921Z" fill="#F5A162"/>
<path d="M177.783 434.636C177.039 435.904 176.036 444.259 177.005 445.483C177.973 446.707 179.739 447.748 182.046 448.455C184.354 449.162 187.082 449.499 189.837 449.416C192.592 449.334 195.23 448.836 197.368 447.995C310.541 403.532 424.472 400.68 545.131 439.29C547.128 439.928 549.466 440.286 551.882 440.324C554.298 440.362 556.695 440.078 558.805 439.504C560.9 438.938 562.631 438.108 563.807 437.107C564.982 436.105 565.556 434.972 565.464 433.832L496.329 320.184C407.253 328.432 365.496 322.045 449.285 318.112C378.792 318.119 491.936 332.249 507.579 320.911C324.564 308.482 238.357 331.178 177.783 434.636Z" fill="#F5A162"/>
<rect x="147" y="47.2585" width="314" height="20.027" fill="#F5A162"/>
<rect x="157" y="62.2788" width="281" height="45.0608" fill="#F5A162"/>
<rect x="157" y="104.836" width="217" height="152.706" fill="#F5A162"/>
<path d="M411 198.042C399.249 184.546 373.043 184.115 361.135 196.79C357.649 197.534 354.202 198.394 350.794 199.411C361.84 192.878 371.437 183.763 373.317 173.005C349.384 172.653 332.266 190.609 335.596 205.045C328.744 208.117 322.188 211.81 316.01 216.077C324.51 206.492 330.699 194.952 329.132 184.115C306.609 191 295.68 213.338 303.24 226.091C297.51 231.191 292.265 236.809 287.572 242.874C292.86 230.903 295.406 218.033 290.431 208.174C271.394 221.397 267.36 245.847 277.818 256.097C267.673 278.708 259.995 304.41 256 344H260.857C265.714 301.359 275.351 269.241 282.01 257.935C289.191 258.728 296.456 257.735 303.16 255.046C309.865 252.357 315.799 248.055 320.436 242.522C316.287 239.247 311.153 237.466 305.865 237.466C300.576 237.466 295.442 239.247 291.293 242.522C295.503 237.296 300.127 232.416 305.121 227.93C311.642 231.286 318.932 232.871 326.261 232.528C333.589 232.185 340.698 229.925 346.877 225.974C343.981 221.615 339.711 218.347 334.743 216.688C329.775 215.03 324.395 215.076 319.457 216.82C325.015 213.187 330.858 210.008 336.927 207.314C342.114 212.553 348.597 216.33 355.717 218.261C362.837 220.191 370.341 220.207 377.47 218.306C375.992 213.265 372.885 208.854 368.634 205.761C364.382 202.668 359.225 201.068 353.967 201.211C356.591 200.468 359.216 199.842 361.801 199.294C377.734 205.318 395.395 204.868 411 198.042V198.042Z" fill="#FFC850"/>
<path d="M320 149.949C306.106 143.726 285.521 152.846 280.877 166.779C278.437 168.58 276.075 170.693 273.792 172.494C280.011 163.492 284.183 152.924 281.664 144C263.165 152.493 256.278 172.494 264.071 182.435C259.818 187.298 256.024 192.539 252.735 198.091C255.884 187.641 256.671 176.525 251.358 168.697C236.401 182.122 235.968 203.297 246.477 210.421C243.901 216.404 241.898 222.616 240.495 228.973C240.258 217.857 237.464 207.015 230.143 201.144C220.146 218.209 225.853 238.523 237.582 242.711C234.602 278.135 239.994 313.762 253.326 346.745C253.473 347.102 253.724 347.408 254.046 347.624C254.368 347.84 254.748 347.956 255.136 347.958C255.382 348.014 255.638 348.014 255.884 347.958C256.124 347.864 256.343 347.723 256.528 347.543C256.712 347.363 256.858 347.147 256.957 346.91C257.056 346.673 257.106 346.418 257.105 346.161C257.103 345.904 257.049 345.65 256.947 345.414C243.803 312.905 238.545 277.774 241.597 242.868C247.456 240.901 252.737 237.524 256.967 233.038C261.197 228.551 264.246 223.094 265.842 217.153C261.437 216.122 256.811 216.588 252.703 218.474C248.594 220.361 245.239 223.561 243.171 227.564C244.53 221.993 246.36 216.546 248.642 211.282C254.931 211.557 261.183 210.178 266.766 207.286C272.349 204.393 277.067 200.087 280.444 194.804C276.597 192.491 272.087 191.513 267.621 192.023C263.155 192.533 258.986 194.502 255.766 197.622C258.758 192.815 262.141 188.259 265.881 184.001C271.801 186.172 278.192 186.754 284.41 185.689C290.629 184.624 296.455 181.949 301.304 177.934C298.334 174.564 294.324 172.267 289.902 171.403C285.48 170.539 280.894 171.157 276.862 173.159C278.594 171.672 280.405 170.224 282.255 168.854C296.848 167.737 310.41 160.944 320 149.949V149.949Z" fill="#FFC850"/>
<path d="M329.149 168.529C331.556 167.317 333.963 166.145 336.447 165.09C353.135 167.783 370.207 163.786 384 153.956C369.986 143.056 344.366 147.861 335.321 162.746C332.099 164.153 328.916 165.676 325.811 167.356C335.244 158.761 342.774 147.822 342.425 137C319.134 141.454 306.091 162.473 312.185 176.069C306.112 180.466 300.447 185.409 295.26 190.837C301.626 179.78 305.314 167.396 301.626 156.964C281.13 168.216 274.958 192.126 284.857 203.183C280.392 209.324 276.494 215.862 273.211 222.717C275.967 209.981 275.734 196.892 269.096 188.219C253.219 204.98 254.19 229.671 266.262 237.641C253.352 277.147 249.803 319.145 255.898 360.278C256.041 360.83 256.383 361.309 256.857 361.622C257.332 361.935 257.904 362.06 258.465 361.973C259.025 361.885 259.533 361.592 259.891 361.149C260.249 360.706 260.43 360.145 260.401 359.575C254.333 318.948 257.871 277.454 270.727 238.462C277.854 237.789 284.707 235.359 290.679 231.386C296.65 227.414 301.557 222.021 304.965 215.685C300.289 213.29 294.947 212.554 289.804 213.596C284.66 214.639 280.018 217.398 276.627 221.428C279.611 215.481 283.064 209.785 286.953 204.394C293.979 206.411 301.41 206.53 308.496 204.74C315.583 202.95 322.077 199.314 327.325 194.197C323.626 190.507 318.806 188.172 313.635 187.563C308.463 186.954 303.237 188.106 298.793 190.837C303.458 186.16 308.496 181.874 313.854 178.022C319.94 182.107 326.988 184.503 334.287 184.969C341.587 185.436 348.88 183.956 355.429 180.679C353.003 176.011 349.107 172.286 344.351 170.087C339.595 167.888 334.248 167.34 329.149 168.529V168.529Z" fill="#FCB72B"/>
<path d="M650 453V472.844H571.617C552.931 472.897 534.53 477.429 517.957 486.061C501.384 494.693 487.122 507.172 476.367 522.453C465.642 537.764 451.386 550.266 434.806 558.901C418.227 567.536 399.811 572.051 381.117 572.062H283.883C265.197 572.01 246.796 567.477 230.223 558.846C213.649 550.214 199.388 537.734 188.633 522.453C177.907 507.142 163.652 494.64 147.072 486.005C130.492 477.37 112.077 472.855 93.3828 472.844H15V453H103.305C121.991 453.053 140.392 457.585 156.965 466.217C173.538 474.849 187.8 487.328 198.555 502.609C209.28 517.92 223.536 530.422 240.115 539.057C256.695 547.693 275.111 552.207 293.805 552.219H371.195C389.881 552.166 408.283 547.634 424.856 539.002C441.429 530.37 455.691 517.89 466.445 502.609C477.171 487.299 491.426 474.797 508.006 466.161C524.586 457.526 543.002 453.012 561.695 453H650Z" fill="url(#paint0_linear_214_292)"/>
<path d="M15 472.844C15 535.998 40.0881 596.566 84.7452 641.224C129.402 685.881 189.97 710.969 253.125 710.969H411.875C475.03 710.969 535.598 685.881 580.255 641.224C624.912 596.566 650 535.998 650 472.844H571.617C552.931 472.897 534.53 477.429 517.957 486.061C501.384 494.693 487.122 507.172 476.367 522.453C465.642 537.764 451.386 550.266 434.806 558.901C418.227 567.536 399.811 572.051 381.117 572.062H283.883C265.197 572.01 246.796 567.477 230.223 558.846C213.649 550.214 199.388 537.734 188.633 522.453C177.907 507.142 163.652 494.64 147.072 486.005C130.492 477.37 112.077 472.855 93.3828 472.844H15Z" fill="url(#paint1_linear_214_292)"/>
<path d="M282.891 572.062H382.109V651.438C382.109 656.7 380.019 661.748 376.297 665.469C372.576 669.191 367.529 671.281 362.266 671.281H302.734C297.471 671.281 292.424 669.191 288.703 665.469C284.981 661.748 282.891 656.7 282.891 651.438V572.062Z" fill="url(#paint2_linear_214_292)"/>
<path d="M444 632C467.748 632 487 612.748 487 589C487 565.252 467.748 546 444 546C420.252 546 401 565.252 401 589C401 612.748 420.252 632 444 632Z" fill="url(#paint3_linear_214_292)"/>
<path d="M333 649C356.748 649 376 629.748 376 606C376 582.252 356.748 563 333 563C309.252 563 290 582.252 290 606C290 629.748 309.252 649 333 649Z" fill="url(#paint4_linear_214_292)"/>
<path d="M221 635C244.748 635 264 615.748 264 592C264 568.252 244.748 549 221 549C197.252 549 178 568.252 178 592C178 615.748 197.252 635 221 635Z" fill="url(#paint5_linear_214_292)"/>
<path d="M461.39 610.418L420.554 552.781C420.028 551.899 419.325 551.136 418.49 550.539C417.654 549.942 416.704 549.525 415.7 549.312C414.695 549.1 413.658 549.098 412.652 549.305C411.647 549.513 410.695 549.926 409.857 550.519C409.019 551.112 408.312 551.872 407.782 552.751C407.251 553.63 406.908 554.609 406.774 555.627C406.639 556.645 406.717 557.679 407.002 558.666C407.286 559.652 407.772 560.569 408.427 561.359L449.19 618.984C449.754 619.789 450.473 620.474 451.304 621C452.135 621.526 453.061 621.883 454.031 622.049C455 622.215 455.992 622.188 456.951 621.968C457.91 621.749 458.815 621.342 459.616 620.771C461.219 619.629 462.306 617.9 462.638 615.96C462.971 614.02 462.522 612.028 461.39 610.418Z" fill="#FCCA83"/>
<path d="M490.087 663.939C485.214 667.379 479.174 668.746 473.294 667.738C467.413 666.73 462.173 663.43 458.723 658.563L442.61 635.823C441.134 633.734 440.547 631.144 440.98 628.623C441.412 626.102 442.827 623.855 444.914 622.377L465.94 607.504C468.029 606.028 470.619 605.441 473.14 605.873C475.661 606.306 477.908 607.721 479.386 609.808L495.463 632.574C498.904 637.448 500.27 643.488 499.262 649.368C498.254 655.249 494.955 660.489 490.087 663.939V663.939Z" fill="#FCCA83"/>
<path d="M336.39 624.418L295.554 566.781C295.028 565.899 294.325 565.136 293.49 564.539C292.654 563.942 291.704 563.525 290.7 563.312C289.695 563.1 288.658 563.098 287.652 563.305C286.647 563.513 285.695 563.926 284.857 564.519C284.019 565.112 283.312 565.872 282.782 566.751C282.251 567.63 281.908 568.609 281.774 569.627C281.639 570.645 281.717 571.679 282.002 572.666C282.286 573.652 282.772 574.569 283.427 575.359L324.19 632.984C324.754 633.789 325.473 634.474 326.304 635C327.135 635.526 328.061 635.883 329.031 636.049C330 636.215 330.992 636.188 331.951 635.968C332.91 635.749 333.815 635.342 334.616 634.771C336.219 633.629 337.306 631.9 337.638 629.96C337.971 628.02 337.522 626.028 336.39 624.418Z" fill="#FCCA83"/>
<path d="M365.087 677.939C360.214 681.379 354.174 682.746 348.294 681.738C342.413 680.73 337.173 677.43 333.723 672.563L317.61 649.823C316.134 647.734 315.547 645.144 315.98 642.623C316.412 640.102 317.827 637.855 319.914 636.377L340.94 621.504C343.029 620.028 345.619 619.441 348.14 619.873C350.661 620.306 352.908 621.721 354.386 623.808L370.463 646.574C373.904 651.448 375.27 657.488 374.262 663.368C373.254 669.249 369.955 674.489 365.087 677.939V677.939Z" fill="#FCCA83"/>
<path d="M263.39 622.418L222.554 564.781C222.028 563.899 221.325 563.136 220.49 562.539C219.654 561.942 218.704 561.525 217.7 561.312C216.695 561.1 215.658 561.098 214.652 561.305C213.647 561.513 212.695 561.926 211.857 562.519C211.019 563.112 210.312 563.872 209.782 564.751C209.251 565.63 208.908 566.609 208.774 567.627C208.639 568.645 208.717 569.679 209.002 570.666C209.286 571.652 209.772 572.569 210.427 573.359L251.19 630.984C251.754 631.789 252.473 632.474 253.304 633C254.135 633.526 255.061 633.883 256.031 634.049C257 634.215 257.992 634.188 258.951 633.968C259.91 633.749 260.815 633.342 261.616 632.771C263.219 631.629 264.306 629.9 264.638 627.96C264.971 626.02 264.522 624.028 263.39 622.418Z" fill="#FCCA83"/>
<path d="M292.087 675.939C287.214 679.379 281.174 680.746 275.294 679.738C269.413 678.73 264.173 675.43 260.723 670.563L244.61 647.823C243.134 645.734 242.547 643.144 242.98 640.623C243.412 638.102 244.827 635.855 246.914 634.377L267.94 619.504C270.029 618.028 272.619 617.441 275.14 617.873C277.661 618.306 279.908 619.721 281.386 621.808L297.463 644.574C300.904 649.448 302.27 655.488 301.262 661.368C300.254 667.249 296.955 672.489 292.087 675.939V675.939Z" fill="#FCCA83"/>
<defs>
<linearGradient id="paint0_linear_214_292" x1="40655" y1="4024.88" x2="15" y2="4024.88" gradientUnits="userSpaceOnUse">
<stop stopColor="#E9A254"/>
<stop offset="1" stopColor="#F4BB79"/>
</linearGradient>
<linearGradient id="paint1_linear_214_292" x1="15" y1="591.906" x2="650" y2="591.906" gradientUnits="userSpaceOnUse">
<stop stopColor="#FBCC88"/>
<stop offset="1" stopColor="#FFE5C3"/>
</linearGradient>
<linearGradient id="paint2_linear_214_292" x1="2961.8" y1="4640.03" x2="3953.98" y2="4640.03" gradientUnits="userSpaceOnUse">
<stop stopColor="#E9A254"/>
<stop offset="1" stopColor="#F4BB79"/>
</linearGradient>
<linearGradient id="paint3_linear_214_292" x1="401" y1="589" x2="487" y2="589" gradientUnits="userSpaceOnUse">
<stop stopColor="#F79930"/>
<stop offset="1" stopColor="#F4BB79"/>
</linearGradient>
<linearGradient id="paint4_linear_214_292" x1="290" y1="606" x2="376" y2="606" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF8600"/>
<stop offset="1" stopColor="#F4BB79"/>
</linearGradient>
<linearGradient id="paint5_linear_214_292" x1="178" y1="592" x2="264" y2="592" gradientUnits="userSpaceOnUse">
<stop stopColor="#F79223"/>
<stop offset="1" stopColor="#F4BB79"/>
</linearGradient>
</defs>
					</svg>
				</div>
			</div>
			<div className='w-full -mt-[25%] sm:-mt-[14%] z-17 flex items-center'>
				<div className='w-full'>
					<svg className='w-[230%] md:w-[110%]' viewBox="0 0 1440 396" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path fillRule="evenodd" clipRule="evenodd" d="M0 262H560.242C582.268 262 600 241.401 600 215.814V166.075C600 140.487 581.65 119.888 560.242 119.888C551.207 119.888 539.887 125.513 527.161 131.838C509.733 140.499 489.666 150.471 469.217 149.1C454.653 148.123 444.506 142.849 433.218 136.982C417.084 128.597 398.618 119 361.588 119C327.381 119 304.562 128.268 284.233 136.524C267.157 143.46 251.837 149.682 233 149.1C215.177 148.549 205.363 142.859 194.519 136.571C180.257 128.302 164.215 119 125.828 119C88.4234 119 65.3034 128.902 45.5371 137.368C30.0517 144 16.6247 149.751 0 149.168V262Z" fill="#55ACEE"/>
	<path d="M138.758 117C166.114 117 192.738 144.883 231.519 147.1C270.301 149.317 291.255 117 358.828 117C426.402 117 424.735 145.825 466 147.1C507.265 148.375 531.649 117 594.588 117C657.528 117 666.838 144.727 702.217 147.1C737.597 149.472 771.833 117.888 793.242 117.888C814.65 117.888 833 138.487 833 164.075V213.814C833 239.401 815.268 260 793.242 260H138.758C116.732 260 99 239.401 99 213.814V164.075C99 138.487 111.403 117 138.758 117V117Z" fill="#55ACEE"/>
	<path d="M777.853 148.183C737.655 174.097 671.207 145.86 680.175 105.327C688.037 69.7963 730.244 80.0079 739.845 84.8028C749.44 89.5976 743.635 64.1297 721.372 56.4856C691.216 46.1357 654.298 48.3258 642.635 100.341C634.661 135.888 650.274 185.723 710.241 186.388C770.214 187.052 777.853 148.183 777.853 148.183Z" fill="#226699"/>
	<path d="M791.62 156.236C791.62 144.829 776.981 143.829 770.357 150.288C754.442 165.805 731.01 171.615 699.668 165.496C645.181 154.865 644.692 91.0063 681.95 72.7838C702.102 62.923 726.008 74.5964 735.103 81.5814C743.013 87.6573 758.142 95.7214 757.349 85.5735C755.654 63.9861 713.335 17.7388 656.637 46.9756C599.933 76.2124 600.316 142.197 600.316 154.158V192.697C600.316 204.44 609.959 213.684 621.701 213.684H770.543C782.286 213.684 791.684 204.44 791.684 192.697C791.684 192.697 791.663 156.268 791.62 156.236" fill="#55ACEE"/>
	<path d="M541.853 131.183C501.655 157.097 435.207 128.86 444.175 88.327C452.037 52.7963 494.244 63.0079 503.845 67.8028C513.44 72.5976 507.635 47.1297 485.372 39.4856C455.216 29.1357 418.298 31.3258 406.635 83.3408C398.661 118.888 414.274 168.723 474.241 169.388C534.214 170.052 541.853 131.183 541.853 131.183Z" fill="#226699"/>
	<path d="M555.62 139.236C555.62 127.829 540.981 126.829 534.357 133.288C518.442 148.805 495.01 154.615 463.668 148.496C409.181 137.865 408.692 74.0063 445.95 55.7838C466.102 45.923 490.008 57.5964 499.103 64.5814C507.013 70.6573 522.142 78.7214 521.349 68.5735C519.654 46.9861 477.335 0.738758 420.637 29.9756C363.933 59.2124 364.316 125.197 364.316 137.158V175.697C364.316 187.44 373.959 196.684 385.701 196.684H534.543C546.286 196.684 555.684 187.44 555.684 175.697C555.684 175.697 555.663 139.268 555.62 139.236" fill="#55ACEE"/>
	<path d="M680.758 396C708.114 396 734.738 364.218 773.519 361.691C812.301 359.164 833.255 396 900.828 396C968.402 396 966.735 363.144 1008 361.691C1049.26 360.237 1073.65 396 1136.59 396C1199.53 396 1208.84 364.395 1244.22 361.691C1279.6 358.986 1313.83 394.988 1335.24 394.988C1356.65 394.988 1375 371.507 1375 342.342V285.646C1375 256.48 1357.27 233 1335.24 233H680.758C658.732 233 641 256.48 641 285.646V342.342C641 371.507 653.403 396 680.758 396V396Z" fill="url(#paint0_linear_243_171)"/>
	<path d="M271.853 156.183C231.655 182.097 165.207 153.86 174.175 113.327C182.037 77.7963 224.244 88.0079 233.845 92.8028C243.44 97.5976 237.635 72.1297 215.372 64.4856C185.216 54.1357 148.298 56.3258 136.635 108.341C128.661 143.888 144.274 193.723 204.241 194.388C264.214 195.052 271.853 156.183 271.853 156.183Z" fill="#226699"/>
	<path d="M285.62 164.236C285.62 152.829 270.981 151.829 264.357 158.288C248.442 173.805 225.01 179.615 193.668 173.496C139.181 162.865 138.692 99.0063 175.95 80.7838C196.102 70.923 220.008 82.5964 229.103 89.5814C237.013 95.6573 252.142 103.721 251.349 93.5735C249.654 71.9861 207.335 25.7388 150.637 54.9756C93.933 84.2124 94.3157 150.197 94.3157 162.158V200.697C94.3157 212.44 103.959 221.684 115.701 221.684H264.543C276.286 221.684 285.684 212.44 285.684 200.697C285.684 200.697 285.663 164.268 285.62 164.236" fill="#55ACEE"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M1440 128.924C1439.39 129.227 1438.78 129.531 1438.16 129.838C1420.73 138.499 1400.67 148.471 1380.22 147.1C1365.65 146.123 1355.51 140.849 1344.22 134.982C1328.08 126.597 1309.62 117 1272.59 117C1238.38 117 1215.56 126.268 1195.23 134.524C1178.16 141.46 1162.84 147.682 1144 147.1C1126.18 146.549 1116.36 140.859 1105.52 134.571C1091.26 126.302 1075.21 117 1036.83 117C999.423 117 976.303 126.902 956.537 135.368C940.595 142.196 926.834 148.089 909.519 147.1C889.043 145.929 871.955 137.603 856.36 130.005C842.419 123.212 829.67 117 816.758 117C789.403 117 777 138.487 777 164.075V213.814C777 239.401 794.732 260 816.758 260H1440V128.924Z" fill="#55ACEE"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M1440 155.371C1400.43 166.957 1350.31 140.869 1358.17 105.327C1366.04 69.7964 1408.24 80.008 1417.84 84.8028C1427.44 89.5977 1421.63 64.1297 1399.37 56.4856C1369.22 46.1358 1332.3 48.3259 1320.63 100.341C1312.66 135.888 1328.27 185.723 1388.24 186.388C1413.92 186.672 1430 179.71 1440 171.654V155.371Z" fill="#226699"/>
	<path d="M1291.85 189.183C1251.65 215.097 1185.21 186.86 1194.17 146.327C1202.04 110.796 1244.24 121.008 1253.84 125.803C1263.44 130.598 1257.63 105.13 1235.37 97.4856C1205.22 87.1357 1168.3 89.3258 1156.63 141.341C1148.66 176.888 1164.27 226.723 1224.24 227.388C1284.21 228.052 1291.85 189.183 1291.85 189.183Z" fill="#226699"/>
	<path d="M1305.62 197.236C1305.62 185.829 1290.98 184.829 1284.36 191.288C1268.44 206.805 1245.01 212.615 1213.67 206.496C1159.18 195.865 1158.69 132.006 1195.95 113.784C1216.1 103.923 1240.01 115.596 1249.1 122.581C1257.01 128.657 1272.14 136.721 1271.35 126.574C1269.65 104.986 1227.33 58.7388 1170.64 87.9756C1113.93 117.212 1114.32 183.197 1114.32 195.158V233.697C1114.32 245.44 1123.96 254.684 1135.7 254.684H1284.54C1296.29 254.684 1305.68 245.44 1305.68 233.697C1305.68 233.697 1305.66 197.268 1305.62 197.236" fill="#55ACEE"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M0 385.568C6.31519 392.104 14.8474 396 25.7583 396C38.6701 396 51.4188 388.919 65.36 381.177C80.9552 372.515 98.0426 363.025 118.519 361.691C135.834 360.562 149.595 367.28 165.537 375.063C185.303 384.713 208.423 396 245.828 396C284.215 396 300.257 385.397 314.519 375.971C325.363 368.805 335.177 362.318 353 361.691C371.837 361.027 387.157 368.119 404.233 376.025C424.562 385.436 447.381 396 481.588 396C518.618 396 537.084 385.06 553.218 375.503C564.506 368.815 574.653 362.804 589.217 361.691C609.666 360.127 629.733 371.494 647.161 381.367C659.887 388.576 671.207 394.988 680.242 394.988C701.65 394.988 720 371.507 720 342.342V285.646C720 256.48 702.268 233 680.242 233H25.7583C15.9148 233 6.9289 237.689 0 245.48V385.568Z" fill="#55ACEE"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M1440 233H1136.76C1114.73 233 1097 256.48 1097 285.646V342.342C1097 371.507 1109.4 396 1136.76 396C1149.67 396 1162.42 388.919 1176.36 381.177C1191.96 372.515 1209.04 363.025 1229.52 361.691C1246.83 360.562 1260.59 367.28 1276.54 375.063C1296.3 384.713 1319.42 396 1356.83 396C1395.21 396 1411.26 385.397 1425.52 375.971C1430.29 372.819 1434.86 369.798 1440 367.35V233Z" fill="#55ACEE"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M0 134.93C10.8143 143.266 25.556 148.61 44.9251 148.825C104.898 149.49 112.537 110.62 112.537 110.62C72.3386 136.535 5.89126 108.298 14.859 67.7646C22.721 32.2339 64.9284 42.4455 74.5287 47.2403C84.1237 52.0352 78.3189 26.5672 56.0564 18.9231C37.4365 12.5327 16.2389 10.9229 0 22.8702V134.93Z" fill="#226699"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M0 176.122H105.228C116.97 176.122 126.368 166.877 126.368 155.135C126.368 155.135 126.347 118.706 126.305 118.674C126.305 107.266 111.665 106.267 105.042 112.726C89.1261 128.242 65.6941 134.052 34.3522 127.934C18.4201 124.825 7.10482 117.166 0 107.427V176.122ZM0 49.3039C4.19872 43.4747 9.77737 38.5751 16.6346 35.2213C36.7868 25.3605 60.6919 37.034 69.7872 44.019C77.6971 50.0949 92.8259 58.1589 92.0338 48.0111C90.4258 27.5403 52.2883 -15.1053 0 5.46832V49.3039Z" fill="#55ACEE"/>
	<path fillRule="evenodd" clipRule="evenodd" d="M1440 157.075C1424.62 167.378 1403.92 170.62 1377.67 165.496C1323.18 154.865 1322.69 91.0062 1359.95 72.7837C1380.1 62.9229 1404.01 74.5964 1413.1 81.5813C1421.01 87.6573 1436.14 95.7213 1435.35 85.5735C1433.65 63.9861 1391.33 17.7387 1334.64 46.9755C1278.3 76.0231 1278.31 141.345 1278.32 153.919L1278.32 154.158V192.697C1278.32 204.44 1287.96 213.684 1299.7 213.684H1440V157.075Z" fill="#55ACEE"/>
	<defs>
	<linearGradient id="paint0_linear_243_171" x1="1008" y1="396" x2="1008" y2="233" gradientUnits="userSpaceOnUse">
	<stop stopColor="#55ACEE"/>
	<stop offset="1" stopColor="#55ACEE"/>
	</linearGradient>
	</defs>
					</svg>
				</div>
				<Timer/>
			</div>
			
    </div>
  );
};

export default Hero;
