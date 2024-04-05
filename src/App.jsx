import { useState, useRef, useEffect } from "react";
import "./App.css";
import * as bootstrap from "bootstrap";
import Explore from "./explore";
import Home from "./home";
import Manage from "./manage";
import MyPositions from "./positions";
import "react-range-slider-input/dist/style.css";

function App() {
  const [currentRoute, setCurrentRoute] = useState(0);
  const [isConnectActive, setIsConnectActive] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <>
      <div className="d-flex d-md-none vex-mobile">
        <VexMobile />
      </div>
      <ConnectOverlay
        isConnectActive={isConnectActive}
        setIsConnectActive={setIsConnectActive}
        setUserData={setUserData}
      />

      {currentRoute == 0 && <TopMessage />}
      <Navbar
        currentRoute={currentRoute}
        setIsConnectActive={setIsConnectActive}
        setCurrentRoute={setCurrentRoute}
      />
      {currentRoute == 0 ? (
        <Home />
      ) : currentRoute == 1 ? (
        <Explore />
      ) : currentRoute == 2 ? (
        <MyPositions />
      ) : (
        currentRoute == 3 && <Manage />
      )}
      <Footer />
    </>
  );
}

function ConnectOverlay({ isConnectActive, setIsConnectActive, setUserData }) {
  const [isFetching, setIsFetching] = useState(false);

  const requestMetaMask = async () => {
    // setIsFetching(true);
    // // Check if MetaMask is installed
    // if (!window.ethereum) {
    //   alert("Please install MetaMask first.");
    //   return;
    // }
    // try {
    //   // Request account access
    //   const accounts = await window.ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   // If we have an account, store user data
    //   if (accounts.length > 0) {
    //     setUserData({
    //       address: accounts[0],
    //       // Add more user data here
    //     });
    //   }
    // } catch (error) {
    //   alert("Failed to connect to MetaMask");
    // } finally {
    //   setIsFetching(false);
    // }
  };

  return (
    <>
      <div className={"connect-container " + (isConnectActive && "active")}>
        <div className="connect-wallet-container">
          <div className="cwc-header">
            <div className="cwc-heading me-auto ms-auto">Connect Wallet</div>
            <div
              className="cwc-closeBtn"
              onClick={() => setIsConnectActive(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                height="16px"
                width="16px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <div className="cwc-body">
            <div className="cwc-mainlogo">
              <div className="cwc-ml-svg">
                <img src="/android-chrome-512x512.png" alt="" />
              </div>
              Vexaris
            </div>
            <div
              className={`cwc-metamask ${isFetching ? "hidden" : ""}`}
              onClick={() => requestMetaMask()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                x="0"
                y="0"
                viewBox="0 0 318.6 318.6"
                width="28"
                height="28"
              >
                <path
                  fill="#e2761b"
                  stroke="#e2761b"
                  className="s1"
                  d="m274.1 35.5-99.5 73.9L193 65.8z"
                ></path>
                <path
                  d="m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
                  className="s1 s2"
                ></path>
                <path
                  d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z"
                  className="s1 s2"
                ></path>
                <path
                  fill="#d7c1b3"
                  stroke="#d7c1b3"
                  className="s1"
                  d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"
                ></path>
                <path
                  fill="#233447"
                  stroke="#233447"
                  className="s1"
                  d="m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"
                ></path>
                <path
                  fill="#cd6116"
                  stroke="#cd6116"
                  className="s1"
                  d="m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
                ></path>
                <path
                  fill="#e4751f"
                  stroke="#e4751f"
                  className="s1"
                  d="m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"
                ></path>
                <path
                  d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
                  className="s3"
                ></path>
                <path
                  fill="#c0ad9e"
                  stroke="#c0ad9e"
                  className="s1"
                  d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
                ></path>
                <path
                  fill="#161616"
                  stroke="#161616"
                  className="s1"
                  d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
                ></path>
                <path
                  fill="#763d16"
                  stroke="#763d16"
                  className="s1"
                  d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
                ></path>
                <path
                  d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
                  className="s3"
                ></path>
              </svg>
              MetaMask
              <span className="ms-auto me-2">Connect</span>
            </div>

            <div className={`cwc-metaloading ${isFetching ? "" : "hidden"}`}>
              <div className="sc-fXSgeo isFMME">
                <div className="sc-JrDLc kBLmHa">
                  <div>
                    <span className="sc-aXZVg beCpKE"></span>
                    <span className="sc-aXZVg sc-gEvEer beCpKE imaffw"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      x="0"
                      y="0"
                      viewBox="0 0 318.6 318.6"
                      width="28"
                      height="28"
                    >
                      <path
                        fill="#e2761b"
                        stroke="#e2761b"
                        className="s1"
                        d="m274.1 35.5-99.5 73.9L193 65.8z"
                      ></path>
                      <path
                        d="m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
                        className="s1 s2"
                      ></path>
                      <path
                        d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z"
                        className="s1 s2"
                      ></path>
                      <path
                        fill="#d7c1b3"
                        stroke="#d7c1b3"
                        className="s1"
                        d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"
                      ></path>
                      <path
                        fill="#233447"
                        stroke="#233447"
                        className="s1"
                        d="m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"
                      ></path>
                      <path
                        fill="#cd6116"
                        stroke="#cd6116"
                        className="s1"
                        d="m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
                      ></path>
                      <path
                        fill="#e4751f"
                        stroke="#e4751f"
                        className="s1"
                        d="m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"
                      ></path>
                      <path
                        d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
                        className="s3"
                      ></path>
                      <path
                        fill="#c0ad9e"
                        stroke="#c0ad9e"
                        className="s1"
                        d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
                      ></path>
                      <path
                        fill="#161616"
                        stroke="#161616"
                        className="s1"
                        d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
                      ></path>
                      <path
                        fill="#763d16"
                        stroke="#763d16"
                        className="s1"
                        d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
                      ></path>
                      <path
                        d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
                        className="s3"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="sc-dAbbOL eZYYgP">
                  <h3>Waiting for MetaMask</h3>
                  <p>
                    For the best experience, connect only one wallet at a time.
                  </p>
                </div>
                <button
                  disabled={true}
                  className="sc-fqkvVR sc-iGgWBj dQeymh ghZtBP cwc-metamask text-white text-center"
                >
                  <span className="ms-auto me-auto">Connecting</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function VexMobile() {
  return (
    <>
      <svg
        width="140px"
        height="140px"
        viewBox="0 0 109 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sc-beqWaB cHmvy vex-svg"
      >
        <g filter="url(#construction_svg__a)">
          <path
            d="m47.56 67.969-29.697-14.62a.627.627 0 0 0-.574.026.588.588 0 0 0-.208.202.552.552 0 0 0-.08.272v4.858c-.003.343.096.68.284.973.187.293.457.53.778.686l29.281 14.442c.322.156.591.393.78.686.187.293.285.63.284.973v4.514c0 .229-.055.473.042.68.05.106.131.194.235.255.103.06.223.09.344.083.238-.011.442-.169.656-.274L78.92 67.352a1.94 1.94 0 0 0 .787-.692c.19-.295.292-.635.292-.981V53.937a.552.552 0 0 0-.081-.272.586.586 0 0 0-.208-.201.623.623 0 0 0-.574-.026l-29.774 14.53a2.036 2.036 0 0 1-1.803 0m.932-36.088c-.301 0-.598-.066-.868-.193a.023.023 0 0 0-.033.02.023.023 0 0 1-.033.021L17.863 17.067a.61.61 0 0 0-.581.014.57.57 0 0 0-.209.207.536.536 0 0 0-.073.278v4.843c0 .345.1.683.287.978.188.295.456.535.776.695l29.374 14.429c.322.157.593.397.78.693.188.295.286.635.283.98v4.844a.537.537 0 0 0 .073.277.57.57 0 0 0 .209.207.608.608 0 0 0 .581.014l29.543-14.56c.32-.156.589-.394.776-.687.188-.292.287-.628.287-.971V17.566a.538.538 0 0 0-.074-.272.57.57 0 0 0-.203-.203.607.607 0 0 0-.57-.024L49.394 31.67c-.279.137-.588.21-.902.21Zm-30.629 3.328 29.692 14.66a.015.015 0 0 0 .02-.019c-.005-.013.008-.025.02-.02a2.038 2.038 0 0 0 1.768-.017l29.759-14.501a.609.609 0 0 1 .581.014c.087.05.159.122.208.207.05.085.075.18.074.278v11.742a1.799 1.799 0 0 1-.294.974c-.19.293-.462.53-.785.685L49.348 63.74a.609.609 0 0 1-.582-.014.57.57 0 0 1-.208-.207.537.537 0 0 1-.073-.278V58.4a1.8 1.8 0 0 0-.303-1.02 1.931 1.931 0 0 0-.838-.697l-29.28-14.429a1.952 1.952 0 0 1-.78-.702 1.826 1.826 0 0 1-.284-.986v-4.858a.536.536 0 0 1 .073-.278.572.572 0 0 1 .209-.207.608.608 0 0 1 .581-.014Z"
            stroke="#0071d7"
            strokeWidth="2"
          ></path>
        </g>
        <g filter="url(#construction_svg__b)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M75 79.364A6.37 6.37 0 0 1 68.636 73 6.37 6.37 0 0 1 75 66.637 6.37 6.37 0 0 1 81.363 73 6.37 6.37 0 0 1 75 79.364Zm0-14.977c-4.75 0-8.614 3.863-8.614 8.612 0 4.75 3.864 8.614 8.614 8.614 4.75 0 8.612-3.864 8.612-8.614 0-4.75-3.863-8.612-8.612-8.612Zm15.75 10.757v-4.288h-1.78c-.523 0-.978-.36-1.097-.87a13.118 13.118 0 0 0-1.64-3.956 1.126 1.126 0 0 1 .16-1.39l1.26-1.26-3.032-3.033-1.261 1.26c-.37.37-.946.437-1.39.16a13.11 13.11 0 0 0-3.956-1.64 1.124 1.124 0 0 1-.87-1.096v-1.78h-4.289v1.78c0 .522-.36.977-.87 1.095-1.4.327-2.73.879-3.955 1.64-.444.277-1.02.21-1.39-.159l-1.26-1.26-3.034 3.032 1.26 1.26c.37.37.438.946.16 1.39a13.132 13.132 0 0 0-1.64 3.956c-.119.51-.572.87-1.096.87h-1.78v4.29h1.78c.523 0 .977.36 1.096.87a13.111 13.111 0 0 0 1.64 3.955c.277.445.21 1.02-.16 1.39l-1.26 1.261 3.033 3.033 1.26-1.261c.37-.37.947-.436 1.39-.16a13.1 13.1 0 0 0 3.956 1.64c.51.12.87.573.87 1.096v1.781h4.289v-1.78c0-.523.36-.977.87-1.096 1.4-.326 2.73-.879 3.955-1.64a1.126 1.126 0 0 1 1.39.16l1.261 1.26 3.033-3.033-1.261-1.26a1.125 1.125 0 0 1-.16-1.39 13.113 13.113 0 0 0 1.641-3.956c.12-.51.573-.87 1.096-.87h1.781Zm1.125-6.538h-2.04a15.401 15.401 0 0 0-1.24-2.987l1.445-1.444a1.125 1.125 0 0 0 0-1.59l-4.624-4.625a1.127 1.127 0 0 0-1.591 0l-1.444 1.444a15.336 15.336 0 0 0-2.987-1.239v-2.04c0-.621-.503-1.125-1.125-1.125h-6.538c-.622 0-1.125.504-1.125 1.125v2.04a15.33 15.33 0 0 0-2.987 1.239l-1.444-1.444a1.128 1.128 0 0 0-1.591 0l-4.625 4.624a1.124 1.124 0 0 0 0 1.591l1.444 1.444a15.335 15.335 0 0 0-1.238 2.987h-2.04c-.621 0-1.125.503-1.125 1.125v6.539c0 .622.504 1.125 1.125 1.125h2.04c.306 1.036.72 2.036 1.238 2.986l-1.443 1.444a1.125 1.125 0 0 0 0 1.591l4.624 4.624a1.125 1.125 0 0 0 1.591 0l1.444-1.443c.951.517 1.95.932 2.987 1.238v2.04c0 .621.503 1.125 1.125 1.125h6.539c.621 0 1.125-.504 1.125-1.125v-2.04a15.338 15.338 0 0 0 2.986-1.239l1.444 1.444a1.125 1.125 0 0 0 1.591 0l4.624-4.624a1.125 1.125 0 0 0 0-1.591l-1.444-1.444a15.39 15.39 0 0 0 1.24-2.987h2.039c.621 0 1.125-.503 1.125-1.125v-6.538c0-.622-.504-1.125-1.125-1.125Z"
            fill="#0071d7"
          ></path>
        </g>
        <defs>
          <filter
            id="construction_svg__a"
            x="0.233"
            y="0.233"
            width="96.533"
            height="98.533"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="7.883"></feGaussianBlur>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_403_14272"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="4.3"></feGaussianBlur>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feBlend
              in2="effect1_dropShadow_403_14272"
              result="effect2_dropShadow_403_14272"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="1.433"></feGaussianBlur>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feBlend
              in2="effect2_dropShadow_403_14272"
              result="effect3_dropShadow_403_14272"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_403_14272"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="construction_svg__b"
            x="41.233"
            y="39.233"
            width="67.533"
            height="67.533"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.443137 0 0 0 0 0.843137 0 0 0 1 0"></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="7.883"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.443137 0 0 0 0 0.843137 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_403_14272"
            ></feBlend>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.443137 0 0 0 0 0.843137 0 0 0 1 0"></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="4.3"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect1_dropShadow_403_14272"
              result="effect2_dropShadow_403_14272"
            ></feBlend>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.443137 0 0 0 0 0.843137 0 0 0 1 0"></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="1.433"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.443137 0 0 0 0 0.843137 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect2_dropShadow_403_14272"
              result="effect3_dropShadow_403_14272"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_403_14272"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
      <h1 className="sc-hjsqBZ sc-ejdXBC sc-hNeXkk bCnYXB dAGPhR fSEwMe">
        Valio.xyz mobile coming soon
      </h1>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div
            className="footer-link"
            onClick={() =>
              window.open("https://twitter.com/Vexaris_xyz", "_blank")
            }
          >
            <svg
              width="0.85em"
              height="1em"
              viewBox="0 0 13 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.738 5.505 12.578 0h-1.146L7.227 4.78 3.871 0H0l5.076 7.228L0 13h1.147l4.437-5.048L9.129 13H13M1.56.846h1.762l8.109 11.35H9.669"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            className="footer-link"
            onClick={() => window.open("https://t.me/vexaris_xyz", "_blank")}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="12.000000pt"
              height="12.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M4770 4666 c-340 -125 -4535 -1736 -4597 -1766 -205 -97 -229 -225
-58 -312 17 -9 300 -99 631 -202 l601 -187 1364 854 c751 469 1380 859 1398
865 47 16 87 15 105 -4 13 -13 14 -19 3 -38 -6 -13 -505 -466 -1107 -1006
-602 -541 -1097 -987 -1099 -992 -2 -5 -22 -275 -45 -600 l-42 -590 46 6 c25
3 64 16 87 29 24 12 180 154 349 315 168 161 312 296 319 298 7 3 275 -187
596 -422 320 -235 607 -438 638 -452 81 -38 171 -41 230 -10 53 28 104 98 126
171 8 28 192 875 407 1882 359 1676 392 1838 392 1925 0 82 -3 102 -25 145
-15 31 -42 62 -68 80 -59 41 -157 46 -251 11z"
                />
              </g>
            </svg>
          </div>
          <div
            className="footer-link"
            onClick={() => window.open("https://vexaris.medium.com/", "_blank")}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="12.000000pt"
              height="12.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1205 3994 c-730 -136 -1237 -768 -1202 -1499 31 -668 498 -1217
1157 -1361 121 -27 449 -27 570 0 548 120 975 528 1111 1062 61 241 61 487 0
728 -136 532 -557 937 -1106 1061 -102 24 -425 29 -530 9z"
                />
                <path
                  d="M3651 3914 c-195 -52 -370 -252 -487 -555 -137 -355 -173 -873 -89
-1286 64 -312 177 -554 335 -714 95 -97 173 -141 278 -161 256 -48 525 200
666 613 73 215 106 413 113 684 12 431 -73 810 -244 1099 -57 97 -196 240
-269 279 -103 54 -203 68 -303 41z"
                />
                <path
                  d="M4845 3781 c-94 -39 -174 -326 -216 -776 -16 -168 -16 -711 -1 -885
43 -468 126 -753 228 -784 27 -8 78 32 103 83 191 376 217 1635 45 2166 -35
105 -56 147 -94 179 -34 28 -36 29 -65 17z"
                />
              </g>
            </svg>
          </div>
          <div
            className="footer-link"
            onClick={() => window.open("https://docs.vexaris.xyz/", "_blank")}
          >
            <svg
              width="1.2em"
              height="1em"
              viewBox="0 0 21 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.452 12.505a.62.62 0 0 1 .567.377.606.606 0 0 1-.334.797.619.619 0 0 1-.67-.133.607.607 0 0 1 .437-1.04Zm9.646-3.77a.62.62 0 0 1-.568-.378.606.606 0 0 1 .333-.796.62.62 0 0 1 .67.133.607.607 0 0 1-.435 1.04Zm0-2.495c-.505 0-.988.199-1.345.552a1.862 1.862 0 0 0-.457 1.932l-6.283 3.317a1.89 1.89 0 0 0-1.561-.813c-.726 0-1.386.412-1.707 1.055L2.101 9.332c-.597-.31-1.043-1.284-.996-2.17.024-.463.185-.822.431-.96.156-.087.343-.08.543.023l.036.02c1.497.78 6.392 3.337 6.598 3.431.318.147.494.206 1.037-.05L19.869 4.41c.148-.056.322-.197.322-.411 0-.297-.31-.414-.311-.414-.576-.273-1.46-.683-2.323-1.084-1.845-.856-3.935-1.826-4.853-2.303-.793-.412-1.43-.065-1.544.005l-.22.108C6.806 2.337 1.276 5.051.961 5.241.4 5.583.05 6.26.005 7.1-.065 8.433.62 9.824 1.6 10.333l5.97 3.052c.065.448.291.858.637 1.155a1.913 1.913 0 0 0 2.577-.083c.355-.347.56-.819.568-1.313l6.575-3.534a1.91 1.91 0 0 0 2.514-.153A1.88 1.88 0 0 0 21 8.124c0-.5-.201-.979-.558-1.333a1.912 1.912 0 0 0-1.344-.552"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
function Navbar({ currentRoute, setCurrentRoute, setIsConnectActive }) {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-brand">
          <svg
            width="70px"
            height="40px"
            viewBox="0 0 67 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.007 16.928h2.882L35.75 6.241h-2.432l-2.759 8.153-2.8-8.153h-2.656l3.903 10.687ZM39.263 17.132c1.635 0 2.575-.592 3.27-1.512v1.308h2.431V9.919c0-2.922-1.88-3.903-4.27-3.903-2.392 0-4.374 1.042-4.578 3.535h2.39c.123-1.062.757-1.675 2.044-1.675 1.451 0 1.942.715 1.942 2.145v.552h-1.329c-3.065 0-5.476.899-5.476 3.392 0 2.227 1.614 3.167 3.576 3.167Zm.593-1.777c-1.227 0-1.717-.593-1.717-1.492 0-1.308 1.206-1.737 3.086-1.737h1.267v1.063c0 1.369-1.124 2.166-2.636 2.166ZM46.94 16.928h2.472V1.296H46.94v15.632ZM51.568 16.928h2.473V6.241h-2.473v10.687Zm1.206-12.445c.817 0 1.47-.613 1.47-1.41 0-.817-.653-1.43-1.47-1.43-.818 0-1.472.613-1.472 1.43 0 .797.654 1.41 1.472 1.41ZM60.916 15.211c-1.88 0-2.963-1.369-2.963-3.555v-.164c0-2.206 1.124-3.535 2.963-3.535 1.84 0 2.943 1.349 2.943 3.556v.143c0 2.186-1.104 3.555-2.943 3.555Zm-.02 1.921c3.147 0 5.497-2.166 5.497-5.497v-.163c0-3.27-2.35-5.456-5.477-5.456-3.146 0-5.496 2.207-5.496 5.517v.164c0 3.249 2.33 5.435 5.476 5.435Z"
              fill="#fff"
            ></path>
            <path
              d="M9.052 5.414a.566.566 0 0 0 .534 0L18.381.742a.17.17 0 0 1 .169.008.177.177 0 0 1 .082.152v3.756a.61.61 0 0 1-.085.31.586.586 0 0 1-.23.22L9.576 9.846a.17.17 0 0 1-.233-.07.183.183 0 0 1-.022-.09V8.137a.61.61 0 0 0-.084-.314.586.586 0 0 0-.23-.221L.314 2.986a.596.596 0 0 1-.23-.222A.62.62 0 0 1 0 2.45V.901A.183.183 0 0 1 .083.748.17.17 0 0 1 .255.742l8.797 4.695v-.023Zm0 5.827L.255 6.545a.17.17 0 0 0-.233.071.183.183 0 0 0-.022.089v1.554c0 .111.028.22.084.316a.596.596 0 0 0 .23.224l8.665 4.616a.585.585 0 0 1 .248.223.61.61 0 0 1 .09.326v1.55a.183.183 0 0 0 .083.154.17.17 0 0 0 .172.005l8.746-4.648a.586.586 0 0 0 .233-.22.609.609 0 0 0 .086-.31V6.737a.182.182 0 0 0-.083-.155.17.17 0 0 0-.172-.005l-8.806 4.64a.565.565 0 0 1-.533 0l.009.023Zm-.01 5.784L.256 12.35a.173.173 0 0 0-.17.008.181.181 0 0 0-.085.151v1.555c0 .11.029.217.084.31.056.094.136.17.23.22l8.665 4.62a.58.58 0 0 1 .23.22.605.605 0 0 1 .085.31v1.555a.188.188 0 0 0 .012.107.181.181 0 0 0 .07.082.174.174 0 0 0 .2-.01l8.747-4.649a.591.591 0 0 0 .233-.221.615.615 0 0 0 .086-.314v-3.756a.187.187 0 0 0-.085-.152.173.173 0 0 0-.17-.008l-8.81 4.648a.566.566 0 0 1-.534 0"
              fill="#046fcb"
            ></path>
          </svg>
          <div className="beta rounded-pill d-flex justify-content-center align-content-between">
            Beta
          </div>
        </div>
        <div className="navbar-links">
          <div
            className={"navbar-link " + (currentRoute == 0 && "active")}
            onClick={() => setCurrentRoute(0)}
          >
            Home
          </div>
          <div
            className={"navbar-link " + (currentRoute == 1 && "active")}
            onClick={() => setCurrentRoute(1)}
          >
            Explore
          </div>
          <div
            className={"navbar-link " + (currentRoute == 2 && "active")}
            onClick={() => setCurrentRoute(2)}
          >
            My positions
          </div>
          <div
            className={"navbar-link " + (currentRoute == 3 && "active")}
            onClick={() => setCurrentRoute(3)}
          >
            Manage
          </div>
        </div>
        <div className="navbar-end">
          <div className="input-container">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              className="input-search"
            >
              <path
                d="m13.836 13.012-3.479-3.479a5.837 5.837 0 1 0-.824.824l3.48 3.48a.583.583 0 0 0 .823-.825ZM5.847 10.51a4.663 4.663 0 1 1 0-9.325 4.663 4.663 0 0 1 0 9.325Z"
                fill="currentColor"
              ></path>
            </svg>
            <input type="text" placeholder="Search..." />
          </div>
          <button
            className="sc-kgKVFY connectButton cb2 me-3"
            onClick={() => setIsConnectActive(true)}
          >
            Connect
            <div className="absolutePosition">
              <div className="absolutePosition">
                <svg className="sc-hAtEyd svgContainer">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="6"
                    ry="6"
                    pathLength="10"
                  ></rect>
                </svg>
                <svg className="sc-hAtEyd svgContainer strokeBlurMedium">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="6"
                    ry="6"
                    pathLength="10"
                  ></rect>
                </svg>
                <svg className="sc-hAtEyd svgContainer strokeBlurSmall">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="6"
                    ry="6"
                    pathLength="10"
                  ></rect>
                </svg>
                <svg className="sc-hAtEyd svgContainer blurEffect">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="6"
                    ry="6"
                    pathLength="10"
                  ></rect>
                </svg>
              </div>
              <div className="absolutePosition rotate180 svg-sect-2">
                <svg className="sc-hAtEyd svgContainer">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="6"
                    ry="6"
                    pathLength="10"
                  ></rect>
                </svg>
                <svg className="sc-hAtEyd svgContainer strokeBlurMedium">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="6"
                    ry="6"
                    pathLength="10"
                  ></rect>
                </svg>
                <svg className="sc-hAtEyd svgContainer strokeBlurSmall">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="6"
                    ry="6"
                    pathLength="10"
                  ></rect>
                </svg>
                <svg className="sc-hAtEyd svgContainer blurEffect">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="6"
                    ry="6"
                    pathLength="10"
                  ></rect>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

function TopMessage() {
  return (
    <>
      <div className="message-container">
        <svg
          width="60px"
          height="25px"
          viewBox="0 0 57 26"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0a8 8 0 0 0-8 8v10a8 8 0 0 0 8 8h41a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Zm34.237 5.33A4.465 4.465 0 0 1 43.89 5c.567 0 1.124.11 1.654.321a4.309 4.309 0 0 1 2.648 3.984v1.423c0 .45-.093.9-.27 1.322a3.484 3.484 0 0 1-1.886 1.873 3.549 3.549 0 0 1-1.338.266V8.663a.741.741 0 0 0-.214-.524.728.728 0 0 0-.241-.156.801.801 0 0 0-.288-.055h-.13a.765.765 0 0 0-.53.211.74.74 0 0 0-.214.523v2.066h-3.484V9.305c-.01-.56.102-1.12.316-1.643a4.318 4.318 0 0 1 2.323-2.332Zm1.703 11.838h-.129a.784.784 0 0 1-.286-.056.834.834 0 0 1-.24-.158.762.762 0 0 1-.212-.53v-5.601a3.472 3.472 0 0 0-3.207 2.168 3.537 3.537 0 0 0-.268 1.34v1.423a4.3 4.3 0 0 0 .314 1.665c.212.53.526 1.014.924 1.414.397.41.868.726 1.386.949a4.162 4.162 0 0 0 1.644.335c.564 0 1.128-.112 1.645-.335.517-.223.998-.54 1.386-.95.397-.408.712-.883.924-1.413.213-.53.314-1.098.314-1.665V14.33H44.67v2.093a.763.763 0 0 1-.212.53.724.724 0 0 1-.24.159.672.672 0 0 1-.278.056ZM9.502 7.243c-.203.5-.305 1.076-.305 1.733a4.6 4.6 0 0 0 .325 1.751c.223.532.495.975.816 1.329.329.348.735.696 1.22 1.043l1.713 1.23c.505.361.893.742 1.162 1.142.275.394.413.853.413 1.378 0 .499-.154.892-.463 1.18-.308.29-.725.434-1.25.434-.518 0-.934-.174-1.25-.522-.308-.354-.462-.83-.462-1.427v-1.072H9v1.21c0 1.253.39 2.238 1.171 2.953.788.715 1.775 1.072 2.963 1.072.774 0 1.466-.147 2.076-.442.617-.296 1.112-.758 1.486-1.388.38-.637.571-1.401.571-2.293 0-.893-.21-1.66-.63-2.303-.42-.643-1.004-1.234-1.752-1.772l-1.771-1.27c-.486-.347-.856-.691-1.112-1.033a1.945 1.945 0 0 1-.384-1.2c0-.506.134-.896.403-1.172.276-.282.64-.423 1.093-.423.485 0 .86.154 1.122.463.269.308.403.777.403 1.407v.955h2.421V9.192c0-.88-.18-1.627-.541-2.244-.354-.617-.823-1.066-1.407-1.348-.584-.289-1.25-.433-1.998-.433a5.07 5.07 0 0 0-1.526.216c-.459.145-.872.368-1.24.67-.36.295-.643.692-.846 1.19ZM25.6 20.48v-2.214h-5.56l5.363-10.078V5.364h-7.559v2.214h5.275l-5.383 10.078v2.825H25.6ZM35.654 5.364V20.48h-3.966L28.805 7.214V20.48H26.58V5.364h4.015l2.844 13.08V5.363h2.215Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="is_live">is live!</span>
        <span className="message_message">
          Earn rewards by backing other managers or by managing vaults
        </span>
        <button className="sc-kgKVFY connectButton">
          Learn more
          <div className="absolutePosition">
            <div className="absolutePosition">
              <svg className="sc-hAtEyd svgContainer">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="6"
                  ry="6"
                  pathLength="10"
                ></rect>
              </svg>
              <svg className="sc-hAtEyd svgContainer strokeBlurMedium">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="6"
                  ry="6"
                  pathLength="10"
                ></rect>
              </svg>
              <svg className="sc-hAtEyd svgContainer strokeBlurSmall">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="6"
                  ry="6"
                  pathLength="10"
                ></rect>
              </svg>
              <svg className="sc-hAtEyd svgContainer blurEffect">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="6"
                  ry="6"
                  pathLength="10"
                ></rect>
              </svg>
            </div>
            <div className="absolutePosition rotate180 svg-sect-2">
              <svg className="sc-hAtEyd svgContainer">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="6"
                  ry="6"
                  pathLength="10"
                ></rect>
              </svg>
              <svg className="sc-hAtEyd svgContainer strokeBlurMedium">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="6"
                  ry="6"
                  pathLength="10"
                ></rect>
              </svg>
              <svg className="sc-hAtEyd svgContainer strokeBlurSmall">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="6"
                  ry="6"
                  pathLength="10"
                ></rect>
              </svg>
              <svg className="sc-hAtEyd svgContainer blurEffect">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="6"
                  ry="6"
                  pathLength="10"
                ></rect>
              </svg>
            </div>
          </div>
        </button>
        <div className="background_radial"></div>
      </div>
    </>
  );
}

export default App;
