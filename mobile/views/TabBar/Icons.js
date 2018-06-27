// @flow
import React from 'react';
import { Svg } from 'expo';

const { Path, G } = Svg;

type IconProps = {
  color: string,
};

export const HomeIcon = ({ color }: IconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <G transform="translate(0 1)" fill={color}>
      <Path d="M12 0C11.6424 0 11.2645 0.1492 11.0031 0.263672C10.6908 0.400482 10.3249 0.591156 9.92574 0.819244C9.1244 1.27716 8.12794 1.92096 7.04836 2.68304C4.89095 4.2059 2.34377 6.242 0.292923 8.29291C-0.097641 8.68341 -0.097641 9.31659 0.292923 9.70709C0.683426 10.0976 1.3166 10.0976 1.70711 9.70709C3.65627 7.758 6.10909 5.7941 8.20168 4.31696C9.24709 3.57904 10.1881 2.97284 10.918 2.55576C11.2845 2.34634 11.5827 2.19327 11.8055 2.0957C11.8956 2.05621 11.9592 2.03235 12 2.01813C12.0408 2.03235 12.1044 2.05621 12.1945 2.0957C12.4173 2.19327 12.7155 2.34634 13.082 2.55576C13.8119 2.97284 14.7529 3.57904 15.7984 4.31696C17.8909 5.7941 20.3438 7.758 22.2929 9.70709C22.6834 10.0976 23.3166 10.0976 23.7071 9.70709C24.0977 9.31659 24.0977 8.68341 23.7071 8.29291C21.6563 6.242 19.1091 4.2059 16.9517 2.68304C15.8721 1.92096 14.8756 1.27716 14.0743 0.819244C13.6751 0.591156 13.3093 0.400482 12.9969 0.263672C12.7355 0.1492 12.3576 0 12 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9346 19.8122C16.1231 19.7842 16.2995 19.7526 16.4647 19.7169C17.3934 19.5164 17.7625 19.2334 17.9938 18.925C18.2862 18.5351 18.5831 17.8014 18.7685 16.2745C18.9285 14.9572 18.9857 13.2516 18.9976 11C19.0004 10.4477 19.4477 10 20 10C20.5523 10 21.0004 10.4478 20.9976 11.0001C20.9459 21.0614 19.9928 22 12 22C4.00728 22 3.05409 21.0614 3.0024 11.0001C2.99959 10.4478 3.44771 10 4.00002 10C4.55232 10 4.99959 10.4477 5.00246 11C5.0143 13.2516 5.07155 14.9572 5.23152 16.2745C5.41695 17.8014 5.71382 18.5351 6.00624 18.925C6.23756 19.2334 6.60664 19.5164 7.53529 19.7169C7.70058 19.7526 7.87691 19.7842 8.06538 19.8122C8.01674 19.0254 8.00002 18.0962 8.00002 17C8.00002 11.8667 8.40004 11 12 11C15.6 11 16 11.8667 16 17C16 18.0961 15.9833 19.0254 15.9346 19.8122ZM13.919 19.9723C13.9778 19.2083 14 18.2411 14 17C14 15.7198 13.9738 14.8056 13.8947 14.1288C13.8257 13.5369 13.731 13.2815 13.6853 13.1888C13.6817 13.1814 13.6767 13.175 13.6705 13.1699C13.6657 13.1658 13.6603 13.1625 13.6543 13.1602C13.6355 13.1526 13.6093 13.1432 13.5745 13.1329C13.3219 13.0579 12.8642 13 12 13C11.1359 13 10.6781 13.0579 10.4256 13.1329C10.359 13.1526 10.3062 13.2014 10.2817 13.2663C10.2318 13.3984 10.1604 13.6564 10.1053 14.1288C10.0263 14.8056 10 15.7198 10 17C10 18.2411 10.0222 19.2083 10.0811 19.9723C10.6476 19.9919 11.2834 20 12 20C12.7166 20 13.3524 19.9919 13.919 19.9723Z"
      />
    </G>
  </Svg>
);

export const MessageIcon = ({ color }: IconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <G transform="translate(0 3)" fill={color}>
      <Path d="M6.5 10C7.32843 10 8 9.32843 8 8.5C8 7.67157 7.32843 7 6.5 7C5.67157 7 5 7.67157 5 8.5C5 9.32843 5.67157 10 6.5 10Z" />
      <Path d="M13 8.5C13 9.32843 12.3284 10 11.5 10C10.6716 10 10 9.32843 10 8.5C10 7.67157 10.6716 7 11.5 7C12.3284 7 13 7.67157 13 8.5Z" />
      <Path d="M16.5 10C17.3284 10 18 9.32843 18 8.5C18 7.67157 17.3284 7 16.5 7C15.6716 7 15 7.67157 15 8.5C15 9.32843 15.6716 10 16.5 10Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 16C22.0417 16 23 14.5 23 8C23 1.5 22.0417 0 11.5 0C0.958313 0 0 1.5 0 8C0 12.4014 0.439392 14.5102 3.99615 15.4131C3.99835 15.4137 4 15.4157 4 15.418V18.1315C4 18.9302 4.89014 19.4066 5.55469 18.9635L10.0156 15.9896L10.017 15.989L10.0184 15.9888C10.4899 15.9964 10.9835 16 11.5 16ZM21 8C21 9.62164 20.9348 10.7218 20.7414 11.5229C20.566 12.2495 20.3173 12.5979 19.9904 12.8471C19.5963 13.1477 18.8702 13.467 17.4397 13.6874C16.0227 13.9056 14.1097 14 11.5 14C10.9926 14 10.5099 13.9965 10.0507 13.989C9.64301 13.9825 9.24396 14.1003 8.90613 14.3255L6 16.263V15.418C6 14.4583 5.33557 13.6897 4.48828 13.4746C3.09912 13.122 2.70447 12.6618 2.47723 12.174C2.13635 11.4423 2 10.2512 2 8C2 6.37836 2.06525 5.27817 2.25861 4.47705C2.43396 3.75046 2.68274 3.40213 3.00958 3.15286C3.40375 2.85233 4.12982 2.53296 5.56036 2.31262C6.97729 2.09436 8.89026 2 11.5 2C14.1097 2 16.0227 2.09436 17.4397 2.31262C18.8702 2.53296 19.5963 2.85233 19.9904 3.15286C20.3173 3.40213 20.566 3.75046 20.7414 4.47705C20.9348 5.27817 21 6.37836 21 8Z"
      />
    </G>
  </Svg>
);

export const ExploreIcon = ({ color }: IconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <G>
      <Path
        fillRule="evenodd"
        fill={color}
        d="M25.915,15.946c-1.251,0.722 -2.043,1.179 -3.002,0.579l-0.529,0.305l-2.598,1.5c-2.165,1.25 -3.373,1.658 -4.289,1.321l-0.541,0.313l-1.299,0.75c-3.464,2 -5.103,0.286 -5.897,-1.214c-0.795,-1.5 -1.567,-3.715 1.897,-5.715l1.299,-0.75l0.541,-0.312c0.166,-0.962 1.124,-1.804 3.289,-3.054l2.598,-1.5l0.655,-0.378c0.02,-1.166 0.833,-1.636 1.876,-2.238c1.894,-1.093 3.031,-1.75 6.031,3.447c3,5.196 2.242,5.633 -0.031,6.946Zm-2.573,-1.771c-0.471,-0.592 -1.001,-1.418 -1.726,-2.675c-1.412,-2.447 -1.581,-3.388 -1.579,-3.653c0.136,-0.136 0.335,-0.25 0.681,-0.448l0.012,-0.007c0.057,-0.033 0.119,-0.068 0.185,-0.107c0.071,-0.04 0.136,-0.078 0.197,-0.114c0.344,-0.2 0.542,-0.315 0.728,-0.365c0.231,0.131 0.962,0.747 2.374,3.194c0.726,1.256 1.177,2.128 1.454,2.832c0.143,0.347 0.192,0.632 0.215,0.789c-0.16,0.128 -0.392,0.262 -0.753,0.469l-0.001,0.001c-0.067,0.038 -0.138,0.079 -0.214,0.123c-0.076,0.043 -0.147,0.085 -0.213,0.123c-0.361,0.21 -0.593,0.344 -0.784,0.418c-0.124,-0.097 -0.347,-0.283 -0.576,-0.58Zm-1.958,0.923l0.103,-0.06c-0.461,-0.634 -0.984,-1.467 -1.603,-2.538c-0.619,-1.072 -1.062,-1.951 -1.358,-2.68l-0.142,0.081l-2.598,1.5c-1.026,0.591 -1.627,0.989 -2.042,1.377c-0.158,0.133 -0.225,0.228 -0.253,0.28l0,0.001c0.004,0.054 0.015,0.205 0.136,0.475c0.201,0.476 0.528,1.043 0.99,1.843l0.141,0.245c0.463,0.801 0.789,1.367 1.101,1.779c0.174,0.24 0.299,0.325 0.344,0.356l0.001,0c0.059,0.002 0.174,-0.009 0.369,-0.079c0.544,-0.165 1.189,-0.488 2.213,-1.08l2.598,-1.5Zm-9.397,-0.349l-0.031,0.018l-1.299,0.751c-1.398,0.806 -1.539,1.405 -1.566,1.593c-0.045,0.323 0.071,0.763 0.436,1.453c0.306,0.578 0.62,0.88 0.904,0.991c0.196,0.076 0.823,0.236 2.226,-0.573l1.299,-0.75l0.031,-0.019c-0.313,-0.469 -0.643,-1.042 -1.03,-1.711l-0.001,-0.002c-0.387,-0.671 -0.718,-1.244 -0.969,-1.751Z"
      />
      <Path
        fillRule="evenodd"
        fill={color}
        d="M7.027,22.232c-0.478,0.276 -1.089,0.112 -1.366,-0.366l-1,-1.732c-0.276,-0.479 -0.112,-1.09 0.366,-1.367c0.479,-0.276 1.09,-0.112 1.367,0.367l1,1.732c0.276,0.478 0.112,1.089 -0.367,1.366Z"
      />
      <Path
        fillRule="evenodd"
        fill={color}
        d="M19.52,20.258c-0.534,0.143 -0.85,0.692 -0.707,1.225l1.279,4.775c0.117,0.438 0.513,0.742 0.966,0.742c0.658,0 1.136,-0.624 0.966,-1.259l-1.28,-4.775c-0.142,-0.534 -0.691,-0.851 -1.224,-0.708Z"
      />
      <Path
        fillRule="evenodd"
        fill={color}
        d="M16.554,26c0,0.552 -0.448,1 -1,1c-0.553,0 -1,-0.448 -1,-1l0,-3c0,-0.553 0.447,-1 1,-1c0.552,0 1,0.447 1,1l0,3Z"
      />
      <Path
        fillRule="evenodd"
        fill={color}
        d="M11.822,26.258c-0.117,0.438 -0.514,0.742 -0.966,0.742c-0.658,0 -1.136,-0.624 -0.966,-1.259l0.475,-1.775c0.143,-0.534 0.692,-0.851 1.225,-0.708c0.534,0.143 0.85,0.692 0.707,1.225l-0.475,1.775Z"
      />
    </G>
  </Svg>
);

