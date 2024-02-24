import React from "react";

export const Footer = () => {
  return (
    <div className="text-white mt-20">
      <footer className="bg-customgrey">
        <div className="grid grid-rows-4 ml-24 mr-24">
          <div className="mt-4 mb-4 font-bold text-xl">Explore the BBC</div>
          <div className="grid grid-cols-6 font-bold">
            <div className="grid grid-rows-2">
              <div>Home</div>
              <div>Travel</div>
            </div>
            <div className="grid grid-rows-2">
              <div>News</div>
              <div>Culture</div>
            </div>
            <div className="grid grid-rows-2">
              <div>Sport</div>
              <div>Future</div>
            </div>
            <div className="grid grid-rows-2">
              <div>Earth</div>
              <div>Tv</div>
            </div>
            <div className="grid grid-rows-2">
              <div>Reel</div>
              <div>Weather</div>
            </div>
            <div className="grid grid-rows-2">
              <div>WorkLife</div>
              <div>Sounds</div>
            </div>
          </div>
          <div className="mt-10">
            <ul className="flex text-sm">
              <li>Terms of Use</li>
              <li className="ml-4">About the BBC</li>
              <li className="ml-4">Privacy Policy</li>
              <li className="ml-4">Cookies</li>
              <li className="ml-4">Accessibility Help</li>
              <li className="ml-4">Parental Guidance</li>
              <li className="ml-4">Contact the BBC</li>
              <li className="ml-4">BBC emails for you</li>
              <li className="ml-4">Advertise with us</li>
              <li className="ml-4">Do not share or sell my info</li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="flex text-sm">
              <p className="font-bold">
                Copyright <i class="fa-regular fa-copyright"></i> 2024 BBC.
              </p>
              The BBC is not responsible for the content of external sites.
              <p className="font-bold">
                Read about our approach to external linking.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
