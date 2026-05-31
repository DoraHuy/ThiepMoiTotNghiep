"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

const content = `
<header class="bg-primary/95 text-on-primary backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-primary-fixed/30 flat no shadows" data-aos="fade-down">
  <div class="flex justify-between items-center w-full px-margin-x max-w-container-max mx-auto h-20">
    <a class="text-headline-sm font-headline-sm font-bold text-on-primary tracking-tight hover:text-secondary-fixed transition-colors duration-300" href="#">MAI ANH GRADUATION</a>
    <nav id="mobileNav" class="hidden md:flex flex-col md:flex-row gap-6 md:gap-8 absolute md:static top-20 left-0 w-full md:w-auto bg-primary/95 md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none border-b border-primary-fixed/30 md:border-none" data-nav>
      <a class="text-on-primary/80 hover:text-secondary-fixed transition-colors duration-300 text-label-md font-label-md border-b-2 border-transparent pb-1" data-nav-link href="#invitation">Invitation</a>
      <a class="text-on-primary/80 hover:text-secondary-fixed transition-colors duration-300 text-label-md font-label-md border-b-2 border-transparent pb-1" data-nav-link href="#details">Details</a>
      <a class="text-on-primary/80 hover:text-secondary-fixed transition-colors duration-300 text-label-md font-label-md border-b-2 border-transparent pb-1" data-nav-link href="#rsvp">RSVP</a>
      <a class="text-on-primary/80 hover:text-secondary-fixed transition-colors duration-300 text-label-md font-label-md border-b-2 border-transparent pb-1" data-nav-link href="#map">Map</a>
    </nav>
    <a class="hidden md:inline-flex items-center justify-center bg-secondary text-on-secondary px-6 py-2.5 rounded-full text-label-md font-label-md hover:bg-secondary-container transition-all duration-300 scale-95 hover:scale-100 active:transition-transform shadow-sm" href="#rsvp">
      RSVP Now
    </a>
    <button id="mobileMenuBtn" class="md:hidden text-on-primary p-2">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
</header>
<main>
  <section class="px-margin-x relative overflow-hidden pt-12 pb-20" id="invitation">
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50 flex justify-center items-center">
      <div class="w-200 h-200 bg-primary-fixed-dim/20 rounded-full blur-[100px] mix-blend-multiply"></div>
      <div class="w-150 h-150 bg-secondary-fixed-dim/20 rounded-full blur-[100px] mix-blend-multiply absolute -right-40 top-20"></div>
    </div>
    <div class="max-w-container-max w-full mx-auto flex flex-col items-center relative z-10">
      <div class="text-center mb-12" data-aos="fade-up">
        <span class="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-full mb-4 font-bold uppercase tracking-wider shadow-sm" data-aos="fade-up" data-aos-delay="0">Save the Date</span>
        <h1 class="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary mb-4 text-gradient-gold" data-aos="fade-up" data-aos-delay="120">Kính mời tham dự Lễ Tốt Nghiệp</h1>
        <p class="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="220">Sự hiện diện của bạn là niềm vinh hạnh và là món quà ý nghĩa nhất trong ngày trọng đại này.</p>
        <div class="mt-8 flex justify-center" data-aos="zoom-in" data-aos-delay="320">
          <a href="#details" class="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-full text-label-md font-label-md hover:bg-primary-container transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg">
            <span class="">Xem Chi Tiết</span>
            <span class="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
          </a>
        </div>
      </div>
      <div class="w-full flex justify-center" data-aos="fade-up" data-aos-delay="100">
        <div class="group relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,37,70,0.15)] border border-outline-variant/30 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,37,70,0.2)]" style="font-family:'Manrope',sans-serif;">
          <div class="h-2 w-full" style="background: linear-gradient(to right,#002546,#e9c349,#002546);"></div>
          <div class="flex flex-col md:flex-row">
            <div class="md:w-2/5 flex flex-col items-center justify-center px-8 py-10 relative" style="background:linear-gradient(160deg,#001c38 0%,#0d3b66 60%,#1a5a8a 100%);" data-aos="fade-right" data-aos-delay="120">
              <svg class="absolute top-0 left-0 opacity-30" width="80" height="80" viewBox="0 0 80 80"><path d="M0 0 L80 0 L80 12 Q30 12 12 30 L0 30 Z" fill="#e9c349"/><path d="M0 0 L0 80 L12 80 Q12 30 30 12 L30 0 Z" fill="#e9c349"/></svg>
              <svg class="absolute top-0 right-0 opacity-30" width="80" height="80" viewBox="0 0 80 80"><path d="M80 0 L0 0 L0 12 Q50 12 68 30 L80 30 Z" fill="#e9c349"/><path d="M80 0 L80 80 L68 80 Q68 30 50 12 L50 0 Z" fill="#e9c349"/></svg>
              <svg class="absolute bottom-0 left-0 opacity-30" width="80" height="80" viewBox="0 0 80 80"><path d="M0 80 L80 80 L80 68 Q30 68 12 50 L0 50 Z" fill="#e9c349"/><path d="M0 80 L0 0 L12 0 Q12 50 30 68 L30 80 Z" fill="#e9c349"/></svg>
              <svg class="absolute bottom-0 right-0 opacity-30" width="80" height="80" viewBox="0 0 80 80"><path d="M80 80 L0 80 L0 68 Q50 68 68 50 L80 50 Z" fill="#e9c349"/><path d="M80 80 L80 0 L68 0 Q68 50 50 68 L50 80 Z" fill="#e9c349"/></svg>
              <div class="relative flex items-end justify-center gap-4 mb-4">
                <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
                  <path d="M25 65 Q8 45 6 18" stroke="#c9a227" stroke-width="2" fill="none"/>
                  <ellipse cx="6" cy="16" rx="5" ry="9" fill="#e9c349" transform="rotate(-20 6 16)"/>
                  <ellipse cx="11" cy="7" rx="4" ry="7" fill="#c9a227" transform="rotate(-30 11 7)"/>
                  <ellipse cx="3" cy="30" rx="4" ry="7" fill="#e9c349" transform="rotate(-10 3 30)"/>
                  <ellipse cx="15" cy="24" rx="4" ry="6" fill="#c9a227" transform="rotate(-25 15 24)"/>
                </svg>
                <div class="relative">
                  <div class="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-2xl" style="border-color:#e9c349;">
                    <img src="/hinhanh.jpg" alt="Nguyễn Thị Mai Anh" class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] spin-y-pause">
                  </div>
                  <div class="absolute -inset-2 rounded-full border-2 border-dashed opacity-40" style="border-color:#e9c349;"></div>
                </div>
                <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
                  <path d="M25 65 Q42 45 44 18" stroke="#c9a227" stroke-width="2" fill="none"/>
                  <ellipse cx="44" cy="16" rx="5" ry="9" fill="#e9c349" transform="rotate(20 44 16)"/>
                  <ellipse cx="39" cy="7" rx="4" ry="7" fill="#c9a227" transform="rotate(30 39 7)"/>
                  <ellipse cx="47" cy="30" rx="4" ry="7" fill="#e9c349" transform="rotate(10 47 30)"/>
                  <ellipse cx="35" cy="24" rx="4" ry="6" fill="#c9a227" transform="rotate(25 35 24)"/>
                </svg>
              </div>
              <p class="text-center text-2xl md:text-3xl font-bold italic mt-2" style="font-family:'Playfair Display',serif;color:#e9c349;">Nguyễn Thị Mai Anh</p>
              <p class="text-center text-sm mt-1 opacity-70" style="color:#a4c9fc;">Tân Kỹ Sư · Khoa học máy tính 💻</p>
              <p class="text-center text-xs mt-1 opacity-50" style="color:#a4c9fc;">Hành trình 4 năm Đại học</p>
              <div class="flex gap-6 mt-4 opacity-60">
                <span style="color:#e9c349;font-size:20px;">✦</span>
                <span style="color:#e9c349;font-size:14px;">✦</span>
                <span style="color:#e9c349;font-size:20px;">✦</span>
              </div>
            </div>
            <div class="md:w-3/5 px-8 md:px-12 py-10 flex flex-col justify-center text-center md:text-left" data-aos="fade-left" data-aos-delay="180">
              <div class="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span style="color:#4fc3f7;font-size:20px;">💎</span>
                <span class="font-black tracking-widest text-2xl" style="color:#002546;letter-spacing:0.12em;">THIỆP MỜI</span>
                <span style="color:#4fc3f7;font-size:20px;">💎</span>
              </div>
              <div class="flex items-center gap-2 mb-3">
                <div class="h-px flex-1" style="background:linear-gradient(to right,transparent,#e9c349,transparent);"></div>
                <span style="color:#e9c349;font-size:14px;">✦✦✦</span>
                <div class="h-px flex-1" style="background:linear-gradient(to right,transparent,#e9c349,transparent);"></div>
              </div>
              <h2 class="font-black text-2xl md:text-3xl mb-2" style="color:#002546;letter-spacing:0.05em;">THAM DỰ LỄ TỐT NGHIỆP</h2>
              <p class="text-sm md:text-base mb-6" style="color:#555;">Kính mời mọi người đến với Lễ tốt nghiệp của</p>
              <div class="rounded-xl border mb-5 px-5 py-4 flex flex-col gap-3 text-left" style="border-color:#c3c6d0;background:#f4fafd;">
                <div class="flex items-start gap-3 text-sm md:text-base">
                  <span style="color:#002546;font-size:20px;flex-shrink:0;">🕐</span>
                  <span><strong style="color:#002546;">Thời gian:</strong> <span style="color:#333;">10:00 AM – Thứ Tư, 10/06/2026</span></span>
                </div>
                <div class="flex items-start gap-3 text-sm md:text-base">
                  <span style="color:#002546;font-size:20px;flex-shrink:0;">📍</span>
                  <span><strong style="color:#002546;">Địa điểm:</strong> <span style="color:#333;">Tòa nhà H1, Trường Đại học Đồng Tháp</span></span>
                </div>
                <div class="flex items-start gap-3 text-sm md:text-base">
                  <span style="color:#002546;font-size:20px;flex-shrink:0;">📞</span>
                  <span><strong style="color:#002546;">Liên hệ:</strong> <span style="color:#333;">0376120904 (Mai Anh)</span></span>
                </div>
              </div>
              <p class="text-sm md:text-base mb-6 leading-relaxed" style="color:#555;">Mình rất mong Anh / Chị / em / bạn bè sẽ dành chút thời gian đến tham dự Lễ tốt nghiệp và cùng chia sẻ niềm vui đặc biệt này với mình. Sự hiện diện của bạn sẽ là niềm vinh hạnh nghĩa nhất của mình 🎁</p>
              <a href="#rsvp" class="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full text-white font-bold text-base shadow-lg transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 self-center" style="background:linear-gradient(to right,#1a2a4a,#2d4a7a);">
                <span style="color:#e9c349;">♥</span> Mình rất mong được đón tiếp!
              </a>
              <div class="mt-6 flex items-center gap-2">
                <div class="h-px flex-1" style="background:linear-gradient(to right,transparent,#e9c349,transparent);"></div>
                <span style="color:#e9c349;font-size:12px;">✦✦✦</span>
                <div class="h-px flex-1" style="background:linear-gradient(to right,transparent,#e9c349,transparent);"></div>
              </div>
            </div>
          </div>
          <div class="h-2 w-full" style="background: linear-gradient(to right,#002546,#e9c349,#002546);"></div>
        </div>
      </div>
      <div class="mt-12 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <p class="text-label-sm font-label-sm uppercase tracking-widest text-primary">Cuộn xuống</p>
        <span class="material-symbols-outlined text-primary">expand_more</span>
      </div>
    </div>
  </section>
  <section class="py-section-gap px-margin-x bg-surface-container-low border-y border-outline-variant/20" id="details" data-aos="fade-up">
    <div class="max-w-container-max mx-auto grid md:grid-cols-2 gap-gutter items-center">
      <div class="flex flex-col items-center justify-center p-8 bg-surface rounded-xl shadow-sm border border-outline-variant/30" data-aos="zoom-in" data-aos-delay="120">
        <div class="w-full max-w-md rounded-xl overflow-hidden border-2 mb-6 relative" style="border-color:#1a2a4a;background:white;">
          <svg class="absolute top-0 left-0" width="50" height="50" viewBox="0 0 50 50"><path d="M0 0 L50 0 L50 8 Q20 8 8 20 L0 20 Z" fill="#e9c349" opacity="0.7"/><path d="M0 0 L0 50 L8 50 Q8 20 20 8 L20 0 Z" fill="#e9c349" opacity="0.7"/></svg>
          <svg class="absolute top-0 right-0" width="50" height="50" viewBox="0 0 50 50"><path d="M50 0 L0 0 L0 8 Q30 8 42 20 L50 20 Z" fill="#e9c349" opacity="0.7"/><path d="M50 0 L50 50 L42 50 Q42 20 30 8 L30 0 Z" fill="#e9c349" opacity="0.7"/></svg>
          <svg class="absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50"><path d="M0 50 L50 50 L50 42 Q20 42 8 30 L0 30 Z" fill="#e9c349" opacity="0.7"/><path d="M0 50 L0 0 L8 0 Q8 30 20 42 L20 50 Z" fill="#e9c349" opacity="0.7"/></svg>
          <svg class="absolute bottom-0 right-0" width="50" height="50" viewBox="0 0 50 50"><path d="M50 50 L0 50 L0 42 Q30 42 42 30 L50 30 Z" fill="#e9c349" opacity="0.7"/><path d="M50 50 L50 0 L42 0 Q42 30 30 42 L30 50 Z" fill="#e9c349" opacity="0.7"/></svg>
          <div class="px-6 pt-8 pb-6 flex flex-col items-center">
            <p class="font-black text-lg tracking-widest mb-0.5" style="color:#e9c349;letter-spacing:0.15em;">THIỆP MỜI</p>
            <p class="font-black text-base tracking-wide mb-3" style="color:#002546;letter-spacing:0.08em;">THAM DỰ LỄ TỐT NGHIỆP</p>
            <div class="h-px w-3/4 mb-4" style="background:linear-gradient(to right,transparent,#e9c349,transparent);"></div>
            <div class="flex items-end justify-between w-full gap-4">
              <div class="flex flex-col items-center gap-1">
                <div class="text-xs px-3 py-1 rounded border text-center" style="border-color:#c3c6d0;color:#002546;font-weight:600;font-size:11px;">Tân Kỹ Sư<br>Nguyễn Thị Mai Anh</div>
                <img src="/hinhanh.jpg" alt="Nguyễn Thị Mai Anh" style="width:80px;height:100px;object-fit:cover;object-position:top;border-radius:8px;border:2px solid #e9c349;">
              </div>
              <div class="relative flex-1 flex justify-center">
                <svg class="absolute -top-3 -right-2" width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="8" r="5" fill="#f9a8d4" opacity="0.7"/>
                  <circle cx="32" cy="20" r="5" fill="#86efac" opacity="0.7"/>
                  <circle cx="20" cy="32" r="5" fill="#fde68a" opacity="0.7"/>
                  <circle cx="8" cy="20" r="5" fill="#93c5fd" opacity="0.7"/>
                  <circle cx="20" cy="20" r="6" fill="#fef3c7"/>
                </svg>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://thiep-moi-tot-nghiep-r4q5.vercel.app/" alt="QR Code" width="100" height="100" style="border:3px solid #1a2a4a;border-radius:8px;background:white;object-fit:contain;"/>
              </div>
            </div>
            <div class="mt-4 w-full h-2 rounded-full" style="background:linear-gradient(to right,#e9c349,#002546,#e9c349);"></div>
          </div>
        </div>

      </div>
      <div class="flex flex-col gap-8" data-aos="fade-left" data-aos-delay="180">
        <div>
          <h2 class="text-headline-md font-headline-md text-primary mb-2">Thông Tin Sự Kiện</h2>
          <div class="w-16 h-1 bg-secondary rounded-full"></div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-outline-variant/20">
            <div class="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">schedule</span>
            </div>
            <div>
              <h3 class="text-label-md font-label-md text-on-surface-variant uppercase mb-1">Thời gian</h3>
              <p class="text-body-lg font-body-lg text-on-surface font-medium">10:00 AM - Thứ Tư, 10/06/2026</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-outline-variant/20">
            <div class="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">location_on</span>
            </div>
            <div>
              <h3 class="text-label-md font-label-md text-on-surface-variant uppercase mb-1">Địa điểm</h3>
              <p class="text-body-lg font-body-lg text-on-surface font-medium">Tòa nhà H1, Trường Đại học Đồng Tháp</p>
              <a class="inline-flex items-center gap-1 text-primary hover:text-secondary transition-colors mt-2 text-label-sm font-label-sm font-bold" href="#map">
                <span class="">Xem bản đồ</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-outline-variant/20">
            <div class="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">call</span>
            </div>
            <div>
              <h3 class="text-label-md font-label-md text-on-surface-variant uppercase mb-1">Liên hệ</h3>
              <p class="text-body-lg font-body-lg text-on-surface font-medium">0376120904 (Mai Anh)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-10 px-margin-x relative" id="rsvp" data-aos="fade-up">
    <div class="max-w-3xl mx-auto bg-surface rounded-xl shadow-lg border border-outline-variant/20 overflow-hidden">
      <div class="bg-primary px-6 py-5 text-center text-on-primary relative overflow-hidden" data-aos="fade-down" data-aos-delay="120">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
        <h2 class="text-headline-sm font-headline-sm mb-1.5 relative z-10">Gửi Lời Chúc &amp; Xác Nhận Tham Dự</h2>
        <p class="text-label-md font-label-md text-primary-fixed-dim relative z-10">Vui lòng phản hồi để mình chuẩn bị đón tiếp chu đáo nhất nhé!</p>
      </div>
      <div class="p-6 md:p-8" data-aos="fade-up" data-aos-delay="160">
        <form class="flex flex-col gap-4" id="rsvpForm">
          <div class="flex flex-col gap-1.5" data-aos="fade-up" data-aos-delay="200">
            <label class="text-label-sm font-label-sm text-on-surface-variant uppercase font-bold tracking-wider" for="fullName">Họ và Tên</label>
            <input class="px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-body-md font-body-md text-on-surface" id="fullName" name="fullName" placeholder="Nhập tên của bạn" type="text">
          </div>
          <div class="flex flex-col gap-2 mt-1" data-aos="fade-up" data-aos-delay="280">
            <label class="text-label-sm font-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Xác Nhận Tham Dự</label>
            <div class="flex gap-4">
              <label class="flex-1 relative cursor-pointer">
                <input checked class="peer sr-only" name="attendance" type="radio" value="yes">
                <div class="w-full text-center px-4 py-2.5 rounded-lg border-2 border-outline-variant text-on-surface-variant peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed transition-all font-label-md text-label-md flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                        Chắc chắn tham gia
                                    </div>
              </label>
              <label class="flex-1 relative cursor-pointer">
                <input class="peer sr-only" name="attendance" type="radio" value="no">
                <div class="w-full text-center px-4 py-2.5 rounded-lg border-2 border-outline-variant text-on-surface-variant peer-checked:border-outline peer-checked:bg-surface-variant peer-checked:text-on-surface transition-all font-label-md text-label-md flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined">cancel</span>
                                        Rất tiếc không thể
                                    </div>
              </label>
            </div>
          </div>
          <div class="flex flex-col gap-1.5 mt-1" data-aos="fade-up" data-aos-delay="320">
            <label class="text-label-sm font-label-sm text-on-surface-variant uppercase font-bold tracking-wider" for="message">Lời Chúc</label>
            <textarea class="px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-body-md font-body-md text-on-surface resize-none" id="message" name="message" placeholder="Gửi lời chúc tốt đẹp nhất đến Mai Anh..." rows="3"></textarea>
          </div>
          <div class="mt-2 flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-delay="360">
            <button class="w-full md:w-auto px-6 py-3 bg-primary text-on-primary rounded-full text-label-md font-label-md font-bold hover:bg-primary-container transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2" type="submit">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">send</span>
                                Gửi Phản Hồi
                            </button>
            <p id="rsvpStatus" class="text-label-sm font-label-sm text-on-surface-variant/80 text-center" style="min-height:16px;"></p>
            <p class="text-label-sm font-label-sm text-on-surface-variant/80 text-center">
                                * Sau khi bấm gửi, ứng dụng email sẽ mở để bạn xác nhận gửi đến <a class="text-primary hover:underline" href="mailto:nguyenthimaianh.2010dt@gmail.com">nguyenthimaianh.2010dt@gmail.com</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section class="h-64 bg-surface-container-highest flex items-center justify-center border-t border-outline-variant/20" id="map" data-aos="fade-up">
    <p class="text-on-surface-variant text-body-md font-body-md flex items-center gap-2">
      <span class="material-symbols-outlined">map</span>
                Bản đồ vị trí (Tòa nhà H1, ĐH Đồng Tháp)
            </p>
  </section>
</main>
<footer class="full-width border-t border-outline-variant/10" data-aos="fade-up" style="background:linear-gradient(180deg,#2f3a41 0%,#252e34 100%);">
  <div class="flex flex-col items-center justify-center w-full max-w-container-max mx-auto px-margin-x py-10 gap-4 text-center">
    <div class="flex items-center gap-3 text-secondary-fixed">
      <span class="h-px w-12 bg-secondary-fixed/70"></span>
      <span class="material-symbols-outlined text-[18px]">emoji_events</span>
      <span class="h-px w-12 bg-secondary-fixed/70"></span>
    </div>
    <h2 class="text-headline-sm font-headline-sm text-secondary-fixed">Cảm ơn bạn đã chia sẻ niềm vui cùng Mai Anh!</h2>
    <p class="text-body-md font-body-md text-on-tertiary/70">
      © 2026 Nguyễn Thị Mai Anh. All rights reserved.
    </p>
  </div>
</footer>

`;

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-quart",
      once: true,
      offset: 80,
    });

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")
    );

    const setActiveLink = (hash: string) => {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === hash;
        link.classList.toggle("text-on-primary", isActive);
        link.classList.toggle("text-on-primary/80", !isActive);
        link.classList.toggle("border-secondary-fixed", isActive);
        link.classList.toggle("border-transparent", !isActive);
        link.classList.toggle("font-bold", isActive);
      });
    };

    const getSectionTargets = () =>
      navLinks
        .map((link) => {
          const target = link.getAttribute("href") || "";
          if (!target.startsWith("#")) return null;
          const section = document.querySelector<HTMLElement>(target);
          if (!section) return null;
          return { linkHash: target, section };
        })
        .filter(Boolean) as { linkHash: string; section: HTMLElement }[];

    const updateActiveByScroll = () => {
      const sections = getSectionTargets();
      if (sections.length === 0) return;
      const offset = 140;
      let current = sections[0].linkHash;
      for (const item of sections) {
        if (window.scrollY + offset >= item.section.offsetTop) {
          current = item.linkHash;
        }
      }
      setActiveLink(current);
    };

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const toggleMobileMenu = () => {
      if (mobileNav) {
        mobileNav.classList.toggle("hidden");
        mobileNav.classList.toggle("flex");
      }
    };

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", toggleMobileMenu);
    }

    const handleNavClick = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement | null;
      const hash = target?.getAttribute("href");
      if (hash?.startsWith("#")) {
        setActiveLink(hash);
        if (window.innerWidth < 768 && mobileNav && !mobileNav.classList.contains("hidden")) {
          mobileNav.classList.add("hidden");
          mobileNav.classList.remove("flex");
        }
      }
    };

    const statusEl = document.getElementById("rsvpStatus");
    const formEl = document.getElementById("rsvpForm") as HTMLFormElement | null;

    const setStatus = (message: string, isError = false) => {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.style.color = isError ? "#ba1a1a" : "#0d3b66";
    };

    const handleSubmit = async (event: Event) => {
      event.preventDefault();
      if (!formEl) return;

      const submitButton = formEl.querySelector(
        "button[type='submit']"
      ) as HTMLButtonElement | null;
      submitButton?.setAttribute("disabled", "true");

      const formData = new FormData(formEl);
      const payload = {
        fullName: String(formData.get("fullName") || "").trim(),
        attendance: String(formData.get("attendance") || "").trim(),
        message: String(formData.get("message") || "").trim(),
      };

      if (!payload.fullName || !payload.message) {
        setStatus("Vui long nhap ho ten va loi chuc.", true);
        submitButton?.removeAttribute("disabled");
        return;
      }

      setStatus("Dang mo ung dung email...");

      const mailtoAnchor = formEl.querySelector(
        "a[href^='mailto:']"
      ) as HTMLAnchorElement | null;
      const mailTo =
        mailtoAnchor?.getAttribute("href")?.replace("mailto:", "").trim() ||
        "nguyenthimaianh.2010dt@gmail.com";
      const attendanceLabel =
        payload.attendance === "yes"
          ? "Chac chan tham gia"
          : payload.attendance === "no"
            ? "Rat tiec khong the"
            : "(khong co)";
      const subject = `Loi chuc tot nghiep - ${payload.fullName}`;
      const body = [
        "Xin chao Mai Anh,",
        "",
        payload.message,
        "",
        `- ${payload.fullName}`,
        "",
        `Xac nhan tham du: ${attendanceLabel}`,
      ].join("\n");
      const mailtoUrl = `mailto:${encodeURIComponent(mailTo)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
      setStatus("Da mo ung dung email. Vui long nhan gui!");
      formEl.reset();
      const yesRadio = formEl.querySelector(
        "input[name='attendance'][value='yes']"
      ) as HTMLInputElement | null;
      if (yesRadio) yesRadio.checked = true;
      submitButton?.removeAttribute("disabled");
    };

    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));
    formEl?.addEventListener("submit", handleSubmit);
    window.addEventListener("scroll", updateActiveByScroll, { passive: true });
    updateActiveByScroll();

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleNavClick));
      formEl?.removeEventListener("submit", handleSubmit);
      window.removeEventListener("scroll", updateActiveByScroll);
      if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener("click", toggleMobileMenu);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </motion.div>
    </>
  );
}