export const SearchIcon = ({ color }: IconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <G>
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C8.38729 12 9.64106 11.4363 10.548 10.5231C11.4466 9.61817 12 8.37469 12 7C12 4.23858 9.76142 2 7 2ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.25656 13.6683 9.43648 13.0885 10.4561C12.8436 10.8866 12.8759 11.437 13.2251 11.7882L17.2091 15.7949C17.5985 16.1865 17.5967 16.8197 17.2051 17.2091C16.8135 17.5985 16.1803 17.5967 15.7909 17.2051L11.8214 13.213C11.4693 12.8589 10.9133 12.8261 10.4801 13.0747C9.45506 13.6631 8.26648 14 7 14C3.13401 14 0 10.866 0 7Z"
        transform="translate(3 3)"
      />
    </G>
  </Svg>
);

export const NotificationIcon = ({ color }: IconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <G transform="translate(3.04163)" fill={color}>
      <Path d="M10.9187 1.61612C10.9778 1.90533 10.7002 2.1181 10.4074 2.08069C9.45209 1.95862 8.46473 1.95859 7.50934 2.08066C7.21656 2.11807 6.93903 1.9053 6.99811 1.61609C7.18271 0.712189 7.99286 0 8.95838 0C9.92393 0 10.7341 0.712219 10.9187 1.61612Z" />
      <Path d="M5.08146 21.7795C4.91147 21.2815 5.3541 20.873 5.8791 20.9083C6.23307 20.9322 6.60734 21.1683 6.96448 21.3937C7.167 21.5215 7.36451 21.6462 7.54908 21.7264C8.02369 21.9324 8.65732 22 8.95838 22C9.21027 22 9.84946 21.9176 10.3386 21.7064C10.5176 21.6291 10.7116 21.5125 10.9122 21.392C11.2836 21.1689 11.677 20.9324 12.0373 20.9081C12.5624 20.8727 13.0052 21.2814 12.8351 21.7795C12.335 23.2447 10.423 24 8.95838 24C7.49418 24 5.58152 23.2447 5.08146 21.7795Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1671 14.0739C17.0368 13.785 16.9059 13.5184 16.7807 13.2637C16.3321 12.3507 15.9584 11.59 15.9584 10.5C15.9584 4 11.4583 3 8.95838 3C6.45838 3 1.95838 4 1.95838 10.5C1.95838 11.576 1.66202 12.1819 1.20038 13.1257C1.06342 13.4057 0.911901 13.7154 0.749273 14.076C-1.92263 20 2.95838 20 8.95838 20C14.9583 20 19.8401 20 17.1671 14.0739ZM13.9584 10.5C13.9584 12.1082 14.5996 13.3905 15.0689 14.3292L15.07 14.3313C15.1724 14.536 15.2665 14.7244 15.344 14.8962C15.9478 16.2347 15.9444 16.8714 15.8989 17.0877L15.8969 17.0984C15.8869 17.1547 15.867 17.2667 15.4903 17.4372C15.0024 17.6581 14.2013 17.8246 13.0015 17.9128C11.8296 17.9989 10.4782 18 8.95838 18C7.43851 18 6.08713 17.9989 4.91529 17.9128C3.71552 17.8246 2.91437 17.6582 2.42646 17.4374C2.04975 17.2669 2.02991 17.1549 2.01999 17.099L2.01798 17.0883C1.97248 16.8724 1.96894 16.2362 2.57242 14.8983C2.67829 14.6635 2.79468 14.4289 2.91364 14.1891C3.41343 13.1818 3.95838 12.0835 3.95838 10.5C3.95838 7.76611 4.87058 6.54105 5.70966 5.92084C6.66028 5.21823 7.91602 5 8.95838 5C10.0007 5 11.2565 5.21823 12.2071 5.92087C13.0462 6.54105 13.9584 7.76611 13.9584 10.5Z"
      />
    </G>
  </Svg>
);

