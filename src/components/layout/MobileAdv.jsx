export default function MobileAdv(){
    return(
          <div className="w-full lg:flex justify-center mt-[300px] mb-10 relative hidden">
        <div className="bg-[#6292CF] rounded-lg w-[80%] flex justify-around items-center p-6 absolute -bottom-16">
          <div className="flex flex-col gap-3 ml-4">
            <h2 className="capitalize text-gray-100 text-3xl">
              Your Health , one tap away
            </h2>
            <p className="text-gray-200 text-lg max-w-[500px]">
              Book appointments, chat with doctors, and manage your health
              anytime–right from your phone. Download the app now and stay
              connected wherever you are.
            </p>
            <div className="flex gap-4 mt-12 mb-4">
              <button className="flex items-center gap-2 bg-slate-800 w-[200px] py-3 rounded-xl">
                <img
                  src="src/assets/images/googlePlay.png"
                  alt="googleIcon"
                  className="ml-4 w-8 h-8"
                />
                <div className="flex flex-col items-start mr-4">
                  <p className="text-gray-400 text-sm">Get it on</p>
                  <p className="text-gray-100 text-lg">Google Play</p>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-slate-800 w-[200px] py-3 rounded-xl">
                <img
                  src="src/assets/images/applebtn.png"
                  alt="appleIcon"
                  className="ml-4 w-8 h-8"
                />
                <div className="flex flex-col items-start mr-4">
                  <p className="text-gray-400 text-sm">Download on the</p>
                  <p className="text-gray-100 text-lg">Apple Store</p>
                </div>
              </button>
            </div>
          </div>
          <div>
            <img
              src="src/assets/images/phones.png"
              alt="mobile app"
              className="w-[400px]"
            />
          </div>
        </div>
      </div>
    )
}