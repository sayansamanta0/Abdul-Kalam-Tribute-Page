import './style.css'

document.querySelector('#app').innerHTML = `
<div class="w-full">
<!-- nav bar -->
<nav class="w-full bg-gray-900 h-10">
    <div class="w-10/12 bg-transparent mx-auto ">
        <ul class="flex flex-row gap-7 w-full pt-2  justify-end">
            <li class="text-white opacity-60">Home</li>
            <li class="text-white opacity-60">Donate</li>
            <li class="text-white opacity-60">Contact</li>
        </ul>
    </div>
</nav>

<!-- hero section -->
<div class="relative overflow-hidden">
    <img class="w-full h-full grayscale absolute -z-10 brightness-50" src="./assets/Rashtrapati-Bhavan.jpg" alt="">
    <div class="w-10/12 mx-auto flex flex-wrap md:flex-nowrap">
        <div>
            <img class="mr-10" src="./assets/20220725_172107.png" alt="">
        </div>

        <div class="text-white flex flex-col align-middle justify-center gap-4 text-center">
            <h3 class="text-3xl drop-shadow-md shadow-black">A tribute to</h3>
            <h1 class="text-6xl drop-shadow-md shadow-black">A. P. J. Abdul Kalam</h1>
            <h3 class="text-3xl opacity-80 drop-shadow-md shadow-black">The missile man of India</h3>
            <p class="sm:opacity-80 mt-10 drop-shadow-md shadow-black">"Look at the sky. We are not alone. The
                whole universe is friendly to
                us and conspires only to give the best to those who dream and work."</p>
            <p class=" md:opacity-80 mt-5 drop-shadow-md shadow-black">Born on 15th October 1931 at Rameswaram
                in
                Tamil Nadu, Dr. Avul Pakir Jainulabdeen Abdul Kalam,
                specialized in Aeronautical Engineering from Madras Institute of Technology. Dr. Kalam made
                significant contribution as Project Director to develop India's first indigenous Satellite
                Launch Vehicle (SLV-III) which successfully injected the Rohini satellite in the near earth
                orbit in July 1980 and made India an exclusive member of Space Club</p>
        </div>

    </div>

</div>

<!--about kalam life -->
<div class="w-8/12 min-h-[650px] mx-auto flex flex-wrap md:flex-nowrap items-center relative py-20 gap-10">
    <div class="relative">
        <img class="absolute -z-10 h-56 opacity-50 ani" src="./assets/blob.png" alt="">
        <p class="text-black text-start opacity-60 font-medium">
            Avul Pakir Jainulabdeen Abdul Kalam was an Indian scientist and politician who was born on October
            15, 1931, in Rameswaram, India. He served the country as the President from 2002 to 2007.

            <br>
            <br>
            In 1958, Kalam received his bachelor’s degree from the Madras Institute of Technology and joined the
            Defence Research and Development Organisation (DRDO). In 1969, he joined the Indian Space Research
            Organisation as Project Director for SLV-III, the world’s first satellite launch vehicle that was
            planned and manufactured entirely by Indian engineers. In collaboration with the Defence Research
            and Development Organisation (DRDO), Kalam organised the programme that resulted in the development
            of multiple successful missiles, for which he came to be known as the “Missile Man.”
        </p>
    </div>

    <img class="w-[40%] relative rounded-full mx-auto shadow-2xl shadow-black"
        src="./assets/DrAPJAbdulKalam-ex-PresidentofIndia-MissileManOfIndia-Portrait.webp" alt="">

</div>
<hr class="bg-black h-1">

<!-- achivements -->
<div class="relative py-20 w-full  bg-gradient-to-b from-gray-900 via-gray-500 to-gray-900 ">

    <h1 class="text-white text-5xl text-center mb-32 underline">
        Achievements
    </h1>
    <div class="w-9/12 mx-auto flex flex-col gap-y-16">
        <!-- section 1 -->
        <div class="flex flex-wrap md:flex-nowrap ml-16 gap-5 items-center">
            <div>
                <h1 class="text-white text-xl mb-4">Dr APJ Abdul Kalam’s Contribution to Missile Project</h1>
                <ul class="text-white text-start opacity-60 font-medium flex flex-col gap-2">
                    <li>
                        Under his command, he had a team of India’s best soldiers.
                    </li>
                    <li>
                        He simultaneously served as Prime Minister’s Chief Scientific Adviser from July 1992 to
                        December 1999, and also the Secretary of the Defence Research and Development
                        Organisation (DRDO).
                    </li>
                    <li>
                        In 1998, Kalam and Dr Soma Raju collaborated to design a low-cost coronary stent. The
                        stent was dubbed the “Kalam-Raju Stent.” For rural health care, the “Kalam-Raju Tablet”
                        was created in 2012.
                    </li>
                    <li>
                        The Pokhran-II nuclear tests in 1998 proved India’s nuclear capabilities. Without Dr
                        Kalam’s assistance, this project would not have been possible. Such weapons, he
                        explained to the international community, would serve solely as “weapons of peace” to
                        discourage other countries from the annexation of Indian territory.
                    </li>
                </ul>

            </div>
            <img class="w-80 h-60 rounded-full hover:scale-125 transition-all duration-500" src="./assets/kalam1_.jpg" alt="">
        </div>
        <!-- section 2 -->
        <div class="flex flex-wrap md:flex-nowrap my-10 gap-5 items-center">
            <img class="w-60 h-60 rounded-full hover:scale-125 transition-all duration-500 mx-auto"
                src="./assets/28KALAM-OBIT-articleLarge.webp" alt="">
            <div>
                <h1 class="text-white text-xl mb-4">A Well-Known Figure Around the World</h1>
                <ul class="text-white text-start opacity-60 font-medium flex flex-col gap-2">
                    <li>
                        Some of the best speeches ever delivered at the United Nations and European Union can be
                        found
                        in his fervent speeches.
                    </li>8
                    <li>
                        Dr Kalam was appointed as a guest lecturer at the University of Delhi, after completion
                        of
                        his
                        term as President As lecturer, he wrote extensively and supported a number of youth
                        development initiatives.
                    </li>
                    <li>
                        India as a mighty force is depicted in his works of fiction: Wings of Fire and India
                        2020.
                    </li>
                    <li>
                        Throughout his life, he worked tirelessly to make the world a better place through his
                        writings, lectures and other endeavours.
                    </li>
                </ul>

            </div>
        </div>
        <!-- section 3 -->
        <div class="flex flex-wrap md:flex-nowrap ml-16 gap-5 items-center mb-4">
            <div>
                <h1 class="text-white text-xl mb-4">Early Life and Education – Biography of APJ Abdul Kalam</h1>
                <ul class="text-white text-start opacity-60 font-medium flex flex-col gap-2">
                    <li>
                        Dr APJ Abdul Kalam was an Indian aeronautical scientist who served as the country’s 11th
                        president from 2002 to 2007. He was born and raised in the city of Rameswaram in Tamil
                        Nadu, where he went on to study physics and aerospace engineering.
                    </li>
                    <li>
                        Avul Pakir Jainulabdeen Abdul Kalam was born on October 15, 1931, in Rameswaram, on
                        Pamban Island, then in the Madras Presidency, now in Tamil Nadu..
                    </li>
                    <li>
                        His ancestors had been affluent traders and landlords, owning enormous property
                        holdings. Kalam’s family was impoverished in his early youth.
                    </li>
                </ul>

            </div>
            <img class="w-80 h-60 rounded-full hover:scale-125 transition-all duration-500"
                src="./assets/162759-untitled-42.jpg" alt="">
        </div>
    </div>

</div>
<!-- life story  -->
<div class="my-20 w-full">
    <div class="w-10/12 mx-auto mt-10">
        <h1 class="text-2xl font-medium mb-5">Personal Life</h1>
        <p class="font-semibold">
            Kalam was the youngest of five siblings, the eldest of whom was a sister, Asim Zohra (d. 1997),
            followed
            by three elder brothers: Mohammed Muthu Meera Lebbai Maraikayar (5 November 1916 – 7 March
            2021),Mustafa Kalam (d. 1999) and Kasim Mohammed (d. 1995). He was extremely close to
            his elder siblings and their extended families throughout his life, and would regularly send small
            sums
            of money to his older relations, himself remaining a lifelong bachelor.

            Musical instrument veena enclosed in a glass casing
            Kalam's veena on display at the Rashtrapati Bhavan Museum in New Delhi
            Kalam was noted for his integrity and his simple lifestyle.He never owned a television, and
            was in the habit of rising at 6:30 or 7 a.m. and sleeping by 2 a.m. His few personal possessions
            included his books, his veena, some articles of clothing, a CD player and a laptop; at his death, he
            left no will, and his possessions went to his eldest brother, who survived him.
        </p>
    </div>

</div>

<!-- kalam books -->
<div class="w-fullh-[500px] py-20 bg-[url('.\BG-1.webp')] bg-no-repeat bg-cover">

    <h1 class="text-white text-5xl text-center mb-20 underline font-bold">Famous Books</h1>

    <div class="flex gap-6 justify-center flex-wrap">
        <!-- book 1 -->
        <div>
            <img class="shadow-lg shadow-yellow-200
             hover:scale-125 transition-all duration-500" src="./assets/book1.jpeg" alt="">
            <p class="shadow-lg shadow-black text-center mt-2 font-bold text-white text-xl opacity-80">Wings of
                Fire</p>
        </div>
        <!-- book 2 -->
        <div>
            <img class="shadow-lg shadow-yellow-200 hover:scale-125 transition-all duration-500"
                src="./assets/book2.jpeg" alt="">
            <p class="shadow-lg shadow-black text-center mt-2 font-bold text-white text-xl opacity-80">Ignited
                Minds</p>
        </div>
        <!-- book 3 -->
        <div>
            <img class="shadow-lg shadow-yellow-200 hover:scale-125 transition-all duration-500"
                src="./assets/book3.jpeg" alt="">
            <p class="shadow-lg shadow-black text-center mt-2 font-bold text-white text-xl opacity-80">Turning
                Points</p>
        </div>
        <!-- book 4 -->
        <div>
            <img class="shadow-lg shadow-yellow-200 hover:scale-125 transition-all duration-500"
                src="./assets/book4.jpg" alt="">
            <p class=" shadow-lg shadow-black text-center mt-2 font-bold text-white text-xl opacity-80">
                Transcendence</p>
        </div>
        <!-- book 5 -->
        <div>
            <img class="shadow-lg shadow-yellow-200 hover:scale-125 transition-all duration-500"
                src="./assets/book5.jpg" alt="">
            <p class="shadow-lg shadow-black text-center mt-2 font-bold text-white text-xl opacity-80">My
                Journey</p>
        </div>
    </div>

</div>

<!-- image galery -->
<div class="w-full py-10 shadow-inner shadow-black relative">
    <h1 class="text-black text-5xl text-center font-extrabold mb-10 underline">IMAGE GALLARY</h1>
    <div class="w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-auto">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i1.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i2.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i3.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i4.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i5.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i6.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i7.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i8.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i9.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i10.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i11.jpg" alt="">
        <img class="h-48 w-80 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 shadow-black shadow-xl"
            src="./assets/i12.jpg" alt="">

    </div>
    <div class="absolute top-0 -z-10 h-[20%] w-full bg-gradient-to-b from-gray-900 to-white"></div>
    <div class="absolute bottom-0 -z-10 h-[20%] w-full bg-gradient-to-t from-gray-900 to-white"></div>
</div>

<!-- footer -->
<footer class="w-full bg-black h-6">
    <div class=" flex justify-center gap-3">
        <p class="text-white">Home</p>
        <p class="text-white">About</p>
        <p class="text-white">Contact us</p>
    </div>
</footer>

</div>
`