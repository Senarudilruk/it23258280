const { test, expect } = require('@playwright/test');

// Positive Functional Test Cases

test('Pos_Fun_0001 – Convert a short daily greeting phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama gedhara yanavaa');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම ගෙදර යනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0001 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0002 – Convert compound daily sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api bath kanna yanavaa saha passe nidhaagannavaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි බත් කන්න යනවා සහ පස්සෙ නිදාගන්නවා..', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0002 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0003 – Convert interrogative question', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oyaata adha  vaeda thiyenavaadha?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔයාට අද වැඩ තියෙනවාද?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0003 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0004 – Convert medium mixed-language instruction', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('Documents tika attach karalaa email ekak evanna, mokadha heta Zoom meeting ekak thiyenavaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('Documents ටික attach කරලා email එකක් එවන්න, මොකද හෙට Zoom meeting එකක් තියෙනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0004 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0005 – Convert medium mixed-language instruction with complex structure', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('adha office vaeda aduyi namuth heta Zoom meeting ekak saha presentation ekak thiyenavaa. ehema nam documents tika attach karalaa email ekak evanna kiyala manager kiyalaa thiyenavaa saha mama eeka hariyata karanavaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අද office වැඩ අඩුයි නමුත් හෙට Zoom meeting එකක් සහ presentation එකක් තියෙනවා. එහෙම නම් documents ටික attach කරලා email එකක් එවන්න කියල manager කියලා තියෙනවා සහ මම ඒක හරියට කරනවා.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0005 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0006 – Convert medium slang sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('ela machan, adha vaede hari nam api passe set venna puluvan.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('එල මචන්, අද වැඩෙ හරි නම් අපි පස්සෙ සෙට් වෙන්න පුලුවන්.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0006 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0007 – Convert medium polite request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('karuNaakaralaa mage email eka check karalaa mata kiyanna puluvandha?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('කරුණාකරලා mage email එක check කරලා මට කියන්න පුලුවන්ද?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0007 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0008 – Convert currency sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('Rs. 2500 vitharayi');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('Rs. 2500 විතරයි', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0008 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0009 – Convert time format sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('Zoom meeting eka heta 3.30 PM thiyenavaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('Zoom meeting එක හෙට 3.30 PM තියෙනවා.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0009 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0010 – Convert long paragraph input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('dhitvaa suLi kuNaatuva nisaa maarga saha paasal vaasa vinaaasha viima heethuven api adha gedhara inne namuth prashnayak naehae kiyala api hithanavaa saha e sambandhava passe kathaa karamu kiyala thiiranaya kalaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('දිට්වා සුළි කුණාටුව නිසා මාර්ග සහ පාසල් වාස විනාඅශ වීම හේතුවෙන් අපි අද ගෙදර ඉන්නේ නමුත් ප්‍රශ්නයක් නැහැ කියල අපි හිතනවා සහ එ සම්බන්දව පස්සෙ කතා කරමු කියල තීරනය කලා.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0010 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0011 – Convert mixed Singlish + English', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api dhaen meeting ekaka inne.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි දැන් meeting එකක ඉන්නේ.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0011 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0012 – Convert phrase pattern', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mata poddak inna oonee..');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මට පොඩ්ඩක් ඉන්න ඕනේ..', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0012 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0013 – Convert medium conditional sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oya enavaa nam api ekathu vela chithrapatayak balanna kiyala hithan inanvaa');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔය එනවා නම් අපි එකතු වෙල චිත්‍රපටයක් බලන්න කියල හිතන් ඉනන්වා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0013 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0014 – Convert greeting + question', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('aayuboovan! oyaata kohomadha?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ආයුබෝවන්! ඔයාට කොහොමද?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0014 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0015 – Convert informal request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('anee poddak balanna.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අනේ පොඩ්ඩක් බලන්න.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0015 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0016 – Convert negation with punctuation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oya enne naehae, nedha?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔය එන්නෙ නැහැ, නේද?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0016 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0017 – Convert medium interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oyaata adha office vaeda thiyenavaadha kiyala mama ahanna hitiyee');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔයාට අද office වැඩ තියෙනවාද කියල මම අහන්න හිටියේ', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0017 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0018 – Convert medium tense variation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama iiyee office giyaa namuth dhaen gedhara inne vaedak karamin.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම ඊයේ office ගියා නමුත් දැන් ගෙදර ඉන්නේ වැඩක් කරමින්.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0018 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0019 – Convert polite command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('karuNaakaralaa eeka dhenna.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('කරුණාකරලා ඒක දෙන්න.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0019 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0020 – Convert medium daily usage sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama gedhara giyata passe  bath kanna hithan innvaa .');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම ගෙදර ගියට පස්සෙ  බත් කන්න හිතන් ඉන්න්වා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0020 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0021 – Real-time Sinhala update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama pansal yanavaa');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම පන්සල් යනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0021 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0022 – Convert repeated emphasis words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('hari hari lassanayi');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('හරි හරි ලස්සනයි', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0022 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0023 – Convert phrase pattern variation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mata poddak balanna oni');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මට පොඩ්ඩක් බලන්න ඔනි', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0023 Output:', result.replace('Sinhala', '').trim());
});

// Negative Functional Test Cases

test('Neg_Fun_001 – Mixed upper & lower typo', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('MaMa gEdHaRa');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම ගෙඩ්හRඅ', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_001 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_002 – Missing vowel characters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mm gdr ynv');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම ගෙදර යනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_002 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_003 – Missing vowel characters with English', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('go gedhra now');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('go ගෙද්‍ර now', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_003 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_004 – Abbreviated words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('pls help me');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('කරුනාකර  උදවු කරන්න', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_004 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_005 – Heavy typo short input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('m@m@ yanawa');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම යනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_005 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_006 – Numeric-only input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('222');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('දෙක දෙක දෙක', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_006 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_007 – Emoji mixed short input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama 🙂');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_007 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_008 – Special character repetition', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('a@a@');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ආආආඅ', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_008 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_009 – Hash symbol mixed input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama ###');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ආආආඅ', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_009 Output:', result.replace('Sinhala', '').trim());
});
