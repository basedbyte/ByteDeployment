import React from 'react'
import { MessageSquare, Clock } from 'lucide-react'
import Link from 'next/link'

const bounties = [
  {
    id: 1,
    title: 'Write Twitter Thread For Web3 Tool Launch',
    tags: ['Social Media', 'Copy Writing', 'Web 3'],
    reward: '50 USDC',
    due: '6h',
    comments: 30
  },
  {
    id: 2,
    title: 'QA Smart Contract On Testnet',
    tags: ['QA', 'Solidity', 'Blockchain'],
    reward: '800 USDC',
    due: '2d',
    comments: 20
  },
  {
    id: 3,
    title: 'Design Hero Section For NFT Marketplace',
    tags: ['UI Design', 'Figma', 'Web 3'],
    reward: '500 USDC',
    due: '3d',
    comments: 25
  },
  {
    id: 4,
    title: 'Fix Mobile Responsiveness On Product Page',
    tags: ['Frontend', 'Mobile UI'],
    reward: '120 USDC',
    due: '8h',
    comments: 7
  },
  {
    id: 5,
    title: 'Write Unit Tests For Payment Module',
    tags: ['Testing', 'Backend', 'Node.JS'],
    reward: '200 USDC',
    due: '2d',
    comments: 3
  },
  {
    id: 6,
    title: 'Implement Dark Mode Toggle In React App',
    tags: ['React', 'UI/UX', 'JavaScript'],
    reward: '150 USDC',
    due: '1d',
    comments: 15
  },
  {
    id: 7,
    title: 'Build Simple Smart Contract For NFT Minting',
    tags: ['Solidity', 'Web3', 'Smart Contract'],
    reward: '400 USDC',
    due: '3d',
    comments: 7
  },
  {
    id: 8,
    title: 'Migrate Blog From WordPress To Next.Js',
    tags: ['Next.Js', 'Content', 'Migration'],
    reward: '500 USDC',
    due: '5d',
    comments: 20
  },
  {
    id: 9,
    title: 'Design Hero Banner For Crypto Launch',
    tags: ['UI Design', 'Web3', 'Branding'],
    reward: '100 USDC',
    due: '1d',
    comments: 10
  }
]

const Jobs = () => {
  return (
    <div className='w-full min-h-screen flex justify-center py-8 px-4'>
      <div className='w-full max-w-7xl'>
        <div className='mb-6'>
          <h1 className='text-3xl font-bold mb-8'>Explore</h1>
          <div className='flex gap-2 items-center mb-8'>
            <button className='px-3 py-1 text-sm font-medium bg-[#99F5C8] border border-[#0C9653] text-black rounded-sm'>Bounties</button>
            <button className='px-3 py-1 text-sm font-medium border border-[#E2E2E2] text-[#8C8F8E] rounded-sm cursor-not-allowed'>Work</button>
            <Link href="/earn-bounties" className='group flex items-center gap-2 text-sm font-medium ml-auto border border-[#0C9653] px-6 py-1 rounded-xs text-[#8C8F8E] cursor-pointer hover:bg-[#0C9653] hover:text-white transition-all'>
              View All <span className='text-lg text-[#0C9653] group-hover:text-white'>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {bounties.map((bounty) => (
            <div key={bounty.id} className='bg-white border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-all'>
              <div className='flex justify-between items-start mb-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold'>
                    🐦
                  </div>
                  <h3 className='text-md font-semibold leading-tight'>{bounty.title}</h3>
                </div>
                <div className='flex items-start gap-2'>
                  <MessageSquare size={16} className='text-gray-400' />
                  <span className='text-xs text-gray-600'>{bounty.comments}</span>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 mb-4'>
                {bounty.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-green-50 text-green-700 text-xs border border-green-200 rounded-full font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <div className='flex items-center gap-2 text-sm text-gray-700 font-semibold'>
                  <span>{bounty.reward}</span>
                  <Clock size={16} className='text-gray-400' />
                  <span>Due in {bounty.due}</span>
                </div>
                <button className='px-4 py-1.5 bg-green-600 text-white text-sm rounded-md font-medium hover:bg-green-700 cursor-not-allowed'>
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-10'>
          <Link href="/earn-bounties" className='w-2/3 flex items-center justify-center gap-2 text-sm font-medium text-[#8C8F8E] cursor-pointer hover:bg-[#0C9653] hover:text-white border border-[#0C9653] px-6 py-2 rounded-xs transition-all'>
            View All <span className='text-lg'>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Jobs
