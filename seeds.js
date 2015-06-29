var db = require("./models");

// *************** Company Text ***************//
var lorealText = [
"L’Oreal is the world’s largest beauty products company. It manufactures cosmetics, perfume, and hair and skin care items. It has been the target of numerous campaigns over its continued use of animal testing and is 30% owned by Nestle. The company is the subject of a boycott call from Uncaged, again over animal testing.",
"It is also heavily involved in nanotechnology and is the top nanotechnology patent-holder in the United States. The company also has operations in 11 oppressive regimes and 4 tax havens. L’Oréal also owns the Body Shop. This subsidiary scores well for its own policies but still receives a low ethiscore as it picks up marks from both L’Oréal and Nestlé.",
"Despite the fact that animal tests for cosmetics ended in the United Kingdom in 1997, and have been banned by law across the European Union since 2009, laboratory animal suffering for the beauty industry still continues. In laboratories in countries such as China, the United States, India and Russia, cosmetic chemicals are still being rubbed onto the sensitive and shaved skin of guinea pigs, dripped into the eyes of rabbits and force-fed into rats’ stomachs.",
"These tests can last for days, weeks or even months. In some countries even the widely condemned “lethal dose” test is still used, in which animals are forced to swallow massive amounts of a cosmetic chemical to find out the dose that causes death. Tests like these can cause immense suffering and distress – and are increasingly seen as a poor predictor of toxicity in humans.",
"Across Europe, animal testing for cosmetics is banned under the EU’s Cosmetics Directive, but cosmetics companies can still test on animals in other countries and sell those products back to the EU market. The same EU Cosmetics Directive was written to contain a sales ban on the sale of cosmetics containing ingredients tested on animals in non-EU countries Originally due for implementation in 1998 and despite being passed as law, its implementation has continually been delayed.",
"Cosmetics companies can stop animal testing immediately and still produce new, safe and exciting beauty products by manufacturing the cruelty-free way.Firstly, companies can use ingredients that are already known to be safe, of which there are thousands. These ingredients don’t require any new testing. Secondly, if companies need to produce new data about an ingredient, they can use available non-animal test methods.",
"More than 40 non-animal tests have been validated for use such as EPISKIN, EpiDerm and SkinEthic and the 3T3 neutral red uptake test. These modern alternatives can offer results that are more relevant to people, often more cheaply and efficiently too.",
"Leaving animal tested cosmetics on the shop shelf is one of the simplest ways you can support the Be Cruelty-Free campaign. However, there are lots of animal testing claims out there, so it can be confusing for consumers to make sense of it all. Statements like “against animal testing” could simply indicate a corporate aspiration rather than a cast-iron commitment, and a label stating that “this product has not been tested on animals” could be hiding the fact that some or all of the product’s ingredients have been animal tested even if the final product hasn’t been.",
"One of the best ways to cut through the myriad claims is to buy cosmetics from companies whose commitment you can trust, such as those certified by the Leaping Bunny Global Shopping Guide."
];

var johnsonText = [
"Johnson and Johnson is best known for its baby lotion and shampoos. The company is conducting research into modified organisms for medical purposes and they concede that some cosmetics products contain GM material. It is also the subject of a boycott call from Uncaged over its use of animal testing.",
"In April 2012 Johnson and Johnson and its subsidiary company Janssen were ordered to pay more than $1.1 billion in fines after a judge ruled that the company’s officials misled doctors and patients about the risks of the antipsychotic drug Risperdal. The company marketed the drug for ‘unapproved uses’, including to treat various symptoms in children and the elderly’ after being warned by federal authorities to halt such sales.",
"There are many thousands of ingredients in the GM sector, but we chose six problem ones to focus on for this report as they were prevalent across all the different cosmetics and toiletries products that were being reviewed.",
"<span class='em'>Parabens:</span> Found in most cosmetics, especially shampoos, they are a preservative designed to stop bacteria spoiling cosmetic products. The most common parabens used in cosmetic products are methylparaben, propylparaben, and butylparaben. Parabens are linked to cancer, endocrine disruption, reproductive toxicity, immunotoxicity, neurotoxicity and skin irritation. They can be absorbed through the skin, blood and digestive system and have been found in nearly all urine samples from U.S. adults.",
"<span class='em'>Methylisothiazolinone (MIT):</span> MIT is becoming increasingly popular as a preservative to replace parabens. Big brands, like Nivea’s Pure and Natural range, mayclaim to be free from parabens but use methylisothiazolinone instead. Like parabens, it is a preservative that can also release detectable levels of the known human carcinogen formaldehyde.",
"Even some products claiming to be certified organic use the MIT preservative, as certain percentages of non-organic material are allowed by some certifying bodies. Researchers say the early test tube evidence suggests that prolonged exposure to MIT, or exposure to the chemical at high concentrations, could damage the nervous system.",
"<span class='em'>Petrolatum:</span> Mineral oils listed as petrolatum (petroleum jelly) or C-18 derivatives are frequently used in personal care products such as lipsticks, lubricants, baby lotions and oils. While petrolatum on its own is not too harmful, it is often cheaply produced andthe impurities/contaminants often found in petrolatum have been linked to several types of cancer. In the EU, all petroleum products in cosmetics must have their production process certified to ensure they don’t contain these carcinogenic impurities.",
"Mineral oils are also known to clog pores, forming a barrier preventing skin from eliminating toxins. Repeated use can even set off skin conditions such as acne and dermatitis. It can also block the skin’s ability to moisturise itself, leading to chapped and dry skin, which are often conditions it is sold to alleviate. Plus, as an ingredient of the petroleum industry, their use contributes to the depletion of a non-renewable resource, not to mention the impacts of oil exploration, drilling, refining and transportation.",
"<span class='em'>Synthetic colours:</span> Synthetic colours used in cosmetics mostly come from coal tar but can also be derived from crude oil or other minerals. They contain heavy metal salts that may deposit toxins onto the skin, at the very least causing skin sensitivity and irritation. Some also contain carcinogenic arsenic and lead. However not all are harmful. The Skin Deep website lists a number of synthetic colours which, in their ranking system, range from 0 (safe) to 10 (very dangerous).",
"<span class='em'>Synthetic fragrances:</span> These are commonly used in personal care products and often contain as many as 200 ingredients. These ingredients are, however, considered to be trade secrets, so companies don’t have to tell us what they are. However, studies suggest a number of possible negative effects of the compounds used to create them including: immune system damage; a cause and trigger asthma attacks; hormone disruption, which can affect development and fertility; a potential neurotoxin (chemicals that are toxic to the brain); increase in the proliferation of oestrogen-responsive breast cancer cells; and they have also been found to be toxic to aquatic life and can accumulate in the food chain.",
"<span class='em'>Propylene Glycol (PEG or PPG):</span> Found in skin lotion, shampoo, conditioner, baby wipes, soap, make-up. Propylene Glycol is the main ingredient in anti-freeze and is usually listed on cosmetic labels as PEG or PPG. It is an alcohol which is added to beauty products that claim to hydrate skin, leaving it smooth and soft. However they are considered by many to be a toxin that causes skin rashes and persistent dry, flaky skin and eye irritation. The Environmental Working Group has also linked PEG to various forms of cancer."
];

var kaoText = [
"The John Freida brand is owned by the Kao Corporation of Japan. This company scores well for its environmental reporting but worst for the other policy areas researched in this report (palm oil, animal testing and supply chain management). It also has subsidiaries in tax havens (Switzerland, the Philippines and Singapore) and operations in 4 oppressive regimes (China, Vietnam, the Philippines and Thailand).",
"The Kao Brands Company,  mission statement states, “Our brands instill confidence in women to help them achieve their dreams of self expression. Our people possess an entrepreneurial spirit, with a passion for beauty, style and excellence. We commit to act with integrity, directness and transparency in all our relationships.” However, many of John Frieda’s practices in term of the environmental impact or working conditions is far from “integrity, directness and transparency”.",
"The environmental impact of Kao Brands rates 6.7 out of 10, with a large percentage of its negative impact resulting in air pollution and toxic waste. However, the biggest problem Kao Brands Company faces is working conditions and employee justice.  Working conditions and benefits were a low 3.8 out of 10. Kao Brands Company is headquartered in Tokyo, Japan, but holds offices in Cincinnati, Ohio. Working conditions are very haphazard because of the harsh toxic chemicals the employees are directly in contact with.",
"Employees exposure to the harshest chemicals in the Kao Brand production site include DMDM Hydantion which rates 9 out of 10 for toxicity. Also, the chemical Oxybenzone with rates 8 out of 10 with side effects of development and reproductive toxicity, allergies and biochemical and cellular level changes. These chemicals can have short term effects such as allergies, but also long term effects such infertility in women and men."
];

var hutchinsonText = [
"According to the Hutchinson Whampoa website, Husky Energy (a sub-company) was and currently is involved in heavy oil refining. Husky Energy’s assets were said to include: “the Lloydminster heavy oil upgrader with a processing capacity of 77,000 barrels of oil per day, to be increased to 82,000 barrels per day in 2007, a 2,050-kilometre pipeline system, a 50 per cent interest in a 215-megawatt cogeneration facility at Lloydminster and a 90-megawatt power generation facility at Rainbow Lake, Alberta, 33 billion cubic feet of gas storage capacity, treating and gathering systems, and commodity marketing.”",
"In 2007 the company completed preliminary site work for the Sunrise Oil Sands Project in Alberta, Canada. According to a report by the World Wildlife Fund and the Co-operative Group “Unconventional Oil: scraping the bottom of the barrel?” published in May 2008, the Canadian oil sands developments were extremely carbon intensive and thereby a major contributor to climate change.",
"They resulted in the deforestation of large areas of boreal forest and the usage of massive amounts of water; resulted in the creation of tailing ponds which were highly toxic, and raised concerns over the health impacts on the First Nations communities that lived downstream from the oil sands. This threatened the viability of their continued presence on their traditional homelands.",
"In December 2009 ECRA searched the Hutchison company website for a policy on sourcing minerals used in mobile phone production from the DRC, a country renowned for human rights abuses in the extractive industries with profits from them being used to fund armed groups.",
"This trade also has dire environmental consequenses generating a massive amount of waste which contains toxic and even radioactive substances which pollute the environment and water supplies and affect local communities. ECRA could find no such policy, and therefore it was assumed that the company was taking no precautions to avoid this trade. An email was sent to the company requesting information on the subject but no reply was received."
];

var unileverText = [
"Unilever owns a number of brands in the sector including Dove and Pears. It is the subject of a boycott call from Uncaged over its animal testing policy and we give the company a worst rating for this. In 2011 ActionAid uncovered that Unilever had 696 subsidiaries 26% of which were in tax havens.",
"The company receives the worst rating from the ethical consumer reports for its palm oil policy.  It was reported that one of the company’s suppliers of palm oil had seized land by force in Indonesia. According to Rainforest Rescue, the small village of Sungai Beruang on the Indonesian island of Sumatra had been stormed by 700 armed soldiers from the notorious special forces unit Brimob, and the Wilmar Group’s security forces.",
"The raid on Sungai Beruang was reported to result in hundreds of people fleeing “to escape the guns and bulldozers” and much of the village being destroyed. 40 people from the ethnic group of the Suku Anak Dalam, which had lived in the area for generations, were reported to be missing.",
"Palm oil and its derivatives are found in a vast number of consumer products, and its use spans the cosmetics, food and household products sectors. Regular readers of Ethical Consumer will no doubt be familiar with the impacts of its production. Clearance of land to create lucrative palm-oil plantations has led to: climate-disastrous destruction of peatland in Indonesia, the deforestation of land crucial to the survival of the world’s remaining orang-utans in Malaysia and Indonesia, the forced displacement of indigenous people throughout the global South.",
"The Roundtable on Sustainable Palm Oil (RSPO) was formed in 2004 as a multistakeholder initiative to address some of these issues, but the negative impacts of palm oil production have continued. Members include NGOs such as the WWF, but also some of the worst culprits of palm-oil related abuses. Greenpeace has run some very successful campaigns against some of the worst palm oil suppliers by targeting the high profile brands of Unilever and Nestlé connected to these suppliers.",
"Palm oil certified as ‘sustainable’ by the RSPO came onto the market in 2008. How sustainable this Certified Sustainable Palm Oil (CSPO) actually is, is a matter of debate. Critically, for example, there are no provisions for Greenhouse Gas (GHG) emissions. The RSPO’s record in enforcing the standards has also been criticised. But even the RSPO’s most vocal critics recognise the need to engage with the organisation and to push for strengthening the standards rather than rejecting them altogether.",
"Perhaps the only way to guarantee that the products you buy aren’t tainted by the impacts of palm oil production is to avoid the substance altogether. But this isn’t easy: there are at least 30 different names for various substances which may have come from palm oil.",
"Ingredients definitely derived from palm oil in the toiletries sector are: palm kernel oil, sodium palmate, sodium palm kernelate and Elaeis guineensis (its Latin name). Ingredients which may have been derived from palm oil include sodium lauryl sulphate, sodium laureth sulphate, coco-glucoside, cetearyl alcohol, sodium palmitate, vegetable glycerin and, vegetable oil."
];

var pgText = [
"Procter & Gamble own a host of brands in the beauty sector. These include Head and Shoulders, Oral B and Gillette. The company is the subject of a boycott call from campaign groups PETA and Uncaged over its use of animal testing.",
"In 2011, following a complaint submitted by Uncaged, the company was forced to withdraw an advert for its ‘Herbal Essences’ hair care range which falsely claimed ‘we don’t test on animals’. When challenged by the Advertising Standards Authority, P&G admitted the statement contradicted thousands of chemical poisoning tests that they still carried out on animals for the sake of Herbal Essences and other beauty brands.",
"Procter & Gamble has also donated more than $80,000 to the Coalition Against the Costly Labeling Law, a group of companies that worked against Oregon’s Measure 27, which would have required the labeling of GMO products sold in that state. The Coalition was successful in defeating the measure.",
"They were also among the corporations criticized by Greenpeace for working to weaken European laws governing harmful chemicals in household products. The EU’s 2003 draft legislation would have imposed strict safety standards, requiring companies such as P&G to disclose and reduce the use of harmful ingredients in its consumer products.",
"Greenpeace states that as a result of industry intimidation and intense lobbying, safety regulations were significantly watered down, putting citizens at greater risk of exposure to toxic chemicals from everyday products.",
"According to the Procter & Gamble website, “P&G complies with all U.S. federal and state laws, including the Lobbying Disclosure Act and Honest Leadership and Open Government Act that require reporting on lobbying activities and certification of compliance with Congressional gift rules.",
"For the 2013 calendar year, P&G reported U.S. lobbying expenditures of $3.96 million in the lobbying disclosure reports filed with the Clerk of the U.S. House of Representatives and the Secretary of the U.S. Senate and a total of $331,335 in lobbying expenditures in U.S. states. In fiscal year 2012-2013, P&G reported lobbying activity in the range of € 400,000 to € 450,000 at the European Union level under voluntary guidelines issued by the EU Commission and the European Parliament”."
];

var beiersdorfText = [
"Beiersdorf carries out their operations in multiple oppressive regimes. The company’s website was searched by Ethical Consumer for a list of subsidiaries in June 2012. According to its list of worldwide locations, Beiersdorf had operations in Russia, China, India, Kazakhstan, Thailand, Vietnam, Colombia, and Venezuela. All were considered by Ethical Consumer at the time of writing to be governed by oppressive regimes.",
"A search of Beiersdorf’s website found no evidence that it was a member of a multi-stakeholder initiative, nor was it involved with any NGOs or trade unions in improving workers’ rights within its supply chain. A search of the website found no evidence that workers could provide feedback on working conditions to the company, therefore Beiersdorf received a poor rating for stakeholder engagement.",
"Beiersdorf has also received numerous complaints in regards to its misleading advertising tactics. In June 2011 it was reported on the US Federal Trade Commission (FTC) website, www.ftc.gov, that Beiersdorf, Inc. had agreed to stop making claims that a Nivea product, My Silhouette!, could “significantly reduce consumers’ body size” and pay $900,000 to settle FTC charges.",
"The company was also searched by Ethical Consumer for a list of its subsidiaries in June 2012. According to its list of worldwide locations, Beiersdorf had subsidaries in Ireland, Singapore, British Virgin Islands, Guatemala, Panama and Uruguay. All territories were considered by Ethical Consumer at the time of writing as being tax havens."
];

