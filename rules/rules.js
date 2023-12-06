import Rule from './Rule'
import RuleWordle from './RuleWordle/RuleWordle'
import RuleSlidingPuzzle from './RuleSlidingPuzzle/RuleSlidingPuzzle'
import RuleMorse from './RuleMorse/RuleMorse'
import RuleRiddle from './RuleRiddle/RuleRiddle'
import RuleLocation from './RuleLocation/RuleLocation'
import RuleTimeEmoji from './RuleTimeEmoji/RuleTimeEmoji'
import RuleQR from './RuleQR/RuleQR'
import RuleSum from './RuleSum/RuleSum'
import RuleEarthquake from './RuleEarthquake/RuleEarthquake'

let r = RegExp('\u{1F496}')
let rules = [
	new Rule(
		'Your password must include something that you are. You do it well as well.', //&#x1F9A0;
		(t) => /(?:lmaoyousuck)|(?:lmaoyousuck)/i.test(t)
	),
	// new Rule(
	// 	'Your password must be at least 6 characters.',
	// 	(t) => t?.length >= 6
	// ),
	new Rule(
		'All letters in your name and my name must be capital.',
		(t) =>
			// /^[^afysnehil]*[AFYASNEHIL][^afyasnehil]*$/g.test('afyasnehil')

			/^[AEFHILNSYbcdgjkmopqrtuvwxz0-9_\W]+$/g.test(t)
		// ^[EILabcdfghjkm-z0-9_\W]+$
	),
	new Rule('Your password must include a \u{1F496}.', (t) => r.test(t)),
	new Rule(
		'Your password must contain all the english vowels.',
		(t) =>
			/a/i.test(t) &&
			/e/i.test(t) &&
			/i/i.test(t) &&
			/o/i.test(t) &&
			/u/i.test(t)
	),
	new Rule('Your password must contain my phone number.', (t) =>
		/(?:8169558980)/.test(t)
	),
	new Rule('Your password must include a negative number.', (t) =>
		/-\d/.test(t)
	),
	new RuleSum(),
	new RuleQR(),

	// new Rule('Your password must include 2-digit prime number.', (t) =>
	// 	/(?:11)|(?:13)|(?:17)|(?:19)|(?:23)|(?:29)|(?:31)|(?:37)|(?:41)|(?:43)|(?:47)|(?:53)|(?:59)|(?:61)|(?:67)|(?:71)|(?:73)|(?:79)|(?:83)|(?:89)|(?:97)/.test(
	// 		t
	// 	)
	// ),
	new RuleTimeEmoji(),
	new Rule('Your password must include the name of a continent.', (t) =>
		/asia|europe|africa|australia|oceania|northamerica|southamerica|antarctica/i.test(
			t
		)
	),

	new RuleWordle(),
	// new RuleMorse(),
	// new RuleLocation(),
	new RuleRiddle(),
	new RuleEarthquake(),
	new Rule(
		'Your password must have as many vowels as consonants.',
		(t) =>
			(t.match(/[aeiou]/gi) || []).length ===
			(t.match(/[bcdfghjklmnpqrstvwxys]/gi) || []).length
	),
	// new RuleSlidingPuzzle(),
	new Rule('Your password must include the length of your password.', (t) => {
		let l = t.length
		let r = new RegExp(`${l}`)
		return r.test(t)
	}),
]

function sort_rules(a, b) {
	if (a.correct == b.correct) {
		return b.num - a.num
	} else if (!a.correct && b.correct) {
		return -1
	} else {
		return 1
	}
}

export default rules
export { sort_rules }
