/// Local AI-generated audience portraits.
const portraitGroups = {
  '5interviewers': [21, 23, 24, 27, 29],
  '10team': [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  '30students': Array.from({ length: 30 }, (_, i) => 41 + i),
  '50clients': Array.from({ length: 50 }, (_, i) => 51 + i),
  '5investors': [21, 23, 27, 29, 35],
  '100auditorium': Array.from({ length: 100 }, (_, i) => i + 1),
};

function portraitFile(number) {
  const filename = number <= 20
    ? `avatar-${String(number).padStart(2, '0')}.jpg`
    : `avatar-${String(number).padStart(3, '0')}.jpg`;

  return `/avatars/${filename}`;
}

export function avatarSVG(index, reaction, audienceId = '100auditorium') {
  const group = portraitGroups[audienceId] || portraitGroups['100auditorium'];
  const portraitNumber = group[index] ?? ((index % 100) + 1);

  return `
    <div class="relative h-full w-full overflow-hidden">
      <img
        src="${portraitFile(portraitNumber)}"
        alt="Audience member ${index + 1}"
        class="block h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  `;
}
