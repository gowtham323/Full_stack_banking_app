import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Gowtham Raj', lastName: 'R', email:'gowthamrachakonda333@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox  
            type= "greeting"
            title="Welcome"
            user = {loggedIn?.firstName || "Guest"} 
            subtext="Access and mange your acount and transactions with ease."
          />

          <TotalBalanceBox  
            accounts = {[]}
            totalBanks = {2}
            totalCurrentBalance = {20345.70}
          /> 
          
        </header>
        RECENT TRANSACTIONS
      </div>
        <RightSidebar
          user = {loggedIn}
          transactions = {[]}
          banks = {[{currentBalance: 123.50}, {currentBalance: 500.50}]}
        />
    </section>
  )
}

export default Home