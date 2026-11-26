import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsx-runtime-D3F0h15I.js";var r=e(t()),i=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),a=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),o=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),s=e=>{let t=o(e);return t.charAt(0).toUpperCase()+t.slice(1)},c={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},l=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},u=(0,r.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o=``,children:s,iconNode:u,...d},f)=>(0,r.createElement)(`svg`,{ref:f,...c,width:t,height:t,stroke:e,strokeWidth:a?Number(n)*24/Number(t):n,className:i(`lucide`,o),...!s&&!l(d)&&{"aria-hidden":`true`},...d},[...u.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])),d=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...o},c)=>(0,r.createElement)(u,{ref:c,iconNode:t,className:i(`lucide-${a(s(e))}`,`lucide-${e}`,n),...o}));return n.displayName=s(e),n},f=d(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),p=d(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),m=n();function h({size:e=24,title:t}){let n=(0,r.useId)().replace(/:/g,``);return(0,m.jsxs)(`svg`,{className:`mk`,width:e,height:e,viewBox:`0 0 32 32`,fill:`none`,role:t?`img`:void 0,"aria-hidden":!t||void 0,"aria-label":t,children:[(0,m.jsx)(`defs`,{children:(0,m.jsxs)(`linearGradient`,{id:`o${n}`,x1:`3`,y1:`26`,x2:`29`,y2:`6`,gradientUnits:`userSpaceOnUse`,children:[(0,m.jsx)(`stop`,{offset:`0`,stopColor:`#c0beb9`}),(0,m.jsx)(`stop`,{offset:`0.55`,stopColor:`#c8c6c3`}),(0,m.jsx)(`stop`,{offset:`1`,stopColor:`#f4f3ee`})]})}),(0,m.jsx)(`g`,{transform:`rotate(-22 16 16)`,children:(0,m.jsx)(`path`,{d:`M2.2 16A13.8 5.6 0 0 1 29.8 16`,stroke:`url(#o${n})`,strokeWidth:`1.7`,opacity:`0.45`})}),(0,m.jsx)(`path`,{d:`M8.2 23.2V9.6l7.8 8.9 7.8-8.9v13.6`,stroke:`currentColor`,strokeWidth:`2.7`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,m.jsxs)(`g`,{transform:`rotate(-22 16 16)`,children:[(0,m.jsx)(`path`,{d:`M29.8 16A13.8 5.6 0 0 1 2.2 16`,stroke:`url(#o${n})`,strokeWidth:`1.8`}),(0,m.jsx)(`circle`,{cx:`28.9`,cy:`18.1`,r:`1.9`,fill:`#f4f3ee`})]})]})}var g=`/`.replace(/\/?$/,`/`),_=/^(legal(\/[a-z0-9-]+)?|help(\/[a-z0-9-]+)?|docs(\/[a-z0-9-]+)?|status|terms|privacy|plans)$/,v=()=>{let e=(location.pathname.startsWith(g)?location.pathname.slice(g.length):location.pathname.replace(/^\//,``)).replace(/\/+$/,``);return _.test(e)?e:``},y=()=>location.hash.startsWith(`#/`)?location.hash.slice(2):v(),b=e=>{if(!e){history.pushState(null,``,g+location.search),dispatchEvent(new HashChangeEvent(`hashchange`));return}location.hash=`#/${e}`},x=()=>{try{let e=`meridian.v1.hud.pages4`,t=JSON.parse(localStorage.getItem(e)??`{}`);localStorage.setItem(e,JSON.stringify({...t,basic:`home`,advanced:`home`})),localStorage.setItem(`meridian.v1.hub.home`,JSON.stringify(`overview`)),localStorage.setItem(`meridian.v1.markets.cat`,JSON.stringify(``))}catch{}dispatchEvent(new Event(`meridian:home`)),b(``)},S=()=>{history.length>1?history.back():b(``)};function C(){let[e,t]=(0,r.useState)(y);return(0,r.useEffect)(()=>{let e=()=>{t(y()),window.scrollTo(0,0)};return addEventListener(`hashchange`,e),addEventListener(`popstate`,e),()=>{removeEventListener(`hashchange`,e),removeEventListener(`popstate`,e)}},[]),e}var w=[`Getting started`,`The autopilot`,`AI models`,`Funded accounts`,`Your account`,`Plans and billing`,`Staying safe`,`When something looks wrong`],T=[{id:`start`,group:`Getting started`,title:`Start in four minutes`,lede:`From nothing to an autopilot running on practice money.`,see:[`practice`,`autopilot`,`mira`],body:`
1. Press **Start free**, type your email and choose a password. We send a code to check the email is yours.
2. Answer the short setup (your name, date of birth to check you are 18, and your phone, so there is one account per person).
3. Your account opens with **£100 of practice money**.
4. Tell **Mira** what you want in your own words, or open **Autopilot** on Home and slide to switch it on.