var gapText = [
"Gap Inc has been declared one of the worst brands to buy from a toxicity standpoint, owing largely to their use of non-organic cottons. For every 1 pound of non-organic cotton produced, about 1/3 of a pound of chemical pesticides and fertilizers are used. Just to give you an idea of how much cotton that is, it takes just under 1 pound of raw cotton to make t-shirt.",
"25% of the world insecticides are used on cotton crops where only 2.5% of the world’s land are cotton fields.  Cotton is  the most pesticide intensive crop grown on the planet. $2.6 billion worth of pesticides are used on cotton worldwide each year.  That is a huge percentage of toxic chemicals used to grow conventional cotton!  Think of the overspray, which can travel up to 2 miles, that is in the air (that you breath) and getting on other crops (your food) just from cotton.",
"According to the World Health Organization, 20,000 people die every year from accidental pesticide poisoning in conventional cotton agriculture, and 1,000,000 people a year suffer from long-term pesticide poisoning.",
"100 million conventional cotton farmers, from Russia to South Africa, are living in conditions of abject poverty and near starvation.  Conventional cotton subsidies (funded by American taxpayers) are causing poverty in the developing world as they lower the world price for cotton.",
"Most cotton clothing is now being produced in China in sweatshops where women & children are being exploited and are working well below the minimum wage.  How do you feel about your new shirt or pants when you think a child might have made it?",
"Human rights has also been a large concern for the Gap.  It has a large number of suppliers, who are subject to very few independent inspections. In August 2009, a factory in southern Africa that makes jeans for Gap was found illegally dumping chemical waste in a river and two unsecured tips where it posed a hazard to child ragpickers who search for cloth fragments to sell for fuel.",
"With scores of stores worldwide, U.S.-based chain The Gap is a retailing heavyweight, with profits totaling $15.9 billion in 2007. In the same year, The Telegraph releaased a news report of how a raid on a New Delhi factory found children as young as eight sewing clothes destined for Gap stores.",
"Later in 2000, a Senate subcommittee hearing revealed that the Gap was contracting work out to Chinese and Korean-owned factories on the U.S. territory of Saipan. This loophole allowed the Gap to cut labour costs drastically while still producing clothes that are technically “Made in USA.” The factories employed mainly young Chinese women to work in poor conditions and forced pregnant workers to get abortions in order for them to keep working, reported ABC News."
];

var frenchconnectionText = [
"For every 1 pound of non-organic cotton produced, about 1/3 of a pound of chemical pesticides and fertilizers are used. Just to give you an idea of how much cotton that is, it takes just under 1 pound of raw cotton to make t-shirt.",
"25% of the world insecticides are used on cotton crops where only 2.5% of the world’s land are cotton fields.  Cotton is  the most pesticide intensive crop grown on the planet. $2.6 billion worth of pesticides are used on cotton worldwide each year.  That is a huge percentage of toxic chemicals used to grow conventional cotton!  Think of the overspray, which can travel up to 2 miles, that is in the air (that you breath) and getting on other crops (your food) just from cotton.",
"According to the World Health Organization, 20,000 people die every year from accidental pesticide poisoning in conventional cotton agriculture, and 1,000,000 people a year suffer from long-term pesticide poisoning.",
"100 million conventional cotton farmers, from Russia to South Africa, are living in conditions of abject poverty and near starvation.  Conventional cotton subsidies (funded by American taxpayers) are causing poverty in the developing world as they lower the world price for cotton.",
"Most conventional cotton being grown is now GMO cotton. Cotton is considered the world’s dirtiest crop due to its heavy use of insecticides, the most hazardous pesticide to human and animal health. The Environmental Protection Agency considers 7 of the 15 pesticides used on conventional cotton as possible or known carcinogenic (cancer causing) agents. Sadly, the suicide rate for conventional cotton farmers is high (especially in India).  Some say it is no higher than it always has been.  Some say it is higher now that cotton farming is GMO.  Either way, it is a sad situation.",
"In addition, most cotton clothing is now being produced in China in sweatshops where women & children are being exploited and are working well below the minimum wage.  How do you feel about your new shirt or pants when you think a child might have made it?",
"When purchasing cotton materiasl, look for the GOTS – Global Organic Textile Standard. It is the leading certification for organic, non-toxic fibers and clothing.  This certification is the most stringent certification on clothing.  No flame retardants are allowed, no AZO dyes using heavy metals, no formaldehyde, no pesticides, no phthalates , no PVC, no PFCs, no NPEs, no chlorine bleach to list a few.",
"There is also a social aspect to it as well, employees must have fair working conditions and be paid a fair wage.  There can be no animal cruelty. Almost all GOTS certified clothing will have a logo on the inside of the clothing stating it is GOTS certified."
];

