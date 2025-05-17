'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from '@components/navbar';
import React from 'react';
import { MessageCircle, BriefcaseBusiness, MessageSquare } from 'lucide-react';

const BountyDetailsPage = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get('title') || 'Untitled Bounty';
  const due = searchParams.get('due') || 'N/A';
  const comments = searchParams.get('comments') || '0';

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      <div className="max-w-[1100px] w-full mx-auto grid grid-cols-[65%_1px_auto] gap-0 px-8 pt-6 pb-12">
        {/* Left Section */}
        <div className="">
          <div className="w-full flex items-center gap-3 pb-10 text-[20px]">
            <div className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold uppercase">
              {title.charAt(0)}
            </div>
            <div>
              <h3 className="text-2xl font-bold leading-tight">
                {title} <br />
              </h3>
              <div className="flex text-sm text-gray-500 items-center gap-2">
                <p className="font-normal">By Base Network</p>
                <p className="text-gray-200"> | </p>
                <p className="text-[#0C9653]">Open</p>
                <p className="text-gray-200"> | </p>
                <p className="flex flex-row items-center justify-center gap-1 text-[12px]">
                  <MessageSquare size={15} />
                  {comments}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-black mb-5" />

          <p className="text-sm font-semibold text-black leading-relaxed mb-6 pr-8">
            We&apos;re looking for a creative and clean Hero Section UI design for an upcoming NFT Marketplace. This is the first thing users will see&mdash;so it must be visually striking, web3-native, and conversion-focused.
          </p>

          <h2 className="text-lg font-semibold mb-3">Bounty Details</h2>
          <p className="text-sm text-gray-800 mb-4 leading-snug pr-8">
            Design an eye-catching and Web3-native Hero Section for an NFT Marketplace landing page. This section will be the first thing users see when visiting the site&mdash;so it needs to hook attention, clearly communicate the platform&apos;s value, and guide users to explore or connect their wallet.
          </p>
          <p className="text-sm text-gray-800 mb-6 leading-snug pr-8">
            You can get creative with layout, colors, or visuals as long as the result looks modern, clean, and optimized for onboarding new users to the NFT space.
          </p>

          <h2 className="text-lg font-semibold mb-3 ">Content Thought-Starters</h2>

          <h3 className="text-base font-bold mb-2">Essential Elements:</h3>
          <ul className="list-disc list-inside mb-4 text-sm text-gray-800 space-y-1">
            <li>Headline that communicates purpose/value</li>
            <li>Subheading with supporting context</li>
            <li>CTA buttons: &quot;Explore NFTs&quot;, &quot;Connect Wallet&quot;</li>
            <li>Visuals: NFT artwork, carousel, animation, or abstract design</li>
          </ul>

          <h3 className="text-base font-bold mb-2">Design Vibes:</h3>
          <ul className="list-disc list-inside mb-4 text-sm text-gray-800 space-y-1">
            <li>Futuristic and minimal (Web3 aesthetic)</li>
            <li>Dark mode or high-contrast light mode</li>
            <li>Suggested colors: Electric blue, purple, deep gray</li>
          </ul>

          <h3 className="text-base font-bold mb-2">User Experience Goals:</h3>
          <ul className="list-disc list-inside mb-6 text-sm text-gray-800 space-y-1">
            <li>Easy to understand what the platform does</li>
            <li>Smooth layout hierarchy and visual clarity</li>
            <li>Inspires trust and curiosity</li>
          </ul>

          <h2 className="text-lg font-semibold mb-3">Evaluation Criteria</h2>
          <p className="text-sm text-gray-800 italic mb-6 pr-8">
            <span className="font-bold">Clarity:</span> Does the design communicate what the site is about at a glance? <br />
            <span className="font-bold">Visual Quality:</span> Is the layout professional, modern, and aesthetically aligned with top NFT marketplaces?<br />
            <span className="font-bold">UX Focused:</span> Are the buttons and sections intuitive and encouraging action?<br />
            <span className="font-bold">Web3 Alignment:</span> Does it feel &ldquo;crypto-native&rdquo; or too Web2?<br />
            <span className="font-bold">Originality:</span> Is your layout unique and not just a basic template?
          </p>
        </div>

        {/* Divider */}
        <div className="bg-black h-full w-[2px]" />

        {/* Right Section */}
        <div className="pl-8">
          <div className="bg-white shadow border border-gray-200 rounded p-5 mb-6">
            <div className="flex justify-between items-center text-sm text-gray-700 mb-5">
              <div className="flex items-center space-x-2">
                <BriefcaseBusiness className="text-[#0C9653]" />
                <span className="font-semibold">{comments}</span>
                <div className="flex -space-x-2"></div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-600 text-lg">⏱</span>
                <span className="font-semibold">{due}</span>
              </div>
            </div>
            {/*change this for functionality*/}
            <button className="w-full bg-[#1BA27A] hover:bg-[#158964] text-white font-semibold py-2 rounded">Apply</button>
          </div>

          <div className="mb-10">
            <p className="font-bold text-xs mb-2">CONTACT</p>
            <p className="text-sm text-gray-600">
              <a href="#" className="text-blue-600 hover:underline inline-flex items-center">Reach out <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6m0 0v6m0-6L10 19l-4-4-6 6" /></svg></a> if you have any questions about this listing
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <MessageCircle className="w-4 h-4 mr-1.5" />
              <span>{comments} Comments</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
              <input
                type="text"
                placeholder="Write a comment"
                className="flex-1 border-0 border-b-2 border-green-500 focus:outline-none focus:border-green-700 text-sm py-1 placeholder-gray-400"
              />
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
                  <div>
                    <p className="font-bold text-sm">Arron Tamagochi <span className="text-xs text-gray-500 font-normal ml-1">17m ago</span></p>
                  </div>
                </div>
                <p className="text-sm text-gray-800 ml-12">Submitted my draft! added a glassmorphism effect on the CTA panel. Would love feedback!</p>
                <p className="ml-12 text-xs font-medium text-gray-500 mt-1 hover:underline cursor-pointer">Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyDetailsPage;