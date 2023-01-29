import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-16 w-full">
      <div className='w-fit m-auto'>
        <Icon />
      </div>
      <p className="text-center mt-8">Denne nettsiden er optimalisert for å bruke mindre energi.</p>
    </footer>
  );
};

const Icon: React.FC = () => {
  return (
    <svg width="312" height="207" viewBox="0 0 312 207" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="304" height="121" fill="#1E1E1E" stroke="#B7DEBD" stroke-width="8" />
      <path
        d="M33.7473 77V51.2305H41.5345L46.2102 68.8086L50.8333 51.2305H58.638V77H53.804V56.7148L48.6888 77H43.679L38.5813 56.7148V77H33.7473ZM67.9677 77V51.2305H73.1709V77H67.9677ZM82.6061 77V51.4414H87.8092V72.6582H100.747V77H82.6061ZM118.092 51.2305H123.278V67.543C123.278 69.6758 123.09 71.3164 122.715 72.4648C122.211 73.9648 121.297 75.1719 119.973 76.0859C118.649 76.9883 116.903 77.4395 114.735 77.4395C112.192 77.4395 110.235 76.7305 108.864 75.3125C107.493 73.8828 106.801 71.791 106.789 69.0371L111.694 68.4746C111.752 69.9512 111.969 70.9941 112.344 71.6035C112.907 72.5293 113.762 72.9922 114.91 72.9922C116.071 72.9922 116.891 72.6641 117.371 72.0078C117.852 71.3398 118.092 69.9629 118.092 67.877V51.2305ZM152.312 53.1113L155.09 50L157.533 52.1445L154.598 55.4492C155.383 56.5039 155.992 57.8047 156.426 59.3516C156.859 60.8867 157.076 62.5215 157.076 64.2559C157.076 68.3457 155.945 71.5684 153.684 73.9238C151.422 76.2676 148.434 77.4395 144.719 77.4395C141.496 77.4395 138.918 76.707 136.984 75.2422L134.137 78.4414L131.641 76.2617L134.646 72.8867C132.936 70.6016 132.08 67.625 132.08 63.957C132.08 59.8906 133.211 56.6797 135.473 54.3242C137.734 51.9688 140.752 50.791 144.525 50.791C147.654 50.791 150.25 51.5645 152.312 53.1113ZM149.078 56.7324C147.895 55.7246 146.395 55.2207 144.578 55.2207C142.445 55.2207 140.723 55.959 139.41 57.4355C138.098 58.9004 137.441 61.1152 137.441 64.0801C137.441 65.9434 137.711 67.5371 138.25 68.8613L149.078 56.7324ZM150.994 59.4922L140.184 71.6387C141.391 72.6934 142.844 73.2207 144.543 73.2207C146.629 73.2207 148.34 72.4648 149.676 70.9531C151.023 69.4414 151.697 67.1855 151.697 64.1855C151.697 62.2871 151.463 60.7227 150.994 59.4922ZM165.509 77V51.2305H170.713V61.373H180.908V51.2305H186.111V77H180.908V65.7324H170.713V77H165.509ZM219.066 77H213.406L211.156 71.1465H200.855L198.728 77H193.208L203.245 51.2305H208.747L219.066 77ZM209.486 66.8047L205.935 57.2422L202.454 66.8047H209.486ZM242.651 67.5254L247.696 69.125C246.923 71.9375 245.634 74.0293 243.829 75.4004C242.036 76.7598 239.757 77.4395 236.991 77.4395C233.569 77.4395 230.757 76.2734 228.554 73.9414C226.351 71.5977 225.249 68.3984 225.249 64.3438C225.249 60.0547 226.356 56.7266 228.571 54.3594C230.786 51.9805 233.698 50.791 237.308 50.791C240.46 50.791 243.021 51.7227 244.989 53.5859C246.161 54.6875 247.04 56.2695 247.626 58.332L242.476 59.5625C242.171 58.2266 241.532 57.1719 240.56 56.3984C239.599 55.625 238.427 55.2383 237.044 55.2383C235.134 55.2383 233.581 55.9238 232.386 57.2949C231.202 58.666 230.61 60.8867 230.61 63.957C230.61 67.2148 231.196 69.5352 232.368 70.918C233.54 72.3008 235.064 72.9922 236.939 72.9922C238.321 72.9922 239.511 72.5527 240.507 71.6738C241.503 70.7949 242.218 69.4121 242.651 67.5254ZM256.569 77V51.2305H261.772V62.6738L272.284 51.2305H279.28L269.577 61.2676L279.807 77H273.075L265.991 64.9062L261.772 69.2129V77H256.569Z"
        fill="#B7DEBD"
      />
      <rect x="4" y="125" width="80" height="78" fill="#1E1E1E" stroke="#B7DEBD" stroke-width="8" />
      <path
        d="M40.0234 170.465C39.2422 171.129 38.4883 171.598 37.7617 171.871C37.043 172.145 36.2695 172.281 35.4414 172.281C34.0742 172.281 33.0234 171.949 32.2891 171.285C31.5547 170.613 31.1875 169.758 31.1875 168.719C31.1875 168.109 31.3242 167.555 31.5977 167.055C31.8789 166.547 32.2422 166.141 32.6875 165.836C33.1406 165.531 33.6484 165.301 34.2109 165.145C34.625 165.035 35.25 164.93 36.0859 164.828C37.7891 164.625 39.043 164.383 39.8477 164.102C39.8555 163.812 39.8594 163.629 39.8594 163.551C39.8594 162.691 39.6602 162.086 39.2617 161.734C38.7227 161.258 37.9219 161.02 36.8594 161.02C35.8672 161.02 35.1328 161.195 34.6562 161.547C34.1875 161.891 33.8398 162.504 33.6133 163.387L31.5508 163.105C31.7383 162.223 32.0469 161.512 32.4766 160.973C32.9062 160.426 33.5273 160.008 34.3398 159.719C35.1523 159.422 36.0938 159.273 37.1641 159.273C38.2266 159.273 39.0898 159.398 39.7539 159.648C40.418 159.898 40.9062 160.215 41.2188 160.598C41.5312 160.973 41.75 161.449 41.875 162.027C41.9453 162.387 41.9805 163.035 41.9805 163.973V166.785C41.9805 168.746 42.0234 169.988 42.1094 170.512C42.2031 171.027 42.3828 171.523 42.6484 172H40.4453C40.2266 171.562 40.0859 171.051 40.0234 170.465ZM39.8477 165.754C39.082 166.066 37.9336 166.332 36.4023 166.551C35.5352 166.676 34.9219 166.816 34.5625 166.973C34.2031 167.129 33.9258 167.359 33.7305 167.664C33.5352 167.961 33.4375 168.293 33.4375 168.66C33.4375 169.223 33.6484 169.691 34.0703 170.066C34.5 170.441 35.125 170.629 35.9453 170.629C36.7578 170.629 37.4805 170.453 38.1133 170.102C38.7461 169.742 39.2109 169.254 39.5078 168.637C39.7344 168.16 39.8477 167.457 39.8477 166.527V165.754ZM48.7188 172L43.9844 159.555H46.2109L48.8828 167.008C49.1719 167.812 49.4375 168.648 49.6797 169.516C49.8672 168.859 50.1289 168.07 50.4648 167.148L53.2305 159.555H55.3984L50.6875 172H48.7188Z"
        fill="#B7DEBD"
      />
      <rect x="84" y="125" width="224" height="78" fill="#1E1E1E" stroke="#B7DEBD" stroke-width="8" />
      <path
        d="M231.287 155.006C232.371 155.006 233.196 154.181 233.196 153.098C233.196 152.014 232.371 151.189 231.287 151.189C230.204 151.189 229.379 152.014 229.379 153.098C229.379 154.129 230.256 155.006 231.287 155.006Z"
        fill="#B7DEBD"
      />
      <path
        d="M161.557 157.172H159.081C158.308 157.172 158.204 157.275 157.328 158.152L149.385 166.146V153.613C149.436 153.304 149.179 152.994 148.869 152.943C148.818 152.943 148.766 152.943 148.714 152.943H144.898C144.588 152.891 144.279 153.149 144.227 153.459C144.227 153.51 144.227 153.562 144.227 153.613V155.315C144.176 155.625 144.434 155.934 144.743 155.986C144.795 155.986 144.846 155.986 144.898 155.986H146.29V171.459H144.898C144.588 171.407 144.279 171.665 144.227 171.974C144.227 172.026 144.227 172.078 144.227 172.129V173.831C144.176 174.141 144.434 174.45 144.743 174.502C144.795 174.502 144.846 174.502 144.898 174.502H150.674C150.984 174.553 151.293 174.347 151.345 174.037C151.345 173.986 151.345 173.934 151.345 173.883V172.129C151.396 171.82 151.138 171.51 150.829 171.459C150.777 171.459 150.726 171.459 150.674 171.459H149.333V170.169L152.325 167.126L157.585 173.522C158.256 174.398 158.256 174.398 159.287 174.398H161.557C161.866 174.45 162.176 174.192 162.176 173.883C162.176 173.831 162.176 173.78 162.176 173.728V172.129C162.227 171.82 161.969 171.51 161.66 171.459C161.608 171.459 161.557 171.459 161.505 171.459H159.649L154.439 165.012L159.184 160.164H161.505C161.815 160.215 162.073 159.957 162.124 159.648C162.124 159.596 162.124 159.545 162.124 159.545V157.791C162.176 157.482 161.969 157.172 161.608 157.121C161.66 157.172 161.608 157.172 161.557 157.172Z"
        fill="#B7DEBD"
      />
      <path
        d="M181.981 171.459H180.588V164.083C180.588 159.699 177.803 156.863 173.523 156.863C171.717 156.811 169.964 157.43 168.623 158.668V157.843C168.674 157.533 168.417 157.224 168.107 157.224C168.055 157.224 168.004 157.224 167.952 157.224H164.239C163.929 157.172 163.62 157.378 163.568 157.739C163.568 157.791 163.568 157.843 163.568 157.894V159.596C163.517 159.906 163.775 160.215 164.084 160.267C164.136 160.267 164.187 160.267 164.239 160.267H165.631V171.51H164.239C163.929 171.459 163.62 171.716 163.568 172.026C163.568 172.077 163.568 172.129 163.568 172.181V173.883C163.568 174.192 163.775 174.502 164.136 174.502C164.187 174.502 164.187 174.502 164.239 174.502H170.015C170.325 174.553 170.634 174.295 170.686 173.986C170.686 173.934 170.686 173.883 170.686 173.883V172.129C170.737 171.82 170.48 171.51 170.17 171.459C170.119 171.459 170.067 171.459 170.015 171.459H168.674V164.599C168.674 161.762 170.634 159.751 173.368 159.751C176.101 159.751 177.597 161.453 177.597 164.393V171.459H176.204C175.895 171.407 175.586 171.665 175.586 172.026C175.586 172.077 175.586 172.129 175.586 172.181V173.883C175.534 174.192 175.792 174.502 176.101 174.553C176.153 174.553 176.204 174.553 176.256 174.553H182.033C182.342 174.605 182.651 174.347 182.703 174.037C182.703 173.986 182.703 173.934 182.703 173.883V172.129C182.755 171.82 182.497 171.51 182.187 171.459C182.084 171.459 182.033 171.459 181.981 171.459Z"
        fill="#B7DEBD"
      />
      <path
        d="M191.419 156.863C186.519 156.863 182.6 160.834 182.6 165.682C182.6 165.734 182.6 165.785 182.6 165.888C182.497 170.736 186.365 174.708 191.213 174.811C191.264 174.811 191.316 174.811 191.368 174.811C196.267 174.811 200.239 170.84 200.239 165.991C200.239 165.94 200.239 165.888 200.239 165.837C200.342 160.989 196.474 157.017 191.625 156.914C191.522 156.863 191.471 156.863 191.419 156.863ZM191.419 171.871C188.221 171.871 185.746 169.189 185.746 165.785C185.746 162.381 188.17 159.802 191.368 159.802C194.565 159.802 197.093 162.484 197.093 165.888C197.093 169.292 194.617 171.871 191.419 171.871Z"
        fill="#B7DEBD"
      />
      <path
        d="M225.872 157.172H219.941C219.631 157.12 219.322 157.327 219.27 157.688C219.27 157.739 219.27 157.791 219.27 157.842V159.544C219.219 159.854 219.477 160.163 219.786 160.215C219.838 160.215 219.889 160.215 219.941 160.215H221.282L218.445 169.344L214.422 157.688C214.319 157.378 214.01 157.172 213.7 157.172H212.514C212.204 157.172 211.895 157.378 211.792 157.688L207.82 169.344L204.984 160.163H206.325C206.634 160.215 206.944 159.957 206.995 159.648C206.995 159.596 206.995 159.544 206.995 159.493V157.791C207.047 157.481 206.789 157.172 206.479 157.172C206.428 157.172 206.376 157.172 206.325 157.172H200.342C200.032 157.12 199.723 157.378 199.671 157.688C199.671 157.739 199.671 157.791 199.671 157.791V159.493C199.62 159.802 199.878 160.112 200.187 160.163C200.239 160.163 200.29 160.163 200.29 160.163H201.683L206.376 173.986C206.479 174.295 206.789 174.501 207.098 174.501H208.388C208.697 174.501 209.007 174.295 209.11 173.986L213.03 162.639L216.949 173.986C217.052 174.295 217.362 174.501 217.671 174.501H218.961C219.27 174.501 219.58 174.295 219.683 173.986L224.428 160.163H225.82C226.13 160.215 226.439 159.957 226.491 159.648C226.491 159.596 226.491 159.544 226.491 159.544V157.842C226.542 157.533 226.285 157.223 225.975 157.223C225.975 157.172 225.924 157.172 225.872 157.172Z"
        fill="#B7DEBD"
      />
      <path
        d="M234.279 171.459H232.886V157.843C232.938 157.533 232.68 157.224 232.371 157.224C232.319 157.224 232.267 157.224 232.267 157.224H228.451C228.141 157.172 227.832 157.43 227.832 157.739C227.832 157.791 227.832 157.843 227.832 157.894V159.596C227.78 159.906 228.038 160.215 228.348 160.267C228.399 160.267 228.451 160.267 228.502 160.267H229.895V171.51H227.368C227.058 171.459 226.749 171.716 226.697 172.026C226.697 172.078 226.697 172.129 226.697 172.181V173.883C226.646 174.192 226.904 174.502 227.213 174.553C227.265 174.553 227.316 174.553 227.368 174.553H234.279C234.588 174.605 234.898 174.347 234.949 174.037C234.949 173.986 234.949 173.934 234.949 173.883V172.129C235.001 171.82 234.743 171.51 234.434 171.459C234.382 171.459 234.331 171.459 234.279 171.459Z"
        fill="#B7DEBD"
      />
      <path
        d="M247.689 165.682H246.038C245.729 165.631 245.419 165.888 245.368 166.198C245.368 166.249 245.368 166.301 245.368 166.353V169.55C245.419 170.737 244.491 171.768 243.305 171.82C241.654 171.82 240.932 171.149 240.932 169.499V160.215H244.955C245.265 160.267 245.574 160.009 245.626 159.699C245.626 159.648 245.626 159.596 245.626 159.545V157.843C245.677 157.533 245.419 157.224 245.11 157.224C245.058 157.224 245.007 157.224 245.007 157.224H240.984V153.665C241.035 153.355 240.829 153.046 240.468 152.994C240.416 152.994 240.365 152.994 240.313 152.994H238.56C238.25 152.943 237.941 153.201 237.889 153.51C237.889 153.562 237.889 153.613 237.889 153.665V157.275H236.032C235.723 157.224 235.414 157.482 235.414 157.791C235.414 157.843 235.414 157.843 235.414 157.894V159.596C235.362 159.906 235.62 160.215 235.929 160.267C235.981 160.267 236.032 160.267 236.084 160.267H237.941V169.705C237.941 172.8 239.952 174.811 243.098 174.811C246.348 174.811 248.411 172.851 248.411 169.86V166.404C248.462 166.095 248.204 165.785 247.895 165.734C247.843 165.682 247.792 165.682 247.689 165.682Z"
        fill="#B7DEBD"
      />
    </svg>
  );
};

export default Footer;
