(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7391:(e,i,t)=>{Promise.resolve().then(t.bind(t,706)),Promise.resolve().then(t.bind(t,3763)),Promise.resolve().then(t.bind(t,5684)),Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,7970,23)),Promise.resolve().then(t.bind(t,6329)),Promise.resolve().then(t.bind(t,6533)),Promise.resolve().then(t.bind(t,7773)),Promise.resolve().then(t.bind(t,348))},706:(e,i,t)=>{"use strict";t.d(i,{default:()=>u});var s=t(5155),r=t(2115),a=t(9112),n=t(7129),o=t(5565),c=t(8173),l=t.n(c);function u(){let[e,i]=(0,r.useState)([]);return(0,r.useEffect)(()=>{n.b.getProductsSmall().then(e=>i(e.slice(0,9)))},[]),(0,s.jsx)("div",{className:"card",children:(0,s.jsx)(a.F,{value:e,numVisible:3,numScroll:3,responsiveOptions:[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}],itemTemplate:e=>(0,s.jsxs)("div",{className:"bg-white rounded-lg border border-solid border-gray-50 mx-3",children:[(0,s.jsx)("div",{className:"relative w-full h-56",children:(0,s.jsx)(o.default,{src:"https://primefaces.org/cdn/primereact/images/product/".concat(e.image),alt:e.name,layout:"fill",objectFit:"cover"})}),(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("div",{className:"text-gray-400 text-sm",children:"22 Oct, 2020"}),(0,s.jsx)(l(),{href:"#",className:"text-gray-950 text-lg font-medium no-underline",children:"Lorem ipsum dolor sit consea. Nulla purus arcu"})]})]})})})}},3763:(e,i,t)=>{"use strict";t.d(i,{default:()=>c});var s=t(5155),r=t(2115),a=t(9112),n=t(7129),o=t(5565);function c(){let[e,i]=(0,r.useState)([]);return(0,r.useEffect)(()=>{n.b.getClientsHome().then(e=>i(e.slice(0,6)))},[]),(0,s.jsx)("div",{className:"card",children:(0,s.jsx)(a.F,{value:e,numVisible:6,numScroll:3,responsiveOptions:[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}],itemTemplate:e=>(0,s.jsx)("div",{className:"mx-3",children:(0,s.jsx)("div",{className:"relative  h-[200px]",children:(0,s.jsx)(o.default,{src:"/clients/".concat(e.image),alt:e.name,layout:"fill",objectFit:"cover"})})}),showIndicators:!1,showNavigators:!1})})}t(8173)},5684:(e,i,t)=>{"use strict";t.d(i,{default:()=>o});var s=t(5155),r=t(2115),a=t(9112),n=t(7129);function o(){let[e,i]=(0,r.useState)([]);return(0,r.useEffect)(()=>{n.b.getTestimonials().then(e=>i(e.slice(0,6)))},[]),(0,s.jsx)("div",{className:"card",children:(0,s.jsx)(a.F,{value:e,numVisible:1,numScroll:1,responsiveOptions:[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}],itemTemplate:e=>(0,s.jsxs)("div",{className:"w-3/5 mx-auto text-center",children:[(0,s.jsx)("div",{className:"text-gray-800 text-lg font-medium",children:e.text}),(0,s.jsx)("div",{className:"text-black text-lg font-medium mt-6",children:e.userName}),(0,s.jsxs)("div",{className:"text-black font-light mt-2 mb-8",children:[e.userPost,", ",e.userCompany]})]}),showNavigators:!1})})}t(5565),t(8173)},7129:(e,i,t)=>{"use strict";t.d(i,{b:()=>s});let s={getProductsData:()=>[{id:"1000",code:"f230fh0g3",name:"Bamboo Watch",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Accessories",quantity:24,inventoryStatus:"INSTOCK",rating:5},{id:"1001",code:"nvklal433",name:"Black Watch",description:"Product Description",image:"black-watch.jpg",price:72,category:"Accessories",quantity:61,inventoryStatus:"INSTOCK",rating:4},{id:"1002",code:"zz21cz3c1",name:"Blue Band",description:"Product Description",image:"blue-band.jpg",price:79,category:"Fitness",quantity:2,inventoryStatus:"LOWSTOCK",rating:3},{id:"1003",code:"244wgerg2",name:"Blue T-Shirt",description:"Product Description",image:"blue-t-shirt.jpg",price:29,category:"Clothing",quantity:25,inventoryStatus:"INSTOCK",rating:5},{id:"1004",code:"h456wer53",name:"Bracelet",description:"Product Description",image:"bracelet.jpg",price:15,category:"Accessories",quantity:73,inventoryStatus:"INSTOCK",rating:4},{id:"1005",code:"av2231fwg",name:"Brown Purse",description:"Product Description",image:"brown-purse.jpg",price:120,category:"Accessories",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:4},{id:"1006",code:"bib36pfvm",name:"Chakra Bracelet",description:"Product Description",image:"chakra-bracelet.jpg",price:32,category:"Accessories",quantity:5,inventoryStatus:"LOWSTOCK",rating:3},{id:"1007",code:"mbvjkgip5",name:"Galaxy Earrings",description:"Product Description",image:"galaxy-earrings.jpg",price:34,category:"Accessories",quantity:23,inventoryStatus:"INSTOCK",rating:5},{id:"1008",code:"vbb124btr",name:"Game Controller",description:"Product Description",image:"game-controller.jpg",price:99,category:"Electronics",quantity:2,inventoryStatus:"LOWSTOCK",rating:4},{id:"1009",code:"cm230f032",name:"Gaming Set",description:"Product Description",image:"gaming-set.jpg",price:299,category:"Electronics",quantity:63,inventoryStatus:"INSTOCK",rating:3}],getClientsData:()=>[{id:"1",name:"Google",image:"google.svg"},{id:"2",name:"Dribbble",image:"dribbble.svg"},{id:"3",name:"LinkedIn",image:"linkedin.svg"},{id:"4",name:"Amazon",image:"amazon.svg"},{id:"5",name:"Medium",image:"medium.svg"},{id:"6",name:"Spotify",image:"spotify.svg"}],getTestimonialData:()=>[{id:"1",text:"“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.Morbi ornare elit at libero suscipit porta.”",userName:"Esther Howard",userPost:"Managing Director",userCompany:"ABC Company"},{id:"2",text:"“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed.”",userName:"Esther Howard",userPost:"Managing Director",userCompany:"ABC Company"},{id:"3",text:"“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in.”",userName:"Esther Howard",userPost:"Managing Director",userCompany:"ABC Company"}],getProductsSmall(){return Promise.resolve(this.getProductsData().slice(0,10))},getClientsHome(){return Promise.resolve(this.getClientsData().slice(0,6))},getTestimonials(){return Promise.resolve(this.getTestimonialData().slice(0,3))}}},348:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>s});let s={src:"/khurramshafeeq.github.io/_next/static/media/profile.cbd57975.png",height:618,width:453,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAUVBMVEVMaXHGztGWlJGujYLWv7yxiHmusK/DxsXgyMDk5ejHraLEysvJzMzU09TitqmkoZzCwsHS1de7iXfPw8HLurmyr6zErKPAubfhsqTU2tyzopyQ7a9hAAAAFXRSTlMAjvi0IuDD+xD86rxW/uz82PzH6MwcTLnNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nAXBBwKAIAwAsWMWXAwtCv9/qAkQHID/rgSk0IFjH5vxVMl5GqScbT2IvjJuolqr8QcosAHYJT/SQAAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}}},e=>{var i=i=>e(e.s=i);e.O(0,[908,980,441,517,358],()=>i(7391)),_N_E=e.O()}]);