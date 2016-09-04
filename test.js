import test from 'ava';
import fn from './';

test('Should convert Markdown to HTML', async t => {
	t.is(await fn({input: '*yo*'}), '<p><em>yo</em></p>');
});

test('Should convert HTML to LaTeX', async t => {
	t.is(await fn(['--from=html', '--to=latex'], {input: 'e = mc<sup>2</sup>'}), 'e = mc\\textsuperscript{2}');
});
