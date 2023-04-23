import styles from "../styles/Home.module.css";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { HiArrowSmDown } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import { BsCalendarEvent } from "react-icons/bs";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className="bg-[#F5F6F8] w-auto h-auto">
      <div className="pl-[1rem] pt-[1rem] flex flex-row justify-between text-[#2C4860]">
        <h1 className="text-2xl text-[#2C4860]">All my accounts</h1>
        <div className="pr-[1rem] ">
          <Image src="/signal (2).png" alt="" width={30} height={30} />
        </div>
      </div>
      <div></div>
      <div className="pl-[1rem] ">
        <h1>june 10, 2018</h1>
      </div>
      <div className="w-full h-[15rem]  mt-[1rem] flex flex-row justify-between">
        <div className="w-[1rem] h-[12rem] bg-[#CADEE7] rounded-md mt-[1.5rem]"></div>
        <div className="flex justify-center items-center rounded-lg">
          <Image src="/Visacard.png" alt="" width={330} height={600}  className="cursor-pointer" onClick={() => router.push('/Visa')}/>
        </div>
        <div className="w-[1rem] h-[12rem] bg-[#CADEE7] rounded-md mt-[1.5rem]"></div>
      </div>
      <div className="flex justify-center ">
        <BsDot className="text-[#CADEE7] text-3xl" />{" "}
        <BsDot className="text-[#2C4860] text-3xl" />{" "}
        <BsDot className="text-[#CADEE7] text-3xl" />
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-[90%] h-[6.2rem] bg-[#fff] rounded-xl ">
          <div className="flex flex-row justify-center items-center">
            <div className="w-[5rem] h-[2rem] border border-slate-400 rounded-xl   mt-[1rem]">
              <h1 className="text-center">Income</h1>
            </div>
            <div className="w-[5rem] h-[2rem] border  border-slate-400 rounded-xl ml-[5rem]  mt-[1rem]">
              <h1 className="text-center">Expense</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="pt-[1rem] text-xl text-[#27F487] flex flex-row ">
              <HiArrowSmDown className="text-4xl text-[#27F487]" />
              <h1> $9,302.00</h1>
            </div>
            <div className="pt-[1rem] text-xl text-[#F42727] flex flex-row pl-[3rem]">
              <HiArrowSmUp className="text-4xl text-[#F42727]" />
              <h1> $2,790.00</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between text-[#2C4860] pl-[1rem] text-xl mt-[1rem]">
        <h1>Detail of movements</h1>
        <div className="text-2xl text-[#2C4860] pr-[1rem]">
          <BsCalendarEvent />
        </div>
      </div>
      <div className="flex justify-center items-center pt-[1rem] flex-col">
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl ">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row  items-center">
              <Image src="/dish.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md ">Restaurant Manhattan</h1>
                <h5>june 10, 2018</h5>
              </div>
            </div>

            <div className="flex justify-end pr-[1rem] pt-[1rem] items-center">
              <h1 className="text-xl text-[#F42727]">$170 </h1>
              <HiArrowSmUp className="text-4xl text-[#F42727]" />
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl mt-[0.5rem]">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row ">
              <Image src="/save-money.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md">Salary Deposit</h1>
                <h5>june 1, 2018</h5>
              </div>
              </div>
              <div className="flex justify-center pr-[1rem] pt-[1rem]  items-center">
                <h1 className="text-xl text-[#27F487]">$1200 </h1>
                <HiArrowSmDown className="text-4xl text-[#27F487]" />
              </div>
          
          </div>
        </div>
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl mt-[0.5rem]">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row ">
              <Image src="/paper-bags.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md">Central Market</h1>
                <h5>may 28, 2018</h5>
              </div>
              </div>
              <div className="flex justify-end pr-[1rem] items-center">
                <h1 className="text-xl text-[#F42727]">$50 </h1>
                <HiArrowSmUp className="text-4xl text-[#F42727]" />
              </div>
        
          </div>
        </div>
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl  mt-[0.5rem]">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row ">
              <Image src="/money.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md">Salary Deposit</h1>
                <h5>may 1, 2018</h5>
              </div>
              </div>
              <div className="flex justify-end pr-[1rem] items-center">
                <h1 className="text-xl text-[#27F487]">$1200 </h1>
                <HiArrowSmDown className="text-4xl text-[#27F487]" />
              </div>
      
          </div>
        </div>
      </div>
    </div>
  );
}