## What happens next
The autopilot waits for its systems to find a trade. Some days that is several, some days none. Each trade shows on Home with why it went in, where it gets out and what it made or lost.

You can stop it at any time from the same switch. Open trades keep their stops.`},{id:`practice`,group:`Getting started`,title:`Practice money and accounts`,lede:`What the balance is, and what it is not.`,see:[`results`,`trouble`],body:`
Everything in Meridian trades **practice money**. Prices are real; the money is not. It cannot be withdrawn, sent or turned into cash.

## Accounts
A account is one practice account with its own balance, positions and history. Free has one; Plus has three. The autopilot trades **one account at a time**, and Home says which one.

## Your balance
Balance = cash + what your open positions are worth right now. It moves every second while a market is open.

## Adding practice money
Open **Portfolio**, then **Add money**. It is added to your start, so the safety floor and the results stay fair.`},{id:`mira`,group:`Getting started`,title:`Talking to Mira`,lede:`Your coach. Ask in your own words.`,see:[`council`,`autopilot`],body:`
Mira sees your account: balance, positions, what the autopilot did, your safety floor, and what Meridian's own tests found. Ask things like:

- "Why did it lose on that trade?"
- "How much could I make a month from £500, honestly?"
- "Turn the autopilot down a bit."
- "What does VWAP mean?"

When she suggests a change you get **Accept** and **Decline**. Nothing changes until you accept.

## What she won't do
She won't promise profits, invent prices, or place real trades. If she doesn't know, she says so. Her answers are information, not financial advice.`},{id:`autopilot`,group:`The autopilot`,title:`What the autopilot does`,lede:`Which trades it takes, when, and how it sizes them.`,see:[`safety-floor`,`why-no-trades`,`limits`],body:`
It takes trades from systems that passed our tests:

| System | Market | When |
| Smart | US100 (Nasdaq 100) | US session, 2:30pm to 9pm UK |
| 4-hour breakout | Bitcoin and Ethereum | Any time, checked every hour |

