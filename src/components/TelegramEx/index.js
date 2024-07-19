import axios from "axios";
import React, { useState } from "react";
import Loiding from "../../components/assets/img/loiding.svg"

const TelegramEx = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false); 
  const [loiding, setLoiding] = useState(false)

    const sumbitToTelegram = async () =>{
        setTimeout(async ()=>{
        let my_id = -1002037055611
        let token = `7124509563:AAEoWXnOTwN9uVh7Orgk9ZcABrdx2z1dvwA`;
        let api_url = `https://api.telegram.org/bot${token}/sendMessage`;
    
        let userInfo = {
          chat_id: my_id,
          parse_model: "html",
          text: `Заказ:
           Имя: ${name}
           Тел номер:${phone}
           Адресс:${address}
          `,
        };
        await axios.post(api_url, userInfo);
        setName("");
        setPhone("");
        setAddress("");
        setShowModal(false);
        setLoiding(false) 
    },2000)
      }


  
  return (
    <div id="" className=" p-20">
      <div className="container">
        <div className="w-[300px] mx-auto flex items-center justify-center flex-col">
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-4 px-20  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-4 px-20  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-4 px-20  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="  "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>
          <h1 className=" mt-5 mb-5 text-blue-600">
                Ваши данные будут отправлены через телеграм...
              </h1>
          <button
          disabled={name ? false : true}
          onClick={() => setShowModal(true)} 
            type="button"
            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
           Order
          </button>

          <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"   style={{
              display: showModal ? "flex" : "none",
            }}>
                 
                
                    <div class="relative p-4 w-full max-w-md max-h-full">
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                           onClick={() => setShowModal(false)}
                          type="button"
                          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="popup-modal"
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5 text-center">
                          <svg
                            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                         Потвердите свой заказ
                          </h3>

                          <div className="mb-5">
                              <h1>Имя: {name}</h1>
                              <h1>Телефон: {phone}</h1>
                              <h1>Адрес: {address}</h1>
                            </div>
               
                          <button
                            onClick={()=>sumbitToTelegram()}
                            data-modal-hide="popup-modal"
                            type="button"
                            class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                          >
                            Потвердить
                          </button>
                    
                          <img src={Loiding} alt="img"  />
                         
                         
                        </div>
                      
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramEx;