var levisText = [
"From a business perspective, sweatshops are overwhelmingly lucrative since they capitalize on low-wage labor in developing countries and significantly reduce production costs. Many major clothing and footwear companies, for example, have been linked to sweatshops.",
"Brands such as Nike, GAP, Converse and Levi’s, have all been guilty of numerous violations of requirements for reasonable working conditions in their production facilities. All of their headquarters and customer bases are located in the United States, while the manufacturing component of the production process is carried out in Asia.",
"Such companies have been criticized as being complicit in the exploitation of workers because they fail to correct the manufacturers’ malpractices, of which they are aware but often claim are hard to correct.",
"In the US in January 1999, campaign groups and trade unions filed a federal lawsuit against 18 companies operating in the Pacific island of Saipan, which is part of the US Commonwealth of the Northern Mariana Islands.",
"The lawsuit, which was filed on behalf of 35,000 Saipan garment workers, alleged that the companies had formed a ‘racketeering conspiracy’ to use indentured labour to produce clothing on the island, that contractors, manufacturers and retailers ‘had engaged in and benefited from forced labour’, and that ‘workers were forced into conditions constituting peonage and involuntary servitude, in violation of human rights laws’.",
"Since then, companies including Gap, Calvin Klein and Donna Karan have settled claims and have agreed to the independent monitoring of Saipan contractors in future. Levi Strauss was the only company that refused to settle the claim.",
"Jeans found on sale in the UK and USA are increasingly likely to have been manufactured in Central and Eastern Europe or in North Africa. Labour Behind the Label (www.labourbehindthelabel.org) reported that Gap factory workers in Russia had been paid just 11 cents per hour and were kept in ‘slavelike’ conditions.",
"In Bulgaria, a factory which manufactured clothing for Levi Strauss stores in the UK was reported to be strip-searching female workers at the end of their shifts on a regular basis, ostensibly to check they had not stolen anything. One worker, interviewed by The Sunday Times, reported that she had been sacked after refusing to be strip-searched. In addition the factory allegedly failed to pay sufficient wages for workers to feed and house a family properly."
];

var leejeansText = [
"Clothes, like any other consumable goods, have a history. In the case of the fashion industry, that history usually involves people in poorer, less developed countries being sourced for cheap labour.",
"This doesn’t necessarily mean exploitation; indeed, many high-street fashion chains are conscientious about human rights issues and have policies to maintain fair standards. Some, however, continue to source from countries such as Burma or allow poor conditions to exist in their workshops.",
"The definition of a sweatshop remains broad, describing any factory which may have unreasonably authoritative overseers, dangerous and unhealthy (both physically and psychologically) working conditions, and enforces long hours with low pay. The term also frequently describes a factory employing child labor. As the West continues its long-standing tradition of fostering what many would liken to slave labor, an ethical examination of these business practices becomes increasingly important.",
"One of the biggest hallmarks of sweatshop labor is that the workers are simply underpaid, especially considering the kinds of working conditions they endure. Minimum wage levels in countries such as Thailand, the Philippines, and China, are significantly lower than that of the United States.",
"The federal minimum wage per hour in the United States is currently at 7.25 dollars, while it is 1.48 dollars in Thailand, 69 cents in the Philippines, and 67 cents in China. However, workers are frequently paid less than these estimates suggest—amounts barely enough to survive on even considering the lower cost of living in these regions.",
"Many developing Asian countries have official minimum wage levels, but the lack of uniform and comprehensive regulations with nationwide coverage across all labor groups and industries remains a huge problem. For instance, minimum wage regulations are applicable in Cambodia only to the garment and shoe-sewing sector, and in Sri Lanka only to over 35 industrial trades. Furthermore, the lack of institutional regulatory effectiveness in enforcing compliance is an even greater problem."
];

var adidasText = [
"Over the last twenty years, sweatshops have become synonymous with the big-name shoe brands; Nike, Adidas, Reebok and Puma. By the end of the nineties, these companies had been accused of a whole range of corporate crimes, from involvement in child labour to lacing workers’ drinks with amphetamines to keep them going through the night. However, following intensive campaigning things are changing, and ‘corporate social responsibility’ is now the phrase on everyone’s lips.",
"Sports shoes comprise dozens of mostly synthetic materials. Leather uppers are tanned via a 20-step process using strong chemicals. In countries with little environmental protection, tannery wastes can be discharged untreated into the water systems, making tap water undrinkable.",
"The controversy for Adidas began in September of 2010, when an Adidas supplier in Indonesia called PT Kizone stopped making compensation payments to workers. A few months afterwards, the owner had fled the country and the new owner declared bankruptcy, leaving 2,800 workers without $3.3 million of back pay and legally mandated severance pay.",
"Nike and the Dallas Cowboys, who also had contracts at the plant, acknowledged partial responsibility for the labor violation and paid $1.5 million. The other $1.8 million is still owed to the workers.",
"The PT Kizone incident is not the first time Adidas has chosen to ignore blatant labor violations by its supply chain partners. In the past ten years, there have been numerous illegal factory closings by Adidas‘s suppliers, involving tens of thousands of workers. Adidas has never paid any of the workers their full severance.",
"In recent news, Adidas’ suppliers in Caribbean And Latin America stand accused of deteriorating factory conditions, the propping up illegitimate unions, as well as intimidation, firings, and death threats against union organizers.",
"As such, Adidas and Reebok have been forced to re-evaluate working conditions in their factories over the last decade. Campaigners  are working to ensure that the Adidas workers receive fair labour practices and good working conditions.",
"The problems do not end with the company’s conscience: in China, authentic trade union activity is illegal, regardless of what the ethical code of conduct stipulates. Clearly, there is a lot left to be done."
];

var lkbennettText = [
"While recently Nike has received most all of the flak, smaller companies are slipping through the net unnoticed in terms of their human rights policies. Very little is known about their standards; they source from around the world but have no ethical code of conduct and presumably no monitoring processes. What is known is that three companies, Shellys, LK Bennett and Dolcis, are on the Burma Campaign UK’s ‘named and shamed list’.",
"Sourcing from Burma (Myanmar), is often regarded as one of the most unethical practices around. Burma’s military-backed government has one of the worst human rights records in the world. In 2011 the military junta was officially dissolved following a 2010 general election, and a nominally civilian government was installed.",
"The military continues to retain enormous influence within the government, although steps are being taken to relinquish control, which along with the release of Burma’s most prominent human rights activist, Aung San Suu Kyi in 2010 and many other political prisoners, has led to the easing of trade and other economic sanctions that had been imposed by the European Union and the United States.",
"However, human rights groups claim that the regime continues to consistently abuse basic human rights and refuses any kind of democratic political system. It is alleged that millions of men, women and children are used in forced labour and are often threatened with murder, torture and rape.",
"Only 5 per cent of the national budget is spent on social and health care, while nearly half is spent on defence. Foreign capital merely strengthens the dictatorship and the exploitation of the Burmese people.",
];


