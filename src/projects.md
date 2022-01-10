---
layout: 'layouts/home.html'
title: 'Projects'
meta:
  desc:
    'Something cool!'
intro:
  title: 'Project Recap — Software Edition'
  desc:
    'I am not going to lie, I like personal projects. A <em>lot</em>.'
---

So much so in fact that I get distracted by new shiny ones which results in old ones just falling off the back of the queue eventually. Some actually see the light of day and get used in production to some degree or another while others just existed purely for their educational value.

> It does not matter whether you finish a personal project or not. As long as you learn something from it!

Although, it can not hurt to [have a win from time to time](https://hackaday.com/2021/06/28/we-all-need-a-win-sometimes-so-make-them-yourself)!

Over the years, I have worked on hundreds of small to medium sized projects. Both alone and with my pals, depending on the project. Especially during my university days, we frequently sat down after the lectures to work on fun side projects — shoutout to [Noah](https://noahpeeters.de)!

Some of these projects have made their way to GitHub and are now archived in my [`Project Graveyard`](https://github.com/TilBlechschmidt-ProjectGraveyard). At some point my repository list was just overflowing and so I decided to move all *definitely-dead-and-never-coming-back* projects over to another organisation. Absolutely a practice I can recommend! That way your portfolio focuses on your most important and current work, while keeping all the history available.

In this blog post, we will be taking a look at all those projects and talk about some of their history. Primarily, this post is a personal recap of the projects from the past ten years. Especially with the dreaded human malware going around and lots of time spent in solitude at home, it can sometimes be hard to appreciate the roads traveled, the challenges completed, and the knowledge gained in the process.

> Stay safe out there and look back at your past accomplishments from time to time to gain a fresh perspective on the present and future!

## Extracurricular activity

![Extracurricular activity at play](/images/projects/extracurricular.webp)

Back in the day, when I was still in school and supposed to learn for important exams, me and a close group of friends usually snuck out of class (obviously with a legit permit!) to organise the technical support for all kinds of events.

We provided assistance for all kinds of events from theatre plays, occasional presentations, concert evenings, international exchange events, and of course the famous disco nights! Funnily enough I never was the party-kid but really enjoyed doing the technical setup and being DJ/LJ for the night 🤷‍♂️

For the last iteration of the disco, we built remote-controlled CO2 cannons from decommissioned fire-extinguishers^[Note: We took necessary precautions in terms of  ventilation, distance to people, and always had someone looking over our shoulder. Do not work with pressure-vessels filled with liquid that can make you choke or freeze to death at home kids!]. Fun times, although that is a topic for another post altogether!

Anyway, I digress. Technically, all these events could've scratched by with a speaker and a microphone. But let us be honest, where is the fun in that! It was always about the possibility of what cool projects we could make so that the events turn into something cool and exciting!

Naturally, some software projects were born in this context. They are described below. Boy, do I miss those fun times!

### BitDMX

![BitDMX at work](/images/projects/bitdmx.webp)

As we had quite a sizeable repertoire of lighting equipment (most if it by curtesy of a single students hobby), we *obviously* relied on DMX to control most of it. However, over the years we nuked quite a few controllers. Most of them faced a fiery death due to someone plugging in the wrong power supply ... damn barrel plugs!

At some point we looked into digital interfaces which interacted with some kind of software on the computer. Programming dozens of devices and scenes with some terribly long key combinations became a _tad_ tiring. We found some, but either did not have the change or had issues with the software.

So what does an aspiring computer science student do? Exactly. Shell out the Arduino, Breadboard and write their own DMX software! Bit of an ambitious goal, but it certainly had its educational moments. We learned a lot about the protocol and why ***THAT ONE FIXTURE*** always broke our entire setup in the weirdest ways — obviously only during the real, live deal ...

|--|--|
| Language | Rust |
| State | Used in production |
| Chance of getting it working | Good luck. |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/bit-dmx) |

The software was somewhat functional and we used it in production multiple times, although we did not really know about dependency pinning back then. So if you get it working, it is a miracle! 😅

Ultimately, we ran into scaling problems with the UI framework. It was written in Rust back in the old days where you were happy that you did not have to draw pixels onto the frame buffer yourself. Eventually, we found a cheap but actually functional software called [DasLight](https://www.daslight.com) and just stuck with that.

### Video production

![Live stream setup](/images/projects/videoproduction1.webp)

In the context of hosting events, we eventually entered the realm of media production. For our school newspaper we produced a multitude of videos. I would love to provide you with samples, however, unfortunately the channel was deleted recently without any warning so all the content is gone. We are recovering what we can from private backups but most of it just vanished into the void.

Anyhow, to one-up our game we entered the realm of live video coverage. Multiple times a year we had big events with most of the students in the gym for soccer matches between graduating students and their teacher or competition days. We planned to put up a large screen and scatter cameras all around (including a drone for outdoor coverage!).

For these occasions, we created multiple software tools and products. From the bit-rot, I recovered a website displaying a scoreboard for all kinds of sports. The other one found rotting on my hard-drive is a tool which continuously keeps a round-buffer of the last few seconds of a video stream and writes it to disk at a moments notice! It allowed us to do sweet, sweet instant-replays of the student scoring a goal against the teachers!

|--|--|
| Language | Bash, HTML, CSS |
| State | Partially used in production |
| Chance of getting it working | Might actually still work |
| Links | [Scoreboard](https://github.com/TilBlechschmidt-ProjectGraveyard/CGAssets), [Instant replay tool](https://github.com/TilBlechschmidt-ProjectGraveyard/ffmpeg-instant-replay) |

The tools mostly worked. Our other equipment kinda did not. It all caught fire the moment we went live — the switch overloaded and took ***physical*** damage (granted, it was pretty old). Meanwhile the PC literally just flat out kernel-panicked because apparently running a manual Python UDP stream filter and six instances of ffmpeg decoding a somewhat non-compliant video feed was too much for the poor thing. Who would have guessed.

So what do we learn from that? Do ***not*** test your setup in production kids^[And maybe do not rely on 10€ China HDMI extenders that happens to use the Ethernet protocol as your capture card ... it was a good idea okay?! These days I just use one of [these inexpensive fellas](https://www.amazon.de/-/en/dp/B08BKNJP7N/?coliid=I2JPGHS1WKCZPV&colid=M4ZK969G4AB3&psc=1&ref_=lv_ov_lig_dp_it). They actually work reliably ... until you accidentally zap them with 25kV — what a shocker! 😂]!

### TwixT

Apparently still having too much free time at hand, me with a couple of friends entered the ["Software Challenge"](https://software-challenge.de) two years in a row. It was — and still is — a coding challenge where you have to create an autonomous player for a board game. Hosted by a local university, they even provided you with sweet prizes like scholarships! The first year, we scratched at the finals but got kicked out at the last hurdle. The source code for that has unfortunately vanished into the ethereal plane of existence never to be seen again. Although we had an interview with a local newspaper back then which still seems to be [available online](https://www.loz-news.de/artikel-archiv/geesthacht-archiv/item/15668-schueler-des-otto-hahn-gymnasiums-kaempft-mit-virtuellem-spieler-um-den-einzug-ins-finale).

The following year, we decided to strive for an ambitious goal: Solving the puzzle through machine learning and having it develop counter-strategies to what the other teams were doing. This however meant that we had to re-implement all the game logic ourselves as the ready-made implementation was significantly too slow for machine learning purposes.

|--|--|
| Language | Rust, Python |
| State | Game logic works, machine learning did not |
| Chance of getting it working | Game logic should be doable |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/TwixT) |

Unfortunately, this meant that we spent all our time getting the prerequisites up and running with no time left to actually get a model trained sufficiently. In the end, we got kicked out fairly early to no ones surprise.

### AccommodationBot

The next project on the list involves accommodations for students. Yuk. At my university, they had a local dorm. Each semester, at some unknown date, they updated the website to open admissions. As a lot of people were interested in a on-site room close to all the action. Consequently, the rooms were almost always instantly booked. However, the process was highly manual! You had to download a PDF, fill in the details and then mail it back to the info desk which subsequently got flooded with mails.

So, what does an aspiring script kiddie do to solve the problem? Exactly, scrape the website every 5 seconds and automagically send out a mail requesting a slot! While it might not have been the best thing to ever happen to their servers (granted, they literally died anyways each time new grades got published), a better system with prioritization and a queue you could enter anytime would be a better solution overall — it would also be a lot more unbiased and give first-year (and non-cs) students a chance. Oh well :D

|--|--|
| Language | Python |
| State | Actually got me a room! |
| Chance of getting it working | Should be possible, would not recommend |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/AccommodationBot) |

Surprisingly, the tool worked and got me a room^[In hindsight I am not sure if it was a good thing, getting sleep in a student dorm turned out to be a challenge in and of itself. Who would have thought?]! Astonishingly, it did not end up with my IP address blacklisted by the DFN. Regardless, I would much rather recommend [this nice and quite place across the street](https://www.homenhostel.de) if you value your peaceful sleep 😋

### MensaBot

At my university, they had a local canteen which we dubbed "Mike's Diner" in honor of the fantastic chef cook called Mike. While the food was pretty good considering the price, the website presenting you this weeks menu was ... lets call it dated. Looked like it was built in 2001 and the clunky UX drove that feeling home. Making sure you use the correct browser, disable privacy settings so that the JSESSIONCOOKIE worked, manually fix/ignore the broken certificate, and then logging in with your credentials over a non-secure connection was ... a hassle. So, what does the average CS student do to fix this? Exactly, build a scraper that converts the menu into a handy `.ical` subscription feed!

|--|--|
| Language | Swift |
| State | Used for years |
| Chance of getting it working | They changed the site, will no longer work |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/MensaBot) |

The tool actually served our whole class for a few years and did so very nicely. Getting a push-notification that tomorrow was mid-week burger day never got old — although the fact that they never had enough curly-fries and the student just in front of you in the queue always grabbed the last plate because your professor kept on talking past the hour certainly did.

### University app

Many tried, many failed, so did we. My university did not have a mobile app and does not to this day. We had bold ideas to integrate the project above to provide you with a reasonable menu on your phone, send you push notifications once new grades are available and maybe even allow you to use your phone to unlock doors. Wishful thinking, mostly due to political differences this idea never caught on. In my last semester we attempted to push the project from within the student parilament to no avail even though a large number of students volunteered to work on the project. What a shame, but oh well.

The [repository](https://github.com/TilBlechschmidt-ProjectGraveyard/NordakademieApp) contains mostly ideas we had in the form of GitHub issues but other than that, there is not much to see.

## Assignments

Believe it or not, even though we were frequently occupied by other things, we did actually complete all of our assignments prior to deriving around doing other stuff — like building a fully functioning CPU with a printer in Minecraft ... good times. Regardless, the source code from some of these assignments is listed below.

### BJS

As mentioned in one of the previous sections, we had a fair share of events at our school. One of them was a sort of sports event in which the whole country partook dubbed [Bundesjugendspiele](https://en.wikipedia.org/wiki/Bundesjugendspiele). Back in the day, everyone was tracking their results on paper and the evaluation at the end took a comparatively long amount of time. As our final year project in the CS class, we took on the challenge of writing a web-app which would simplify this process. Each station could enter results into the app and at the end submit them for accumulation. The system then combined all the data into one result for each student according to official scoring tables.

|--|--|
| Language | JavaScript, HTML, CSS (built w/ [Meteor](https://www.meteor.com/#!)) |
| State | Got a grade for it — should be functional |
| Chance of getting it working | Actually pretty good! |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/BJS) |

This project was a team effort with a total of six students (I think) over what must have been a month or two. We actually got a pretty good grade for it 🙈

### backtracking

Ah, the poster-child of all algorithms (after insertion sort maybe). In our computer science class, we scratched the surface of backtracking and how it can be used to find a path through a maze. As I was intrigued by Rust at the time, this algorithm was a natural candidate for an implementation! So, here we are.

|--|--|
| Language | Rust |
| State | Managed to play chess! On a small board ... |
| Chance of getting it working | Might work. |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/backtracking) |

The algorithm worked and even managed to play chess! Albeit on a small board only. Unfortunately, I did not find a solution to the exponentially growing complexity issue of chess-bots back then ...

### Sorting algorithms

Speaking of poster-child algorithms, sorting algorithms were obviously part of the fun as well. I implemented a number of them in some languages. Not much else to say, it is just cool algorithms we have all seen before. Although I did not manage to get quantum-bogo sort working — what a shame.

|--|--|
| Language | Swift, C |
| State | Sorted the universe |
| Chance of getting it working | Absolutely work |
| Links | [Swift Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/SortItAll), [quick-sort in C](https://github.com/TilBlechschmidt-ProjectGraveyard/quick-sort) |

### time-conversion

Marching on with the algorithm train, we were given an assignment to implement some DateTime primitive that could spew out a number of interesting facts about dates and time ranges. Nothing special, included for the sake of completeness.

|--|--|
| Language | Pascal (yuk) |
| State | Fulfilled the assignment |
| Chance of getting it working | Do you *really* want to install Delphi? |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/time-conversion) |

### Presentations

Obviously, presentations were part of school. Although most students just took a wall of text out of their script and dumped it into slides ... yikes. However, simply putting some nice pictures that fit the context and augmented the words spoken was not sufficient for an aspiring CS student. Ohhh no, no, no.

Most presentations ended up in full-blown HTML, CSS, JS sites with ImpressJS. Because, why not right? Some managed to escape `/dev/null` and are now archived on GitHub!

|--|--|
| Language | HTML, CSS, JS |
| State | Got me some good grades |
| Chance of getting it working | If you can handle the CSS hacks |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/presentations) |

Please do not judge the incredibly ugly CSS. `It worked for me™` and that is all that mattered back then!

## Random ideas

Projects that did not fit any other category but are still interesting in and of themselves. Nothing more to be said.

### Distributed File Distribution Protocol

We previously talked about extracurricular activity at school. Well, one day we had the brilliant idea of organising an E-Sports tournament! Great idea, we thought. So did a majority of the students. We planned everything, set a date and ~~asked~~ begged for temporary network filter deactivation for the games we planned on playing. Without going into detail, lets just say the event failed with us not getting any traffic out^[This was pre-LTE times with the 3G net being hopelessly overloaded so we had no backup option for competitive real-time online gaming.]. While this is just one example and the persons responsible certainly tried their best, it speaks for the state of the digital infrastructure at our school. Mind you, we were one of the better ones in the region.

This fuelled the oh-so-common idea of "there has to be a better solution". In this particular case, me and a friend toyed with the idea of properly automating and remote-controlling the whole digital infrastructure at the school. That way a single operator could handle most of the daily tasks potentially for multiple schools. In our case, we had one operator for multiple schools. Just that the poor guy had to manually do everything. Anyways, the idea revolved around a network-booted but locally cached Linux desktop environment which uses layered filesystems on the OS-level to provide software. Think [packer.io](https://www.packer.io) but for whole desktop operating systems. Combined with network filesystems and the occasional Windows VM for *that one annoying software* that only works on Windows.

Now, school networks are usually comprised of hundreds of machines grouped into distinct rooms and buildings all behind their own local switch. This opened up avenues for efficient image distribution where each machine downloads some fragments and then shares them with other machines that are located in network-proximity. At the time I knew little about BitTorrent and was interested in what it takes to implement such a protocol. So I set out to roll my own! *Obviously.*

|--|--|
| Language | Rust |
| State | Would not trust it with my data |
| Chance of getting it working | Maybe. |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/ddp) |

After attempting to code it in C++ first, I rewrote it in Rust. Running `valgrind` on it unleashed the horrors within and probably why I could not figure out how to make it work. Memory management at its best! Besides, I wanted to learn more about Rust anyways so it was barely a loss — with my last exams behind me I had plenty of time to waste anyways 🙈

The project worked. That's it though. This piece of the puzzle worked, everything else never caught on. Classic case of the "*oh this project is cool, how about this feature, and oh look optimisation potential, how about we implement this library*" rabbit hole and scope creep. Oh well, learned a lot regardless.

### KSPackage

I like rockets 🚀 — well, who does not. They are technological marvels and masterpieces of engineering. As a good rocket fanboy, I played my fair share of Kerbal Space Program^[In total, I probably spent thousands of hours watching poor little green Kerbals falling to their fiery death because I had no clue on what an Apoapsis was and how you even astrophysic. Eventually, it taught me a great deal about orbital mechanics, Keplers laws, and space exploration thought! Goal achieved.]. With that comes the pseudo gaming of installing mods all day long. However, I never really liked CKAN (the de-facto mod manager for KSP). It felt clunky, had some shady business policies, their version management was broken, and good luck getting it to work on anything that was not M$ Windows.

While on my road-trip to Norway^[The wording "road-trip to Norway" is intentional. It was only a road-trip **to** Norway. As we crossed the border, the car broke down and never really came back. That is a story for another blog post though!], an involved discussion with one of my fellow rocket nerds started. It ended with us deciding to roll our own mod manager. I designed a package structure, a versioning and dependency management system, and wrote a dependency resolver. The latter was the hardest part of it all and required quite a sizeable amount of head-bashing. If I remember correctly, I even wrote an Electron app for it at some point!

|--|--|
| Language | JavaScript / TypeScript |
| State | Unfinished, lost interest |
| Chance of getting it working | Should work, not worth the effort |
| Links | [Electron app](https://github.com/TilBlechschmidt-ProjectGraveyard/KSPackage), [JS Library](https://github.com/TilBlechschmidt-ProjectGraveyard/KSPackage-lib), [Old attempt](https://github.com/TilBlechschmidt-ProjectGraveyard/KSPackage-old) |

It was a cool idea. Having a new, refreshing, truly cross-platform mod manager that does not look like it is from the 2000's would have been nice (I'll probably get shouted at by the C# folks but no, Mono does not make it cross-platform. That is cheating and you just shift the problem because now your users have to deal with installing Mono properly!). Not worth the effort thought, the mod repository of CKAN is fundamentally broken anyways and would require a major overhaul. Besides, KSP1 is going to be overshadowed by KSP2 eventually. In the meantime I am not playing it much anymore so naturally interest and motivation faded.

### TexDocs

Freshly graduated, I had time at hands to prepare for university. At the time, a friend introduced me to LaTeX which looked really interesting. However, the struggle with typesetters and syntax especially when importing way too many packages was real. In the search for a solution, I decided to roll my own — obviously.

The idea was to have a website linked to your Google Drive. The LaTeX source is stored in drive, while the build process takes place on one of my servers. So basically Google Docs but for LaTeX documents. Surprisingly enough, the project made it to a "workable" state and I wrote one or two real documents in it before it eventually broke down.

|--|--|
| Language | HTML, CSS, JS |
| State | Kinda worked, would not trust it |
| Chance of getting it working | With a lot of luck |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/TexDocs) |

Ultimately, I switched to Markdown with inline LaTeX which is then transpiled to LaTeX which subsequently renders the final PDF output. Slower but definitely comfortable to work with. Although that setup deserves a whole post of it own.

### timetable-generator

For one reason or another, I was dissatisfied with the way my student timetables were generated. According to the teacher that was responsible for generating them, the tool they used had its flaws. Guess what, I rolled my own. See a pattern?

|--|--|
| Language | Rust |
| State | Worked but not used |
| Chance of getting it working | If you like CLIs |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/timetable-generator) |

With the limited test data I used, it actually worked. Although it was never tested on any real dataset for privacy reasons. More of a fun project to test out some algorithm ideas than anything practical.

## Experimentation

Working on projects which actually serve a real purpose is nice and rewarding. However, from time to time, that science and experimental itch needs some scratching. Sometimes these projects end up in something functional, sometimes they do not. 

This section contains a number of projects on which I worked, which did not serve a direct purpose other than me learning more about the concepts involved or just plain having fun!

### neural-network

Back then, I was heavily invested into C++ and needed a project idea to work on. As the hype train regarding neural networks was just getting started, I decided to build a simple neural network. Nothing fancy, sigmoid activation function, linear feed with no loops, the simplest of them all. Back then all the deep-learning concepts we have today did not exist or at least were not quite as prevalent. Tensorflow was released a few months later IIRC.

|--|--|
| Language | C++ |
| State | Memory issues galore |
| Chance of getting it working | Do not bother. |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/neural-network) |

Ultimately, I never got the project working properly. My C++ coding skill was mediocre at best back then and so the program was plagued by memory leaks left-right-and-center.


### NEAT

At the time, I was fascinated by the concept of neural networks as you might have guessed from the previous project. A fellow student introduced me to this fancy new language called Rust (way prior to its 1.0 release) and so I thought, why not combine the two and learn something about both!

We came across a really interesting research paper dubbed [NEAT](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf) which introduced the concept of evolving the network structure in addition to the weights. Fascinated by the idea, we dove in and attempted to implement a version of it in Rust.

|--|--|
| Language | Rust |
| State | Less intellect than a slice of toast — never managed to learn XOR |
| Chance of getting it working | Do not bother. |
| Links | [GitHub Repository](https://github.com/TilBlechschmidt-ProjectGraveyard/NEAT) |

Quite a sizeable amount of late nights were spent on this project. However, we never managed to create something quite sophisticated enough to learn XOR by itself. What a shame. Oh well, learned a lot about Rust, NEAT, and machine learning regardless. Moving on!

### Screeps

Little virtual robots that formed a colony that grew in real-time based on the code you wrote. What a cool idea for a game! I really enjoyed writing algorithms for this and growing my colony. Although the frequent changes and additions to the API eventually broke my colony and I lost interest.

Regardless, it is a game I can highly recommend to anyone learning to code or even to seasoned programmers! Check it out over at [screeps.com](http://screeps.com).

|--|--|
| Language | JavaScript |
| State | They survived. Barely. |
| Chance of getting it working | Write your own, you lazy prick! |
| Links | [Ant version](https://github.com/TilBlechschmidt-ProjectGraveyard/antScreep), [Global version](https://github.com/TilBlechschmidt-ProjectGraveyard/screeps), [Rust version](https://github.com/TilBlechschmidt-ProjectGraveyard/rusty-bots) |

The idea of using some sort of ant colony based algorithm was actually pretty cool. Each creep would behave based on its environment. The colony somehow managed to not instantly perish, but I would highly recommend you to write your own algorithms instead of copying mine!

### rust-os

Being fascinated with the language Rust at the time, I was in a constant search for new projects to build with it. At some point, I came across [Philipp Oppermann's blog](https://os.phil-opp.com) which had a really good explanation and walk-through to write your own kernel from scratch in Rust. Lucky me dove right in! Most of it was coded 1:1 according to the blog but IIRC I experimented with different concepts at some point.

|--|--|
| Language | Rust |
| State | Booted! |
| Chance of getting it working | Write your own! |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/rust-os) |

The source code is probably less interesting and will not work with newer compilers anymore. However, to anyone interested in low-level operating system concepts I highly recommend the blog. Writing your own kernel is not only exciting but also highly educational!

### time-wars

A friend of mine had this really cool idea of a time-travel based game where you play in temporal-turns. Each player does something to achieve a goal in real-time but after a certain time period is over, each player is teleported back in time. This way, you could screw over your future enemy or help out your future self! Working on this concept was exhilarating as the algorithms and data structures required were mind boggling complex. Turns out your mind dislikes temporal paradoxes!

|--|--|
| Language | Rust |
| State | It rendered something, not much of a game though |
| Chance of getting it working | Good luck! |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/rust-os) |

While we did not get to implementing the actual game part of our idea, we most certainly learned a lot about rendering and game design. The code renders a plane with some animated low-poly trees. That's about it 😅

## Apps

Over the years, I have written my fair share of apps. Primarily for iOS and macOS as I really enjoy Swift as a language and the whole ecosystem surrounding it. Some of the apps on the list were used in private, but none ever made it out onto the App Store. Although one of them might do so in the very near future. Read on to learn more 😜

### NetworkStatus

Returning from macOS to Linux, I missed one feature. The automatic personal hotspot. At the same time, I also made the switch to Android. Annoyed by the loss of comfort, a new app was born. It basically reported the current network type (Edge, 3G, LTE) and reception strength to clients on a TCP socket. This was then displayed in my i3 toolbar whenever connected to the phone.

|--|--|
| Language | Java |
| State | Worked back then |
| Chance of getting it working | Might work. |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/NetworkStatus) |

It served me well, but eventually I moved back to the Apple Ecosystem and thus the tool became obsolete. End of story.

### PhotoStore

At some point in school, we had the idea of running an aerial photography business. One thing led to another, and we owned a multicopter!

![Our multicopter dubbed "Drony"](/images/projects/drony.webp)

Our business obviously needed an online store front where you could select the pictures you liked and purchase them! So we started building. There is not much more the say about it 🤷‍♂️

|--|--|
| Language | HTML, CSS, JS |
| State | Not even an MVP |
| Chance of getting it working | Meh. |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/PhotoStore) |

While it was a cool team project to work on and a nice business idea, given the relative scarcity of offerings in our region at the time, we ran into issues relatively quickly. Shortly after we bought the multicopter, regulations started flowing in as more and more people bought and recklessly flew them without any prior knowledge. Additionally, the final exams crept closes and time was at a premium. Ultimately, we ended up selling the drone at a loss. However, in the time we owned it, a lot of hobby videos productions materialised and it were good times overall!

These days, drones and multicopters are ubiquitous and while there are regulations, it is pretty easy to be compliant if you know what you are doing. However, unfortunately, there are more and more people buying them on a whim and flying them without any knowledge about airspaces, regulations, and insurance policies. We will probably be seeing more strict legislation in the future ...

### LiveTV

The Telekom offered Live TV reception via the Internet. Annoyingly, you had to use one of their Windows PE powered media receivers with absolutely horrendous software. They were laggy, had frequent bugs, always installed mandatory updates during prime time ... not the best software in the world. However, there was an escape hatch in sight!

The media streams were provided through RTMP via UDP Multicast. As long as you had an internet connection from that provider and bought the Live TV package, some specific multicast addresses were blasted with video streams. It turns out, you could just use VLC and tune into the stream! This opened up the avenue of building an app for our Apple TV that did exactly that.

|--|--|
| Language | Swift |
| State | Decoding did not work |
| Chance of getting it working | Use the official app. |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/LiveTV) |

While building the UI was pretty entertaining (pun intended), the video decoding turned out to be challenging. Apple did not provide the required codecs in order to receive the streams. I tried building VLCKit for the Apple TV but could not figure it out back then as documentation was not the best. As I am not watching much TV, interest faded and my poor mom had to continue suffering. Years later, a few weeks ago actually, the Telekom released their receiver UI for the Apple TV.

### MacDiskReport

I hope you know the tool [JDiskReport](http://www.jgoodies.com/freeware/jdiskreport/). If you do not and own a Windows machine, make sure to check it out! It basically scans your disk and displays the usage in a pie chart with slices for each folder. This kind of tool is immensely useful when your disk has filled up *once again* and you need to find that old Steam game using up hundreds of gigabytes.

As I use macOS as my daily driver, JDiskReport does not work. So, what else to do other than "roll your own"! So me and a friend did. At least we started.

|--|--|
| Language | Swift |
| State | Half-way done |
| Chance of getting it working | Search the App Store instead. |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/MacDiskReport) |

While the idea was nice, we eventually lost interest and found tools in the wild that did exactly what we wanted. Oh well, the internet is a big place. Who would have thought.

### HLSTube

Lets talk about YouTube, Google, and their apparent hate for everything Apple. I get it, they are competitors, making software that literally _everybody_ uses, probably daily, work badly drives users to other platforms potentially owned by Google. So one day, I was fed up by the dubster fire that the YouTube app is/was. Primarily the lack for anything beyond 1080p, no PiP support, really shitty resolution auto-selection (during COVID times they even soft-limited the resolution to 480p and seemingly had some issues with removing it at a later date as my device was frequently stuck at pixel-counting resolutions with lots of bandwidth to spare). So, uhm, we started rolling our own. See the pattern?

Taking a deep dive into the internal API the YouTube website uses revealed that one of their video formats is based around MPEG-DASH and fragmented mp4 files. You don't necessarily need to know what this is but it turns out that you can easily translate this into a HLS VOD stream format which, coincidentally, AVFoundation (Apple's video playback framework) really likes. So by transmuxing the container on-the-fly we were able to play videos natively, with Picture in Picture, automatic resolution selection that did not suck, ad-free viewing, and higher resolutions. We basically re-build YouTube Vanced but for iOS.

|--|--|
| Language | Swift |
| State | Used daily. Buggy though. |
| Chance of getting it working | API changed, no chance. |
| Links | [Transmuxing library](https://github.com/TilBlechschmidt-ProjectGraveyard/HLSTube), [iOS App](https://github.com/TilBlechschmidt-ProjectGraveyard/TubeTender), [YouTubeKit fork](https://github.com/TilBlechschmidt-ProjectGraveyard/YoutubeKit) |

However, not everything was all merry. It turns out building a complete replica of YT is a lot of work. Additionally, Google kept changing their API on us and strictly speaking it was against the Terms of Service anyway (and previous attempts by other people got shut down pretty hard). Ultimately, as with many other projects, interest faded and time investment grinded to a halt. At some point the app completely broke due to API changes which concludes this story.

Regardless, this project resulted in a deeper understanding of video streaming formats and yielded a few open-source contributions. Additionally, the source code is available for anyone to read if you want to learn on how to screw Google (although you might as well consult [youtube-dl](https://github.com/ytdl-org/youtube-dl) as their implementation is more complete).

### PhotoFlow

Lets be real. Adobe asks for a kidney. Every month. Just to edit some photos. As a hobby. It sucks. If their software would not crash every five minutes, then at least it would be bearable. No, as a hobby photographer in my limited free-time I needed something else. After years of struggle, I resorted to Affinity Photo on the iPad which works brilliantly! However, the workflow lacks a bit as importing and exporting photos requires you to either work with the native Photos app (which results in all your RAW photos being uploaded to iCloud nuking your storage quota) or manually handling, filtering, and editing them using the Files app. Fed up once more, I set out to build an app that imports photos from your cameras SD card and provides you with a UI that is purpose built for picking and choosing the best ones to keep and edit. Many times I've been stuck looking at two pictures, not being able to properly compare their sharpness or framing due to the swipe-animation in the native Photos app. Admittedly, the native one looks neat and is perfect for consumption. However, it is ill-suited for the purpose at hand.

|--|--|
| Language | Swift |
| State | MVP. |
| Chance of getting it working | Would not trust it my data. |
| Links | [Initial Version](https://github.com/TilBlechschmidt-ProjectGraveyard/PhotoFlow), [Retry](https://github.com/TilBlechschmidt-ProjectGraveyard/PhotoFlowRework) |

At some point, I was exhausted and out of time to spend on the project. So it died. Like many others. With my lessons learned, I moved on without a good solution. At a later date, it bugged me again and I decided to give it another go. Reached a similar state but never made it to something usable either. Too bad.

Please, someone make a product that does not crash and is affordable for hobby photographers like me.


## Automation & Configs

The gist of this section is probably best summarised by [XKCD #1319](https://xkcd.com/1319/):

![XKCD: Automation](/images/projects/automation.webp)

Over the years, a multitude of tasks and problems arose which could be solved through the power of automation! Being a proper IT enthusiast, these obviously *had* to be automated even just for the sake of it. Besides, some projects in this category grew just out of plain curiosity.

### .files

If there is any *real* Linux user on this world that does not know what this refers to, then my faith in Humanity is irreversibly destroyed. Jokes aside, all those configuration files that flew around in my home folder back in the day, where Linux was my daily driver, are contained within [this repository](https://github.com/TilBlechschmidt-ProjectGraveyard/.files).

Some are still in use today, albeit no longer public as I now use the glorious tool [mackup](https://github.com/lra/mackup) to synchronise the configuration files on my Mac. Not going to lie though, I miss my i3 WM <3

### led-strip

In my room, I mounted a 5m LED strip hanging from the ceiling on some wood strips. They are pointed towards the ceiling for some nice indirect lighting. Here is a picture from the holiday season where I wrapped the whole construction with a chain of lights:

![Suspended LED Strip wrapped in Christmas chain lights](/images/projects/led-strip.webp)

Apart from the fact that powering this thing was a huge challenge — in my infinite wisdom I bought a 5V strip which resulted in a significant voltage drop over the full length so I had to power it from both ends and boost the power supply so that the drop across the supply cables was properly compensated — it worked quite nicely! With the winter months rolling in quickly, an idea came to mind: Why not use the individually addressable LEDs to simulate a sunrise which starts in the center and then expands as it shifts colours. Turns out, running LEDs is actually pretty complicated with exponential brightness perception, different intensities for each color of LED, muddy colours when relying on RGB for cross-fading, and much more.

|--|--|
| Language | C++ |
| State | Kinda worked |
| Chance of getting it working | Possible given the right hardware |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/led-strip) |

The idea was pretty neat and the corresponding code for an ESP8266 is included in the repository linked below. However, as far as I can remember, it broke at some point and I ended up just replacing it with a constant brightness-to-color curve that fades from cold white to very warm white as you decrease the brightness slider in HomeKit.

### State monitoring protocol

Being obsessed with C++ at some stage in my life, I was implementing interesting protocols left, right, and center. Given the previous project, it comes with no surprise that I attempted to build a smart-home focused protocol tailored for redundant routing across multiple link types and the option for local machine learning based automation.

|--|--|
| Language | C++ |
| State | Cool concept |
| Chance of getting it working | There is nothing to do here |
| Links | [Spec v1](https://github.com/TilBlechschmidt-ProjectGraveyard/SMP), [Spec v2](https://github.com/TilBlechschmidt-ProjectGraveyard/protomesh-specification), [Reference implementation](https://github.com/TilBlechschmidt-ProjectGraveyard/reference-cpp) |

Bold thinking, never got anywhere. I wrote a fancy PDF in LaTeX describing the two different versions of it and built a reference implementation in C++ but these days I most certainly would not use it for my home automation needs.

### TrafficAnalyzer

![Commute home average over a year](/images/projects/WorkToHome.webp)

One day at work, I was bored and had some time to kill^[At that time I was a student and basically worked on an assignment-to-assignment basis with not much else to do in between while waiting for superiors to provide new tasks. It seemed sensible to use the spare time to build something that advances my skills. These days, we have a pull based workflow in my team and whenever I am done there are enough tasks to pick up :P]. At that time, the current version of human malware was not yet released so I commuted to work by car each and every day for about an hour each way. Thinking more about it, there had to be patterns in the daily traffic which, when known, would allow me to schedule my commute at the perfect times either before or after the brunt of other commuters moved through. So I set out to build myself a tool that provides me with these statistics!

![Working on weekends works saves time!](/images/projects/Weekends.webp)

As you can see in the first picture above, it worked quite well! In the one directly above, you can see why it is beneficial to adopt [Weekend Wednesdays](https://www.youtube.com/watch?v=ALaTm6VzTBw) and work partially on the weekend. As a bonus, in the graph below, you can clearly see that literally everyone goes home early on Fridays and that there is overall less traffic probably due to folks with part-time jobs.

![Everybody quits early on Fridays 🙈](/images/projects/HomeToWork.webp)

|--|--|
| Language | NodeJS, HTML, CSS, JS (React) |
| State | Served its purpose |
| Chance of getting it working | Pretty easy, ran it to get the graphs |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/TrafficAnalyzer) |

As you can see by the graphs, the tool worked quite well! It continued to fetch data from the Google Maps API for about a year across all seasons (which lends itself to some additional data wizardry regarding e.g. public holidays). While I am not quite sure to this day, whether it is against the Terms of Service to literally query the API every three minutes for a year but it most certainly does not scale to more than one person. At this rate it barely fit into my daily quota.

### SmartDocumentScanning

Back in school, my organisation was somewhat all-over-the-place with frequently missing sheets of papers and important notes. Some day, I thought there has to be a better way. Unlike every most others, this better way did not involve me becoming more strictly organised. Instead, I built a system which organises files for me!

In preparation for class, I printed QR codes on each and every sheet of paper in my college block. These contained information about the class the notes were taken in. At the end of each day, I threw my stack of paper into the newly acquired duplex scanner. A software system then scanned the document for the information and sorted it into a folder in my Google Drive accordingly. This way I would never loose any paper again —success!?

|--|--|
| Language | Bash, Python |
| State | Did its job |
| Chance of getting it working | Get organised yourself! |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/SmartDocumentScanning) |

While the concept was certainly a cool idea and the process of generating the QR codes and filing them into the correct folders using the API was a fun exercise, there were some flaws in the system. First, what about mutations of existing documents? Turns out, you frequently add notes or continue notes from the previous class. Second, teachers ***love*** paper handouts. Those do not have QR codes. Bollocks. Due to these reasons, the system ultimately fell apart but as my school career came to an end, it did not matter all too much.

These days, I take notes on an iPad and just file the documents within [GoodNotes](https://www.goodnotes.com). Although I still have some gripes with this approach ... that deserves its own post though.

### qemu-manager

I hate Windows. For so many reasons. However, I will save you the rant for now. In my quest to circumvent it though, I did go to great lengths. The most obvious issue is gaming. Most games just plain do not work on macOS or Linux and *do require* Windows. Not wanting to give in fully and disliking the idea of dual-boot, I came up with something different: Virtual Machines!

"Gaming in a virtual machine? What sort of mad-man are you?!", you might say. It turns out, this is quite a viable concept. At the time, a linux kernel patch just landed which allowed PCIe VGA passthrough. While it was still an absolute nightmare to get it working (preventing the OS from grabbing hold of the device, making sure the interrupts are routed properly, ensuring the GPU is not initialised early, tricking Nvidia drivers into actually using a consumer GPU within a VM, the list goes on and on), it was possible! These days, the process is simpler and especially with machine learning the support and tooling became wider spread.

|--|--|
| Language | Bash, QEMU (its CLI is a language in itself ...) |
| State | Gamed in VMs for years! |
| Chance of getting it working | Horrendously broken |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/qemu-manager) |

While the tool simplified the process and got some fair usage for a few years, I moved on at some point. Since then, the APIs and requirements changed drastically so I would not count on it working. Snippets could still come in handy though!

### AntiSpamBot

Spam mails ... the nemesis of every inbox. These days even messengers are flooded with questionable medication and unasked for nude pictures. A friend of mine just complained to me that his Telegram handle somehow got into the hands of spammers, what a nuisance. My personal inbox gets absolutely drowned in such content for unknown reasons. This drove me mad at some point and I decided to do something about it!

As most of the messages were similar in structure and design, I was curious how well a machine learning based sentiment analysis model would do on the corpus. Over some months, I collected and labelled spam. Thousands of messages. It was all worth the effort though! After some tweaking and training, my quickly hacked-together tool managed to filter out about 99% of all spam messages. More importantly, it had zero false-positives. This was especially important to me as it was critical to me as it is not viable to sift through the thousands of spam messages rolling in to find that one ham message that got caught in the filter.

|--|--|
| Language | Swift, CoreML |
| State | Filtered all the spam! |
| Chance of getting it working | Depends on your spam |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/AntiSpamBot) |

While the tool did wonders for my inbox, I am not sure how transferable the results are. Spam looks different in every inbox and thus the machine learning model is highly specialised. After some time, I moved my main inbox to iCloud which had sufficiently reliable filtering built-in. For this reason, the tool was decommissioned. It was a bit of a hassle anyway because it only ran on macOS and thus operating it continuously was near impossible.

## Libraries

Writing code is hard. Writing the same code over and over, however, is stupid. With this in mind, I factored out some frequently used code into libraries and tools that made their way to GitHub. While these may not be the most interesting or most used libraries on the planet, they did serve me well! Although, they did make their way into my project graveyard so their useful time has certainly expired.

### Logging

Did I mention that I like Rust? No? What a shame. One thing in particular that blew me away is the clean logging style of `cargo`. I wanted to reproduce the same style in my applications and naturally, a library was born. In this case for both C and Rust.

|--|--|
| Language | C, Rust |
| State | Logged like hell |
| Chance of getting it working | Should work |
| Links | [C version](https://github.com/TilBlechschmidt-ProjectGraveyard/CLog), [Rust version](https://github.com/TilBlechschmidt-ProjectGraveyard/cargo-style-logger) |

### WebAssembly

In the early days of WASM, it was not particularly easy to get your code running in the browser. To remedy this issue, I wrote a loader for `webpack`. It supported the `cargo-web` / `stdweb` project and was able to load projects that rely on these libraries to be loaded from JavaScript with a simple import statement.

|--|--|
| Language | JavaScript |
| State | Worked back then |
| Chance of getting it working | Do you have an old WebPack version? |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/cargo-web-loader) |

The loader worked and I used it in the previously mentioned TexDocs project at some point. However, the web ecosystem moved on and these days we have projects like [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) which do a lot more of the heavy lifting for you.

### reMarkable Toolchain

For university, I bought myself a [reMarkable tablet](https://remarkable.com/) for note-taking. Back then, this was the first generation of the device and not much was known. Despite this, some smart people actually managed to break into the device and get access to the underlying Linux system. This opened up avenues for running custom software on this pretty novel hardware.

To get something running on it, you needed to cross-compile for its architecture though. This was a bit of a pain in the back side every time you had to do it, regardless of the target architecture. For this reason, I wrote myself a Docker container that managed all of that for me. It contained all the tools necessary to compile your application so it could run on the reMarkable tablet!

|--|--|
| Language | Docker, Shell |
| State | Worked back then |
| Chance of getting it working | No idea, should probably work |
| Links | [GitHub Repo](https://github.com/TilBlechschmidt-ProjectGraveyard/remarkable-toolchain-rust) |

While it worked, I never built something with this power apart from rendering some fractals on the device. Eventually, I moved on and sold it to a fellow student. My reasons for this decision have been [posted on Reddit](https://www.reddit.com/r/RemarkableTablet/comments/9tdsed/review_one_year_later/), although I can not tell you how much they apply to the second generation device.

## Conclusion

Phew, you made it! This turned out to be a very long post. In summary, the past couple of years have been filled with interesting projects, most of which ended up as purely educational journeys. However, remember that this is never a bad thing! Always, always have fun and code what the hell you want even if it never makes it to production — after all it is ***your*** free-time and you get to decide how to spend it.

Despite this, to keep yourself from burning out, you should watch out for scope-creep. I am definitely guilty of not doing so on multiple occasions! To drive a non-educational project to success, you should keep the list of features low initially and define reachable and clearly defined milestones. Also make sure to publish the darn thing even though it is still missing most of its features! Nothing is worse than working on a project for months on-end with no feedback or external motivation (although arguably internal motivational factors are what keeps a project going long-term). Also make sure to look out for an attainable goal in a project from time to time. Dreaming big and bold is nice, having novel ideas is definitely exciting, but [we all need a win sometimes](https://hackaday.com/2021/06/28/we-all-need-a-win-sometimes-so-make-them-yourself) so make sure you are accountable for the progress by telling your friends! Maybe even ask them for help?

Future plans include a Hardware Edition of this post and an overview of my current projects. At this point, I have no clue when they will happen, but some day I might get around to it.

Until then, happy coding!