export const ProfileIcon = ({ color }: IconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <G fillRule="evenodd" clipRule="evenodd" fill={color}>
      <Path d="M21.6976 18.196C21.9465 16.6854 22.0002 14.7206 22 12C22.0002 9.2794 21.9465 7.31463 21.6976 5.80402C21.4628 4.35405 21.0984 3.67681 20.7108 3.28921C20.3232 2.90162 19.646 2.53717 18.196 2.30242C16.6854 2.05349 14.7206 1.99978 12 2C9.2794 1.99978 7.31463 2.05349 5.80402 2.30242C4.35405 2.53717 3.67681 2.90162 3.28921 3.28921C2.90162 3.67681 2.53717 4.35405 2.30242 5.80402C2.05349 7.31463 1.99978 9.2794 2 12C1.99978 14.7206 2.05349 16.6854 2.30242 18.196C2.53717 19.646 2.90162 20.3232 3.28921 20.7108C3.67681 21.0984 4.35405 21.4628 5.80402 21.6976C7.31463 21.9465 9.2794 22.0002 12 22C14.7206 22.0002 16.6854 21.9465 18.196 21.6976C19.646 21.4628 20.3232 21.0984 20.7108 20.7108C21.0984 20.3232 21.4628 19.646 21.6976 18.196ZM12 24C23 24 24 23 24 12C24 1 23 0 12 0C1 0 0 1 0 12C0 23 1 24 12 24Z" />
      <Path d="M15.8346 13.9772C16.7136 13.173 17 11.8729 17 10C17 7.23859 14.7614 5 12 5C9.23858 5 6.99999 7.23859 6.99999 10C6.99999 11.8729 7.28634 13.173 8.16543 13.9772C6.50103 14.8879 5.19582 16.373 4.51647 18.166C4.39227 18.4938 4.37377 18.9031 4.58544 19.1825C5.17254 19.9575 6.24154 19.048 6.69766 18.1894C7.70547 16.2921 9.70184 15 12 15C14.2981 15 16.2945 16.2921 17.3023 18.1893C17.7584 19.048 18.8275 19.9575 19.4146 19.1825C19.6262 18.903 19.6077 18.4938 19.4835 18.166C18.8042 16.373 17.499 14.8879 15.8346 13.9772ZM15 10C15 11.6826 14.7287 12.2411 14.5304 12.4559C14.3678 12.6321 13.8507 13 12 13C10.1493 13 9.63223 12.6321 9.4696 12.4559C9.27129 12.2411 8.99999 11.6826 8.99999 10C8.99999 8.34314 10.3431 7 12 7C13.6569 7 15 8.34314 15 10Z" />
    </G>
  </Svg>
);