Each trade has a stop before it opens. The size is worked out from your balance, your pace and the [safety floor](#/help/safety-floor).

## Switching it on and off
Home, then the **Autopilot** switch. Off means no new trades; open ones keep their stops and close on their own rules. If it is trading another account, Home says so and offers to move it.

## Everything is written down
The activity list under the switch says when it opened, closed, skipped or stopped, and why.`},{id:`safety-floor`,group:`The autopilot`,title:`The safety floor`,lede:`The least your practice balance should fall to.`,see:[`limits`,`autopilot`],body:`
The floor is **80% of what you started with**. Every bet is a slice of the money above it, so the closer you get, the smaller the bet, until trading stops.

- As your balance grows, the floor climbs to **half of your best day**.
- At the floor nothing new opens. Press **Start again from here** when you want to carry on; the floor is then measured from your balance that day.
- The switch is on Home, under **Safety limits**.

## Can it be broken?
Yes: by one loss bigger than about twelve bets at once, such as a market gap. In our tests that meant ending around £78 instead of £80. Turning every win into a loss took it to £64.50. The full list is in [the docs](#/docs/safety-floor).

It limits losses. It does not make a profit.`},{id:`limits`,group:`The autopilot`,title:`Daily and monthly limits`,lede:`Stop after a good day or a bad one.`,see:[`safety-floor`],body:`
On Home, open **Safety limits**:

- **Stop the month at** a gain you choose, or **if down** a loss you choose (10% unless you change it).
- **Stop the day at** a gain or a loss.

The server checks every five minutes, whether or not your phone is on. When a limit is reached no new trades open until the next day (or the 1st, for the month), and Home says so.`},{id:`why-no-trades`,group:`The autopilot`,title:`Why didn’t it trade today?`,lede:`The usual reasons.`,see:[`autopilot`,`limits`],body:`
- **Nothing passed the rules.** Waiting is most of the job. Smart takes two or three trades a day on average, and some days none.
- **The US market is closed** (weekends, US holidays, or outside 2:30pm to 9pm UK).
- **A limit or the safety floor was reached.** Home shows a line saying which.
- **It is trading a different account.** Home names it.
- **Too many positions are already open** for your pace.

The activity list says which of these it was.`},{id:`results`,group:`The autopilot`,title:`How to read the results`,lede:`R, win rate, and why a good week proves little.`,see:[`practice`],body:`
**R** is one bet. If a trade risks £1 and makes £2, it made +2R. It lets you compare trades of different sizes.

**Win rate** on its own says very little. A system that wins 40% of the time can make money if its wins are bigger than its losses, and one that wins 80% can lose it.

**Paper** means real prices and practice money, followed the way a broker would fill it, with costs taken off.

**Replayed** means run on past prices. We pick rules on old years and read newer years once, but a replay can still be kinder than real life.

A week is luck. A few hundred trades start to mean something.`},{id:`council`,group:`AI models`,title:`The AI council`,lede:`What the models see and how to read their page.`,see:[`mira`],body:`
Open **Lab, AI council**. Every 15 minutes while the US market is open, up to ten models are shown the same picture of the live chart, with every indicator on it, and no date.

1. Each one says buy, sell or wait, and why.
2. Each one reads the others and answers again. Some change their mind.
3. The council decides, with each model weighted by what its own past calls earned.

## What you can see
- The exact picture they saw
- Every word each of them said
- Every trade the council and each model would have taken, and how it ended
- The notes each model wrote to itself after the close

It is **on paper and not proven**. It started on 25 November 2026 and is judged after 150 trades of its own. Don't trade it with money. The method is in [the docs](#/docs/council).`},{id:`funded`,group:`Funded accounts`,title:`How funded accounts work`,lede:`Trading a firm’s money by passing its test.`,see:[`funded-when`,`funded-connect`],body:`
You pay a firm a small fee (about $29 for the smallest) for a test on a practice account. Make its target without breaking its limits and the firm gives you its money to trade. You keep most of the profit, usually 80%.

Break a limit and the account ends. The fee is gone.

Firms check your ID before they pay you. Meridian isn't partnered with any of them, never takes the money and gets no cut.

## How often does Meridian's plan pass?
Replayed from every trading day, E8 Pro $5,000: **29%** in 2012–19, **72%** in 2020–24, **85%** in 2025–26. If our edge were half as big, **57%**. A coin-flip system passes **38%**. [How we worked it out](#/docs/funded).`},{id:`funded-when`,group:`Funded accounts`,title:`When to buy a test`,lede:`Only with money you have already made.`,see:[`funded`,`safety-floor`],body:`
Never with the money you started with. Wait until you can pay the fee and still have your start plus a fifth. From £100 that is about £149.

Why: in our replays, people who spent their start on tests on day one ended three months with **less than half** of it 42 times in 100. Buying tests only from winnings, under the safety floor, that was **0 in 100**.`},{id:`funded-connect`,group:`Funded accounts`,title:`Adding your account`,lede:`So Meridian can follow it.`,see:[`funded`],body:`
1. Buy the test on the firm's own site. Choose **cTrader** at checkout: it is the platform Meridian connects to.
2. In Meridian open **Funded**, then **Add**.
3. Pick the programme, the size and the day you bought it.

Meridian works out how close it is to passing from its own trades since that day. It sets the risk for you (0.75% a trade, and no new trade once a loss could take the day near the firm's limit).

Meridian never asks for your firm password.`},{id:`sign-in`,group:`Your account`,title:`Signing in`,lede:`Codes, passwords and new devices.`,see:[`two-step`,`trouble`],body:`
Sign in with your email and password, or press **Email me a sign-in code instead**. Codes last **10 minutes** and only the newest one works.

## The code didn't come
- Check spam and promotions.
- Wait a minute, then ask for a new one. Asking many times makes old codes stop working.
- Check the email has no typing mistake.

## Forgot your password
Press **Forgot password?** on the sign-in page and follow the email.`},{id:`two-step`,group:`Your account`,title:`Two-step sign-in`,lede:`A second lock, using an authenticator app.`,see:[`sign-in`,`scams`],body:`
Account, then **Security**, then set up two-step sign-in. Scan the code with Google Authenticator, 1Password, Authy or the iPhone's own Passwords app and type the six digits.

From then on signing in needs the app as well as your password. Keep the app when you change phones: move it first, then wipe the old one.`},{id:`telegram`,group:`Your account`,title:`Trades on Telegram`,lede:`Get a message when Meridian opens or closes one.`,see:[`autopilot`],body:`
Account, then **Telegram**, then **Connect**, and press **Start** in the chat that opens. Your account and the chat are then joined, and you get signals, a daily summary and Mira in Telegram.

Meridian's bot never asks for a password, a code, money or a wallet. If anything does, it isn't us.

To stop: Connect, then **Disconnect** beside Telegram.`},{id:`data`,group:`Your account`,title:`See, export or delete your data`,lede:`What we keep and how to have it removed.`,see:[`sign-in`],body:`
- **Export:** Portfolio, then **Export** for your trades as a file.
- **See or correct:** Account shows your details; message us for anything else we hold.
- **Delete:** Account, then Help & support, then message the team. We remove your details within 30 days, except anything the law makes us keep.

The full list is in the [privacy notice](#/privacy).`},{id:`billing`,group:`Plans and billing`,title:`Trials, paying and cancelling`,lede:`How the money side works.`,see:[`promise`],body:`
Free costs nothing. Paid plans are billed by our payment partner **Whop**, in pounds, so we never see your card.

- **Trial:** you pay nothing if you cancel before it ends.
- **Cancel:** Account, then **Subscription**, any time. You keep the plan until the end of what you've paid for.
- **Payment failed:** the plan pauses until it works; nothing is lost.
- **14 days:** UK consumers can normally cancel a new subscription within 14 days. See [Refunds](#/legal/refunds).

Apple Pay and Google Pay show at checkout when your device has them.`},{id:`promise`,group:`Plans and billing`,title:`The 180-day promise`,lede:`Exactly what it covers.`,see:[`billing`,`safety-floor`],body:`
Keep a paid plan **and** the autopilot on in one account, on a Meridian plan, for 180 days in a row. If that account is worth less on day 180 than on day 1 (counting money you added or took out), you get back the subscription fees you paid for those 180 days.

- Ask through Help & support within 30 days after day 180.
- It covers **subscription fees only**. Practice money isn't real money, and nothing else is refunded or paid.
- Home shows which day you are on.

Why we can offer it: replaying the autopilot's main system with the safety floor, 180-day stretches ended higher about 95 times in 100 since 2020 and about 2 times in 3 since 2012. From 2012 to 2015 it was fewer than 1 in 5. The past doesn't tell you the future. [The terms](#/terms).`},{id:`scams`,group:`Staying safe`,title:`Spotting a scam`,lede:`What Meridian will never ask for.`,see:[`two-step`],body:`
We will **never** ask you for:

- Your password, a sign-in code or your authenticator code
- A wallet's secret phrase or private key
- A bank transfer, gift card or crypto payment
- Your login for a broker or a funded-account firm
- To install anything that controls your computer

We never message first offering guaranteed profits. Meridian's app lives at **meridianlab.onrender.com** and nowhere else. If something looks wrong, message us from inside the app.`},{id:`report`,group:`Staying safe`,title:`Report a security problem`,lede:`Found a hole? Tell us first.`,see:[`scams`],body:`
Use the contact form and choose **Technical**, or Account, then Help & support. Say what you did, what happened and how to repeat it. Please don't look at other people's data, slow the service down for anyone, or share it before we have fixed it.

We reply within a few days and tell you when it is fixed. More in [Security](#/docs/security).`},{id:`trouble`,group:`When something looks wrong`,title:`Something isn’t working`,lede:`Try these first.`,see:[`sign-in`,`why-no-trades`],body:`
1. Check [Status](#/status). If something is down there, we already know.
2. Reload the page. On a phone, close the app and open it again.
3. Try another network. School and work Wi-Fi sometimes block live prices.
4. Still wrong? Help & support, then message the team. Say what you were doing and what you saw.

## Prices aren't moving
Most markets close at weekends and overnight. Crypto never does.

## My balance jumped
A position closed, or a price came in after a gap. Tap the trade to see the fill.`}],E=[`The basics`,`How it decides`,`Evidence`,`For developers`,`Look it up`],D=[{id:`how`,group:`The basics`,title:`How Meridian works`,lede:`From a price to a trade to a record, in order.`,see:[`systems`,`safety-floor`,`data`],body:`
1. **Prices arrive.** Closed candles only: nothing is decided on a candle that could still change.
2. **Systems look.** Each one has fixed rules, written down before it was judged.
3. **The size is worked out** from your balance, your pace and the [safety floor](#/docs/safety-floor).
4. **The trade opens with its stop.** Entries include the spread you would really pay.
5. **It is followed** on one-minute candles. If the stop and the target are both touched in the same minute, the stop counts.
6. **It is written down** with its reason, and can't be edited afterwards.

The server does all of this. Your phone can be off.

## What is practice and what is replayed
**Practice** (or paper) is live: real prices, made-up money. **Replayed** is run on past prices. Every number in Meridian says which one it is.`},{id:`systems`,group:`The basics`,title:`The systems`,lede:`What trades, what watches, and what was thrown out.`,see:[`testing`,`changelog`],body:`
| System | What it does | Where it stands |
| Smart | US100 day trades from five kinds of setup, sized by how calm the market is | Trades the practice autopilot. Live paper record since 9 October 2026 |
| 4-hour breakout | Bitcoin and Ethereum trend trades | Trades the practice autopilot |
| Improved Smart | Smart's trades, held differently, skipped when the fee is too big | On paper beside Smart since 25 November 2026 |
| The desk | Twenty day-trading strategies and a ten-sign scorecard; the council accepts or passes | On paper since 25 November 2026 |
| The AI council | Models that look at the chart and discuss | On paper since 25 November 2026 |

## Thrown out
Hundreds. Among them: scalping 28 markets on five-minute bars (the fee is a quarter to half of every bet), copying profitable wallets, following news headlines, similar-day predictions, 10,000 random strategies, and most published indicators. We keep the losing numbers.`},{id:`safety-floor`,group:`How it decides`,title:`The safety floor, exactly`,lede:`The formula and every attack we tried.`,see:[`testing`],body:`
\`\`\`
floor   = the larger of 80% of your start and 50% of your best balance
cushion = balance - floor
bet %   = the smaller of your pace, 0.75%, and 8% x cushion / balance
below 0.05% the bet is zero: no new trades
\`\`\`

Because a bet is at most 8% of the cushion, it takes a loss of about **12.5 bets at once** to reach the floor in one go.

## What £100 ended at, at worst

| Test | Lowest |
| 10,000 shuffled three-month runs | £80.20 |
| The same, strategy half as good | £80.00 |
| The same, strategy that does nothing | £78.60 |
| Every loss 50% bigger | £79.90 |
| One day that loses ten bets | £80.20 |
| One day that loses fifteen | £78.40 |
| Every win turned into a loss | £64.50 |

Chosen out of 16,000 plans on 2016–2023, then read on 2024–2026 and 2012–2015. Real trades, costs taken off.

## The price of it
If the strategy turns out half as good, about a third of the starts sit near the floor for a year where an account without one would have recovered. That is why there is a **Start again from here** button.`},{id:`council`,group:`How it decides`,title:`The AI council, exactly`,lede:`What they see, how they vote, how they learn, how we judge them.`,see:[`safety-floor`,`testing`],body:`
## What each model is shown
- One picture: five-minute candles with EMA 9, 21 and 50, VWAP, Bollinger bands, yesterday's high, low and close, the overnight range, the first 15 minutes, RSI, MACD and volume, plus the one-hour and daily charts. **No date**, so nothing can be remembered.
- The same things as numbers: trend, ADX, supertrend, RSI on two timeframes, MACD, stochastic, CCI, MFI, OBV, distance from VWAP and from every level, the gap, the day's range, relative volume, and the patterns our code found.
- What happened after the 60 most similar of about 64,000 past charts, beside what happens on any chart.
- Its own record in plain words, and the notes it wrote to itself.

## How they decide
1. Everyone answers alone: buy, sell or wait, how sure, stop, target, and why.
2. Everyone reads the others and answers again.
3. Each answer is weighted by what that model's own calls have earned, shrunk hard so a lucky start means little. The council acts when the weighted answer is at least 0.3 one way **and** at least 60% of the members agree.
4. No trade if the fee would be more than 15% of the bet or the target is nearer than 1.2 times the stop. One council trade at a time per market, at most eight a day.

## What is kept
Three things for every model: its **calls** after the discussion, what it wanted **alone**, and which way it **leans** when it waits (followed for one hour). So we can tell whether talking helps. Every one is followed on one-minute candles with two spreads of cost, stop first.

## How it is judged
Going forward only. Nothing is replayed, because a model may remember the past. Written down before the first scheduled look: at **150** council trades the average must be above zero **and** above an ordinary buy or sell at the same moments. Until then it is a demonstration, and nothing follows it.`},{id:`testing`,group:`Evidence`,title:`How we test an idea`,lede:`The rules a result has to survive before we believe it.`,see:[`systems`,`limits`],body:`
1. **Write it down first.** The idea, the method and what would count as success go in a register that can only be added to.
2. **Split the years.** Old years choose the rules, middle years check them, new years are read once at the end.
3. **Scramble it.** The same search runs on shuffled outcomes. Whatever the shuffle also finds is luck.
4. **The more combinations tried, the higher the bar.**
5. **No peeking.** A candle counts only after it closes. Cutting the data at any moment must not change any signal known by then.
6. **Real costs on every trade:** the recorded spread, plus slippage.
7. **Beat doing nothing clever:** every rule is compared with the same trade every day with no rule, because markets drift up.
8. **Check it twice.** Big numbers are run again by a second, independent engine.

A result that fails is written up the same as one that passes.`},{id:`funded`,group:`Evidence`,title:`Funded accounts: the numbers`,lede:`How the pass rates were worked out.`,see:[`testing`],body:`
E8 Pro, $5,000, $29. One step: +8% to pass; −2.5% in a day or −8% overall ends it. Meridian's plan: 0.75% a trade and no new trade once one stop-out could take the day to −2%.

| Years | Passed |
| 2012–2019 | 29% |
| 2020–2024 | 72% |
| 2025–2026 | 85% |
| 2020–2026 if the edge is half as big | 57% |
| A system with no edge at all | 38% |

Replayed from every trading day, event by event: results are booked when a trade closes, open losses count towards the limits, costs are taken off. Passing took about 17 to 19 trading days.

One funded $5,000 account paid about $91 in a typical month in 2020–24 and $140 in 2025–26, about $32 at half the edge, and 1 in 10 paid nothing in six months. Extra accounts take the same trades, so they multiply risk; they don't spread it.

Earlier numbers were higher. On 25 November 2026 we found our older simulator booked results at entry, corrected it and published the lower ones.`},{id:`data`,group:`Evidence`,title:`Where the data comes from`,lede:`Sources, delays and what we don’t have.`,see:[`api`],body:`
| What | Source |
| Forex, indices, commodities, bonds | OANDA practice feed |
| Crypto | Coinbase and other public exchange feeds |
| Perpetuals | Hyperliquid public data |
| Stocks and funds | Yahoo Finance, delayed |
| Memecoins | Dexscreener, GeckoTerminal, on-chain data |
| News | Public feeds, with the publisher shown |

Prices can be late or wrong. Meridian checks for stale candles and skips rather than guess. We don't have order books for CFDs, company fundamentals, or a paid news wire.`},{id:`limits`,group:`Evidence`,title:`What Meridian can’t do`,lede:`Read this before you believe any of it.`,see:[`testing`],body:`
- It can't promise a profit. Nobody can.
- It has **seven weeks** of live paper record. That is short.
- Its edge came mostly from 2020 onwards. In 2012–2015 the same trades lost after fees.
- A replay is kinder than life: no panicking, no outages, no missed fills.
- It doesn't know your circumstances, so it can't give you advice. Meridian isn't authorised by the FCA.
- AI models make things up. They are checked, and they still do.`},{id:`security`,group:`For developers`,title:`Security`,lede:`How accounts and data are protected, and how to report a problem.`,see:[`api`],body:`
- **Your rows are yours.** Every table that holds personal data has row-level security in the database itself: the app can only ever read your own rows, whatever the browser asks for.
- **No secrets in the page.** The only key in the app is the public one, which can do nothing without your sign-in. Every release is scanned for the private ones and stops if it finds any.
- **Sign-in:** codes expire in 10 minutes, passwords are checked against a list of common ones, and you can add an authenticator app.
- **Payments** happen on Whop. We never see your card.
- **Balances can't be edited from the app.** Practice trades go through the server, which prices and checks them.
- **AI models see numbers, not people.** The council is sent charts and numbers with nothing about you.

## Report a problem
Contact form, **Technical**. Tell us what you did and how to repeat it, don't touch anyone else's data or slow the service, and give us time to fix it. We'll thank you by name if you like.`},{id:`changelog`,group:`Look it up`,title:`What’s new`,lede:`The changes that matter, newest first.`,body:`
## 25 November 2026
- **The AI council can see.** Up to ten models look at the live chart, discuss and decide. Every picture, word and trade is kept.
- **The safety floor** on the practice autopilot.
- Help centre, docs, reference and API pages. New homepage. Terms updated.
- **Corrected:** funded-account pass rates from before today were too high. The right ones are in [Funded accounts](#/docs/funded).
- Improved Smart and the desk started on paper.

## 24 November 2026
- A biggest-ever search of strategy combinations found no new edge. Nothing was adopted.
- Fixed a memecoin balance that had grown to an impossible number.

## 18 November 2026
- Meridian picks the risk for you; Funded cut down to what you need.
- Monthly and daily limits checked by the server.

## 9 October 2026
- Smart's live paper record began.`}];export{S as a,C as c,f as d,d as f,w as i,h as l,D as n,x as o,T as r,b as s,E as t,p as u};