// *************** L'OREAL ***************//
// L'Oreal Brands
var garnier = new db.Brand({
  instaName: "@garnierusa",
  instaId: 196766934,
  complaint: "Animals",
});

var kiehls = new db.Brand({
  instaName: "@kiehlsnyc",
  instaId: 448044564,
  complaint: "Animals",
});

var lorealparisofficial = new db.Brand({
  instaName: "@lorealparisofficial",
  instaId: 1323766664,
  complaint: "Animals",
});

var lorealparisusa = new db.Brand({
  instaName: "@lorealparisusa",
  instaId: 182211878,
  complaint: "Animals",
});

var lorealparisfr = new db.Brand({
  instaName: "@lorealparisfr",
  instaId: 18977415,
  complaint: "Animals",
});

var biothermworld = new db.Brand({
  instaName: "@biothermworld",
  instaId: 782654805,
  complaint: "Animals",
});

// Make the L'Oreal Company
db.Company.create({
  name: "L'Oreal",
  score: 46,
  text: lorealText,
  controversies: ["Animal Cruelty", "GM Ingredients", "Current Boycott", "Public Record Criticisms"]
}, function(err, company){

  console.log("saved the compnay");

  // Make L'Oreal the Garnier owner
  garnier.owner = company;
  garnier.save(function(err, brand) {
    console.log("saved garnier");
    // Make Garnier a L'Oreal brand
    company.brands.push(brand);
    company.save();
  });
  // Make L'Oreal the Kiehls owner
   kiehls.owner = company;
   kiehls.save(function(err, brand) {
     // Make Kiehl's a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
   // Make L'Oreal the lorealparisofficial owner
   lorealparisofficial.owner = company;
   lorealparisofficial.save(function(err, brand) {
     // Make lorealparisofficial a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
   // Make L'Oreal the lorealparisusa owner
   lorealparisusa.owner = company;
   lorealparisusa.save(function(err, brand) {
     // Make lorealparisusa a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
   // Make L'Oreal the lorealparisfr owner
   lorealparisfr.owner = company;
   lorealparisfr.save(function(err, brand) {
     // Make lorealparisfr a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
    // Make L'Oreal the biothermworld owner
   biothermworld.owner = company;
   biothermworld.save(function(err, brand) {
     // Make biothermworld a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
});

 // *************** JOHNSON & JOHNSON ***************//
 // Johnson & Johnson Brands
 var cleanandclear = new db.Brand({
   instaName: "@cleanandclear",
   instaId: 887391878,
   complaint: "GM",
 });


 var neutrogena = new db.Brand({
   instaName: "@neutrogena",
   instaId: 1385709710,
   complaint: "GM",
 });

 // Make Johnson & Johnson Company
 db.Company.create({
   name: "Johnson & Johnson",
   score: 31,
   text: johnsonText,
   controversies: ["GM Ingredients", "Animal Cruelty", "Political Donations", "Irresponsible Marketing", "Public Record Criticisms"]
 }, function(err, company){
   // Make Johnson & Johnson the Clean and Clear owner
   cleanandclear.owner = company;
   cleanandclear.save(function(err, brand) {
     // Make Clean and Clear a Johnson & Johnson brand
     company.brands.push(brand);
     company.save();
   });
   // Make Johnson & Johnson the Neutrogena owner
   neutrogena.owner = company;
   neutrogena.save(function(err, brand) {
     // Make Neutrogena a Johnson & Johnson brand
     company.brands.push(brand);
     company.save();
   });
 });

 // *************** KAO CORPORATION ***************//
 // Kao Corportation Brands
 var johnfriedauk = new db.Brand({
   instaName: "@johnfriedauk",
   instaId: 326928838,
   complaint: "Toxic Environment",
 });

 var johnfriedafr = new db.Brand({
   instaName: "@johnfriedafr",
   instaId: 1273842973,
   complaint: "Toxic Environment",
 });

 // Make Kao Corportation Company
 db.Company.create({
   name: "Kao Corportation",
   score: 54,
   text: kaoText,
   controversies: ["Toxins", "Ingredients", "Animal Cruelty", "Public Record Criticisms"]
 }, function(err, company){
   // Make Kao Corportation the johnfriedauk owner
   johnfriedauk.owner = company;
   johnfriedauk.save(function(err, brand) {
     // Make johnfriedauk a Kao Corportation brand
     company.brands.push(brand);
     company.save();
   });
   // Make Kao Corportation the johnfriedafr owner
   johnfriedafr.owner = company;
   johnfriedafr.save(function(err, brand) {
     // Make johnfriedafr a Kao Corportation brand
     company.brands.push(brand);
     company.save();
   });
 });


 // *************** Hutchinson Whampoa ***************//
 // Hutchinson Whampoa Brands
 var superdrugloves = new db.Brand({
   instaName: "@superdrugloves",
   instaId: 469275009,
   complaint: "Tar Sands",
 });

 // Make Hutchinson Whampoa Company
 db.Company.create({
   name: "Hutchinson Whampoa",
   score: 42,
   text: hutchinsonText,
   controversies: ["Tar Sands", "Ingredients", "Environment", "Animal Welfare", "Current Boycott", "Public Record Criticisms"]
 }, function(err, company){
   // Make Hutchinson Whampoa the superdrugloves owner
   superdrugloves.owner = company;
   superdrugloves.save(function(err, brand) {
     // Make superdrugloves a Hutchinson Whampoa brand
     company.brands.push(brand);
     company.save();
   });
 });

 // *************** UNILEVER ***************//
 // Unilever Brands
 var tresemme = new db.Brand({
   instaName: "@tresemme",
   instaId: 19262530,
   complaint: "Palm oil",
 });

 var sunsilksg = new db.Brand({
   instaName: "@sunsilksg",
   instaId: 1561134788,
   complaint: "Palm oil",
 });

  var dove = new db.Brand({
   instaName: "@dove",
   instaId: 361603874,
   complaint: "Palm oil",
 });

 // Make Unilever Company
 db.Company.create({
   name: "Unilever",
   score: 46,
   text: unileverText,
   controversies: ["GM", "Animal Welfare", "Palm Oil Sourcing", "Public Record Criticisms"]
 }, function(err, company){
   // Make Unilever the tresemme owner
   tresemme.owner = company;
   tresemme.save(function(err, brand) {
     // Make tresemme a Unilever brand
     company.brands.push(brand);
     company.save();
   });
      // Make Unilever the sunsilksg owner
   sunsilksg.owner = company;
   sunsilksg.save(function(err, brand) {
     // Make sunsilksg a Unilever brand
     company.brands.push(brand);
     company.save();
   });
    // Make Unilever the dove owner
   dove.owner = company;
   dove.save(function(err, brand) {
     // Make dove a Unilever brand
     company.brands.push(brand);
     company.save();
   });
 });

 // *************** PROCTOR & GAMBLE ***************//
 // Proctor & Gamble Brands
 var aussiehair = new db.Brand({
   instaName: "@aussiehair",
   instaId: 144140774,
   complaint: "Political Lobbying",
 });

 var herbalessences = new db.Brand({
   instaName: "@herbalessences",
   instaId: 145628278,
   complaint: "Political Lobbying",
 });

 var pantenehair = new db.Brand({
   instaName: "@pantenehair",
   instaId: 459676149,
   complaint: "Political Lobbying",
 });

  var pantenebrasil = new db.Brand({
   instaName: "@pantenebrasil",
   instaId: 723154671,
   complaint: "Political Lobbying",
 });

 // Make Proctor & Gamble Company
 db.Company.create({
   name: "Proctor & Gamble",
   score: 27,
   text: pgText,
   controversies: ["Ingredients", "Animal Welfare", "Current Boycott", "Political Donations", "Irresponsible Marketing"]
 }, function(err, company){
   // Make Proctor & Gamble the aussiehair owner
   aussiehair.owner = company;
   aussiehair.save(function(err, brand) {
//     // Make aussiehair a Proctor & Gamble brand
     company.brands.push(brand);
     company.save();
   });
   // Make Proctor & Gamble the herbalessences owner
   herbalessences.owner = company;
   herbalessences.save(function(err, brand) {
     // Make herbalessences a Proctor & Gamble brand
     company.brands.push(brand);
     company.save();
   });
   // Make Proctor & Gamble the pantenehair owner
   pantenehair.owner = company;
   pantenehair.save(function(err, brand) {
     // Make pantenehair a Proctor & Gamble brand
     company.brands.push(brand);
     company.save();
   });
    // Make Proctor & Gamble the pantenebrasil owner
   pantenebrasil.owner = company;
   pantenebrasil.save(function(err, brand) {
     // Make pantenebrasil a Proctor & Gamble brand
     company.brands.push(brand);
     company.save();
   });
 });

 // *************** Beiersdorf ***************//
 // Beiersdorf Brands
 var nivea_de = new db.Brand({
   instaName: "@nivea_de",
   instaId: 260742208,
   complaint: "Political Lobbying",
 });

 // Make Beiersdorf Company
 db.Company.create({
   name: "Beiersdorf",
   score: 58,
   text: beiersdorfText,
   controversies: ["Ingredients", "Animal Welfare", "Political Lobbying"]
 }, function(err, company){
   // Make Beiersdorf the nivea_de owner
   nivea_de.owner = company;
   nivea_de.save(function(err, brand) {
     // Make nivea_de a Beiersdorf brand
     company.brands.push(brand);
     company.save();
   });
 });


// *************** Gap Inc ***************//
// Gap Inc Brands
 var gap = new db.Brand({
   instaName: "@gap",
   instaId: 9456013,
   complaint: "Cotton Sourcing",
 });

  var gapkids = new db.Brand({
   instaName: "@gapkids",
   instaId: 1287002985,
   complaint: "Cotton Sourcing",
 });

var bananarepublic = new db.Brand({
  instaName: "@bananarepublic",
  instaId: 7843342,
  complaint: "Cotton Sourcing",
});

var intermixonline = new db.Brand({
  instaName: "@intermixonline",
  instaId: 6696686,
  complaint: "Cotton Sourcing",
});

var athleta = new db.Brand({
  instaName: "@athleta",
  instaId: 183890290,
  complaint: "Cotton Sourcing",
});

// Make Gap Inc Company
 db.Company.create({
   name: "Gap Inc",
   score: 59,
   text: gapText,
   controversies: ["Human Rights", "Cotton Sourcing", "Political Donations"]
 }, function(err, company){
   // Make Gap Inc the gap owner
   gap.owner = company;
   gap.save(function(err, brand) {
     // Make gap a Gap Inc brand
     company.brands.push(brand);
     company.save();
   });
    // Make Gap Inc the gapkids owner
   gapkids.owner = company;
   gapkids.save(function(err, brand) {
    // Make gapkids a Gap Inc brand
     company.brands.push(brand);
     company.save();
   });
    // Make Gap Inc the bananarepublic owner
   bananarepublic.owner = company;
   bananarepublic.save(function(err, brand) {
    // Make bananarepublic a Gap Inc brand
     company.brands.push(brand);
     company.save();
   });
    // Make Gap Inc the intermixonline owner
   intermixonline.owner = company;
   intermixonline.save(function(err, brand) {
    // Make intermixonline a Gap Inc brand
     company.brands.push(brand);
     company.save();
   });
    // Make Gap Inc the athleta owner
   athleta.owner = company;
   athleta.save(function(err, brand) {
    // Make athleta a Gap Inc brand
     company.brands.push(brand);
     company.save();
   });
 });


// *************** French Connection Group Plc ***************//
// French Connection Group Brands
 var frenchconnection_official = new db.Brand({
   instaName: "@frenchconnection_official",
   instaId: 293186777,
   complaint: "Cotton Sourcing",
 });

// Make French Connection Group Company
 db.Company.create({
   name: "French Connection Group",
   score: 56,
   text: frenchconnectionText,
   controversies: ["Human Rights", "Cotton Sourcing", "Environmental Report", "Ethical Trading Schemes"]
 }, function(err, company){
   // Make French Connection Group the frenchconnection_official owner
   frenchconnection_official.owner = company;
   frenchconnection_official.save(function(err, brand) {
     // Make frenchconnection_official a French Connection Group brand
     company.brands.push(brand);
     company.save();
   });
 });


// *************** Levi Strauss & Co ***************//
// Levi Strauss & Co Brands
 var levis = new db.Brand({
   instaName: "@levis",
   instaId: 4641204,
   complaint: "Human Rights",
 });

// Make Levi Strauss & Co Company
 db.Company.create({
   name: "Levi Strauss & Co",
   score: 55,
   text: levisText,
   controversies: ["Human Rights", "Current Boycott", "Environmental Report"]
 }, function(err, company){
   // Make Levi Strauss & Co the levis owner
   levis.owner = company;
   levis.save(function(err, brand) {
     // Make levis a Levi Strauss & Co brand
     company.brands.push(brand);
     company.save();
   });
 });


// *************** VF Corporation ***************//
// VF Corporation Brands
 var leejeans = new db.Brand({
   instaName: "@leejeans",
   instaId: 22974253,
   complaint: "Human Rights",
 });

 // Make VF Corporation Company
 db.Company.create({
   name: "VF Corporation",
   score: 55,
   text: leejeansText,
   controversies: ["Human Rights", "Environmental Report"]
 }, function(err, company){
   // Make VF Corporation the leejeans owner
   leejeans.owner = company;
   leejeans.save(function(err, brand) {
     // Make leejeans a VF Corporation brand
     company.brands.push(brand);
     company.save();
   });
 });


// *************** Adidas-Salomon AG ***************//
// Adidas-Salomon AG Brands
 var adidas = new db.Brand({
   instaName: "@adidas",
   instaId: 20269764,
   complaint: "Human Rights",
 });

  var adidasoriginals = new db.Brand({
   instaName: "@adidasoriginals",
   instaId: 9187952,
   complaint: "Human Rights",
 });

 var reebokwomen = new db.Brand({
   instaName: "@reebokwomen",
   instaId: 985890635,
   complaint: "Human Rights",
 });

  var reebokclassics = new db.Brand({
   instaName: "@reebokclassics",
   instaId: 6756050,
   complaint: "Human Rights",
 });

// Make Adidas-Salomon AG Company
 db.Company.create({
   name: "Adidas-Salomon AG",
   score: 55,
   text: adidasText,
   controversies: ["Human Rights", "Current Boycott"]
 }, function(err, company){
   // Make Adidas-Salomon AG the adidas owner
   adidas.owner = company;
   adidas.save(function(err, brand) {
     // Make adidas a Adidas-Salomon AG brand
     company.brands.push(brand);
     company.save();
   });
    // Make Adidas-Salomon AG the adidasoriginals owner
   adidasoriginals.owner = company;
   adidasoriginals.save(function(err, brand) {
     // Make adidasoriginals a Adidas-Salomon AG brand
     company.brands.push(brand);
     company.save();
   });
    // Make Adidas-Salomon AG the reebokwomen owner
   reebokwomen.owner = company;
   reebokwomen.save(function(err, brand) {
     // Make reebokwomen a Adidas-Salomon AG brand
     company.brands.push(brand);
     company.save();
   });
    // Make Adidas-Salomon AG the reebokclassics owner
   reebokclassics.owner = company;
   reebokclassics.save(function(err, brand) {
     // Make reebokclassics a Adidas-Salomon AG brand
     company.brands.push(brand);
     company.save();
   });
 });


// *************** LK Bennett ***************//
// LK Bennett Brands
 var lkbennettlondon = new db.Brand({
   instaName: "@lkbennettlondon",
   instaId: 29703131,
   complaint: "Unethical sourcing",
 });

 // Make LK Bennett Company
 db.Company.create({
   name: "LK Bennett",
   score: 55,
   text: lkbennettText,
   controversies: ["Unethical Sourcing", "Environmental Report"]
 }, function(err, company){
   // Make LK Bennett the lkbennettlondon owner
   lkbennettlondon.owner = company;
   lkbennettlondon.save(function(err, brand) {
     // Make lkbennettlondon an LK Bennett brand
     company.brands.push(brand);
     company.save();
   });
 });

setTimeout(function() {db.closeConnection()}, 10000);

