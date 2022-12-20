import React from 'react';
import Link from './util/Link';

type CardProps = Queries.FrontpageCards;

const Card: React.FC<CardProps> = ({ body, link }) => {
  return (
    <div className="flex items-center border-t-8 border-l-8 border-green my-16">
      <div className="flex-grow text-2xl font-bold m-8">
        <div className="markdown text-green" dangerouslySetInnerHTML={{ __html: body! }} />
          <Link 
            to={link?.path!} 
            className="mt-8 p-4 w-fit"
            activeClassName="bg-green text-gray-dark underline"
            disabledClassName='border text-green'
            >
            {link?.text}
          </Link>
      </div>
      <Icon />
    </div>
  );
};

const Icon: React.FC = () => {
  return (
    <svg width="411" height="252" viewBox="0 0 411 252" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_179_1753)">
        <path
          d="M139.29 152.448C137.295 153.757 135.591 155.462 134.282 157.457C132.973 159.452 132.088 161.695 131.681 164.046C131.302 166.368 131.407 168.744 131.987 171.025C132.568 173.305 133.613 175.441 135.056 177.3C137.551 180.208 140.569 182.622 143.954 184.418C147.451 186.505 149.354 187.671 150.09 190.555C150.368 191.264 150.554 192.007 150.642 192.764V195.771L162.915 194.789L162.608 191.537C162.419 189.707 161.986 187.912 161.32 186.198C159.113 180.829 155.006 176.46 149.783 173.925C147.652 172.881 145.737 171.444 144.138 169.691C143.771 169.171 143.511 168.583 143.374 167.961C143.237 167.34 143.226 166.697 143.34 166.071C143.439 165.379 143.674 164.713 144.032 164.112C144.39 163.512 144.864 162.989 145.426 162.573C147.58 161.19 149.438 159.393 150.892 157.286C152.345 155.179 153.366 152.805 153.895 150.3C154.496 147.221 154.331 144.042 153.415 141.042C152.499 138.041 150.86 135.312 148.642 133.094C146.424 130.876 143.694 129.237 140.694 128.321C137.694 127.405 134.514 127.24 131.436 127.841C129.722 128.252 128.041 128.785 126.404 129.437L124.502 130.112C123.686 130.388 122.802 130.388 121.986 130.112C121.042 129.719 120.292 128.969 119.899 128.025C119.518 126.65 119.671 125.181 120.329 123.914C122.026 119.836 122.2 115.284 120.82 111.089C120.35 109.786 119.754 108.533 119.04 107.346C116.928 103.734 113.874 100.764 110.204 98.7549L105.233 110.046C106.489 110.996 107.569 112.159 108.424 113.482C108.71 113.973 108.957 114.486 109.161 115.016C109.684 116.337 109.684 117.807 109.161 119.128C108.161 121.247 107.602 123.547 107.517 125.889C107.433 128.23 107.825 130.565 108.67 132.75C110.229 136.504 113.157 139.524 116.86 141.199C120.563 142.874 124.765 143.078 128.613 141.771L130.945 140.912C132.02 140.461 133.128 140.092 134.258 139.807C135.366 139.529 136.526 139.529 137.633 139.807C139.273 140.279 140.688 141.324 141.622 142.753C142.119 143.515 142.457 144.37 142.615 145.266C142.773 146.163 142.749 147.082 142.542 147.968C142.334 148.897 141.937 149.773 141.378 150.544C140.819 151.314 140.108 151.962 139.29 152.448Z"
          fill="#B7DEBD"
        />
        <path
          d="M182.369 70.8345C183.914 70.7206 185.451 70.5157 186.971 70.2209C190.387 69.4445 193.563 67.849 196.225 65.572C198.887 63.295 200.955 60.4048 202.251 57.1505C203.011 55.1714 203.547 53.113 203.846 51.0141L191.574 49.3573C191.451 50.5513 191.183 51.7258 190.776 52.855C190.209 54.231 189.314 55.4477 188.17 56.3994C187.026 57.3512 185.666 58.0092 184.21 58.3164C183.16 58.5456 182.093 58.6892 181.019 58.7459C176.994 58.8393 173.096 60.1674 169.851 62.5505C167.728 64.2575 166.01 66.4144 164.822 68.8657C163.633 71.3169 163.004 74.0014 162.978 76.7254C162.949 80.0856 163.888 83.3831 165.684 86.2234C167.479 89.0637 170.055 91.3266 173.103 92.7413C176.108 93.9113 179.337 94.3935 182.553 94.1527C183.995 94.0537 185.444 94.1779 186.849 94.5208C187.181 94.681 187.475 94.9124 187.708 95.1988C187.942 95.4851 188.109 95.8193 188.199 96.1777C188.449 96.8294 188.449 97.5509 188.199 98.2027C187.644 98.8405 186.951 99.3441 186.174 99.6754C185.301 100.072 184.398 100.401 183.474 100.657C181.321 101.319 179.26 102.247 177.337 103.419C174.405 105.289 171.88 107.731 169.912 110.598C167.605 113.991 166.083 117.855 165.457 121.91C164.831 125.965 165.116 130.108 166.292 134.039C167.926 139.383 171.237 144.058 175.735 147.374C180.233 150.689 185.679 152.468 191.267 152.448H193.905C198.324 152.448 201.33 152.448 202.864 154.043C203.926 155.676 204.54 157.56 204.644 159.505V160.978C204.568 164.478 205.337 167.946 206.886 171.086C208.435 174.227 210.718 176.948 213.542 179.018C216.239 180.6 219.313 181.427 222.439 181.412C226.39 181.384 230.248 180.212 233.546 178.037C241.623 172.091 247.495 163.629 250.237 153.982C251.28 151.343 252.385 148.582 253.673 145.759L242.567 140.666C241.155 143.673 239.989 146.803 238.885 149.38C235.449 157.725 232.749 163.8 226.612 167.789C225.615 168.518 224.442 168.971 223.214 169.1C221.985 169.23 220.744 169.031 219.617 168.525C217.592 167.359 217.162 164.414 216.61 159.689V158.093C216.271 153.585 214.533 149.295 211.639 145.821C209.167 143.606 206.231 141.972 203.046 141.037C199.861 140.103 196.507 139.892 193.23 140.421H191.205C188.155 140.488 185.17 139.535 182.724 137.711C180.278 135.888 178.512 133.299 177.705 130.357C177.066 128.183 176.916 125.895 177.266 123.656C177.616 121.417 178.458 119.284 179.73 117.409C180.77 115.89 182.106 114.596 183.658 113.605C184.75 113.029 185.902 112.576 187.094 112.255C188.505 111.764 189.855 111.334 191.205 110.721C194.142 109.387 196.649 107.263 198.446 104.584C199.552 102.761 200.251 100.721 200.495 98.6025C200.738 96.4842 200.521 94.3382 199.858 92.3118C199.238 90.2833 198.195 88.409 196.799 86.812C195.403 85.215 193.685 83.9315 191.758 83.0459C188.807 82.0014 185.677 81.5631 182.553 81.7572C181.091 81.886 179.617 81.7615 178.196 81.3891C177.352 80.9089 176.651 80.2122 176.166 79.3709C175.68 78.5295 175.428 77.574 175.435 76.6027C175.459 75.7172 175.674 74.8473 176.066 74.0528C176.458 73.2584 177.017 72.5582 177.705 72.0004C179.121 71.1853 180.736 70.7815 182.369 70.8345Z"
          fill="#B7DEBD"
        />
        <path
          d="M295.768 59.1138C293.077 56.763 289.919 55.0066 286.502 53.9593C283.208 52.81 279.71 52.3637 276.233 52.649C272.755 52.9344 269.377 53.9451 266.314 55.6161C263.235 57.3716 260.442 59.5856 258.03 62.182C255.673 59.65 252.99 57.4421 250.052 55.6161C246.979 53.9436 243.59 52.9323 240.103 52.6469C236.615 52.3616 233.107 52.8086 229.803 53.9593C226.429 55.0223 223.315 56.7779 220.659 59.1138C217.913 61.6112 215.687 64.6257 214.108 67.9846C212.528 71.3436 211.627 74.981 211.455 78.6888C211.23 86.8174 214.129 94.7232 219.555 100.78C226.145 108.589 233.437 115.778 241.339 122.257C246.002 126.246 250.237 129.62 254.409 132.873L258.398 135.511L262.141 132.689C266.13 129.62 270.302 126.246 274.966 122.257C282.868 115.778 290.16 108.589 296.75 100.78C302.176 94.7232 305.075 86.8174 304.85 78.6888C304.535 71.2185 301.269 64.1785 295.768 59.1138ZM287.239 93.0478C281.106 100.276 274.328 106.931 266.989 112.93C263.859 115.568 260.852 117.961 258.152 120.232C255.391 118.023 252.446 115.63 249.316 112.93C242.013 106.934 235.257 100.301 229.128 93.1092C225.619 89.3976 223.683 84.4713 223.728 79.3638C223.777 77.299 224.237 75.2646 225.08 73.379C225.922 71.4933 227.131 69.794 228.637 68.3797C230.087 67.2194 231.757 66.3637 233.546 65.8638C235.075 65.3851 236.668 65.1369 238.271 65.1274C240.28 65.1186 242.261 65.6033 244.039 66.5388C247.548 69.1455 250.722 72.1752 253.489 75.5592L258.214 81.1433L262.877 75.4979C265.435 71.9641 268.617 68.9278 272.266 66.5388C273.884 65.7043 275.656 65.2136 277.473 65.0974C279.289 64.9813 281.11 65.2422 282.821 65.8638C284.611 66.4367 286.262 67.3772 287.668 68.6252C289.174 70.0395 290.383 71.7388 291.225 73.6244C292.068 75.5101 292.528 77.5444 292.577 79.6092C292.566 84.6036 290.658 89.4071 287.239 93.0478Z"
          fill="#00B055"
        />
        <path
          d="M182.613 216.818C158.527 216.818 135.427 207.25 118.395 190.218C101.363 173.187 91.7951 150.087 91.7951 126C91.7951 101.914 101.363 78.8138 118.395 61.7821C135.427 44.7505 158.527 35.1822 182.613 35.1822C196.998 35.1275 211.184 38.5372 223.972 45.1231L229.556 34.2003C215.037 26.7359 198.939 22.8639 182.613 22.9095C162.641 22.9051 143.098 28.7022 126.359 39.596C109.62 50.4898 96.4055 66.0113 88.3219 84.2741C80.2382 102.537 77.6335 122.754 80.8241 142.47C84.0148 162.185 92.8635 180.549 106.295 195.33C119.726 210.111 137.162 220.672 156.482 225.73C175.803 230.788 196.177 230.125 215.128 223.822C234.079 217.518 250.791 205.846 263.233 190.223C275.675 174.6 283.311 155.699 285.213 135.818L272.94 134.652C270.884 157.162 260.469 178.084 243.749 193.294C227.028 208.503 205.216 216.897 182.613 216.818Z"
          fill="#B7DEBD"
        />
      </g>
      <defs>
        <clipPath id="clip0_179_1753">
          <rect width="252" height="252" fill="white" transform="translate(79.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Card;
