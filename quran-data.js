// Quran Application - Complete Data File
// All 114 Surahs, 30 Juz, Duas, Events, Reciters
// Loaded via script tag before app.js

const SURAH_DATA = [
  { number: 1, name: "\u0627\u0644\u0641\u0627\u062A\u062D\u0629", englishName: "Al-Fatiha", englishNameTranslation: "The Opening", banglaName: "\u0986\u09B2-\u09AB\u09BE\u09A4\u09BF\u09B9\u09BE", banglaNameTranslation: "\u09B6\u09C1\u09B0\u09C1", numberOfAyahs: 7, revelationType: "Meccan", revelationOrder: 5, juz: [1], rukus: 1, sajdas: false },
  { number: 2, name: "\u0627\u0644\u0628\u0642\u0631\u0629", englishName: "Al-Baqarah", englishNameTranslation: "The Cow", banglaName: "\u0986\u09B2-\u09AC\u09BE\u0995\u09BE\u09B0\u09BE", banglaNameTranslation: "\u0997\u09BE\u09AD\u09C0", numberOfAyahs: 286, revelationType: "Medinan", revelationOrder: 87, juz: [1,2,3], rukus: 40, sajdas: false },
  { number: 3, name: "\u0622\u0644 \u0639\u0645\u0631\u0627\u0646", englishName: "Aal-E-Imran", englishNameTranslation: "The Family of Imran", banglaName: "\u0986\u09B2-\u0987\u09AE\u09B0\u09BE\u09A8", banglaNameTranslation: "\u0987\u09AE\u09B0\u09BE\u09A8\u09C7\u09B0 \u09AA\u09B0\u09BF\u09AC\u09BE\u09B0", numberOfAyahs: 200, revelationType: "Medinan", revelationOrder: 89, juz: [3,4], rukus: 20, sajdas: false },
  { number: 4, name: "\u0627\u0644\u0646\u0633\u0627\u0621", englishName: "An-Nisa", englishNameTranslation: "The Women", banglaName: "\u0986\u09A8-\u09A8\u09BF\u09B8\u09BE", banglaNameTranslation: "\u09A8\u09BE\u09B0\u09C0", numberOfAyahs: 176, revelationType: "Medinan", revelationOrder: 92, juz: [4,5,6], rukus: 24, sajdas: false },
  { number: 5, name: "\u0627\u0644\u0645\u0627\u0626\u062F\u0629", englishName: "Al-Ma'idah", englishNameTranslation: "The Table Spread", banglaName: "\u0986\u09B2-\u09AE\u09BE\u09AF\u09BC\u09BF\u09A6\u09BE\u09B9", banglaNameTranslation: "\u0996\u09BE\u09A6\u09CD\u09AF \u09AA\u09B0\u09BF\u09AC\u09C7\u09B6\u09A8\u09C7\u09B0 \u099F\u09C7\u09AC\u09BF\u09B2", numberOfAyahs: 120, revelationType: "Medinan", revelationOrder: 112, juz: [6,7], rukus: 16, sajdas: false },
  { number: 6, name: "\u0627\u0644\u0623\u0646\u0639\u0627\u0645", englishName: "Al-An'am", englishNameTranslation: "The Cattle", banglaName: "\u0986\u09B2-\u0986\u09A8\u0986\u09AE", banglaNameTranslation: "\u0997\u09AC\u09BE\u09A6\u09BF \u09AA\u09B6\u09C1", numberOfAyahs: 165, revelationType: "Meccan", revelationOrder: 55, juz: [7,8], rukus: 20, sajdas: false },
  { number: 7, name: "\u0627\u0644\u0623\u0639\u0631\u0627\u0641", englishName: "Al-A'raf", englishNameTranslation: "The Heights", banglaName: "\u0986\u09B2-\u0986\u09B0\u09BE\u09AB", banglaNameTranslation: "\u0989\u0981\u099A\u09C1\u09B8\u09CD\u09A5\u09BE\u09A8", numberOfAyahs: 206, revelationType: "Meccan", revelationOrder: 39, juz: [8,9], rukus: 24, sajdas: true },
  { number: 8, name: "\u0627\u0644\u0623\u0646\u0641\u0627\u0644", englishName: "Al-Anfal", englishNameTranslation: "The Spoils of War", banglaName: "\u0986\u09B2-\u0986\u09A8\u09AB\u09BE\u09B2", banglaNameTranslation: "\u09AF\u09C1\u09A6\u09CD\u09A7\u09B2\u09AC\u09CD\u09A7 \u09B8\u09AE\u09CD\u09AA\u09A6", numberOfAyahs: 75, revelationType: "Medinan", revelationOrder: 88, juz: [9,10], rukus: 10, sajdas: false },
  { number: 9, name: "\u0627\u0644\u062A\u0648\u0628\u0629", englishName: "At-Tawbah", englishNameTranslation: "The Repentance", banglaName: "\u0986\u09A4-\u09A4\u09BE\u0993\u09AC\u09BE\u09B9", banglaNameTranslation: "\u09A4\u09BE\u0993\u09AC\u09BE\u09B9", numberOfAyahs: 129, revelationType: "Medinan", revelationOrder: 113, juz: [10,11], rukus: 16, sajdas: false },
  { number: 10, name: "\u064A\u0648\u0646\u0633", englishName: "Yunus", englishNameTranslation: "Jonah", banglaName: "\u0987\u0989\u09A8\u09C1\u09B8", banglaNameTranslation: "\u0987\u0989\u09A8\u09C1\u09B8", numberOfAyahs: 109, revelationType: "Meccan", revelationOrder: 51, juz: [11], rukus: 11, sajdas: false },
  { number: 11, name: "\u0647\u0648\u062F", englishName: "Hud", englishNameTranslation: "Hud", banglaName: "\u09B9\u09C1\u09A6", banglaNameTranslation: "\u09B9\u09C1\u09A6", numberOfAyahs: 123, revelationType: "Meccan", revelationOrder: 52, juz: [11,12], rukus: 10, sajdas: false },
  { number: 12, name: "\u064A\u0648\u0633\u0641", englishName: "Yusuf", englishNameTranslation: "Joseph", banglaName: "\u0987\u0989\u09B8\u09C1\u09AB", banglaNameTranslation: "\u0987\u0989\u09B8\u09C1\u09AB", numberOfAyahs: 111, revelationType: "Meccan", revelationOrder: 53, juz: [12,13], rukus: 12, sajdas: false },
  { number: 13, name: "\u0627\u0644\u0631\u0639\u062F", englishName: "Ar-Ra'd", englishNameTranslation: "The Thunder", banglaName: "\u0986\u09B0-\u09B0\u09BE\u09A6", banglaNameTranslation: "\u09AC\u099C\u09CD\u09B0\u09A7\u09CD\u09AC\u09A8\u09BF", numberOfAyahs: 43, revelationType: "Medinan", revelationOrder: 96, juz: [13], rukus: 6, sajdas: true },
  { number: 14, name: "\u0625\u0628\u0631\u0627\u0647\u064A\u0645", englishName: "Ibrahim", englishNameTranslation: "Abraham", banglaName: "\u0987\u09AC\u09B0\u09BE\u09B9\u09C0\u09AE", banglaNameTranslation: "\u0987\u09AC\u09B0\u09BE\u09B9\u09C0\u09AE", numberOfAyahs: 52, revelationType: "Meccan", revelationOrder: 72, juz: [13], rukus: 7, sajdas: false },
  { number: 15, name: "\u0627\u0644\u062D\u062C\u0631", englishName: "Al-Hijr", englishNameTranslation: "The Rocky Tract", banglaName: "\u0986\u09B2-\u09B9\u09BF\u099C\u09B0", banglaNameTranslation: "\u09AA\u09BE\u09A5\u09B0\u09AE\u09AF\u09BC \u09AA\u09A5", numberOfAyahs: 99, revelationType: "Meccan", revelationOrder: 54, juz: [14], rukus: 6, sajdas: false },
  { number: 16, name: "\u0627\u0644\u0646\u062D\u0644", englishName: "An-Nahl", englishNameTranslation: "The Bee", banglaName: "\u0986\u09A8-\u09A8\u09BE\u09B9\u09B2", banglaNameTranslation: "\u09AE\u09CC\u09AE\u09BE\u099B\u09BF", numberOfAyahs: 128, revelationType: "Meccan", revelationOrder: 70, juz: [14], rukus: 16, sajdas: true },
  { number: 17, name: "\u0627\u0644\u0625\u0633\u0631\u0627\u0621", englishName: "Al-Isra", englishNameTranslation: "The Night Journey", banglaName: "\u0986\u09B2-\u0987\u09B8\u09B0\u09BE", banglaNameTranslation: "\u09B0\u09BE\u09A4\u09CD\u09B0\u09BF \u09AD\u09CD\u09B0\u09AE\u09A3", numberOfAyahs: 111, revelationType: "Meccan", revelationOrder: 50, juz: [15], rukus: 12, sajdas: false },
  { number: 18, name: "\u0627\u0644\u0643\u0647\u0641", englishName: "Al-Kahf", englishNameTranslation: "The Cave", banglaName: "\u0986\u09B2-\u0995\u09BE\u09B9\u09AB", banglaNameTranslation: "\u0997\u09C1\u09B9\u09BE", numberOfAyahs: 110, revelationType: "Meccan", revelationOrder: 69, juz: [15,16], rukus: 12, sajdas: false },
  { number: 19, name: "\u0645\u0631\u064A\u0645", englishName: "Maryam", englishNameTranslation: "Mary", banglaName: "\u09AE\u09B0\u09BF\u09AF\u09BC\u09AE", banglaNameTranslation: "\u09AE\u09B0\u09BF\u09AF\u09BC\u09AE", numberOfAyahs: 98, revelationType: "Meccan", revelationOrder: 44, juz: [16], rukus: 6, sajdas: true },
  { number: 20, name: "\u0637\u0647", englishName: "Ta-Ha", englishNameTranslation: "Ta-Ha", banglaName: "\u09A4\u09CD\b-\u09B9\u09BE", banglaNameTranslation: "\u09A4\u09CD\u09AC-\u09B9\u09BE", numberOfAyahs: 135, revelationType: "Meccan", revelationOrder: 45, juz: [16], rukus: 8, sajdas: false },
  { number: 21, name: "\u0627\u0644\u0623\u0646\u0628\u064A\u0627\u0621", englishName: "Al-Anbiya", englishNameTranslation: "The Prophets", banglaName: "\u0986\u09B2-\u0986\u09AE\u09CD\u09AC\u09BF\u09AF\u09BC\u09BE", banglaNameTranslation: "\u09A8\u09AC\u09C0\u0997\u09A3", numberOfAyahs: 112, revelationType: "Meccan", revelationOrder: 73, juz: [17], rukus: 7, sajdas: false },
  { number: 22, name: "\u0627\u0644\u062D\u062C", englishName: "Al-Hajj", englishNameTranslation: "The Pilgrimage", banglaName: "\u0986\u09B2-\u09B9\u099C\u09CD\u099C", banglaNameTranslation: "\u09B9\u099C\u09CD\u099C", numberOfAyahs: 78, revelationType: "Medinan", revelationOrder: 103, juz: [17], rukus: 10, sajdas: true },
  { number: 23, name: "\u0627\u0644\u0645\u0624\u0645\u0646\u0648\u0646", englishName: "Al-Mu'minun", englishNameTranslation: "The Believers", banglaName: "\u0986\u09B2-\u09AE\u09C1\u09AE\u09BF\u09A8\u09C1\u09A8", banglaNameTranslation: "\u09AE\u09C1\u09AE\u09BF\u09A8\u0997\u09A3", numberOfAyahs: 118, revelationType: "Meccan", revelationOrder: 74, juz: [18], rukus: 6, sajdas: false },
  { number: 24, name: "\u0627\u0644\u0646\u0648\u0631", englishName: "An-Nur", englishNameTranslation: "The Light", banglaName: "\u0986\u09A8-\u09A8\u09C2\u09B0", banglaNameTranslation: "\u0986\u09B2\u09CB", numberOfAyahs: 64, revelationType: "Medinan", revelationOrder: 102, juz: [18], rukus: 9, sajdas: false },
  { number: 25, name: "\u0627\u0644\u0641\u0631\u0642\u0627\u0646", englishName: "Al-Furqan", englishNameTranslation: "The Criterion", banglaName: "\u0986\u09B2-\u09AB\u09C1\u09B0\u0995\u09BE\u09A8", banglaNameTranslation: "\u09B8\u09A4\u09CD\u09AF-\u09AE\u09BF\u09A5\u09CD\u09AF\u09BE\u09B0 \u09AA\u09BE\u09B0\u09CD\u09A5\u0995\u09CD\u09AF\u0995\u09BE\u09B0\u09C0", numberOfAyahs: 77, revelationType: "Meccan", revelationOrder: 42, juz: [18,19], rukus: 6, sajdas: true },
  { number: 26, name: "\u0627\u0644\u0634\u0639\u0631\u0627\u0621", englishName: "Ash-Shu'ara", englishNameTranslation: "The Poets", banglaName: "\u0986\u09B6-\u09B6\u09C1\u0986\u09B0\u09BE", banglaNameTranslation: "\u0995\u09AC\u09BF\u0997\u09A3", numberOfAyahs: 227, revelationType: "Meccan", revelationOrder: 47, juz: [19], rukus: 11, sajdas: false },
  { number: 27, name: "\u0627\u0644\u0646\u0645\u0644", englishName: "An-Naml", englishNameTranslation: "The Ant", banglaName: "\u0986\u09A8-\u09A8\u09BE\u09AE\u09B2", banglaNameTranslation: "\u09AA\u09BF\u09AA\u09C0\u09B2\u09BF\u0995\u09BE", numberOfAyahs: 93, revelationType: "Meccan", revelationOrder: 48, juz: [19,20], rukus: 7, sajdas: true },
  { number: 28, name: "\u0627\u0644\u0642\u0635\u0635", englishName: "Al-Qasas", englishNameTranslation: "The Stories", banglaName: "\u0986\u09B2-\u0995\u09BE\u09B8\u09BE\u09B8", banglaNameTranslation: "\u0995\u09BE\u09B9\u09BF\u09A8\u09C0", numberOfAyahs: 88, revelationType: "Meccan", revelationOrder: 49, juz: [20], rukus: 8, sajdas: false },
  { number: 29, name: "\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062A", englishName: "Al-Ankabut", englishNameTranslation: "The Spider", banglaName: "\u0986\u09B2-\u0986\u09A8\u0995\u09BE\u09AC\u09C1\u09A4", banglaNameTranslation: "\u09AE\u09BE\u0995\u09A1\u09BC\u09B8\u09BE", numberOfAyahs: 69, revelationType: "Meccan", revelationOrder: 85, juz: [20,21], rukus: 7, sajdas: false },
  { number: 30, name: "\u0627\u0644\u0631\u0648\u0645", englishName: "Ar-Rum", englishNameTranslation: "The Romans", banglaName: "\u0986\u09B0-\u09B0\u09C2\u09AE", banglaNameTranslation: "\u09B0\u09CB\u09AE\u09BE\u09A8", numberOfAyahs: 60, revelationType: "Meccan", revelationOrder: 84, juz: [21], rukus: 6, sajdas: false },
  { number: 31, name: "\u0644\u0642\u0645\u0627\u0646", englishName: "Luqman", englishNameTranslation: "Luqman", banglaName: "\u09B2\u09C1\u0995\u09AE\u09BE\u09A8", banglaNameTranslation: "\u09B2\u09C1\u0995\u09AE\u09BE\u09A8", numberOfAyahs: 34, revelationType: "Meccan", revelationOrder: 57, juz: [21], rukus: 4, sajdas: false },
  { number: 32, name: "\u0627\u0644\u0633\u062C\u062F\u0629", englishName: "As-Sajdah", englishNameTranslation: "The Prostration", banglaName: "\u0986\u09B8-\u09B8\u09BE\u099C\u09A6\u09BE\u09B9", banglaNameTranslation: "\u09B8\u09BF\u099C\u09A6\u09BE", numberOfAyahs: 30, revelationType: "Meccan", revelationOrder: 75, juz: [21], rukus: 3, sajdas: true },
  { number: 33, name: "\u0627\u0644\u0623\u062D\u0632\u0627\u0628", englishName: "Al-Ahzab", englishNameTranslation: "The Combined Forces", banglaName: "\u0986\u09B2-\u0986\u09B9\u09AF\u09BE\u09AC", banglaNameTranslation: "\u09AE\u09BF\u09B2\u09BF\u09A4 \u09AC\u09BE\u09B9\u09BF\u09A8\u09C0", numberOfAyahs: 73, revelationType: "Medinan", revelationOrder: 90, juz: [21,22], rukus: 9, sajdas: false },
  { number: 34, name: "\u0633\u0628\u0623", englishName: "Saba", englishNameTranslation: "Sheba", banglaName: "\u09B8\u09BE\u09AC\u09BE", banglaNameTranslation: "\u09B8\u09BE\u09AC\u09BE", numberOfAyahs: 54, revelationType: "Meccan", revelationOrder: 58, juz: [22], rukus: 6, sajdas: false },
  { number: 35, name: "\u0641\u0627\u0637\u0631", englishName: "Fatir", englishNameTranslation: "The Originator", banglaName: "\u09AB\u09BE\u09A4\u09BF\u09B0", banglaNameTranslation: "\u09B8\u09CD\u09B0\u09B7\u09CD\u099F\u09BE", numberOfAyahs: 45, revelationType: "Meccan", revelationOrder: 43, juz: [22], rukus: 5, sajdas: false },
  { number: 36, name: "\u064A\u0633", englishName: "Ya-Sin", englishNameTranslation: "Ya-Sin", banglaName: "\u0987\u09AF\u09BC\u09BE\u09B8\u09C0\u09A8", banglaNameTranslation: "\u0987\u09AF\u09BC\u09BE\u09B8\u09C0\u09A8", numberOfAyahs: 83, revelationType: "Meccan", revelationOrder: 41, juz: [22,23], rukus: 5, sajdas: false },
  { number: 37, name: "\u0627\u0644\u0635\u0627\u0641\u0627\u062A", englishName: "As-Saffat", englishNameTranslation: "Those Ranged in Ranks", banglaName: "\u0986\u09B8-\u09B8\u09BE\u09AB\u09AB\u09BE\u09A4", banglaNameTranslation: "\u09B8\u09BE\u09B0\u09BF\u09AC\u09A6\u09CD\u09A7\u0997\u09A3", numberOfAyahs: 182, revelationType: "Meccan", revelationOrder: 56, juz: [23], rukus: 5, sajdas: false },
  { number: 38, name: "\u0635", englishName: "Sad", englishNameTranslation: "Sad", banglaName: "\u09B8\u09CB\u09AF\u09BC\u09BE\u09A6", banglaNameTranslation: "\u09B8\u09CB\u09AF\u09BC\u09BE\u09A6", numberOfAyahs: 88, revelationType: "Meccan", revelationOrder: 38, juz: [23], rukus: 5, sajdas: true },
  { number: 39, name: "\u0627\u0644\u0632\u0645\u0631", englishName: "Az-Zumar", englishNameTranslation: "The Groups", banglaName: "\u0986\u09AF-\u09AF\u09C1\u09AE\u09BE\u09B0", banglaNameTranslation: "\u09A6\u09B2\u09B8\u09AE\u09C2\u09B9", numberOfAyahs: 75, revelationType: "Meccan", revelationOrder: 59, juz: [23,24], rukus: 8, sajdas: false },
  { number: 40, name: "\u063A\u0627\u0641\u0631", englishName: "Ghafir", englishNameTranslation: "The Forgiver", banglaName: "\u0997\u09BE\u09AB\u09BF\u09B0", banglaNameTranslation: "\u0995\u09CD\u09B7\u09AE\u09BE\u0995\u09BE\u09B0\u09C0", numberOfAyahs: 85, revelationType: "Meccan", revelationOrder: 60, juz: [24], rukus: 9, sajdas: false },
  { number: 41, name: "\u0641\u0635\u0644\u062A", englishName: "Fussilat", englishNameTranslation: "Explained in Detail", banglaName: "\u09AB\u09C1\u09B8\u09B8\u09BF\u09B2\u09BE\u09A4", banglaNameTranslation: "\u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4", numberOfAyahs: 54, revelationType: "Meccan", revelationOrder: 61, juz: [24,25], rukus: 6, sajdas: true },
  { number: 42, name: "\u0627\u0644\u0634\u0648\u0631\u0649", englishName: "Ash-Shura", englishNameTranslation: "The Consultation", banglaName: "\u0986\u09B6-\u09B6\u09C2\u09B0\u09BE", banglaNameTranslation: "\u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6", numberOfAyahs: 53, revelationType: "Meccan", revelationOrder: 62, juz: [25], rukus: 5, sajdas: false },
  { number: 43, name: "\u0627\u0644\u0632\u062E\u0631\u0641", englishName: "Az-Zukhruf", englishNameTranslation: "The Gold Adornments", banglaName: "\u0986\u09AF-\u09AF\u09C1\u0996\u09B0\u09C1\u09AB", banglaNameTranslation: "\u09B8\u09CD\u09AC\u09B0\u09CD\u09A3\u09BE\u09B2\u0999\u09CD\u0995\u09BE\u09B0", numberOfAyahs: 89, revelationType: "Meccan", revelationOrder: 63, juz: [25], rukus: 7, sajdas: false },
  { number: 44, name: "\u0627\u0644\u062F\u062E\u0627\u0646", englishName: "Ad-Dukhan", englishNameTranslation: "The Smoke", banglaName: "\u0986\u09A6-\u09A6\u09C1\u0996\u09BE\u09A8", banglaNameTranslation: "\u09A7\u09CB\u0981\u09AF\u09BC\u09BE", numberOfAyahs: 59, revelationType: "Meccan", revelationOrder: 64, juz: [25], rukus: 3, sajdas: false },
  { number: 45, name: "\u0627\u0644\u062C\u0627\u062B\u064A\u0629", englishName: "Al-Jathiyah", englishNameTranslation: "The Crouching", banglaName: "\u0986\u09B2-\u099C\u09BE\u09B8\u09BF\u09AF\u09BC\u09BE", banglaNameTranslation: "\u09A8\u09A4\u099C\u09BE\u09A8\u09C1", numberOfAyahs: 37, revelationType: "Meccan", revelationOrder: 65, juz: [25], rukus: 4, sajdas: false },
  { number: 46, name: "\u0627\u0644\u0623\u062D\u0642\u0627\u0641", englishName: "Al-Ahqaf", englishNameTranslation: "The Wind-Curved Sandhills", banglaName: "\u0986\u09B2-\u0986\u09B9\u0995\u09BE\u09AB", banglaNameTranslation: "\u09AC\u09BE\u09B2\u09C1\u0995\u09BE\u09A4\u09B2", numberOfAyahs: 35, revelationType: "Meccan", revelationOrder: 66, juz: [26], rukus: 4, sajdas: false },
  { number: 47, name: "\u0645\u062D\u0645\u062F", englishName: "Muhammad", englishNameTranslation: "Muhammad", banglaName: "\u09AE\u09C1\u09B9\u09BE\u09AE\u09CD\u09AE\u09A6", banglaNameTranslation: "\u09AE\u09C1\u09B9\u09BE\u09AE\u09CD\u09AE\u09A6", numberOfAyahs: 38, revelationType: "Medinan", revelationOrder: 95, juz: [26], rukus: 4, sajdas: false },
  { number: 48, name: "\u0627\u0644\u0641\u062A\u062D", englishName: "Al-Fath", englishNameTranslation: "The Victory", banglaName: "\u0986\u09B2-\u09AB\u09BE\u09A4\u09B9", banglaNameTranslation: "\u09AC\u09BF\u099C\u09AF\u09BC", numberOfAyahs: 29, revelationType: "Medinan", revelationOrder: 111, juz: [26], rukus: 4, sajdas: false },
  { number: 49, name: "\u0627\u0644\u062D\u062C\u0631\u0627\u062A", englishName: "Al-Hujurat", englishNameTranslation: "The Rooms", banglaName: "\u0986\u09B2-\u09B9\u09C1\u099C\u09C1\u09B0\u09BE\u09A4", banglaNameTranslation: "\u0995\u0995\u09CD\u09B7\u09B8\u09AE\u09C2\u09B9", numberOfAyahs: 18, revelationType: "Medinan", revelationOrder: 106, juz: [26], rukus: 2, sajdas: false },
  { number: 50, name: "\u0642", englishName: "Qaf", englishNameTranslation: "Qaf", banglaName: "\u0995\u09BE\u09AB", banglaNameTranslation: "\u0995\u09BE\u09AB", numberOfAyahs: 45, revelationType: "Meccan", revelationOrder: 34, juz: [26], rukus: 3, sajdas: false },
  { number: 51, name: "\u0627\u0644\u0630\u0627\u0631\u064A\u0627\u062A", englishName: "Adh-Dhariyat", englishNameTranslation: "The Winnowing Winds", banglaName: "\u0986\u09AF-\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09A4", banglaNameTranslation: "\u09AC\u09BF\u0995\u09CD\u09B7\u09C7\u09AA\u0995\u09BE\u09B0\u09C0 \u09AC\u09BE\u09A4\u09BE\u09B8", numberOfAyahs: 60, revelationType: "Meccan", revelationOrder: 67, juz: [26,27], rukus: 3, sajdas: false },
  { number: 52, name: "\u0627\u0644\u0637\u0648\u0631", englishName: "At-Tur", englishNameTranslation: "The Mount", banglaName: "\u0986\u09A4-\u09A4\u09C2\u09B0", banglaNameTranslation: "\u09AA\u09BE\u09B9\u09BE\u09A1\u09BC", numberOfAyahs: 49, revelationType: "Meccan", revelationOrder: 76, juz: [27], rukus: 2, sajdas: false },
  { number: 53, name: "\u0627\u0644\u0646\u062C\u0645", englishName: "An-Najm", englishNameTranslation: "The Star", banglaName: "\u0986\u09A8-\u09A8\u09BE\u099C\u09AE", banglaNameTranslation: "\u09A8\u0995\u09CD\u09B7\u09A4\u09CD\u09B0", numberOfAyahs: 62, revelationType: "Meccan", revelationOrder: 23, juz: [27], rukus: 3, sajdas: true },
  { number: 54, name: "\u0627\u0644\u0642\u0645\u0631", englishName: "Al-Qamar", englishNameTranslation: "The Moon", banglaName: "\u0986\u09B2-\u0995\u09BE\u09AE\u09BE\u09B0", banglaNameTranslation: "\u099A\u09BE\u0981\u09A6", numberOfAyahs: 55, revelationType: "Meccan", revelationOrder: 37, juz: [27], rukus: 3, sajdas: false },
  { number: 55, name: "\u0627\u0644\u0631\u062D\u0645\u0646", englishName: "Ar-Rahman", englishNameTranslation: "The Most Merciful", banglaName: "\u0986\u09B0-\u09B0\u09B9\u09AE\u09BE\u09A8", banglaNameTranslation: "\u09AA\u09B0\u09AE \u0995\u09B0\u09C1\u09A3\u09BE\u09AE\u09AF\u09BC", numberOfAyahs: 78, revelationType: "Medinan", revelationOrder: 97, juz: [27], rukus: 3, sajdas: false },
  { number: 56, name: "\u0627\u0644\u0648\u0627\u0642\u0639\u0629", englishName: "Al-Waqi'ah", englishNameTranslation: "The Inevitable", banglaName: "\u0986\u09B2-\u0993\u09AF\u09BC\u09BE\u0995\u09BF\u09AF\u09BC\u09BE\u09B9", banglaNameTranslation: "\u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u0998\u099F\u09A8\u09BE", numberOfAyahs: 96, revelationType: "Meccan", revelationOrder: 46, juz: [27], rukus: 3, sajdas: false },
  { number: 57, name: "\u0627\u0644\u062D\u062F\u064A\u062F", englishName: "Al-Hadid", englishNameTranslation: "The Iron", banglaName: "\u0986\u09B2-\u09B9\u09BE\u09A6\u09C0\u09A6", banglaNameTranslation: "\u09B2\u09CB\u09B9\u09BE", numberOfAyahs: 29, revelationType: "Medinan", revelationOrder: 94, juz: [27], rukus: 4, sajdas: false },
  { number: 58, name: "\u0627\u0644\u0645\u062C\u0627\u062F\u0644\u0629", englishName: "Al-Mujadila", englishNameTranslation: "The Pleading Woman", banglaName: "\u0986\u09B2-\u09AE\u09C1\u099C\u09BE\u09A6\u09BF\u09B2\u09BE", banglaNameTranslation: "\u09A4\u09B0\u09CD\u0995\u0995\u09BE\u09B0\u09BF\u09A8\u09C0", numberOfAyahs: 22, revelationType: "Medinan", revelationOrder: 105, juz: [28], rukus: 3, sajdas: false },
  { number: 59, name: "\u0627\u0644\u062D\u0634\u0631", englishName: "Al-Hashr", englishNameTranslation: "The Exile", banglaName: "\u0986\u09B2-\u09B9\u09BE\u09B6\u09B0", banglaNameTranslation: "\u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u09B8\u09A8", numberOfAyahs: 24, revelationType: "Medinan", revelationOrder: 101, juz: [28], rukus: 3, sajdas: false },
  { number: 60, name: "\u0627\u0644\u0645\u0645\u062A\u062D\u0646\u0629", englishName: "Al-Mumtahanah", englishNameTranslation: "The Woman to be Examined", banglaName: "\u0986\u09B2-\u09AE\u09C1\u09AE\u09A4\u09BE\u09B9\u09BF\u09A8\u09BE\u09B9", banglaNameTranslation: "\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A8\u09BE\u09B0\u09C0", numberOfAyahs: 13, revelationType: "Medinan", revelationOrder: 91, juz: [28], rukus: 2, sajdas: false },
  { number: 61, name: "\u0627\u0644\u0635\u0641", englishName: "As-Saff", englishNameTranslation: "The Ranks", banglaName: "\u0986\u09B8-\u09B8\u09AB", banglaNameTranslation: "\u09B8\u09BE\u09B0\u09BF", numberOfAyahs: 14, revelationType: "Medinan", revelationOrder: 109, juz: [28], rukus: 2, sajdas: false },
  { number: 62, name: "\u0627\u0644\u062C\u0645\u0639\u0629", englishName: "Al-Jumu'ah", englishNameTranslation: "Friday", banglaName: "\u0986\u09B2-\u099C\u09C1\u09AE\u09C1\u0986\u09B9", banglaNameTranslation: "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0", numberOfAyahs: 11, revelationType: "Medinan", revelationOrder: 110, juz: [28], rukus: 2, sajdas: false },
  { number: 63, name: "\u0627\u0644\u0645\u0646\u0627\u0641\u0642\u0648\u0646", englishName: "Al-Munafiqun", englishNameTranslation: "The Hypocrites", banglaName: "\u0986\u09B2-\u09AE\u09C1\u09A8\u09BE\u09AB\u09BF\u0995\u09C1\u09A8", banglaNameTranslation: "\u09AE\u09C1\u09A8\u09BE\u09AB\u09BF\u0995\u0997\u09A3", numberOfAyahs: 11, revelationType: "Medinan", revelationOrder: 104, juz: [28], rukus: 2, sajdas: false },
  { number: 64, name: "\u0627\u0644\u062A\u063A\u0627\u0628\u0646", englishName: "At-Taghabun", englishNameTranslation: "The Mutual Disillusion", banglaName: "\u0986\u09A4-\u09A4\u09BE\u0997\u09BE\u09AC\u09C1\u09A8", banglaNameTranslation: "\u0995\u09CD\u09B7\u09A4\u09BF\u09AA\u09C2\u09B0\u09A3", numberOfAyahs: 18, revelationType: "Medinan", revelationOrder: 108, juz: [28], rukus: 2, sajdas: false },
  { number: 65, name: "\u0627\u0644\u0637\u0644\u0627\u0642", englishName: "At-Talaq", englishNameTranslation: "The Divorce", banglaName: "\u0986\u09A4-\u09A4\u09BE\u09B2\u09BE\u0995", banglaNameTranslation: "\u09A4\u09BE\u09B2\u09BE\u0995", numberOfAyahs: 12, revelationType: "Medinan", revelationOrder: 99, juz: [28], rukus: 2, sajdas: false },
  { number: 66, name: "\u0627\u0644\u062A\u062D\u0631\u064A\u0645", englishName: "At-Tahrim", englishNameTranslation: "The Prohibition", banglaName: "\u0986\u09A4-\u09A4\u09BE\u09B9\u09B0\u09C0\u09AE", banglaNameTranslation: "\u09A8\u09BF\u09B7\u09C7\u09A7\u09BE\u099C\u09CD\u099E\u09BE", numberOfAyahs: 12, revelationType: "Medinan", revelationOrder: 107, juz: [28], rukus: 2, sajdas: false },
  { number: 67, name: "\u0627\u0644\u0645\u0644\u0643", englishName: "Al-Mulk", englishNameTranslation: "The Sovereignty", banglaName: "\u0986\u09B2-\u09AE\u09C1\u09B2\u0995", banglaNameTranslation: "\u09B0\u09BE\u099C\u09A4\u09CD\u09AC", numberOfAyahs: 30, revelationType: "Meccan", revelationOrder: 77, juz: [29], rukus: 2, sajdas: false },
  { number: 68, name: "\u0627\u0644\u0642\u0644\u0645", englishName: "Al-Qalam", englishNameTranslation: "The Pen", banglaName: "\u0986\u09B2-\u0995\u09BE\u09B2\u09BE\u09AE", banglaNameTranslation: "\u0995\u09B2\u09AE", numberOfAyahs: 52, revelationType: "Meccan", revelationOrder: 2, juz: [29], rukus: 2, sajdas: false },
  { number: 69, name: "\u0627\u0644\u062D\u0627\u0642\u0629", englishName: "Al-Haqqah", englishNameTranslation: "The Reality", banglaName: "\u0986\u09B2-\u09B9\u09BE\u0995\u09CD\u0995\u09BE\u09B9", banglaNameTranslation: "\u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u09B8\u09A4\u09CD\u09AF", numberOfAyahs: 52, revelationType: "Meccan", revelationOrder: 78, juz: [29], rukus: 2, sajdas: false },
  { number: 70, name: "\u0627\u0644\u0645\u0639\u0627\u0631\u062C", englishName: "Al-Ma'arij", englishNameTranslation: "The Ascending Stairways", banglaName: "\u0986\u09B2-\u09AE\u09BE\u0986\u09B0\u09BF\u099C", banglaNameTranslation: "\u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8\u09C7\u09B0 \u09B8\u09CB\u09AA\u09BE\u09A8", numberOfAyahs: 44, revelationType: "Meccan", revelationOrder: 79, juz: [29], rukus: 2, sajdas: false },
  { number: 71, name: "\u0646\u0648\u062D", englishName: "Nuh", englishNameTranslation: "Noah", banglaName: "\u09A8\u09C2\u09B9", banglaNameTranslation: "\u09A8\u09C2\u09B9", numberOfAyahs: 28, revelationType: "Meccan", revelationOrder: 71, juz: [29], rukus: 2, sajdas: false },
  { number: 72, name: "\u0627\u0644\u062C\u0646", englishName: "Al-Jinn", englishNameTranslation: "The Jinn", banglaName: "\u0986\u09B2-\u099C\u09BF\u09A8", banglaNameTranslation: "\u099C\u09BF\u09A8", numberOfAyahs: 28, revelationType: "Meccan", revelationOrder: 40, juz: [29], rukus: 2, sajdas: false },
  { number: 73, name: "\u0627\u0644\u0645\u0632\u0645\u0644", englishName: "Al-Muzzammil", englishNameTranslation: "The Enshrouded One", banglaName: "\u0986\u09B2-\u09AE\u09C1\u09AF\u09CD\u09AF\u09BE\u09AE\u09CD\u09AE\u09BF\u09B2", banglaNameTranslation: "\u09AC\u09B8\u09CD\u09A4\u09CD\u09B0\u09BE\u09AC\u09C3\u09A4", numberOfAyahs: 20, revelationType: "Meccan", revelationOrder: 3, juz: [29], rukus: 2, sajdas: false },
  { number: 74, name: "\u0627\u0644\u0645\u062F\u062B\u0631", englishName: "Al-Muddathir", englishNameTranslation: "The Cloaked One", banglaName: "\u0986\u09B2-\u09AE\u09C1\u09A6\u09CD\u09A6\u09BE\u09B8\u09B8\u09BF\u09B0", banglaNameTranslation: "\u099A\u09BE\u09A6\u09B0 \u0986\u09AC\u09C3\u09A4", numberOfAyahs: 56, revelationType: "Meccan", revelationOrder: 4, juz: [29], rukus: 2, sajdas: false },
  { number: 75, name: "\u0627\u0644\u0642\u064A\u0627\u0645\u0629", englishName: "Al-Qiyamah", englishNameTranslation: "The Resurrection", banglaName: "\u0986\u09B2-\u0995\u09BF\u09AF\u09BC\u09BE\u09AE\u09BE\u09B9", banglaNameTranslation: "\u09AA\u09C1\u09A8\u09B0\u09C1\u09A4\u09CD\u09A5\u09BE\u09A8", numberOfAyahs: 40, revelationType: "Meccan", revelationOrder: 31, juz: [29], rukus: 2, sajdas: false },
  { number: 76, name: "\u0627\u0644\u0625\u0646\u0633\u0627\u0646", englishName: "Al-Insan", englishNameTranslation: "The Human", banglaName: "\u0986\u09B2-\u0987\u09A8\u09B8\u09BE\u09A8", banglaNameTranslation: "\u09AE\u09BE\u09A8\u09AC", numberOfAyahs: 31, revelationType: "Medinan", revelationOrder: 98, juz: [29], rukus: 2, sajdas: false },
  { number: 77, name: "\u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062A", englishName: "Al-Mursalat", englishNameTranslation: "The Emissaries", banglaName: "\u0986\u09B2-\u09AE\u09C1\u09B0\u09B8\u09BE\u09B2\u09BE\u09A4", banglaNameTranslation: "\u09AA\u09CD\u09B0\u09C7\u09B0\u09BF\u09A4", numberOfAyahs: 50, revelationType: "Meccan", revelationOrder: 33, juz: [29], rukus: 2, sajdas: false },
  { number: 78, name: "\u0627\u0644\u0646\u0628\u0623", englishName: "An-Naba", englishNameTranslation: "The Tidings", banglaName: "\u0986\u09A8-\u09A8\u09BE\u09AC\u09BE", banglaNameTranslation: "\u09B8\u0982\u09AC\u09BE\u09A6", numberOfAyahs: 40, revelationType: "Meccan", revelationOrder: 80, juz: [30], rukus: 2, sajdas: false },
  { number: 79, name: "\u0627\u0644\u0646\u0627\u0632\u0639\u0627\u062A", englishName: "An-Nazi'at", englishNameTranslation: "Those Who Drag Forth", banglaName: "\u0986\u09A8-\u09A8\u09BE\u09AF\u09BF\u0986\u09A4", banglaNameTranslation: "\u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0", numberOfAyahs: 46, revelationType: "Meccan", revelationOrder: 81, juz: [30], rukus: 2, sajdas: false },
  { number: 80, name: "\u0639\u0628\u0633", englishName: "Abasa", englishNameTranslation: "He Frowned", banglaName: "\u0986\u09AC\u09BE\u09B8\u09BE", banglaNameTranslation: "\u09AD\u09CD\u09B0\u09C2\u0995\u09C1\u099E\u09CD\u099A\u09BF\u09A4 \u09B9\u09B2\u09C7\u09A8", numberOfAyahs: 42, revelationType: "Meccan", revelationOrder: 24, juz: [30], rukus: 1, sajdas: false },
  { number: 81, name: "\u0627\u0644\u062A\u0643\u0648\u064A\u0631", englishName: "At-Takwir", englishNameTranslation: "The Overthrowing", banglaName: "\u0986\u09A4-\u09A4\u09BE\u0995\u09AC\u09C0\u09B0", banglaNameTranslation: "\u0997\u09C1\u099F\u09BF\u09AF\u09BC\u09C7 \u09A8\u09C7\u0993\u09AF\u09BC\u09BE", numberOfAyahs: 29, revelationType: "Meccan", revelationOrder: 7, juz: [30], rukus: 1, sajdas: false },
  { number: 82, name: "\u0627\u0644\u0627\u0646\u0641\u0637\u0627\u0631", englishName: "Al-Infitar", englishNameTranslation: "The Cleaving", banglaName: "\u0986\u09B2-\u0987\u09A8\u09AB\u09BF\u09A4\u09BE\u09B0", banglaNameTranslation: "\u09AC\u09BF\u09A6\u09C0\u09B0\u09CD\u09A3", numberOfAyahs: 19, revelationType: "Meccan", revelationOrder: 82, juz: [30], rukus: 1, sajdas: false },
  { number: 83, name: "\u0627\u0644\u0645\u0637\u0641\u0641\u064A\u0646", englishName: "Al-Mutaffifin", englishNameTranslation: "The Defrauding", banglaName: "\u0986\u09B2-\u09AE\u09C1\u09A4\u09BE\u09AB\u09AB\u09BF\u09AB\u09C0\u09A8", banglaNameTranslation: "\u09AA\u09CD\u09B0\u09A4\u09BE\u09B0\u0995\u09A6\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF", numberOfAyahs: 36, revelationType: "Meccan", revelationOrder: 86, juz: [30], rukus: 1, sajdas: false },
  { number: 84, name: "\u0627\u0644\u0627\u0646\u0634\u0642\u0627\u0642", englishName: "Al-Inshiqaq", englishNameTranslation: "The Sundering", banglaName: "\u0986\u09B2-\u0987\u09A8\u09B6\u09BF\u0995\u09BE\u0995", banglaNameTranslation: "\u09AC\u09BF\u09A6\u09BE\u09B0\u09A3", numberOfAyahs: 25, revelationType: "Meccan", revelationOrder: 83, juz: [30], rukus: 1, sajdas: true },
  { number: 85, name: "\u0627\u0644\u0628\u0631\u0648\u062C", englishName: "Al-Buruj", englishNameTranslation: "The Mansions of the Stars", banglaName: "\u0986\u09B2-\u09AC\u09C1\u09B0\u09C1\u099C", banglaNameTranslation: "\u09A8\u0995\u09CD\u09B7\u09A4\u09CD\u09B0\u09AA\u09C1\u099E\u09CD\u099C", numberOfAyahs: 22, revelationType: "Meccan", revelationOrder: 27, juz: [30], rukus: 1, sajdas: false },
  { number: 86, name: "\u0627\u0644\u0637\u0627\u0631\u0642", englishName: "At-Tariq", englishNameTranslation: "The Morning Star", banglaName: "\u0986\u09A4-\u09A4\u09BE\u09B0\u09BF\u0995", banglaNameTranslation: "\u09B0\u09BE\u09A4\u09C7\u09B0 \u0986\u0997\u09A8\u09CD\u09A4\u09C1\u0995", numberOfAyahs: 17, revelationType: "Meccan", revelationOrder: 36, juz: [30], rukus: 1, sajdas: false },
  { number: 87, name: "\u0627\u0644\u0623\u0639\u0644\u0649", englishName: "Al-A'la", englishNameTranslation: "The Most High", banglaName: "\u0986\u09B2-\u0986\u09B2\u09BE", banglaNameTranslation: "\u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A", numberOfAyahs: 19, revelationType: "Meccan", revelationOrder: 8, juz: [30], rukus: 1, sajdas: false },
  { number: 88, name: "\u0627\u0644\u063A\u0627\u0634\u064A\u0629", englishName: "Al-Ghashiyah", englishNameTranslation: "The Overwhelming", banglaName: "\u0986\u09B2-\u0997\u09BE\u09B6\u09BF\u09AF\u09BC\u09BE\u09B9", banglaNameTranslation: "\u09AA\u09B0\u09BF\u09AC\u09CD\u09AF\u09BE\u09AA\u09CD\u09A4 \u0998\u099F\u09A8\u09BE", numberOfAyahs: 26, revelationType: "Meccan", revelationOrder: 68, juz: [30], rukus: 1, sajdas: false },
  { number: 89, name: "\u0627\u0644\u0641\u062C\u0631", englishName: "Al-Fajr", englishNameTranslation: "The Dawn", banglaName: "\u0986\u09B2-\u09AB\u09BE\u099C\u09B0", banglaNameTranslation: "\u09AD\u09CB\u09B0", numberOfAyahs: 30, revelationType: "Meccan", revelationOrder: 10, juz: [30], rukus: 1, sajdas: false },
  { number: 90, name: "\u0627\u0644\u0628\u0644\u062F", englishName: "Al-Balad", englishNameTranslation: "The City", banglaName: "\u0986\u09B2-\u09AC\u09BE\u09B2\u09BE\u09A6", banglaNameTranslation: "\u09A8\u0997\u09B0\u09C0", numberOfAyahs: 20, revelationType: "Meccan", revelationOrder: 35, juz: [30], rukus: 1, sajdas: false },
  { number: 91, name: "\u0627\u0644\u0634\u0645\u0633", englishName: "Ash-Shams", englishNameTranslation: "The Sun", banglaName: "\u0986\u09B6-\u09B6\u09BE\u09AE\u09B8", banglaNameTranslation: "\u09B8\u09C2\u09B0\u09CD\u09AF", numberOfAyahs: 15, revelationType: "Meccan", revelationOrder: 26, juz: [30], rukus: 1, sajdas: false },
  { number: 92, name: "\u0627\u0644\u0644\u064A\u0644", englishName: "Al-Layl", englishNameTranslation: "The Night", banglaName: "\u0986\u09B2-\u09B2\u09BE\u0987\u09B2", banglaNameTranslation: "\u09B0\u09BE\u09A4\u09CD\u09B0\u09BF", numberOfAyahs: 21, revelationType: "Meccan", revelationOrder: 9, juz: [30], rukus: 1, sajdas: false },
  { number: 93, name: "\u0627\u0644\u0636\u062D\u0649", englishName: "Ad-Duhaa", englishNameTranslation: "The Morning Hours", banglaName: "\u0986\u09A6-\u09A6\u09C1\u09B9\u09BE", banglaNameTranslation: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8", numberOfAyahs: 11, revelationType: "Meccan", revelationOrder: 11, juz: [30], rukus: 1, sajdas: false },
  { number: 94, name: "\u0627\u0644\u0634\u0631\u062D", englishName: "Ash-Sharh", englishNameTranslation: "The Relief", banglaName: "\u0986\u09B6-\u09B6\u09BE\u09B0\u09B9", banglaNameTranslation: "\u09AC\u0995\u09CD\u09B7 \u0989\u09A8\u09CD\u09AE\u09CB\u099A\u09A8", numberOfAyahs: 8, revelationType: "Meccan", revelationOrder: 12, juz: [30], rukus: 1, sajdas: false },
  { number: 95, name: "\u0627\u0644\u062A\u064A\u0646", englishName: "At-Tin", englishNameTranslation: "The Fig", banglaName: "\u0986\u09A4-\u09A4\u09C0\u09A8", banglaNameTranslation: "\u09A1\u09C1\u09AE\u09C1\u09B0", numberOfAyahs: 8, revelationType: "Meccan", revelationOrder: 28, juz: [30], rukus: 1, sajdas: false },
  { number: 96, name: "\u0627\u0644\u0639\u0644\u0642", englishName: "Al-Alaq", englishNameTranslation: "The Clot", banglaName: "\u0986\u09B2-\u0986\u09B2\u09BE\u0995", banglaNameTranslation: "\u099C\u09AE\u09BE\u099F \u09B0\u0995\u09CD\u09A4", numberOfAyahs: 19, revelationType: "Meccan", revelationOrder: 1, juz: [30], rukus: 1, sajdas: true },
  { number: 97, name: "\u0627\u0644\u0642\u062F\u0631", englishName: "Al-Qadr", englishNameTranslation: "The Power", banglaName: "\u0986\u09B2-\u0995\u09A6\u09B0", banglaNameTranslation: "\u09AE\u09B9\u09BF\u09AE\u09BE\u09A8\u09CD\u09AC\u09BF\u09A4 \u09B0\u09BE\u09A4", numberOfAyahs: 5, revelationType: "Meccan", revelationOrder: 25, juz: [30], rukus: 1, sajdas: false },
  { number: 98, name: "\u0627\u0644\u0628\u064A\u0646\u0629", englishName: "Al-Bayyinah", englishNameTranslation: "The Clear Proof", banglaName: "\u0986\u09B2-\u09AC\u09BE\u0987\u09AF\u09BC\u09BF\u09A8\u09BE\u09B9", banglaNameTranslation: "\u09B8\u09CD\u09AA\u09B7\u09CD\u099F \u09AA\u09CD\u09B0\u09AE\u09BE\u09A3", numberOfAyahs: 8, revelationType: "Medinan", revelationOrder: 100, juz: [30], rukus: 1, sajdas: false },
  { number: 99, name: "\u0627\u0644\u0632\u0644\u0632\u0644\u0629", englishName: "Az-Zalzalah", englishNameTranslation: "The Earthquake", banglaName: "\u0986\u09AF-\u09AF\u09BE\u09B2\u09AF\u09BE\u09B2\u09BE\u09B9", banglaNameTranslation: "\u09AD\u09C2\u09AE\u09BF\u0995\u09AE\u09CD\u09AA", numberOfAyahs: 8, revelationType: "Medinan", revelationOrder: 93, juz: [30], rukus: 1, sajdas: false },
  { number: 100, name: "\u0627\u0644\u0639\u0627\u062F\u064A\u0627\u062A", englishName: "Al-Adiyat", englishNameTranslation: "The Courser", banglaName: "\u0986\u09B2-\u0986\u09A6\u09BF\u09AF\u09BC\u09BE\u09A4", banglaNameTranslation: "\u0985\u09AD\u09BF\u09AF\u09BE\u09A8\u0995\u09BE\u09B0\u09C0", numberOfAyahs: 11, revelationType: "Meccan", revelationOrder: 14, juz: [30], rukus: 1, sajdas: false },
  { number: 101, name: "\u0627\u0644\u0642\u0627\u0631\u0639\u0629", englishName: "Al-Qari'ah", englishNameTranslation: "The Calamity", banglaName: "\u0986\u09B2-\u0995\u09BE\u09B0\u09BF\u0986\u09B9", banglaNameTranslation: "\u09AE\u09B9\u09BE\u09AC\u09BF\u09AA\u09A6", numberOfAyahs: 11, revelationType: "Meccan", revelationOrder: 30, juz: [30], rukus: 1, sajdas: false },
  { number: 102, name: "\u0627\u0644\u062A\u0643\u0627\u062B\u0631", englishName: "At-Takathur", englishNameTranslation: "The Rivalry in World Increase", banglaName: "\u0986\u09A4-\u09A4\u09BE\u0995\u09BE\u09B8\u09C1\u09B0", banglaNameTranslation: "\u09AA\u09CD\u09B0\u09BE\u099A\u09C1\u09B0\u09CD\u09AF\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AF\u09CB\u0997\u09BF\u09A4\u09BE", numberOfAyahs: 8, revelationType: "Meccan", revelationOrder: 16, juz: [30], rukus: 1, sajdas: false },
  { number: 103, name: "\u0627\u0644\u0639\u0635\u0631", englishName: "Al-Asr", englishNameTranslation: "The Declining Day", banglaName: "\u0986\u09B2-\u0986\u09B8\u09B0", banglaNameTranslation: "\u09B8\u09AE\u09AF\u09BC", numberOfAyahs: 3, revelationType: "Meccan", revelationOrder: 13, juz: [30], rukus: 1, sajdas: false },
  { number: 104, name: "\u0627\u0644\u0647\u0645\u0632\u0629", englishName: "Al-Humazah", englishNameTranslation: "The Traducer", banglaName: "\u0986\u09B2-\u09B9\u09C1\u09AE\u09BE\u09AF\u09BE\u09B9", banglaNameTranslation: "\u09AA\u09B6\u09CD\u099A\u09BE\u09A4\u09C7 \u09A8\u09BF\u09A8\u09CD\u09A6\u09BE\u0995\u09BE\u09B0\u09C0", numberOfAyahs: 9, revelationType: "Meccan", revelationOrder: 32, juz: [30], rukus: 1, sajdas: false },
  { number: 105, name: "\u0627\u0644\u0641\u064A\u0644", englishName: "Al-Fil", englishNameTranslation: "The Elephant", banglaName: "\u0986\u09B2-\u09AB\u09C0\u09B2", banglaNameTranslation: "\u09B9\u09BE\u09A4\u09C0", numberOfAyahs: 5, revelationType: "Meccan", revelationOrder: 19, juz: [30], rukus: 1, sajdas: false },
  { number: 106, name: "\u0642\u0631\u064A\u0634", englishName: "Quraysh", englishNameTranslation: "Quraysh", banglaName: "\u0995\u09C1\u09B0\u09BE\u0987\u09B6", banglaNameTranslation: "\u0995\u09C1\u09B0\u09BE\u0987\u09B6", numberOfAyahs: 4, revelationType: "Meccan", revelationOrder: 29, juz: [30], rukus: 1, sajdas: false },
  { number: 107, name: "\u0627\u0644\u0645\u0627\u0639\u0648\u0646", englishName: "Al-Ma'un", englishNameTranslation: "The Small Kindnesses", banglaName: "\u0986\u09B2-\u09AE\u09BE\u0989\u09A8", banglaNameTranslation: "\u09B8\u09BE\u09AE\u09BE\u09A8\u09CD\u09AF \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF", numberOfAyahs: 7, revelationType: "Meccan", revelationOrder: 17, juz: [30], rukus: 1, sajdas: false },
  { number: 108, name: "\u0627\u0644\u0643\u0648\u062B\u0631", englishName: "Al-Kawthar", englishNameTranslation: "The Abundance", banglaName: "\u0986\u09B2-\u0995\u09BE\u0989\u09B8\u09BE\u09B0", banglaNameTranslation: "\u09AA\u09CD\u09B0\u09BE\u099A\u09C1\u09B0\u09CD\u09AF", numberOfAyahs: 3, revelationType: "Meccan", revelationOrder: 15, juz: [30], rukus: 1, sajdas: false },
  { number: 109, name: "\u0627\u0644\u0643\u0627\u0641\u0631\u0648\u0646", englishName: "Al-Kafirun", englishNameTranslation: "The Disbelievers", banglaName: "\u0986\u09B2-\u0995\u09BE\u09AB\u09BF\u09B0\u09C1\u09A8", banglaNameTranslation: "\u0985\u09AC\u09BF\u09B6\u09CD\u09AC\u09BE\u09B8\u09C0\u0997\u09A3", numberOfAyahs: 6, revelationType: "Meccan", revelationOrder: 18, juz: [30], rukus: 1, sajdas: false },
  { number: 110, name: "\u0627\u0644\u0646\u0635\u0631", englishName: "An-Nasr", englishNameTranslation: "The Divine Support", banglaName: "\u0986\u09A8-\u09A8\u09BE\u09B8\u09B0", banglaNameTranslation: "\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF", numberOfAyahs: 3, revelationType: "Medinan", revelationOrder: 114, juz: [30], rukus: 1, sajdas: false },
  { number: 111, name: "\u0627\u0644\u0645\u0633\u062F", englishName: "Al-Masad", englishNameTranslation: "The Palm Fiber", banglaName: "\u0986\u09B2-\u09AE\u09BE\u09B8\u09BE\u09A6", banglaNameTranslation: "\u09AA\u09BE\u09AE \u0986\u0981\u09B6", numberOfAyahs: 5, revelationType: "Meccan", revelationOrder: 6, juz: [30], rukus: 1, sajdas: false },
  { number: 112, name: "\u0627\u0644\u0625\u062E\u0644\u0627\u0635", englishName: "Al-Ikhlas", englishNameTranslation: "The Sincerity", banglaName: "\u0986\u09B2-\u0987\u0996\u09B2\u09BE\u09B8", banglaNameTranslation: "\u09A8\u09BF\u09B7\u09CD\u09A0\u09BE", numberOfAyahs: 4, revelationType: "Meccan", revelationOrder: 22, juz: [30], rukus: 1, sajdas: false },
  { number: 113, name: "\u0627\u0644\u0641\u0644\u0642", englishName: "Al-Falaq", englishNameTranslation: "The Daybreak", banglaName: "\u0986\u09B2-\u09AB\u09BE\u09B2\u09BE\u0995", banglaNameTranslation: "\u09A8\u09BF\u09B6\u09BF\u09A5 \u09AD\u09CB\u09B0", numberOfAyahs: 5, revelationType: "Meccan", revelationOrder: 20, juz: [30], rukus: 1, sajdas: false },
  { number: 114, name: "\u0627\u0644\u0646\u0627\u0633", englishName: "An-Nas", englishNameTranslation: "Mankind", banglaName: "\u0986\u09A8-\u09A8\u09BE\u09B8", banglaNameTranslation: "\u09AE\u09BE\u09A8\u09AC\u099C\u09BE\u09A4\u09BF", numberOfAyahs: 6, revelationType: "Meccan", revelationOrder: 21, juz: [30], rukus: 1, sajdas: false }
];

// ============================================================
// JUZ DATA - All 30 Juz (Paras) of the Quran
// ============================================================
const JUZ_DATA = [
  { number: 1, arabicName: "آلم", englishName: "Alif Lam Meem", banglaName: "আলিফ লাম মীম", startSurah: 1, startAyah: 1, endSurah: 2, endAyah: 141 },
  { number: 2, arabicName: "سَيَقُولُ", englishName: "Sayaqool", banglaName: "সাইয়াকুল", startSurah: 2, startAyah: 142, endSurah: 2, endAyah: 252 },
  { number: 3, arabicName: "تِلْكَ الرُّسُلُ", englishName: "Tilkal Rusul", banglaName: "তিলকার রুসুল", startSurah: 2, startAyah: 253, endSurah: 3, endAyah: 92 },
  { number: 4, arabicName: "لَنْ تَنَالُوا", englishName: "Lan Tanaloo", banglaName: "লান তানালু", startSurah: 3, startAyah: 93, endSurah: 4, endAyah: 23 },
  { number: 5, arabicName: "وَالْمُحْصَنَاتُ", englishName: "Wal Muhsanat", banglaName: "ওয়াল মুহসানাত", startSurah: 4, startAyah: 24, endSurah: 4, endAyah: 147 },
  { number: 6, arabicName: "لَا يُحِبُّ اللَّهُ", englishName: "La Yuhibbullah", banglaName: "লা ইউহিব্বুল্লাহ", startSurah: 4, startAyah: 148, endSurah: 5, endAyah: 81 },
  { number: 7, arabicName: "وَإِذَا سَمِعُوا", englishName: "Wa Iza Sami'oo", banglaName: "ওয়া ইযা সামিউ", startSurah: 5, startAyah: 82, endSurah: 6, endAyah: 110 },
  { number: 8, arabicName: "وَلَوْ أَنَّنَا", englishName: "Wa Lau Annana", banglaName: "ওয়া লাও আন্নানা", startSurah: 6, startAyah: 111, endSurah: 7, endAyah: 87 },
  { number: 9, arabicName: "قَالَ الْمَلَأُ", englishName: "Qalal Malau", banglaName: "কালাল মালাউ", startSurah: 7, startAyah: 88, endSurah: 8, endAyah: 40 },
  { number: 10, arabicName: "وَاعْلَمُوا", englishName: "Wa A'lamoo", banglaName: "ওয়া'লামু", startSurah: 8, startAyah: 41, endSurah: 9, endAyah: 92 },
  { number: 11, arabicName: "يَعْتَذِرُونَ", englishName: "Ya'tazeroon", banglaName: "ইয়া'তাযিরুন", startSurah: 9, startAyah: 93, endSurah: 11, endAyah: 5 },
  { number: 12, arabicName: "وَمَا مِنْ دَابَّةٍ", englishName: "Wa Ma Min Daabbah", banglaName: "ওয়া মা মিন দাব্বাতিন", startSurah: 11, startAyah: 6, endSurah: 12, endAyah: 52 },
  { number: 13, arabicName: "وَمَا أُبَرِّئُ", englishName: "Wa Ma Ubarri'u", banglaName: "ওয়া মা উবাররিউ", startSurah: 12, startAyah: 53, endSurah: 14, endAyah: 52 },
  { number: 14, arabicName: "رُبَمَا", englishName: "Rubama", banglaName: "রুবামা", startSurah: 15, startAyah: 1, endSurah: 16, endAyah: 128 },
  { number: 15, arabicName: "سُبْحَانَ الَّذِي", englishName: "Subhanallazi", banglaName: "সুবহানাল্লাযী", startSurah: 17, startAyah: 1, endSurah: 18, endAyah: 74 },
  { number: 16, arabicName: "قَالَ أَلَمْ", englishName: "Qala Alam", banglaName: "কালা আলাম", startSurah: 18, startAyah: 75, endSurah: 20, endAyah: 135 },
  { number: 17, arabicName: "اقْتَرَبَ", englishName: "Iqtaraba", banglaName: "ইকতারাবা", startSurah: 21, startAyah: 1, endSurah: 22, endAyah: 78 },
  { number: 18, arabicName: "قَدْ أَفْلَحَ", englishName: "Qad Aflaha", banglaName: "কাদ আফলাহা", startSurah: 23, startAyah: 1, endSurah: 25, endAyah: 20 },
  { number: 19, arabicName: "وَقَالَ الَّذِينَ", englishName: "Wa Qalallazina", banglaName: "ওয়া কালাল্লাযীনা", startSurah: 25, startAyah: 21, endSurah: 27, endAyah: 55 },
  { number: 20, arabicName: "أَمَّنْ خَلَقَ", englishName: "Amman Khalaq", banglaName: "আম্মান খালাকা", startSurah: 27, startAyah: 56, endSurah: 29, endAyah: 45 },
  { number: 21, arabicName: "اتْلُ مَا أُوحِيَ", englishName: "Utlu Ma Oohiya", banglaName: "উতলু মা উহিয়া", startSurah: 29, startAyah: 46, endSurah: 33, endAyah: 30 },
  { number: 22, arabicName: "وَمَنْ يَقْنُتْ", englishName: "Wa Man Yaqnut", banglaName: "ওয়া মান ইয়াকনুত", startSurah: 33, startAyah: 31, endSurah: 36, endAyah: 27 },
  { number: 23, arabicName: "وَمَا لِيَ", englishName: "Wa Mali", banglaName: "ওয়া মা লিয়া", startSurah: 36, startAyah: 28, endSurah: 39, endAyah: 31 },
  { number: 24, arabicName: "فَمَنْ أَظْلَمُ", englishName: "Faman Azlam", banglaName: "ফামান আযলামু", startSurah: 39, startAyah: 32, endSurah: 41, endAyah: 46 },
  { number: 25, arabicName: "إِلَيْهِ يُرَدُّ", englishName: "Ilaihi Yuraddu", banglaName: "ইলাইহি ইউরাদ্দু", startSurah: 41, startAyah: 47, endSurah: 45, endAyah: 37 },
  { number: 26, arabicName: "حم", englishName: "Ha Meem", banglaName: "হা মীম", startSurah: 46, startAyah: 1, endSurah: 51, endAyah: 30 },
  { number: 27, arabicName: "قَالَ فَمَا خَطْبُكُمْ", englishName: "Qala Fama Khatbukum", banglaName: "কালা ফামা খাতবুকুম", startSurah: 51, startAyah: 31, endSurah: 57, endAyah: 29 },
  { number: 28, arabicName: "قَدْ سَمِعَ اللَّهُ", englishName: "Qad Sami Allahu", banglaName: "কাদ সামিআল্লাহু", startSurah: 58, startAyah: 1, endSurah: 66, endAyah: 12 },
  { number: 29, arabicName: "تَبَارَكَ الَّذِي", englishName: "Tabarakallazi", banglaName: "তাবারাকাল্লাযী", startSurah: 67, startAyah: 1, endSurah: 77, endAyah: 50 },
  { number: 30, arabicName: "عَمَّ يَتَسَاءَلُونَ", englishName: "Amma Yatasa'aloon", banglaName: "আম্মা ইয়াতাসাআলুন", startSurah: 78, startAyah: 1, endSurah: 114, endAyah: 6 }
];

// ============================================================
// DUA DATA - Essential Duas for Daily Life
// ============================================================
const DUA_DATA = [
  {
    id: 1,
    category: "morning",
    title: "Morning Remembrance - Sayyidul Istighfar",
    arabicText: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration: "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u laka bidhanbi, faghfir li, fa innahu la yaghfirudh-dhunuba illa anta.",
    englishTranslation: "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I am upon Your covenant and promise as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessings upon me, and I acknowledge my sins. So forgive me, for none forgives sins but You.",
    banglaTranslation: "হে আল্লাহ, তুমি আমার প্রতিপালক, তুমি ছাড়া কোনো ইলাহ নেই। তুমি আমাকে সৃষ্টি করেছ এবং আমি তোমার বান্দা। আমি যথাসাধ্য তোমার সাথে কৃত অঙ্গীকারে অটল আছি। আমি আমার কৃতকর্মের অনিষ্ট থেকে তোমার কাছে আশ্রয় চাই। আমি তোমার দেওয়া নেয়ামতের স্বীকৃতি দিচ্ছি এবং আমার গুনাহের স্বীকৃতি দিচ্ছি। তুমি আমাকে ক্ষমা করো, কেননা তুমি ছাড়া কেউ গুনাহ ক্ষমা করতে পারে না।",
    reference: "Sahih al-Bukhari 6306"
  },
  {
    id: 2,
    category: "morning",
    title: "Morning Dua - Upon Waking Up",
    arabicText: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur.",
    englishTranslation: "All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.",
    banglaTranslation: "সমস্ত প্রশংসা আল্লাহর জন্য, যিনি আমাদের মৃত্যুর (ঘুমের) পর জীবন দান করেছেন এবং তাঁরই কাছে পুনরুত্থান।",
    reference: "Sahih al-Bukhari 6312"
  },
  {
    id: 3,
    category: "morning",
    title: "Morning Adhkar - Protection",
    arabicText: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.",
    englishTranslation: "We have reached the morning and at this very time the whole kingdom belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.",
    banglaTranslation: "আমরা সকালে উপনীত হলাম এবং সকালে সমস্ত রাজত্ব আল্লাহর। সমস্ত প্রশংসা আল্লাহর। আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরীক নেই। রাজত্ব তাঁরই এবং প্রশংসা তাঁরই এবং তিনি সকল কিছুর উপর ক্ষমতাবান।",
    reference: "Muslim 2723"
  },
  {
    id: 4,
    category: "morning",
    title: "Morning Dua - Seeking Goodness of the Day",
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ",
    transliteration: "Allahumma inni as'aluka khayra hadhal-yawm, fat-hahu wa nasrahu wa nurahu wa barakatahu wa hudahu, wa a'udhu bika min sharri ma fihi wa sharri ma ba'dahu.",
    englishTranslation: "O Allah, I ask You for the good of this day: its opening, its victory, its light, its blessings, and its guidance. And I seek refuge in You from the evil in it and the evil that follows it.",
    banglaTranslation: "হে আল্লাহ, আমি তোমার কাছে এই দিনের কল্যাণ চাই - এর সূচনা, এর বিজয়, এর আলো, এর বরকত ও এর হেদায়েত। এবং আমি এর মধ্যকার অনিষ্ট ও এর পরবর্তী অনিষ্ট থেকে তোমার আশ্রয় চাই।",
    reference: "Abu Dawud 5084"
  },
  {
    id: 5,
    category: "morning",
    title: "Seeking Refuge - Three Quls Morning",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    transliteration: "Bismillahir-rahmanir-rahim. Qul huwal-lahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.",
    englishTranslation: "In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.",
    banglaTranslation: "বলো, তিনি আল্লাহ, এক-অদ্বিতীয়। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি। তাঁর সমতুল্য কেউ নেই।",
    reference: "Abu Dawud 5082, Surah Al-Ikhlas 112:1-4"
  },
  {
    id: 6,
    category: "evening",
    title: "Evening Remembrance",
    arabicText: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.",
    englishTranslation: "We have reached the evening and at this very time the whole kingdom belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.",
    banglaTranslation: "আমরা সন্ধ্যায় উপনীত হলাম এবং সন্ধ্যায় সমস্ত রাজত্ব আল্লাহর। সমস্ত প্রশংসা আল্লাহর। আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরীক নেই। রাজত্ব তাঁরই এবং প্রশংসা তাঁরই এবং তিনি সকল কিছুর উপর ক্ষমতাবান।",
    reference: "Muslim 2723"
  },
  {
    id: 7,
    category: "evening",
    title: "Evening Protection Dua",
    arabicText: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    transliteration: "Allahumma inni amsaytu ush-hiduka wa ush-hidu hamalata 'arshika wa mala'ikataka wa jami'a khalqika annaka antallahu la ilaha illa anta wa anna Muhammadan 'abduka wa rasuluk.",
    englishTranslation: "O Allah, verily I have reached the evening and I call upon You, the bearers of Your Throne, Your angels, and all of Your creation to witness that You are Allah, none has the right to be worshipped except You alone, and that Muhammad is Your servant and messenger.",
    banglaTranslation: "হে আল্লাহ, আমি সন্ধ্যায় উপনীত হলাম। আমি তোমাকে, তোমার আরশের বাহকদের, তোমার ফেরেশতাদের এবং তোমার সমস্ত সৃষ্টিকে সাক্ষী রাখছি যে, তুমিই আল্লাহ, তুমি ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ তোমার বান্দা ও রাসূল।",
    reference: "Abu Dawud 5069"
  },
  {
    id: 8,
    category: "evening",
    title: "Evening Dua - Seeking Refuge from Evil",
    arabicText: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bikalima-tillahit-tammaati min sharri ma khalaq.",
    englishTranslation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    banglaTranslation: "আমি আল্লাহর পরিপূর্ণ কালামসমূহের মাধ্যমে তাঁর সৃষ্টির অনিষ্ট থেকে আশ্রয় চাই।",
    reference: "Muslim 2708"
  },
  {
    id: 9,
    category: "evening",
    title: "Evening - Ayatul Kursi",
    arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration: "Allahu la ilaha illa huwal-hayyul-qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay'in min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifdhuhuma, wa huwal-'aliyyul-'adhim.",
    englishTranslation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    banglaTranslation: "আল্লাহ - তিনি ছাড়া কোনো ইলাহ নেই, তিনি চিরঞ্জীব, সবকিছুর ধারক। তাঁকে তন্দ্রাও স্পর্শ করতে পারে না, নিদ্রাও না। আসমানসমূহে ও যমীনে যা কিছু আছে সব তাঁরই। কে আছে যে তাঁর অনুমতি ছাড়া তাঁর কাছে সুপারিশ করবে? তিনি জানেন তাদের সামনে ও পেছনে যা কিছু আছে। তাঁর জ্ঞানের কোনো কিছুকেই তারা পরিবেষ্টন করতে পারে না, তবে তিনি যতটুকু চান। তাঁর কুরসী আসমানসমূহ ও যমীনকে পরিব্যাপ্ত করে আছে এবং এতদুভয়ের রক্ষণাবেক্ষণ তাঁকে ক্লান্ত করে না। তিনি সর্বোচ্চ, সর্বমহান।",
    reference: "Quran 2:255, Sahih al-Bukhari 5010"
  },
  {
    id: 10,
    category: "evening",
    title: "Evening Dua - Seeking Goodness of the Night",
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا فِيهَا وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا",
    transliteration: "Allahumma inni as'aluka khayra hadhihil-laylati wa khayra ma fiha, wa a'udhu bika min sharriha wa sharri ma fiha.",
    englishTranslation: "O Allah, I ask You for the good of this night and the good of what is in it, and I seek refuge in You from its evil and the evil of what is in it.",
    banglaTranslation: "হে আল্লাহ, আমি তোমার কাছে এই রাতের কল্যাণ ও এর মধ্যে যা কিছু আছে তার কল্যাণ চাই। এবং এর অনিষ্ট ও এর মধ্যে যা কিছু আছে তার অনিষ্ট থেকে তোমার আশ্রয় চাই।",
    reference: "Muslim 2723"
  },
  {
    id: 11,
    category: "prayer",
    title: "Opening Dua of Salah (Istiftah)",
    arabicText: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَٰهَ غَيْرُكَ",
    transliteration: "Subhanakal-lahumma wa bihamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghayruk.",
    englishTranslation: "Glory be to You, O Allah, and all praises are due unto You. Blessed is Your name, and exalted is Your majesty. There is no god but You.",
    banglaTranslation: "হে আল্লাহ, তোমার পবিত্রতা ঘোষণা করছি এবং তোমার প্রশংসার সাথে। তোমার নাম বরকতময়, তোমার মর্যাদা সুউচ্চ এবং তুমি ছাড়া কোনো ইলাহ নেই।",
    reference: "Abu Dawud 775, Tirmidhi 243"
  },
  {
    id: 12,
    category: "prayer",
    title: "Dua Between Two Sajdahs",
    arabicText: "رَبِّ اغْفِرْ لِي رَبِّ اغْفِرْ لِي",
    transliteration: "Rabbighfir li, Rabbighfir li.",
    englishTranslation: "My Lord, forgive me. My Lord, forgive me.",
    banglaTranslation: "হে আমার রব, আমাকে ক্ষমা করো। হে আমার রব, আমাকে ক্ষমা করো।",
    reference: "Abu Dawud 874, Ibn Majah 897"
  },
  {
    id: 13,
    category: "prayer",
    title: "Dua in Sujud (Prostration)",
    arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    transliteration: "Subhana Rabbiyal-A'la.",
    englishTranslation: "Glory be to my Lord, the Most High.",
    banglaTranslation: "আমার সুমহান প্রতিপালকের পবিত্রতা ঘোষণা করছি।",
    reference: "Muslim 772"
  },
  {
    id: 14,
    category: "prayer",
    title: "Dua in Ruku (Bowing)",
    arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhana Rabbiyal-'Adhim.",
    englishTranslation: "Glory be to my Lord, the Most Great.",
    banglaTranslation: "আমার মহান প্রতিপালকের পবিত্রতা ঘোষণা করছি।",
    reference: "Muslim 772"
  },
  {
    id: 15,
    category: "prayer",
    title: "Tashahhud (At-Tahiyyat)",
    arabicText: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh, as-salamu 'alayna wa 'ala 'ibadillahis-salihin, ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
    englishTranslation: "All greetings, prayers and good things are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger.",
    banglaTranslation: "সকল সম্মান, সকল সালাত ও সকল পবিত্র বিষয় আল্লাহর জন্য। হে নবী, আপনার উপর শান্তি, আল্লাহর রহমত ও বরকত বর্ষিত হোক। আমাদের উপর এবং আল্লাহর নেক বান্দাদের উপর শান্তি বর্ষিত হোক। আমি সাক্ষ্য দিচ্ছি যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ তাঁর বান্দা ও রাসূল।",
    reference: "Sahih al-Bukhari 831"
  },
  {
    id: 16,
    category: "prayer",
    title: "Dua After Salah - Istighfar",
    arabicText: "أَسْتَغْفِرُ اللَّهَ أَسْتَغْفِرُ اللَّهَ أَسْتَغْفِرُ اللَّهَ اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "Astaghfirullah, Astaghfirullah, Astaghfirullah. Allahumma antas-salam wa minkas-salam, tabarakta ya dhal-jalali wal-ikram.",
    englishTranslation: "I seek the forgiveness of Allah (three times). O Allah, You are Peace and from You is peace. Blessed are You, O Possessor of Majesty and Honor.",
    banglaTranslation: "আমি আল্লাহর ক্ষমা চাই (তিনবার)। হে আল্লাহ, তুমিই শান্তি এবং তোমার কাছ থেকেই শান্তি। তুমি বরকতময়, হে মহিমা ও সম্মানের অধিকারী।",
    reference: "Muslim 591"
  },
  {
    id: 17,
    category: "prayer",
    title: "Dua Qunoot (Witr Prayer)",
    arabicText: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ إِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ",
    transliteration: "Allahummah-dini fiman hadayt, wa 'afini fiman 'afayt, wa tawallani fiman tawallayt, wa barik li fima a'tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda 'alayk, innahu la yadhillu man walayt, tabarakta Rabbana wa ta'alayt.",
    englishTranslation: "O Allah, guide me among those whom You have guided, pardon me among those whom You have pardoned, turn to me in friendship among those on whom You have turned in friendship, and bless me in what You have bestowed, and save me from the evil of what You have decreed. For verily You decree and none can influence You. Indeed, he whom You show allegiance to is never abased. Blessed are You, our Lord, and Exalted.",
    banglaTranslation: "হে আল্লাহ, তুমি যাদের হেদায়েত দিয়েছ তাদের মধ্যে আমাকে হেদায়েত দাও। তুমি যাদের নিরাপত্তা দিয়েছ তাদের মধ্যে আমাকে নিরাপত্তা দাও। তুমি যাদের অভিভাবকত্ব গ্রহণ করেছ তাদের মধ্যে আমার অভিভাবকত্ব গ্রহণ করো। তুমি যা দিয়েছ তাতে আমাকে বরকত দাও। তুমি যা ফয়সালা করেছ তার অনিষ্ট থেকে আমাকে রক্ষা করো। নিশ্চয়ই তুমি ফয়সালা করো, তোমার বিরুদ্ধে কেউ ফয়সালা করতে পারে না। তুমি যার বন্ধু, সে কখনো অপমানিত হয় না। তুমি বরকতময়, হে আমাদের রব, এবং তুমি সুমহান।",
    reference: "Abu Dawud 1425, Tirmidhi 464"
  },
  {
    id: 18,
    category: "food",
    title: "Dua Before Eating",
    arabicText: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
    transliteration: "Bismillahi wa 'ala barakatillah.",
    englishTranslation: "In the name of Allah and with the blessings of Allah.",
    banglaTranslation: "আল্লাহর নামে এবং আল্লাহর বরকতে।",
    reference: "Abu Dawud 3767"
  },
  {
    id: 19,
    category: "food",
    title: "Dua After Eating",
    arabicText: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    transliteration: "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana muslimin.",
    englishTranslation: "All praise is due to Allah who has fed us and given us drink and made us Muslims.",
    banglaTranslation: "সমস্ত প্রশংসা আল্লাহর, যিনি আমাদের খাওয়ালেন, পান করালেন এবং আমাদের মুসলমান বানালেন।",
    reference: "Abu Dawud 3850, Tirmidhi 3457"
  },
  {
    id: 20,
    category: "food",
    title: "Dua After Eating - Extended",
    arabicText: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    transliteration: "Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah.",
    englishTranslation: "All praise is for Allah who fed me this and provided it for me without any might or power from me.",
    banglaTranslation: "সমস্ত প্রশংসা আল্লাহর, যিনি আমাকে এটা খাওয়ালেন এবং আমার কোনো শক্তি ও সামর্থ্য ছাড়াই আমাকে এটা রিযিক দিলেন।",
    reference: "Abu Dawud 4023, Tirmidhi 3458"
  },
  {
    id: 21,
    category: "food",
    title: "Dua When Forgetting Bismillah Before Eating",
    arabicText: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ",
    transliteration: "Bismillahi awwalahu wa akhirah.",
    englishTranslation: "In the name of Allah, at its beginning and at its end.",
    banglaTranslation: "আল্লাহর নামে, এর শুরুতে এবং এর শেষে।",
    reference: "Abu Dawud 3767, Tirmidhi 1858"
  },
  {
    id: 22,
    category: "travel",
    title: "Dua When Starting a Journey",
    arabicText: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun.",
    englishTranslation: "Glory be to Him who has subjected this to us, and we could never have it by our efforts. And verily, to Our Lord we are indeed returning.",
    banglaTranslation: "পবিত্র সেই সত্তা যিনি এটাকে আমাদের বশীভূত করে দিয়েছেন, আমরা একে বশীভূত করতে সক্ষম ছিলাম না। এবং আমরা অবশ্যই আমাদের প্রতিপালকের কাছে ফিরে যাব।",
    reference: "Muslim 1342, Quran 43:13-14"
  },
  {
    id: 23,
    category: "travel",
    title: "Dua for Travel Safety",
    arabicText: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
    transliteration: "Allahumma inna nas'aluka fi safarina hadhal-birra wat-taqwa, wa minal-'amali ma tarda. Allahumma hawwin 'alayna safarana hadha watwi 'anna bu'dah.",
    englishTranslation: "O Allah, we ask You for righteousness and piety in this journey of ours, and we ask You for deeds which please You. O Allah, ease our journey and make its distance short for us.",
    banglaTranslation: "হে আল্লাহ, আমরা আমাদের এই সফরে তোমার কাছে পুণ্য ও তাকওয়া চাই এবং এমন আমল চাই যা তুমি পছন্দ করো। হে আল্লাহ, আমাদের এই সফরকে সহজ করে দাও এবং এর দূরত্ব কমিয়ে দাও।",
    reference: "Muslim 1342"
  },
  {
    id: 24,
    category: "travel",
    title: "Dua When Returning from Travel",
    arabicText: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
    transliteration: "Ayibuna, ta'ibuna, 'abiduna, li Rabbina hamidun.",
    englishTranslation: "We return, repenting, worshipping and praising our Lord.",
    banglaTranslation: "আমরা প্রত্যাবর্তনকারী, তওবাকারী, ইবাদতকারী এবং আমাদের রবের প্রশংসাকারী।",
    reference: "Sahih al-Bukhari 1797"
  },
  {
    id: 25,
    category: "travel",
    title: "Dua When Entering a Town or City",
    arabicText: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ وَمَا أَظْلَلْنَ وَرَبَّ الْأَرَضِينَ السَّبْعِ وَمَا أَقْلَلْنَ وَرَبَّ الشَّيَاطِينِ وَمَا أَضْلَلْنَ وَرَبَّ الرِّيَاحِ وَمَا ذَرَيْنَ أَسْأَلُكَ خَيْرَ هَذِهِ الْقَرْيَةِ وَخَيْرَ أَهْلِهَا وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا",
    transliteration: "Allahumma Rabbas-samawatis-sab'i wa ma adhlalna, wa Rabbal-aradinas-sab'i wa ma aqlalna, wa Rabbash-shayatini wa ma adlalna, wa Rabbar-riyahi wa ma dharayna. As'aluka khayra hadhihil-qaryati wa khayra ahliha, wa a'udhu bika min sharriha wa sharri ahliha.",
    englishTranslation: "O Allah, Lord of the seven heavens and all that they shade, Lord of the seven earths and all that they hold, Lord of the devils and all whom they mislead, Lord of the winds and all that they scatter. I ask You for the goodness of this town and the goodness of its people, and I seek refuge in You from its evil and the evil of its people.",
    banglaTranslation: "হে আল্লাহ, সাত আসমান এবং যা তারা ছায়া দেয় তার রব, সাত যমীন এবং যা তারা বহন করে তার রব, শয়তানদের ও যাদের তারা পথভ্রষ্ট করে তার রব, বাতাসের ও যা তারা উড়িয়ে নিয়ে যায় তার রব। আমি তোমার কাছে এই জনপদের কল্যাণ ও এর অধিবাসীদের কল্যাণ চাই। এবং এর অনিষ্ট ও এর অধিবাসীদের অনিষ্ট থেকে তোমার আশ্রয় চাই।",
    reference: "Hakim 2/100, Ibn as-Sunni 524"
  },
  {
    id: 26,
    category: "sleep",
    title: "Dua Before Sleeping",
    arabicText: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya.",
    englishTranslation: "In Your name, O Allah, I die and I live.",
    banglaTranslation: "হে আল্লাহ, তোমার নামে আমি মৃত্যুবরণ করি (ঘুমাই) এবং জীবিত হই (জাগি)।",
    reference: "Sahih al-Bukhari 6312"
  },
  {
    id: 27,
    category: "sleep",
    title: "Dua Before Sleeping - Seeking Protection",
    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَذَابِ فِي النَّارِ وَمِنَ الْعَذَابِ فِي الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    transliteration: "Allahumma inni a'udhu bika minal-'adhabi fin-nar, wa minal-'adhabi fil-qabr, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal.",
    englishTranslation: "O Allah, I seek refuge in You from the punishment of the Fire, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah.",
    banglaTranslation: "হে আল্লাহ, আমি তোমার কাছে আশ্রয় চাই জাহান্নামের শাস্তি থেকে, কবরের শাস্তি থেকে, জীবন ও মৃত্যুর ফিতনা থেকে এবং মসীহ দাজ্জালের ফিতনার অনিষ্ট থেকে।",
    reference: "Muslim 588"
  },
  {
    id: 28,
    category: "sleep",
    title: "Dua Before Sleeping - Entrusting to Allah",
    arabicText: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ وَفَوَّضْتُ أَمْرِي إِلَيْكَ وَوَجَّهْتُ وَجْهِيَ إِلَيْكَ وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ رَغْبَةً وَرَهْبَةً إِلَيْكَ لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ وَنَبِيِّكَ الَّذِي أَرْسَلْتَ",
    transliteration: "Allahumma aslamtu nafsi ilayk, wa fawwadtu amri ilayk, wa wajjahtu wajhi ilayk, wa alja'tu dhahri ilayk, raghbatan wa rahbatan ilayk, la malja'a wa la manja minka illa ilayk, amantu bikitabikal-ladhi anzalta wa nabiyyikal-ladhi arsalt.",
    englishTranslation: "O Allah, I submit myself to You, I entrust my affair to You, I turn my face to You, I lean my back on You, in hope and fear of You. There is no refuge and no escape from You except to You. I believe in Your Book which You have revealed and in Your Prophet whom You have sent.",
    banglaTranslation: "হে আল্লাহ, আমি আমার জীবনকে তোমার কাছে সমর্পণ করলাম, আমার বিষয়সমূহ তোমার কাছে সোপর্দ করলাম, আমার চেহারা তোমার দিকে ফেরালাম, আমার পিঠ তোমার উপর ঠেস দিলাম - তোমার প্রতি আশা ও ভয়ে। তোমার কাছ থেকে তোমার কাছে ছাড়া কোনো আশ্রয়স্থল ও মুক্তির স্থান নেই। আমি তোমার নাযিলকৃত কিতাবে এবং তোমার প্রেরিত নবীর প্রতি ঈমান আনলাম।",
    reference: "Sahih al-Bukhari 6311, Muslim 2710"
  },
  {
    id: 29,
    category: "sleep",
    title: "Dua When Having a Bad Dream",
    arabicText: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'udhu billahi minash-shaytanir-rajim.",
    englishTranslation: "I seek refuge in Allah from the accursed Satan.",
    banglaTranslation: "আমি বিতাড়িত শয়তান থেকে আল্লাহর আশ্রয় চাই।",
    reference: "Muslim 2262"
  },
  {
    id: 30,
    category: "protection",
    title: "Protection - Bismillah",
    arabicText: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim.",
    englishTranslation: "In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is the All-Hearing, the All-Knowing.",
    banglaTranslation: "আল্লাহর নামে, যাঁর নামের সাথে আসমান ও যমীনে কোনো কিছুই ক্ষতি করতে পারে না। তিনি সর্বশ্রোতা, সর্বজ্ঞ।",
    reference: "Abu Dawud 5088, Tirmidhi 3388"
  },
  {
    id: 31,
    category: "protection",
    title: "Protection from Evil Eye",
    arabicText: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    transliteration: "A'udhu bikalima-tillahit-tammati min kulli shaytanin wa hammah, wa min kulli 'aynin lammah.",
    englishTranslation: "I seek refuge in the perfect words of Allah from every devil and every poisonous reptile, and from every evil eye.",
    banglaTranslation: "আমি আল্লাহর পরিপূর্ণ বাণীসমূহের মাধ্যমে প্রত্যেক শয়তান, বিষাক্ত প্রাণী ও প্রত্যেক ক্ষতিকর চোখ (বদনজর) থেকে আশ্রয় চাই।",
    reference: "Sahih al-Bukhari 3371"
  },
  {
    id: 32,
    category: "protection",
    title: "Protection Dua - Surah Al-Falaq",
    arabicText: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    transliteration: "Qul a'udhu birabbil-falaq, min sharri ma khalaq, wa min sharri ghasiqin idha waqab, wa min sharrin-naffathati fil-'uqad, wa min sharri hasidin idha hasad.",
    englishTranslation: "Say: I seek refuge with the Lord of the daybreak, from the evil of what He has created, and from the evil of darkness when it settles, and from the evil of those who blow on knots, and from the evil of an envier when he envies.",
    banglaTranslation: "বলো, আমি আশ্রয় চাই প্রভাতের রবের কাছে, তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে, রাতের অন্ধকার যখন ঘনিয়ে আসে তার অনিষ্ট থেকে, গ্রন্থিতে ফুঁকদানকারিণীদের অনিষ্ট থেকে এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে।",
    reference: "Quran 113:1-5"
  },
  {
    id: 33,
    category: "protection",
    title: "Protection Dua - Surah An-Nas",
    arabicText: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَٰهِ النَّاسِ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ",
    transliteration: "Qul a'udhu birabbin-nas, malikin-nas, ilahin-nas, min sharril-waswaasil-khannas, alladhi yuwaswisu fi sudurin-nas, minal-jinnati wan-nas.",
    englishTranslation: "Say: I seek refuge with the Lord of mankind, the King of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers evil into the breasts of mankind, from among the jinn and mankind.",
    banglaTranslation: "বলো, আমি আশ্রয় চাই মানুষের রবের কাছে, মানুষের অধিপতির কাছে, মানুষের ইলাহের কাছে, আত্মগোপনকারী কুমন্ত্রণাদাতার অনিষ্ট থেকে, যে মানুষের বুকে কুমন্ত্রণা দেয়, জিন ও মানুষের মধ্য থেকে।",
    reference: "Quran 114:1-6"
  },
  {
    id: 34,
    category: "protection",
    title: "Protection - Entering Home",
    arabicText: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'alallahi Rabbina tawakkalna.",
    englishTranslation: "In the name of Allah we enter, in the name of Allah we leave, and upon Allah our Lord we rely.",
    banglaTranslation: "আল্লাহর নামে আমরা প্রবেশ করি, আল্লাহর নামে আমরা বের হই এবং আমাদের রব আল্লাহর উপর আমরা তাওয়াক্কুল করি।",
    reference: "Abu Dawud 5096"
  },
  {
    id: 35,
    category: "protection",
    title: "Dua When Entering the Masjid",
    arabicText: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahummaf-tah li abwaba rahmatik.",
    englishTranslation: "O Allah, open for me the doors of Your mercy.",
    banglaTranslation: "হে আল্লাহ, আমার জন্য তোমার রহমতের দরজাসমূহ খুলে দাও।",
    reference: "Muslim 713"
  },
  {
    id: 36,
    category: "protection",
    title: "Dua When Leaving the Masjid",
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik.",
    englishTranslation: "O Allah, I ask You from Your bounty.",
    banglaTranslation: "হে আল্লাহ, আমি তোমার কাছে তোমার অনুগ্রহ চাই।",
    reference: "Muslim 713"
  },
  {
    id: 37,
    category: "quran",
    title: "Dua of Prophet Ibrahim (AS) - Surah Ibrahim",
    arabicText: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    transliteration: "Rabbij-'alni muqimas-salati wa min dhurriyyati, Rabbana wa taqabbal du'a.",
    englishTranslation: "My Lord, make me an establisher of prayer, and many from my descendants. Our Lord, and accept my supplication.",
    banglaTranslation: "হে আমার রব, আমাকে সালাত কায়েমকারী বানাও এবং আমার বংশধরদের মধ্য থেকেও। হে আমাদের রব, আমার দোয়া কবুল করো।",
    reference: "Quran 14:40"
  },
  {
    id: 38,
    category: "quran",
    title: "Dua of Prophet Musa (AS)",
    arabicText: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
    transliteration: "Rabbish-rahli sadri, wa yassirli amri, wahlul 'uqdatam-min lisani, yafqahu qawli.",
    englishTranslation: "My Lord, expand my breast for me, ease my task for me, and remove the impediment from my speech so that they may understand what I say.",
    banglaTranslation: "হে আমার রব, আমার বক্ষকে প্রশস্ত করে দাও, আমার কাজকে সহজ করে দাও এবং আমার জিহ্বার জড়তা দূর করে দাও যাতে তারা আমার কথা বুঝতে পারে।",
    reference: "Quran 20:25-28"
  },
  {
    id: 39,
    category: "quran",
    title: "Dua of Prophet Yunus (AS) - Dua of Distress",
    arabicText: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin.",
    englishTranslation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    banglaTranslation: "তুমি ছাড়া কোনো ইলাহ নেই, তুমি পবিত্র। নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত ছিলাম।",
    reference: "Quran 21:87"
  },
  {
    id: 40,
    category: "quran",
    title: "Dua from Surah Al-Baqarah - Last Verse",
    arabicText: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration: "Rabbana la tu'akhidhna in nasina aw akhta'na. Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina. Rabbana wa la tuhammilna ma la taqata lana bih. Wa'fu 'anna waghfir lana warhamna. Anta mawlana fansurna 'alal-qawmil-kafirin.",
    englishTranslation: "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us, and forgive us, and have mercy upon us. You are our protector, so give us victory over the disbelieving people.",
    banglaTranslation: "হে আমাদের রব, যদি আমরা ভুলে যাই অথবা ভুল করি তাহলে আমাদের পাকড়াও করো না। হে আমাদের রব, আমাদের উপর বোঝা চাপিয়ে দিও না যেমন আমাদের পূর্ববর্তীদের উপর চাপিয়ে দিয়েছিলে। হে আমাদের রব, যা বহন করার সামর্থ্য আমাদের নেই তা আমাদের উপর চাপিয়ে দিও না। আমাদের মাফ করো, আমাদের ক্ষমা করো এবং আমাদের প্রতি রহম করো। তুমি আমাদের অভিভাবক, কাফের সম্প্রদায়ের বিরুদ্ধে আমাদের সাহায্য করো।",
    reference: "Quran 2:286"
  },
  {
    id: 41,
    category: "quran",
    title: "Dua for Knowledge",
    arabicText: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma.",
    englishTranslation: "My Lord, increase me in knowledge.",
    banglaTranslation: "হে আমার রব, আমার জ্ঞান বৃদ্ধি করে দাও।",
    reference: "Quran 20:114"
  },
  {
    id: 42,
    category: "quran",
    title: "Dua from Surah Aal-E-Imran - Guidance",
    arabicText: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
    transliteration: "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka antal-wahhab.",
    englishTranslation: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
    banglaTranslation: "হে আমাদের রব, আমাদের হেদায়েত দেওয়ার পর আমাদের অন্তরকে বক্র করো না এবং তোমার পক্ষ থেকে আমাদের রহমত দান করো। নিশ্চয়ই তুমি মহান দাতা।",
    reference: "Quran 3:8"
  },
  {
    id: 43,
    category: "quran",
    title: "Dua from Al-Furqan - Righteous Family",
    arabicText: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqina imama.",
    englishTranslation: "Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us leaders for the righteous.",
    banglaTranslation: "হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদের মধ্য থেকে আমাদের চোখের শীতলতা দান করো এবং আমাদেরকে মুত্তাকীদের ইমাম বানাও।",
    reference: "Quran 25:74"
  },
  {
    id: 44,
    category: "protection",
    title: "Istighfar - Seeking Forgiveness",
    arabicText: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Astaghfirullahal-'adhim alladhi la ilaha illa huwal-hayyul-qayyumu wa atubu ilayh.",
    englishTranslation: "I seek forgiveness from Allah, the Most Great, besides whom there is no god, the Ever-Living, the Sustainer, and I repent to Him.",
    banglaTranslation: "আমি মহান আল্লাহর ক্ষমা চাই, যিনি ছাড়া কোনো ইলাহ নেই, যিনি চিরঞ্জীব, সবকিছুর ধারক এবং আমি তাঁর কাছে তওবা করি।",
    reference: "Abu Dawud 1517, Tirmidhi 3577"
  },
  {
    id: 45,
    category: "quran",
    title: "Dua for Parents",
    arabicText: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbir-hamhuma kama rabbayanee saghira.",
    englishTranslation: "My Lord, have mercy upon them as they brought me up when I was small.",
    banglaTranslation: "হে আমার রব, তাদের প্রতি দয়া করো যেমনভাবে তারা আমাকে শৈশবে লালন-পালন করেছেন।",
    reference: "Quran 17:24"
  },
  {
    id: 46,
    category: "quran",
    title: "Dua for This World and Hereafter",
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
    englishTranslation: "Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.",
    banglaTranslation: "হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দাও এবং আখিরাতেও কল্যাণ দাও এবং আমাদের জাহান্নামের আজাব থেকে রক্ষা করো।",
    reference: "Quran 2:201"
  },
  {
    id: 47,
    category: "quran",
    title: "Dua from Surah Al-Fatiha",
    arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration: "Ihdinas-siratal-mustaqim, siratal-ladhina an'amta 'alayhim, ghayril-maghdubi 'alayhim wa lad-dallin.",
    englishTranslation: "Guide us to the straight path, the path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray.",
    banglaTranslation: "আমাদেরকে সরল পথ দেখাও, তাদের পথ যাদের তুমি নেয়ামত দিয়েছ, তাদের পথ নয় যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং তাদেরও নয় যারা পথভ্রষ্ট।",
    reference: "Quran 1:6-7"
  },
  {
    id: 48,
    category: "morning",
    title: "La ilaha illallah - Morning Dhikr",
    arabicText: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.",
    englishTranslation: "None has the right to be worshipped except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.",
    banglaTranslation: "আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরীক নেই। রাজত্ব তাঁরই এবং প্রশংসা তাঁরই এবং তিনি সকল কিছুর উপর ক্ষমতাবান।",
    reference: "Sahih al-Bukhari 6403"
  },
  {
    id: 49,
    category: "protection",
    title: "Dua When Entering the Restroom",
    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith.",
    englishTranslation: "O Allah, I seek refuge in You from evil spirits, male and female.",
    banglaTranslation: "হে আল্লাহ, আমি তোমার কাছে পুরুষ ও মহিলা জিন থেকে আশ্রয় চাই।",
    reference: "Sahih al-Bukhari 142, Muslim 375"
  },
  {
    id: 50,
    category: "protection",
    title: "Dua for Anxiety and Sorrow",
    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wa a'udhu bika minal-'ajzi wal-kasal, wa a'udhu bika minal-jubni wal-bukhl, wa a'udhu bika min ghalabatid-dayni wa qahrir-rijal.",
    englishTranslation: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, cowardice and miserliness, the burden of debts and from being overpowered by men.",
    banglaTranslation: "হে আল্লাহ, আমি তোমার কাছে আশ্রয় চাই দুশ্চিন্তা ও দুঃখ থেকে, অক্ষমতা ও অলসতা থেকে, কাপুরুষতা ও কৃপণতা থেকে, ঋণের বোঝা ও মানুষের জোর-জবরদস্তি থেকে।",
    reference: "Sahih al-Bukhari 6369"
  }
];

// ============================================================
// ISLAMIC EVENTS - Major Islamic Calendar Events
// ============================================================
const ISLAMIC_EVENTS = [
  {
    name: "Islamic New Year (Hijri New Year)",
    hijriMonth: 1,
    hijriDay: 1,
    description: "The first day of Muharram, marking the beginning of the Islamic calendar year. It commemorates the Hijra (migration) of Prophet Muhammad (PBUH) from Makkah to Madinah.",
    banglaName: "ইসলামী নববর্ষ (হিজরী নববর্ষ)"
  },
  {
    name: "Day of Ashura",
    hijriMonth: 1,
    hijriDay: 10,
    description: "The 10th of Muharram. A day of fasting commemorating the day Allah saved Prophet Musa (AS) and the Children of Israel from Pharaoh. It is also the day of the martyrdom of Imam Hussain (RA).",
    banglaName: "আশুরা"
  },
  {
    name: "Mawlid un-Nabi (Birth of the Prophet)",
    hijriMonth: 3,
    hijriDay: 12,
    description: "Celebrates the birthday of Prophet Muhammad (PBUH), born on the 12th of Rabi ul-Awwal. Muslims remember his life, teachings, and character.",
    banglaName: "ঈদে মিলাদুন্নবী"
  },
  {
    name: "Shab-e-Meraj (The Night Journey)",
    hijriMonth: 7,
    hijriDay: 27,
    description: "Commemorates the miraculous night journey (Isra) and ascension (Mi'raj) of Prophet Muhammad (PBUH) from Makkah to Jerusalem and then to the heavens.",
    banglaName: "শবে মেরাজ (লাইলাতুল মিরাজ)"
  },
  {
    name: "Shab-e-Barat (Night of Fortune)",
    hijriMonth: 8,
    hijriDay: 15,
    description: "The 15th night of Sha'ban. A night of prayer and seeking forgiveness. Many Muslims believe Allah determines the destiny of all people for the coming year on this night.",
    banglaName: "শবে বরাত (লাইলাতুল বারাআত)"
  },
  {
    name: "Start of Ramadan",
    hijriMonth: 9,
    hijriDay: 1,
    description: "The beginning of the holy month of Ramadan, during which Muslims fast from dawn to sunset, increase worship, recite the Quran, and give charity.",
    banglaName: "রমযান শুরু"
  },
  {
    name: "Laylatul Qadr (Night of Power)",
    hijriMonth: 9,
    hijriDay: 27,
    description: "The Night of Power/Decree, better than a thousand months. It is believed to be one of the odd nights in the last ten days of Ramadan (commonly observed on the 27th). The Quran was first revealed on this night.",
    banglaName: "লাইলাতুল কদর (শবে কদর)"
  },
  {
    name: "Eid ul-Fitr",
    hijriMonth: 10,
    hijriDay: 1,
    description: "The Festival of Breaking the Fast, celebrated on the 1st of Shawwal after the completion of Ramadan. Muslims perform Eid prayer, give Zakat ul-Fitr, and celebrate with family and community.",
    banglaName: "ঈদুল ফিতর"
  },
  {
    name: "Day of Arafah",
    hijriMonth: 12,
    hijriDay: 9,
    description: "The 9th of Dhul Hijjah. The most important day of Hajj when pilgrims stand at the plain of Arafat. Fasting on this day expiates sins of the previous and coming year for non-pilgrims.",
    banglaName: "আরাফার দিন"
  },
  {
    name: "Eid ul-Adha",
    hijriMonth: 12,
    hijriDay: 10,
    description: "The Festival of Sacrifice, celebrated on the 10th of Dhul Hijjah. Commemorates the willingness of Prophet Ibrahim (AS) to sacrifice his son Ismail (AS) in obedience to Allah. Muslims perform Qurbani (animal sacrifice).",
    banglaName: "ঈদুল আযহা (কুরবানীর ঈদ)"
  },
  {
    name: "Days of Tashreeq",
    hijriMonth: 12,
    hijriDay: 11,
    description: "The 11th, 12th, and 13th of Dhul Hijjah. Days of eating, drinking, and remembering Allah. Fasting is prohibited on these days.",
    banglaName: "আইয়ামে তাশরীক"
  },
  {
    name: "Hajj Season Begins",
    hijriMonth: 12,
    hijriDay: 8,
    description: "The 8th of Dhul Hijjah (Yawm at-Tarwiyah). Pilgrims begin the rites of Hajj, moving to Mina.",
    banglaName: "হজ্জের মৌসুম শুরু"
  },
  {
    name: "First Ten Days of Dhul Hijjah",
    hijriMonth: 12,
    hijriDay: 1,
    description: "The first ten days of Dhul Hijjah are among the most virtuous days. Good deeds performed during these days are more beloved to Allah than any other days.",
    banglaName: "যিলহজ্জের প্রথম দশ দিন"
  },
  {
    name: "Last Ten Nights of Ramadan",
    hijriMonth: 9,
    hijriDay: 21,
    description: "The last ten nights of Ramadan are the most blessed nights. Muslims increase their worship, perform I'tikaf (seclusion in the mosque), and seek Laylatul Qadr.",
    banglaName: "রমযানের শেষ দশ রাত"
  },
  {
    name: "Six Fasts of Shawwal",
    hijriMonth: 10,
    hijriDay: 2,
    description: "It is recommended to fast six days in the month of Shawwal after Eid ul-Fitr. Combined with the fasts of Ramadan, it is as if one fasted the entire year.",
    banglaName: "শাওয়ালের ছয় রোযা"
  }
];

// ============================================================
// RECITERS - Quran Reciters Data
// ============================================================
const RECITERS = [
  {
    id: 1,
    name: "Mishary Rashid Alafasy",
    arabicName: "مشاري راشد العفاسي",
    style: "Murattal",
    identifier: "ar.alafasy"
  },
  {
    id: 2,
    name: "Abdul Basit Abdul Samad",
    arabicName: "عبد الباسط عبد الصمد",
    style: "Murattal & Mujawwad",
    identifier: "ar.abdulsamad"
  },
  {
    id: 3,
    name: "Mahmoud Khalil Al-Husary",
    arabicName: "محمود خليل الحصري",
    style: "Murattal",
    identifier: "ar.husary"
  },
  {
    id: 4,
    name: "Mohamed Siddiq Al-Minshawi",
    arabicName: "محمد صديق المنشاوي",
    style: "Murattal & Mujawwad",
    identifier: "ar.minshawi"
  },
  {
    id: 5,
    name: "Abdur-Rahman As-Sudais",
    arabicName: "عبد الرحمن السديس",
    style: "Murattal",
    identifier: "ar.abdurrahmaansudais"
  },
  {
    id: 6,
    name: "Abu Bakr Al-Shatri",
    arabicName: "أبو بكر الشاطري",
    style: "Murattal",
    identifier: "ar.shaatree"
  },
  {
    id: 7,
    name: "Ahmed ibn Ali Al-Ajamy",
    arabicName: "أحمد بن علي العجمي",
    style: "Murattal",
    identifier: "ar.ahmedajamy"
  },
  {
    id: 8,
    name: "Maher Al-Muaiqly",
    arabicName: "ماهر المعيقلي",
    style: "Murattal",
    identifier: "ar.maabormuaiqly"
  },
  {
    id: 9,
    name: "Saad Al-Ghamdi",
    arabicName: "سعد الغامدي",
    style: "Murattal",
    identifier: "ar.saoodshuraym"
  },
  {
    id: 10,
    name: "Hani Ar-Rifai",
    arabicName: "هاني الرفاعي",
    style: "Murattal",
    identifier: "ar.haborifai"
  }
];

// ============================================================
// DAILY VERSES - Memorable Verses for "Verse of the Day"
// ============================================================
const DAILY_VERSES = [
  {
    surah: 2,
    ayah: 255,
    arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
    englishText: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.",
    banglaText: "আল্লাহ - তিনি ছাড়া কোনো ইলাহ নেই, তিনি চিরঞ্জীব, সবকিছুর ধারক। তাঁকে তন্দ্রাও স্পর্শ করতে পারে না, নিদ্রাও না। আসমানসমূহে ও যমীনে যা কিছু আছে সব তাঁরই।"
  },
  {
    surah: 2,
    ayah: 286,
    arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ",
    englishText: "Allah does not burden a soul beyond that it can bear. It will have the reward of what good it has earned, and it will bear the consequences of what evil it has committed.",
    banglaText: "আল্লাহ কোনো ব্যক্তিকে তার সামর্থ্যের বাইরে দায়িত্ব দেন না। সে যা অর্জন করে তা তারই এবং সে যা করে তার দায় তারই।"
  },
  {
    surah: 2,
    ayah: 152,
    arabicText: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    englishText: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    banglaText: "সুতরাং তোমরা আমাকে স্মরণ করো, আমি তোমাদের স্মরণ করব। তোমরা আমার প্রতি কৃতজ্ঞ হও এবং আমার প্রতি অকৃতজ্ঞ হয়ো না।"
  },
  {
    surah: 2,
    ayah: 186,
    arabicText: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    englishText: "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
    banglaText: "আর যখন আমার বান্দারা তোমাকে আমার সম্পর্কে জিজ্ঞেস করে, তখন (বলে দাও যে) নিশ্চয়ই আমি নিকটে। আমি প্রার্থনাকারীর ডাকে সাড়া দেই যখন সে আমাকে ডাকে।"
  },
  {
    surah: 2,
    ayah: 201,
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    englishText: "Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.",
    banglaText: "হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দাও এবং আখিরাতেও কল্যাণ দাও এবং আমাদের জাহান্নামের আজাব থেকে রক্ষা করো।"
  },
  {
    surah: 3,
    ayah: 139,
    arabicText: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
    englishText: "So do not weaken and do not grieve, and you will be superior if you are true believers.",
    banglaText: "তোমরা দুর্বল হয়ো না এবং দুঃখিত হয়ো না, তোমরাই বিজয়ী হবে যদি তোমরা মুমিন হও।"
  },
  {
    surah: 3,
    ayah: 173,
    arabicText: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    englishText: "Sufficient for us is Allah, and He is the best Disposer of affairs.",
    banglaText: "আল্লাহই আমাদের জন্য যথেষ্ট এবং তিনি কতই না উত্তম কর্মবিধায়ক।"
  },
  {
    surah: 5,
    ayah: 32,
    arabicText: "مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا",
    englishText: "Whoever kills a soul unless for a soul or for corruption in the land - it is as if he had slain mankind entirely. And whoever saves one - it is as if he had saved mankind entirely.",
    banglaText: "যে ব্যক্তি কাউকে হত্যা করল অন্য কাউকে হত্যা বা পৃথিবীতে ফাসাদ সৃষ্টি করা ছাড়া, সে যেন সমস্ত মানুষকে হত্যা করল। আর যে ব্যক্তি কারো জীবন রক্ষা করল, সে যেন সমস্ত মানুষের জীবন রক্ষা করল।"
  },
  {
    surah: 13,
    ayah: 28,
    arabicText: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    englishText: "Verily, in the remembrance of Allah do hearts find rest.",
    banglaText: "জেনে রাখো, আল্লাহর স্মরণেই অন্তরসমূহ প্রশান্তি লাভ করে।"
  },
  {
    surah: 14,
    ayah: 7,
    arabicText: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ",
    englishText: "If you are grateful, I will surely increase you in favor; but if you deny, indeed, My punishment is severe.",
    banglaText: "যদি তোমরা কৃতজ্ঞ হও, তবে আমি অবশ্যই তোমাদের আরও বেশি দেব। আর যদি অকৃতজ্ঞ হও, তবে নিশ্চয়ই আমার শাস্তি কঠিন।"
  },
  {
    surah: 16,
    ayah: 97,
    arabicText: "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
    englishText: "Whoever does righteousness, whether male or female, while being a believer - We will surely cause them to live a good life.",
    banglaText: "পুরুষ হোক বা নারী, যে কেউ মুমিন অবস্থায় সৎকর্ম করবে, আমি অবশ্যই তাকে পবিত্র জীবন দান করব।"
  },
  {
    surah: 21,
    ayah: 87,
    arabicText: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    englishText: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    banglaText: "তুমি ছাড়া কোনো ইলাহ নেই, তুমি পবিত্র। নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত ছিলাম।"
  },
  {
    surah: 23,
    ayah: 115,
    arabicText: "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ",
    englishText: "Then did you think that We created you uselessly and that to Us you would not be returned?",
    banglaText: "তোমরা কি মনে করেছ যে আমি তোমাদের অনর্থক সৃষ্টি করেছি এবং তোমরা আমার কাছে ফিরে আসবে না?"
  },
  {
    surah: 24,
    ayah: 35,
    arabicText: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    englishText: "Allah is the Light of the heavens and the earth.",
    banglaText: "আল্লাহ আসমানসমূহ ও যমীনের নূর।"
  },
  {
    surah: 29,
    ayah: 69,
    arabicText: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
    englishText: "And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.",
    banglaText: "যারা আমার পথে সংগ্রাম করে, আমি অবশ্যই তাদের আমার পথসমূহের দিকে পরিচালিত করব। নিশ্চয়ই আল্লাহ সৎকর্মশীলদের সাথে আছেন।"
  },
  {
    surah: 33,
    ayah: 56,
    arabicText: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
    englishText: "Indeed, Allah confers blessing upon the Prophet, and His angels ask Him to do so. O you who have believed, ask Allah to confer blessing upon him and ask Allah to grant him peace.",
    banglaText: "নিশ্চয়ই আল্লাহ ও তাঁর ফেরেশতাগণ নবীর প্রতি দরূদ পাঠান। হে মুমিনগণ, তোমরাও তাঁর প্রতি দরূদ পাঠাও এবং যথাযথ সালাম জানাও।"
  },
  {
    surah: 36,
    ayah: 82,
    arabicText: "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ",
    englishText: "His command is only when He intends a thing that He says to it, 'Be,' and it is.",
    banglaText: "তাঁর ব্যাপার কেবল এই যে, তিনি কোনো কিছু করতে চাইলে তাকে বলেন 'হও', আর তা হয়ে যায়।"
  },
  {
    surah: 39,
    ayah: 53,
    arabicText: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
    englishText: "Say, O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins.",
    banglaText: "বলো, হে আমার বান্দারা, যারা নিজেদের প্রতি সীমালঙ্ঘন করেছ, তোমরা আল্লাহর রহমত থেকে নিরাশ হয়ো না। নিশ্চয়ই আল্লাহ সমস্ত গুনাহ ক্ষমা করেন।"
  },
  {
    surah: 40,
    ayah: 60,
    arabicText: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    englishText: "And your Lord says, 'Call upon Me; I will respond to you.'",
    banglaText: "তোমাদের রব বলেন, 'তোমরা আমাকে ডাকো, আমি তোমাদের ডাকে সাড়া দেব।'"
  },
  {
    surah: 49,
    ayah: 13,
    arabicText: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ",
    englishText: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.",
    banglaText: "হে মানুষ, আমি তোমাদেরকে এক পুরুষ ও এক নারী থেকে সৃষ্টি করেছি এবং তোমাদেরকে বিভিন্ন জাতি ও গোত্রে বিভক্ত করেছি যাতে তোমরা পরস্পরকে চিনতে পারো। নিশ্চয়ই আল্লাহর কাছে তোমাদের মধ্যে সবচেয়ে সম্মানিত সেই ব্যক্তি যে সবচেয়ে বেশি তাকওয়াবান।"
  },
  {
    surah: 55,
    ayah: 13,
    arabicText: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    englishText: "So which of the favors of your Lord would you deny?",
    banglaText: "তবে তোমরা উভয়ে তোমাদের রবের কোন কোন নেয়ামতকে অস্বীকার করবে?"
  },
  {
    surah: 55,
    ayah: 60,
    arabicText: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ",
    englishText: "Is the reward for good anything but good?",
    banglaText: "ইহসানের প্রতিদান ইহসান ছাড়া আর কী হতে পারে?"
  },
  {
    surah: 65,
    ayah: 3,
    arabicText: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ",
    englishText: "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose.",
    banglaText: "যে আল্লাহর উপর তাওয়াক্কুল করে, তিনিই তার জন্য যথেষ্ট। নিশ্চয়ই আল্লাহ তাঁর উদ্দেশ্য পূরণকারী।"
  },
  {
    surah: 67,
    ayah: 2,
    arabicText: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
    englishText: "He who created death and life to test you as to which of you is best in deed.",
    banglaText: "যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন, তোমাদের পরীক্ষা করার জন্য - তোমাদের মধ্যে কে আমলে সর্বোত্তম।"
  },
  {
    surah: 73,
    ayah: 8,
    arabicText: "وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا",
    englishText: "And remember the name of your Lord and devote yourself to Him with complete devotion.",
    banglaText: "তোমার রবের নাম স্মরণ করো এবং একাগ্রচিত্তে তাঁর প্রতি নিবেদিত হও।"
  },
  {
    surah: 93,
    ayah: 5,
    arabicText: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
    englishText: "And your Lord is going to give you, and you will be satisfied.",
    banglaText: "অচিরেই তোমার রব তোমাকে এতটা দেবেন যে তুমি সন্তুষ্ট হয়ে যাবে।"
  },
  {
    surah: 94,
    ayah: 5,
    arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    englishText: "For indeed, with hardship comes ease. Indeed, with hardship comes ease.",
    banglaText: "নিশ্চয়ই কষ্টের সাথে স্বস্তি রয়েছে। নিশ্চয়ই কষ্টের সাথে স্বস্তি রয়েছে।"
  },
  {
    surah: 94,
    ayah: 7,
    arabicText: "فَإِذَا فَرَغْتَ فَانصَبْ",
    englishText: "So when you have finished your duties, then stand up for worship.",
    banglaText: "অতএব, যখন তুমি অবসর পাও, তখন ইবাদতে মনোনিবেশ করো।"
  },
  {
    surah: 103,
    ayah: 1,
    arabicText: "وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
    englishText: "By time. Indeed, mankind is in loss. Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
    banglaText: "সময়ের শপথ। নিশ্চয়ই মানুষ ক্ষতিগ্রস্ত। কিন্তু তারা ছাড়া যারা ঈমান এনেছে, সৎকর্ম করেছে, পরস্পরকে সত্যের উপদেশ দিয়েছে এবং পরস্পরকে ধৈর্যের উপদেশ দিয়েছে।"
  },
  {
    surah: 112,
    ayah: 1,
    arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    englishText: "Say, He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.",
    banglaText: "বলো, তিনি আল্লাহ, এক-অদ্বিতীয়। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি। তাঁর সমতুল্য কেউ নেই।"
  }
];

// ============================================================
// SURAH CATEGORIES - Grouping of Surahs by Theme
// ============================================================
const SURAH_CATEGORIES = [
  {
    id: "tawheed",
    name: "Tawheed (Monotheism)",
    banglaName: "তাওহীদ (একত্ববাদ)",
    description: "Surahs emphasizing the Oneness of Allah",
    surahs: [1, 112, 109, 72, 113, 114]
  },
  {
    id: "stories",
    name: "Stories of Prophets",
    banglaName: "নবীদের কাহিনী",
    description: "Surahs containing stories of Prophets and past nations",
    surahs: [12, 18, 19, 20, 21, 26, 27, 28, 37, 71]
  },
  {
    id: "afterlife",
    name: "Day of Judgment & Afterlife",
    banglaName: "কিয়ামত ও পরকাল",
    description: "Surahs focused on the Day of Judgment, Paradise, and Hellfire",
    surahs: [56, 69, 75, 78, 79, 81, 82, 84, 88, 99, 101]
  },
  {
    id: "guidance",
    name: "Guidance & Law",
    banglaName: "হেদায়েত ও বিধান",
    description: "Surahs containing Islamic laws, guidance, and social regulations",
    surahs: [2, 3, 4, 5, 24, 33, 49, 58, 60, 65, 66]
  },
  {
    id: "creation",
    name: "Creation & Nature",
    banglaName: "সৃষ্টি ও প্রকৃতি",
    description: "Surahs highlighting signs of Allah in creation and nature",
    surahs: [6, 10, 13, 16, 30, 35, 36, 55, 67]
  },
  {
    id: "comfort",
    name: "Comfort & Patience",
    banglaName: "সান্ত্বনা ও ধৈর্য",
    description: "Surahs providing comfort, encouragement, and lessons in patience",
    surahs: [93, 94, 103, 108, 110]
  },
  {
    id: "warning",
    name: "Warning & Admonition",
    banglaName: "সতর্কতা ও উপদেশ",
    description: "Surahs warning against disbelief, hypocrisy, and sin",
    surahs: [9, 63, 83, 90, 100, 102, 104, 107, 111]
  },
  {
    id: "warfare",
    name: "Jihad & Striving",
    banglaName: "জিহাদ ও সংগ্রাম",
    description: "Surahs discussing striving in the way of Allah",
    surahs: [8, 47, 48, 61]
  }
];

// ============================================================
// NAMES OF ALLAH (Asma ul-Husna) - The 99 Beautiful Names
// ============================================================
const ASMA_UL_HUSNA = [
  {
    number: 1, arabic: "الرَّحْمَنُ", transliteration: "Ar-Rahman", english: "The Most Gracious", bangla: "পরম করুণাময়",
    meaning: "Ar-Rahman denotes the One whose mercy is all-encompassing and extends to every creature without exception. This name signifies the vastness of Allah's grace that covers all of creation, believers and disbelievers alike. It is a mercy that sustains the universe and provides for every living being. The intensity of this name conveys boundless, overflowing compassion that is intrinsic to Allah's very essence.",
    benefits: "Reciting this name regularly softens the heart, removes spiritual hardness, and attracts divine compassion into one's life. It helps develop empathy and kindness toward all creation.",
    quranReference: "1:1",
    relatedNames: [2, 83, 79]
  },
  {
    number: 2, arabic: "الرَّحِيمُ", transliteration: "Ar-Raheem", english: "The Most Merciful", bangla: "অসীম দয়ালু",
    meaning: "Ar-Raheem refers to the One who bestows mercy specifically upon the believers in the Hereafter. While Ar-Rahman encompasses all creation, Ar-Raheem is a special, selective mercy reserved as a reward for those who believe and do righteous deeds. This name emphasizes the personal, intimate nature of Allah's mercy toward His faithful servants.",
    benefits: "Invoking this name brings special mercy from Allah, particularly in times of distress. It is recommended to recite after prayers for increased blessings and spiritual closeness to Allah.",
    quranReference: "2:163",
    relatedNames: [1, 34, 82]
  },
  {
    number: 3, arabic: "الْمَلِكُ", transliteration: "Al-Malik", english: "The King", bangla: "রাজাধিরাজ",
    meaning: "Al-Malik is the absolute Sovereign and King of all existence. His dominion encompasses the heavens, the earth, and everything in between. Unlike earthly kings whose rule is limited and temporary, Allah's kingship is perfect, eternal, and self-sufficient. He rules with complete authority, wisdom, and justice over every atom in the universe.",
    benefits: "Reflecting on this name cultivates humility before Allah and detachment from worldly power. Reciting it after Fajr prayer brings dignity and respect from others, and strengthens one's reliance on the true King.",
    quranReference: "59:23",
    relatedNames: [4, 5, 84]
  },
  {
    number: 4, arabic: "الْقُدُّوسُ", transliteration: "Al-Quddus", english: "The Most Holy", bangla: "পবিত্রতম",
    meaning: "Al-Quddus is the One who is absolutely pure and free from every imperfection, deficiency, or flaw. He transcends all human limitations and is beyond any quality that is unbefitting of His majesty. This name affirms that Allah is sacred, sanctified, and utterly perfect in every attribute and action.",
    benefits: "Reciting this name purifies the heart from spiritual diseases such as arrogance, envy, and hatred. It brings inner peace and spiritual cleanliness, helping the believer maintain a state of purity in worship.",
    quranReference: "62:1",
    relatedNames: [3, 5, 6]
  },
  {
    number: 5, arabic: "السَّلَامُ", transliteration: "As-Salam", english: "The Source of Peace", bangla: "শান্তিদাতা",
    meaning: "As-Salam is the ultimate Source of all peace, safety, and security. He is free from all defects and grants peace to His creation. The greeting of Paradise is 'Salam' (peace), and this name reminds us that true and lasting peace can only be found through connection with Allah. He is the One who provides tranquility to troubled hearts and safety to those who are afraid.",
    benefits: "Reciting this name brings inner peace, cures anxiety, and protects from harm. It is especially beneficial to recite when feeling distressed or unsafe. Saying it 100 times over a sick person can aid in their recovery.",
    quranReference: "59:23",
    relatedNames: [3, 4, 6]
  },
  {
    number: 6, arabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", english: "The Granter of Security", bangla: "নিরাপত্তাদাতা",
    meaning: "Al-Mu'min is the One who grants security and faith, who affirms the truth of His own Oneness through clear proofs. He provides safety to His servants from His punishment, and He fulfills His promises. This name also implies that Allah confirms the truthfulness of His messengers by granting them miracles and signs.",
    benefits: "Invoking this name strengthens faith and removes doubt from the heart. It provides a sense of security and protection against fear. Regular recitation helps build unshakeable trust in Allah's promises.",
    quranReference: "59:23",
    relatedNames: [4, 5, 7]
  },
  {
    number: 7, arabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", english: "The Guardian", bangla: "রক্ষাকর্তা",
    meaning: "Al-Muhaymin is the One who watches over and protects all things. He is the Guardian who oversees and preserves His creation with perfect knowledge and care. Nothing escapes His vigilance, and He maintains the order of the universe with absolute precision. He is the Protector who shields His servants from harm.",
    benefits: "Reciting this name regularly helps develop mindfulness and awareness that Allah is always watching. It strengthens one's consciousness of accountability and helps in developing taqwa (God-consciousness).",
    quranReference: "59:23",
    relatedNames: [6, 38, 43]
  },
  {
    number: 8, arabic: "الْعَزِيزُ", transliteration: "Al-Aziz", english: "The Almighty", bangla: "পরাক্রমশালী",
    meaning: "Al-Aziz is the One who possesses all might and power, whom none can overcome or resist. His strength is absolute and unmatched. He is the Mighty One who prevails over all things, and nothing can diminish His authority. This name signifies honor, invincibility, and supreme power that belongs to Allah alone.",
    benefits: "Reciting this name 40 times after Fajr prayer for 40 days grants the reciter independence from the need of others. It brings honor and dignity, and protects against humiliation and oppression.",
    quranReference: "3:6",
    relatedNames: [9, 10, 53]
  },
  {
    number: 9, arabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", english: "The Compeller", bangla: "মহাপ্রতাপশালী",
    meaning: "Al-Jabbar has three profound meanings: He compels His creation to follow His will, He mends and restores what is broken, and He is supremely great and lofty beyond all creation. He is the One who fixes broken hearts, heals the wounded, and repairs what is damaged in the lives of His servants. At the same time, none can resist His decree.",
    benefits: "Invoking this name helps in healing emotional and spiritual wounds. It is powerful for those going through heartbreak or difficulty, as Allah is the One who mends broken hearts. It also protects against oppression.",
    quranReference: "59:23",
    relatedNames: [8, 10, 53]
  },
  {
    number: 10, arabic: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", english: "The Supreme", bangla: "অহংকারের মালিক",
    meaning: "Al-Mutakabbir is the One who is supremely great and above all creation. True greatness and pride belong only to Allah. While arrogance is condemned in human beings, supreme grandeur is an attribute that rightfully belongs to the Creator alone. He is exalted above every imperfection and above the attributes of His creation.",
    benefits: "Reflecting on this name helps the believer overcome arrogance by recognizing that true greatness belongs only to Allah. It cultivates humility and reminds one to submit completely to the One who is truly Supreme.",
    quranReference: "59:23",
    relatedNames: [8, 9, 37]
  },
  {
    number: 11, arabic: "الْخَالِقُ", transliteration: "Al-Khaliq", english: "The Creator", bangla: "স্রষ্টা",
    meaning: "Al-Khaliq is the One who brings everything into existence from nothingness. He determines the measure and design of all creation before bringing it into being. He creates with perfect planning and infinite wisdom, and His creative power is limitless. Every creature, every atom, and every moment is a manifestation of His creative will.",
    benefits: "Reciting this name inspires creativity and appreciation for Allah's creation. It helps one see the signs of Allah in everything around them and strengthens faith through contemplation of the natural world.",
    quranReference: "59:24",
    relatedNames: [12, 13, 95]
  },
  {
    number: 12, arabic: "الْبَارِئُ", transliteration: "Al-Bari", english: "The Originator", bangla: "উদ্ভাবক",
    meaning: "Al-Bari is the One who creates and forms with no prior model or pattern. He originates life and shapes creation in perfect balance and proportion. While Al-Khaliq refers to the planning and measurement, Al-Bari refers to the actual bringing into existence of that creation from nothingness, free from any imperfection.",
    benefits: "Invoking this name helps in starting new projects and endeavors. It inspires originality and the courage to create something new. It is also recited for relief from distress and for the healing of physical ailments.",
    quranReference: "59:24",
    relatedNames: [11, 13, 58]
  },
  {
    number: 13, arabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", english: "The Fashioner", bangla: "আকৃতিদাতা",
    meaning: "Al-Musawwir is the One who fashions and shapes every creature in a unique and distinctive form. He gives each creation its particular appearance, color, shape, and characteristics. No two fingerprints are alike, no two snowflakes are identical - this is the work of Al-Musawwir, the supreme Artist who designs with infinite detail and beauty.",
    benefits: "Reciting this name is beneficial for expecting mothers, as it invokes Allah's blessing in fashioning the child beautifully. It also helps develop an appreciation for beauty and diversity in Allah's creation.",
    quranReference: "59:24",
    relatedNames: [11, 12, 95]
  },
  {
    number: 14, arabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", english: "The Repeatedly Forgiving", bangla: "ক্ষমাশীল",
    meaning: "Al-Ghaffar is the One who forgives sins again and again, without limit. The intensive form of this name indicates that His forgiveness is abundant, continuous, and overflowing. No matter how many times a servant sins and returns in repentance, Allah is always ready to forgive. He covers the faults of His servants and does not expose them.",
    benefits: "Reciting this name after every prayer brings forgiveness for sins. It is especially powerful when recited with sincere repentance. Regular recitation removes the burden of guilt and opens the doors of divine mercy.",
    quranReference: "20:82",
    relatedNames: [2, 34, 82]
  },
  {
    number: 15, arabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", english: "The Subduer", bangla: "মহাপরাক্রমশালী",
    meaning: "Al-Qahhar is the One who subdues and overpowers all of creation. Nothing can withstand His might or resist His will. He dominates all things and all beings are subject to His authority. This name serves as a powerful reminder that no tyrant or oppressor can escape Allah's ultimate power and justice.",
    benefits: "Reciting this name helps overcome oppressive thoughts and worldly attachments. It is powerful for protection against tyrants and oppressors. It reminds the believer that ultimate power belongs to Allah alone.",
    quranReference: "13:16",
    relatedNames: [8, 9, 53]
  },
  {
    number: 16, arabic: "الْوَهَّابُ", transliteration: "Al-Wahhab", english: "The Bestower", bangla: "মহাদাতা",
    meaning: "Al-Wahhab is the One who gives generously and endlessly without any expectation of return. His gifts are bestowed freely, without cause or obligation. He grants blessings to whomever He wills, and His giving knows no bounds. Every blessing, every talent, every moment of joy is a gift from Al-Wahhab.",
    benefits: "Reciting this name is recommended for those seeking provisions, children, or any blessing from Allah. It opens the doors of generosity and abundance. Reciting it after the two rakaat of Fajr prayer is especially effective.",
    quranReference: "3:8",
    relatedNames: [17, 42, 89]
  },
  {
    number: 17, arabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaq", english: "The Provider", bangla: "রিযিকদাতা",
    meaning: "Ar-Razzaq is the One who provides sustenance and provisions to all creatures. He creates the means of nourishment for every living being, from the tiniest insect to the largest whale. His provision encompasses not only food and drink, but also knowledge, guidance, health, and spiritual nourishment. No creature is forgotten or neglected in His provision.",
    benefits: "Reciting this name brings abundance in sustenance and opens doors of provision from unexpected sources. It removes anxiety about livelihood and strengthens trust in Allah as the ultimate Provider.",
    quranReference: "51:58",
    relatedNames: [16, 39, 88]
  },
  {
    number: 18, arabic: "الْفَتَّاحُ", transliteration: "Al-Fattah", english: "The Opener", bangla: "মীমাংসাকারী",
    meaning: "Al-Fattah is the One who opens all doors of mercy, guidance, and provision. He opens what is closed, clarifies what is unclear, and resolves what is difficult. He opens the hearts of the disbelievers to guidance, opens doors of sustenance for the needy, and opens the gates of Paradise for the righteous. He is the ultimate Judge who resolves all disputes.",
    benefits: "Reciting this name after Fajr prayer opens doors of opportunities and blessings. It is powerful for removing obstacles, resolving difficulties, and gaining clarity in confusing situations.",
    quranReference: "34:26",
    relatedNames: [19, 28, 46]
  },
  {
    number: 19, arabic: "الْعَلِيمُ", transliteration: "Al-Aleem", english: "The All-Knowing", bangla: "সর্বজ্ঞ",
    meaning: "Al-Aleem is the One whose knowledge encompasses everything - past, present, and future. He knows what is hidden and what is manifest, what is in the depths of the oceans and what is in the highest heavens. Not even the weight of an atom escapes His knowledge. He knows the secrets of every heart, every thought, and every intention before they are formed.",
    benefits: "Invoking this name increases one's own knowledge and understanding. It is beneficial for students and seekers of knowledge. It also develops awareness that Allah knows everything, which strengthens accountability.",
    quranReference: "2:32",
    relatedNames: [26, 27, 31]
  },
  {
    number: 20, arabic: "الْقَابِضُ", transliteration: "Al-Qabid", english: "The Withholder", bangla: "সংকোচনকারী",
    meaning: "Al-Qabid is the One who constricts and withholds. He contracts the hearts of those who stray and restricts provision as a test or as wisdom. This withholding is always based on divine wisdom, even when we cannot understand it. Sometimes restriction is a form of mercy, protecting us from what would ultimately harm us.",
    benefits: "Understanding this name brings patience during times of scarcity and restriction. It teaches that when Allah withholds something, it is for our ultimate good. Reciting it alongside Al-Basit brings balance in one's life.",
    quranReference: "2:245",
    relatedNames: [21, 22, 23]
  },
  {
    number: 21, arabic: "الْبَاسِطُ", transliteration: "Al-Basit", english: "The Expander", bangla: "প্রসারণকারী",
    meaning: "Al-Basit is the One who expands, extends, and amplifies. He opens the hearts of His servants to receive faith and guidance, and He expands their provisions and blessings. When He wills, He grants abundance and spreads joy, relief, and mercy. This name is the complement of Al-Qabid, showing the balance in Allah's wisdom.",
    benefits: "Reciting this name brings expansion in provision, joy, and spiritual openness. It is recommended for those experiencing tightness in their circumstances or hearts. Raising one's hands to the sky and reciting this name brings relief.",
    quranReference: "2:245",
    relatedNames: [20, 23, 16]
  },
  {
    number: 22, arabic: "الْخَافِضُ", transliteration: "Al-Khafid", english: "The Abaser", bangla: "অবনমনকারী",
    meaning: "Al-Khafid is the One who lowers and brings down those who are arrogant and rebellious. He humbles the proud and brings low the tyrants. This name reminds us that no matter how powerful or wealthy someone becomes, Allah can bring them low in an instant. It serves as a warning against arrogance and transgression.",
    benefits: "Reflecting on this name protects against arrogance and reminds of the transient nature of worldly status. It brings comfort to the oppressed, knowing that Allah will eventually lower the oppressor.",
    quranReference: "56:3",
    relatedNames: [23, 24, 25]
  },
  {
    number: 23, arabic: "الرَّافِعُ", transliteration: "Ar-Rafi", english: "The Exalter", bangla: "উন্নয়নকারী",
    meaning: "Ar-Rafi is the One who raises and elevates. He raises the status of the humble, the believers, and the righteous. He elevates people in rank, knowledge, and honor. True elevation comes not from wealth or power, but from faith and righteousness, and only Allah can grant this true exaltation. He raised the heavens, elevated the ranks of the prophets, and exalts the Quran.",
    benefits: "Reciting this name brings elevation in status, knowledge, and spiritual rank. It is recommended for those seeking promotion or recognition for their righteous efforts. It inspires striving for excellence.",
    quranReference: "56:3",
    relatedNames: [22, 24, 36]
  },
  {
    number: 24, arabic: "الْمُعِزُّ", transliteration: "Al-Mu'izz", english: "The Bestower of Honor", bangla: "সম্মানদাতা",
    meaning: "Al-Mu'izz is the One who grants honor, respect, and dignity to whomever He wills. True honor comes only from Allah, and it is bestowed upon those who are faithful, humble, and righteous. No amount of wealth, lineage, or worldly status can grant someone real honor if Allah has not willed it for them.",
    benefits: "Reciting this name brings honor, dignity, and respect from others. It is especially powerful when one feels disrespected or humiliated. Reciting it 140 times after Maghrib prayer on Monday or Friday nights is recommended.",
    quranReference: "3:26",
    relatedNames: [23, 25, 8]
  },
  {
    number: 25, arabic: "الْمُذِلُّ", transliteration: "Al-Mudhill", english: "The Humiliator", bangla: "অপমানকারী",
    meaning: "Al-Mudhill is the One who humiliates and disgraces those who deserve it - the arrogant, the oppressors, and those who reject truth. This name serves as a stark warning that Allah can strip away all honor and dignity from those who misuse their power or rebel against His commands. It is a name that inspires awe and reverence.",
    benefits: "Reflecting on this name protects against arrogance and oppression. It reminds the believer that true security lies only in obedience to Allah. It brings comfort to the oppressed, knowing that justice will prevail.",
    quranReference: "3:26",
    relatedNames: [22, 24, 81]
  },
  {
    number: 26, arabic: "السَّمِيعُ", transliteration: "As-Sami", english: "The All-Hearing", bangla: "সর্বশ্রোতা",
    meaning: "As-Sami is the One who hears every sound, every whisper, every thought, and every prayer. His hearing encompasses all things simultaneously - the cry of the ant beneath the stone, the supplication of the distressed, and the secret conversations of the plotters. No sound in the universe, no matter how faint, escapes His hearing.",
    benefits: "Invoking this name strengthens the conviction that every dua is heard by Allah. It is powerful when making supplications, especially in times of need. It also develops mindfulness about what one says, knowing Allah hears everything.",
    quranReference: "2:127",
    relatedNames: [19, 27, 31]
  },
  {
    number: 27, arabic: "الْبَصِيرُ", transliteration: "Al-Basir", english: "The All-Seeing", bangla: "সর্বদ্রষ্টা",
    meaning: "Al-Basir is the One who sees everything - what is visible and what is hidden, what is in the depths of darkness and what is in the brilliance of light. His sight perceives the movement of a black ant on a black rock on a dark night. He sees every action, every deed, and every gesture of His creation. Nothing is hidden from His all-encompassing vision.",
    benefits: "Reciting this name develops taqwa (God-consciousness) and discourages sinful behavior, knowing that Allah sees everything. It sharpens spiritual insight and helps one see the truth in situations that seem unclear.",
    quranReference: "17:1",
    relatedNames: [19, 26, 31]
  },
  {
    number: 28, arabic: "الْحَكَمُ", transliteration: "Al-Hakam", english: "The Judge", bangla: "বিচারক",
    meaning: "Al-Hakam is the ultimate Judge whose judgment is perfect, fair, and final. He judges between His servants with absolute justice, and no decision of His can ever be reversed or questioned. On the Day of Judgment, He will settle all disputes and deliver perfect justice to every soul. His judgment encompasses both this world and the Hereafter.",
    benefits: "Invoking this name brings justice in one's affairs and helps resolve disputes fairly. It is recommended when facing an unjust situation or seeking a fair resolution. It strengthens trust in divine justice.",
    quranReference: "6:114",
    relatedNames: [29, 46, 86]
  },
  {
    number: 29, arabic: "الْعَدْلُ", transliteration: "Al-Adl", english: "The Just", bangla: "ন্যায়পরায়ণ",
    meaning: "Al-Adl is the embodiment of perfect justice. He never wrongs anyone, not even by the weight of an atom. His justice is absolute and encompasses all of creation. He gives everyone their due rights, and His scales are perfectly balanced. In a world full of injustice, this name is a powerful reminder that ultimate justice belongs to Allah alone.",
    benefits: "Reciting this name inspires justice and fairness in one's own dealings. It brings comfort to those who have been wronged, reminding them that Allah's justice is inevitable. It helps in making fair decisions.",
    quranReference: "4:40",
    relatedNames: [28, 46, 86]
  },
  {
    number: 30, arabic: "اللَّطِيفُ", transliteration: "Al-Latif", english: "The Subtle One", bangla: "সূক্ষ্মদর্শী",
    meaning: "Al-Latif is the One who is gentle, subtle, and kind in ways that are beyond human perception. He knows the finest details of every situation and acts with supreme delicacy and wisdom. His kindness reaches His servants through ways they could never imagine or perceive. He provides for His creation through hidden, gentle, and unexpected means.",
    benefits: "Reciting this name 129 times brings relief from difficulties through unexpected and gentle means. It is especially powerful during hardship, as it invokes Allah's subtle and kind intervention. It brings ease and removes worries.",
    quranReference: "6:103",
    relatedNames: [31, 46, 83]
  },
  {
    number: 31, arabic: "الْخَبِيرُ", transliteration: "Al-Khabir", english: "The All-Aware", bangla: "সর্ববিষয়ে অবহিত",
    meaning: "Al-Khabir is the One who is aware of every detail, every secret, and every hidden reality. His awareness penetrates to the innermost nature of things. He knows not just what happens, but the deepest reasons and consequences of every event. Nothing is hidden from His awareness, including the most secret thoughts and intentions of the heart.",
    benefits: "Invoking this name develops self-awareness and introspection. It reminds the believer that Allah is aware of their innermost thoughts, encouraging sincerity and honesty. It helps in understanding the deeper meaning of events.",
    quranReference: "6:18",
    relatedNames: [19, 26, 27]
  },
  {
    number: 32, arabic: "الْحَلِيمُ", transliteration: "Al-Halim", english: "The Forbearing", bangla: "সহনশীল",
    meaning: "Al-Halim is the One who shows restraint and patience despite having the power to punish. He does not hasten punishment for His disobedient servants but gives them time and opportunity to repent. Despite the constant sins of humanity, He continues to provide for them, sustain them, and give them chance after chance. His forbearance is beyond human comprehension.",
    benefits: "Reciting this name develops patience and forbearance in one's character. It is recommended for those who struggle with anger. Writing it on a paper and placing it where seeds are planted brings abundant harvest.",
    quranReference: "2:225",
    relatedNames: [1, 2, 14]
  },
  {
    number: 33, arabic: "الْعَظِيمُ", transliteration: "Al-Azeem", english: "The Magnificent", bangla: "মহান",
    meaning: "Al-Azeem is the One whose greatness and magnificence is beyond all comprehension. His greatness encompasses His essence, His attributes, and His actions. The entire universe with its billions of galaxies is but a tiny speck compared to His throne. His magnificence is such that the human mind cannot fully grasp it, and all of creation combined cannot match even a fraction of His greatness.",
    benefits: "Reciting this name in ruku (bowing) during prayer, as taught by the Prophet, brings immense reward. It fills the heart with awe and reverence for Allah, diminishing the importance of worldly concerns.",
    quranReference: "2:255",
    relatedNames: [36, 37, 10]
  },
  {
    number: 34, arabic: "الْغَفُورُ", transliteration: "Al-Ghafur", english: "The Forgiving", bangla: "ক্ষমাকারী",
    meaning: "Al-Ghafur is the One who forgives abundantly and covers the sins of His servants. While Al-Ghaffar emphasizes the frequency of forgiveness, Al-Ghafur emphasizes the quality and completeness of that forgiveness. When Allah forgives, He covers the sin completely, erases it from the record, and does not hold it against the servant. His forgiveness is comprehensive and total.",
    benefits: "Reciting this name brings hope to those burdened by sin. It encourages repentance and return to Allah, knowing that His forgiveness is complete and comprehensive. It removes despair and replaces it with hope.",
    quranReference: "2:173",
    relatedNames: [1, 2, 14]
  },
  {
    number: 35, arabic: "الشَّكُورُ", transliteration: "Ash-Shakur", english: "The Grateful", bangla: "গুণগ্রাহী",
    meaning: "Ash-Shakur is the One who appreciates even the smallest good deed and rewards it abundantly. He multiplies the reward of His servants many times over, giving far more than what is deserved. A single good deed is rewarded tenfold or even more, while a sin is counted as only one. His appreciation of His servants' efforts is limitless and generous.",
    benefits: "Reflecting on this name inspires gratitude and encourages performing good deeds, no matter how small. It brings contentment and the realization that no effort goes unnoticed by Allah. It motivates consistent righteous action.",
    quranReference: "35:30",
    relatedNames: [42, 16, 56]
  },
  {
    number: 36, arabic: "الْعَلِيُّ", transliteration: "Al-Ali", english: "The Most High", bangla: "সর্বোচ্চ",
    meaning: "Al-Ali is the One who is exalted above everything in His essence, attributes, and status. He is above all of creation, transcending space and time. His highness is in every sense - in His being, in His power, in His authority, and in His attributes. Nothing is above Him, and He is supremely exalted above all that His creation can conceive.",
    benefits: "Reciting this name elevates one's spiritual station and removes feelings of inadequacy. It helps the believer focus on the hereafter and not be weighed down by worldly matters. It brings a sense of dignity and purpose.",
    quranReference: "2:255",
    relatedNames: [33, 37, 78]
  },
  {
    number: 37, arabic: "الْكَبِيرُ", transliteration: "Al-Kabir", english: "The Most Great", bangla: "সুমহান",
    meaning: "Al-Kabir is the One who is greater than everything in existence. He is the Greatest in His essence, attributes, and majesty. Everything in creation, no matter how vast or magnificent, is insignificant compared to Him. The phrase 'Allahu Akbar' (Allah is the Greatest) echoes this name and is the most frequently spoken phrase in Islamic worship.",
    benefits: "Reciting this name fills the heart with reverence and awe for Allah. It diminishes the fear of creation and strengthens the believer's courage. It is the essence of the takbir said in every prayer and during the adhan.",
    quranReference: "22:62",
    relatedNames: [33, 36, 10]
  },
  {
    number: 38, arabic: "الْحَفِيظُ", transliteration: "Al-Hafiz", english: "The Preserver", bangla: "সংরক্ষণকারী",
    meaning: "Al-Hafiz is the One who preserves and protects all of creation. He safeguards the heavens and the earth from destruction, preserves the record of every deed, and protects His faithful servants from harm. He preserves the Quran from corruption, maintains the balance of the universe, and guards the faith of the believers.",
    benefits: "Invoking this name brings divine protection from physical and spiritual harm. It is especially powerful for seeking safety during travel or in dangerous situations. Reciting it over one's family and possessions grants preservation.",
    quranReference: "11:57",
    relatedNames: [7, 43, 52]
  },
  {
    number: 39, arabic: "الْمُقِيتُ", transliteration: "Al-Muqit", english: "The Nourisher", bangla: "খাদ্যদাতা",
    meaning: "Al-Muqit is the One who creates nourishment and sustains every living being. He provides the food, water, and sustenance that all creatures need to survive. Beyond physical nourishment, He also nourishes the soul with faith, knowledge, and guidance. He is the One who ensures that every creature receives exactly what it needs to thrive.",
    benefits: "Reciting this name brings barakah (blessing) in food and sustenance. It is recommended to recite before meals. It also strengthens trust in Allah's provision and removes anxiety about material needs.",
    quranReference: "4:85",
    relatedNames: [17, 16, 88]
  },
  {
    number: 40, arabic: "الْحَسِيبُ", transliteration: "Al-Hasib", english: "The Reckoner", bangla: "হিসাবগ্রহণকারী",
    meaning: "Al-Hasib is the One who takes account of everything and is sufficient for His servants. He reckons every deed, every word, and every thought with perfect precision. On the Day of Judgment, He will present a detailed account of every person's life, and nothing will be overlooked or forgotten. He is also sufficient for those who put their trust in Him.",
    benefits: "Reciting 'HasbiyAllahu wa ni'mal Wakil' (Allah is sufficient for me and the best of Guardians) invokes this attribute. It brings sufficiency in all matters and is powerful against those who intend harm.",
    quranReference: "4:6",
    relatedNames: [28, 57, 86]
  },
  {
    number: 41, arabic: "الْجَلِيلُ", transliteration: "Al-Jalil", english: "The Majestic", bangla: "মহিমান্বিত",
    meaning: "Al-Jalil is the One who possesses absolute majesty, glory, and grandeur. His majesty is inherent to His being and is not derived from anyone or anything. All forms of greatness, beauty, and perfection belong to Him in their most complete form. He is majestic in His essence, His names, His attributes, and His actions.",
    benefits: "Reflecting on this name inspires awe and reverence for Allah. Writing it on a piece of silk and keeping it close brings honor and respect from others. It helps develop humility before Allah's grandeur.",
    quranReference: "55:27",
    relatedNames: [33, 36, 48]
  },
  {
    number: 42, arabic: "الْكَرِيمُ", transliteration: "Al-Karim", english: "The Generous", bangla: "মহানুভব",
    meaning: "Al-Karim is the One whose generosity is limitless, who gives without being asked, and who does not diminish anything by His giving. He gives abundantly, forgives repeatedly, and fulfills the needs of His servants beyond their expectations. His generosity encompasses both material and spiritual blessings, and He never reproaches those who receive His gifts.",
    benefits: "Reciting this name before sleeping brings honor and generosity into one's life. It opens the doors of divine generosity and inspires one to be generous with others. It is especially powerful for seeking Allah's grace and favor.",
    quranReference: "27:40",
    relatedNames: [16, 35, 88]
  },
  {
    number: 43, arabic: "الرَّقِيبُ", transliteration: "Ar-Raqib", english: "The Watchful", bangla: "তত্ত্বাবধায়ক",
    meaning: "Ar-Raqib is the One who watches over everything at all times. Not a single moment passes without His observation. He watches over the deeds, words, and intentions of His servants. He is the perfect Observer from whom nothing can be hidden, and His watching is constant, comprehensive, and never interrupted by distraction or sleep.",
    benefits: "Invoking this name develops strong self-awareness and accountability. It helps in maintaining integrity even when alone, knowing that Allah is always watching. It protects the family when recited over them.",
    quranReference: "4:1",
    relatedNames: [7, 26, 27]
  },
  {
    number: 44, arabic: "الْمُجِيبُ", transliteration: "Al-Mujib", english: "The Responsive", bangla: "সাড়াদানকারী",
    meaning: "Al-Mujib is the One who responds to every prayer and supplication. He answers the call of the distressed, fulfills the needs of the needy, and grants the requests of those who ask. His response may come in the form we expect or in a better form that we could not have imagined. He is close to His servants and responds to their prayers without any intermediary.",
    benefits: "Reciting this name before making dua increases the likelihood of acceptance. It is especially powerful during the last third of the night, between the adhan and iqamah, and during prostration. It strengthens hope in Allah's response.",
    quranReference: "11:61",
    relatedNames: [26, 45, 52]
  },
  {
    number: 45, arabic: "الْوَاسِعُ", transliteration: "Al-Wasi", english: "The All-Encompassing", bangla: "প্রশস্ত",
    meaning: "Al-Wasi is the One whose capacity, knowledge, mercy, and provision encompass all things. He is vast and limitless in every attribute. His mercy encompasses all creation, His knowledge encompasses all things, and His provision reaches every living being. There is no limit to His generosity, no boundary to His mercy, and no end to His greatness.",
    benefits: "Reciting this name expands one's provision and removes feelings of limitation and scarcity. It broadens the heart and mind, helping one see beyond immediate difficulties. It is powerful for those feeling constrained in any aspect of life.",
    quranReference: "2:115",
    relatedNames: [1, 17, 88]
  },
  {
    number: 46, arabic: "الْحَكِيمُ", transliteration: "Al-Hakim", english: "The Wise", bangla: "প্রজ্ঞাময়",
    meaning: "Al-Hakim is the One whose every action, decree, and creation is imbued with perfect wisdom. He places everything in its right place and at its right time. Nothing in His creation is purposeless, and every event, whether perceived as good or bad, serves a greater divine purpose. His wisdom is infinite and transcends human understanding.",
    benefits: "Invoking this name brings wisdom and clarity in decision-making. It helps the believer accept divine decrees with patience, understanding that there is wisdom behind everything. It is recommended for those seeking guidance.",
    quranReference: "2:32",
    relatedNames: [19, 28, 30]
  },
  {
    number: 47, arabic: "الْوَدُودُ", transliteration: "Al-Wadud", english: "The Loving One", bangla: "প্রেমময়",
    meaning: "Al-Wadud is the One who loves His righteous servants with a love that is pure, unconditional, and complete. He is the most loving and the source of all love in the universe. His love for His servants manifests in His guidance, His mercy, His forgiveness, and His blessings. When He loves a servant, He guides them, protects them, and causes the creation to love them.",
    benefits: "Reciting this name 1000 times over food that is shared between spouses can bring harmony and love to a marriage. It attracts love and affection from others and strengthens the bond between hearts.",
    quranReference: "11:90",
    relatedNames: [1, 2, 83]
  },
  {
    number: 48, arabic: "الْمَجِيدُ", transliteration: "Al-Majid", english: "The Most Glorious", bangla: "মহিমাময়",
    meaning: "Al-Majid is the One who possesses supreme glory, magnificence, and honor. His glory is eternal and encompasses His essence and all His attributes. He is glorified in the heavens and on the earth, and His glory cannot be diminished or challenged. Every form of honor and magnificence in creation is a mere reflection of His infinite glory.",
    benefits: "Reciting this name brings honor, dignity, and a sense of glory in one's character. It is included in the salawat upon the Prophet (durood), connecting the believer to the glory of Allah. It elevates spiritual status.",
    quranReference: "11:73",
    relatedNames: [33, 41, 56]
  },
  {
    number: 49, arabic: "الْبَاعِثُ", transliteration: "Al-Ba'ith", english: "The Resurrector", bangla: "পুনরুত্থানকারী",
    meaning: "Al-Ba'ith is the One who resurrects all creation after death on the Day of Judgment. He raises the dead from their graves, reassembles their bodies, and brings them to account. He also awakens people from the sleep of heedlessness and sends prophets and messengers to revive hearts and guide humanity back to the straight path.",
    benefits: "Reflecting on this name strengthens belief in the Hereafter and motivates preparation for the Day of Judgment. It is powerful against spiritual heedlessness and helps maintain a sense of urgency about one's deeds.",
    quranReference: "22:7",
    relatedNames: [58, 59, 60]
  },
  {
    number: 50, arabic: "الشَّهِيدُ", transliteration: "Ash-Shahid", english: "The Witness", bangla: "সাক্ষী",
    meaning: "Ash-Shahid is the One who witnesses everything that occurs in creation. He is present as a witness to every event, every transaction, every word spoken, and every thought conceived. On the Day of Judgment, He will be the ultimate Witness, and His testimony is absolute truth. Nothing can be denied or hidden from the divine Witness.",
    benefits: "Invoking this name develops honesty and integrity, knowing that Allah is a witness to everything. It is powerful in legal matters and disputes, calling upon the ultimate Witness for truth. It strengthens accountability.",
    quranReference: "4:166",
    relatedNames: [26, 27, 43]
  },
  {
    number: 51, arabic: "الْحَقُّ", transliteration: "Al-Haqq", english: "The Truth", bangla: "সত্য",
    meaning: "Al-Haqq is the absolute, eternal Truth. His existence is the only true reality, and everything else exists only by His will. He is the Truth in His essence, His words, His promises, and His actions. The Quran is truth, the prophets spoke truth, and the Day of Judgment is truth. Everything that contradicts Him is falsehood, and truth will always prevail over falsehood.",
    benefits: "Reciting this name strengthens conviction and helps distinguish truth from falsehood. It is powerful when seeking clarity and guidance. It brings stability and firmness in faith, especially during times of doubt.",
    quranReference: "22:6",
    relatedNames: [28, 29, 86]
  },
  {
    number: 52, arabic: "الْوَكِيلُ", transliteration: "Al-Wakil", english: "The Trustee", bangla: "কর্মবিধায়ক",
    meaning: "Al-Wakil is the One who is the perfect Trustee and Guardian of affairs. When a servant entrusts their matters to Allah, He takes complete care of them in the best possible way. He manages the affairs of the entire universe with perfect wisdom and care. Putting one's trust in Al-Wakil means relying on Him completely while still making reasonable effort.",
    benefits: "Reciting 'HasbunAllahu wa ni'mal Wakil' brings immediate comfort during anxiety and fear. It is the phrase used by Ibrahim when thrown into the fire and by the companions at the Battle of Uhud. It brings divine sufficiency.",
    quranReference: "3:173",
    relatedNames: [38, 40, 55]
  },
  {
    number: 53, arabic: "الْقَوِيُّ", transliteration: "Al-Qawiyy", english: "The Most Strong", bangla: "শক্তিশালী",
    meaning: "Al-Qawiyy is the One who possesses complete and perfect strength that never diminishes or weakens. His power is inexhaustible and absolute. He never tires, never weakens, and never needs rest. All the forces and powers in the universe are nothing compared to His strength. He is the source of all strength, and no force can resist His will.",
    benefits: "Invoking this name brings strength during weakness and courage during fear. It is powerful for those facing overwhelming challenges. It reminds the believer that they can draw strength from the Most Strong.",
    quranReference: "22:40",
    relatedNames: [8, 54, 69]
  },
  {
    number: 54, arabic: "الْمَتِينُ", transliteration: "Al-Matin", english: "The Firm One", bangla: "অবিচল",
    meaning: "Al-Matin is the One whose strength is firm, steadfast, and unwavering. He is the One whose power is stable and whose ability is unshakeable. While Al-Qawiyy emphasizes the intensity of strength, Al-Matin emphasizes its firmness and reliability. His power cannot be resisted, His plans cannot be thwarted, and His decree cannot be altered.",
    benefits: "Reciting this name brings firmness and steadfastness in faith and action. It is powerful for those experiencing instability or uncertainty in their lives. It strengthens resolve and determination.",
    quranReference: "51:58",
    relatedNames: [8, 53, 69]
  },
  {
    number: 55, arabic: "الْوَلِيُّ", transliteration: "Al-Waliyy", english: "The Protecting Friend", bangla: "অভিভাবক বন্ধু",
    meaning: "Al-Waliyy is the One who is the beloved protecting friend and supporter of the believers. He stands by them, guides them, defends them, and assists them in all their affairs. He is the best friend one can have - always present, always caring, always protecting. His friendship is loyal, eternal, and unconditional for those who believe.",
    benefits: "Invoking this name brings divine friendship, support, and protection. It removes feelings of loneliness and abandonment. It is especially comforting for those who feel isolated or friendless, reminding them that Allah is the best Friend.",
    quranReference: "2:257",
    relatedNames: [7, 38, 52]
  },
  {
    number: 56, arabic: "الْحَمِيدُ", transliteration: "Al-Hamid", english: "The Praiseworthy", bangla: "প্রশংসিত",
    meaning: "Al-Hamid is the One who deserves all praise and gratitude. He is praiseworthy in His essence, His attributes, His names, and His actions. Every good thing that exists is from Him and deserving of praise. Whether His servants praise Him or not, He remains eternally praiseworthy. All praise in the universe ultimately returns to Him.",
    benefits: "Reciting this name increases one's gratitude and ability to see blessings in every situation. It is the foundation of 'Alhamdulillah' (All praise is due to Allah), the phrase most beloved to Allah. It brings contentment and joy.",
    quranReference: "14:1",
    relatedNames: [35, 42, 88]
  },
  {
    number: 57, arabic: "الْمُحْصِي", transliteration: "Al-Muhsi", english: "The Appraiser", bangla: "গণনাকারী",
    meaning: "Al-Muhsi is the One who counts, enumerates, and knows the number of every single thing in existence. He has counted every grain of sand, every drop of rain, every leaf that falls, and every breath that is taken. Nothing escapes His count, and His knowledge of numbers and quantities is infinite and precise. He keeps a perfect record of everything.",
    benefits: "Reflecting on this name reminds the believer that every deed, no matter how small, is counted and recorded. It encourages mindfulness in actions and words, knowing that nothing is overlooked or forgotten.",
    quranReference: "19:94",
    relatedNames: [19, 40, 43]
  },
  {
    number: 58, arabic: "الْمُبْدِئُ", transliteration: "Al-Mubdi", english: "The Originator", bangla: "প্রথম সৃষ্টিকারী",
    meaning: "Al-Mubdi is the One who originated all creation for the first time without any prior model, pattern, or pre-existing material. He is the One who initiates existence from absolute nothingness. Every creature, every galaxy, every atom was first brought into being by Al-Mubdi. His power of origination is limitless and continues to manifest in new creations.",
    benefits: "Invoking this name helps in starting new ventures and projects. It is powerful for overcoming creative blocks and finding innovative solutions. It reminds the believer that the One who created from nothing can create new possibilities.",
    quranReference: "10:34",
    relatedNames: [11, 12, 59]
  },
  {
    number: 59, arabic: "الْمُعِيدُ", transliteration: "Al-Mu'id", english: "The Restorer", bangla: "পুনরায় সৃষ্টিকারী",
    meaning: "Al-Mu'id is the One who restores creation after its destruction and brings it back again. He is the One who will resurrect all beings on the Day of Judgment, restoring them to life after death. He can restore health after illness, prosperity after poverty, and hope after despair. His power to restore is as effortless as His power to create.",
    benefits: "Reciting this name brings hope in situations that seem beyond repair. It is powerful for those seeking to restore lost blessings, relationships, or health. It strengthens faith in the resurrection and the Hereafter.",
    quranReference: "10:34",
    relatedNames: [11, 49, 58]
  },
  {
    number: 60, arabic: "الْمُحْيِي", transliteration: "Al-Muhyi", english: "The Giver of Life", bangla: "জীবনদাতা",
    meaning: "Al-Muhyi is the One who gives life to all living things. He creates life where there was none, brings the dead earth back to life with rain, gives life to hearts through faith and guidance, and will resurrect all of creation on the Day of Judgment. Every heartbeat, every breath, and every moment of consciousness is a direct gift from Al-Muhyi.",
    benefits: "Reciting this name brings vitality and energy. It is powerful for those feeling spiritually dead or emotionally lifeless. It is recited over the sick for healing and is a reminder of Allah's power to give life in all its forms.",
    quranReference: "30:50",
    relatedNames: [11, 49, 61]
  },
  {
    number: 61, arabic: "الْمُمِيتُ", transliteration: "Al-Mumit", english: "The Taker of Life", bangla: "মৃত্যুদাতা",
    meaning: "Al-Mumit is the One who causes death to all living things at their appointed time. He is the One who ends life when its term is complete, and no soul can die except by His permission. Death is not a punishment but a transition decreed by Allah. He takes the souls of His servants with perfect timing and wisdom, and none can escape or delay their appointed time.",
    benefits: "Reflecting on this name reminds the believer of the temporary nature of this world and the certainty of death. It motivates preparation for the Hereafter and helps overcome the fear of death through acceptance of Allah's decree.",
    quranReference: "3:156",
    relatedNames: [49, 60, 62]
  },
  {
    number: 62, arabic: "الْحَيُّ", transliteration: "Al-Hayy", english: "The Ever-Living", bangla: "চিরঞ্জীব",
    meaning: "Al-Hayy is the One who is eternally alive, whose life has no beginning and no end. His life is perfect, complete, and self-sustaining. He does not sleep, does not tire, and is not subject to any weakness. While all living things derive their life from Him and will eventually die, He alone is the Ever-Living who will never perish. His life encompasses perfect knowledge, will, and power.",
    benefits: "Reciting 'Ya Hayyu Ya Qayyum' is one of the greatest supplications, believed to contain Ism al-A'zam (the Greatest Name of Allah). It brings spiritual life to dead hearts and is powerful during distress.",
    quranReference: "2:255",
    relatedNames: [63, 60, 96]
  },
  {
    number: 63, arabic: "الْقَيُّومُ", transliteration: "Al-Qayyum", english: "The Self-Subsisting", bangla: "স্বয়ংসম্পূর্ণ",
    meaning: "Al-Qayyum is the One who is self-subsisting and sustains all of creation. He does not depend on anyone or anything for His existence, while everything in existence depends entirely on Him. If He were to withdraw His support for even a moment, the entire universe would cease to exist. He maintains, preserves, and sustains every atom in the cosmos.",
    benefits: "Paired with Al-Hayy, reciting these two names together is considered among the most powerful supplications. It brings divine support and sustenance in all matters. It is the secret to relying fully on Allah for every need.",
    quranReference: "2:255",
    relatedNames: [62, 38, 52]
  },
  {
    number: 64, arabic: "الْوَاجِدُ", transliteration: "Al-Wajid", english: "The Finder", bangla: "প্রাপ্তকারী",
    meaning: "Al-Wajid is the One who finds and perceives everything He seeks. Nothing is lost to Him or hidden from Him. He is also the One who lacks nothing and is completely self-sufficient. He possesses everything in abundance and never faces deficiency or need. Whatever He desires, He finds and achieves effortlessly.",
    benefits: "Invoking this name helps in finding what is lost - whether material possessions, spiritual guidance, or inner peace. It is powerful for those searching for direction in life, reminding them that Allah can help them find their way.",
    quranReference: "93:7",
    relatedNames: [19, 88, 45]
  },
  {
    number: 65, arabic: "الْمَاجِدُ", transliteration: "Al-Majid", english: "The Noble", bangla: "মহৎ",
    meaning: "Al-Majid is the One who is exceedingly noble and generous. His nobility encompasses His being and His actions. He is noble in His forgiveness, generous in His giving, and magnificent in His dealing with His creation. His nobility is such that He treats His servants with grace far beyond what they deserve, forgiving their shortcomings and multiplying their good deeds.",
    benefits: "Reciting this name brings nobility of character and generosity of spirit. It helps the believer develop a noble disposition and treat others with grace and kindness. It attracts barakah and divine nobility into one's life.",
    quranReference: "11:73",
    relatedNames: [41, 42, 48]
  },
  {
    number: 66, arabic: "الْوَاحِدُ", transliteration: "Al-Wahid", english: "The One", bangla: "এক",
    meaning: "Al-Wahid is the One who is singular and unique in every way. He has no partner, no equal, and no rival. His Oneness pervades His essence, His attributes, His actions, and His divinity. There is nothing in existence that resembles Him or can be compared to Him. He alone deserves worship, and He alone has complete control over all affairs.",
    benefits: "Reciting this name strengthens monotheistic belief and removes all traces of shirk (associating partners with Allah). It brings unity of heart and purpose, helping the believer focus solely on Allah in their worship and daily life.",
    quranReference: "2:163",
    relatedNames: [67, 68, 3]
  },
  {
    number: 67, arabic: "الْأَحَدُ", transliteration: "Al-Ahad", english: "The Unique", bangla: "অদ্বিতীয়",
    meaning: "Al-Ahad is the One who is absolutely unique, indivisible, and incomparable. While Al-Wahid emphasizes numerical oneness, Al-Ahad emphasizes qualitative uniqueness - there is nothing whatsoever like Him. He is unique in His essence, unique in His attributes, and unique in His right to worship. Surah Al-Ikhlas (112) centers on this name as the declaration of pure monotheism.",
    benefits: "Reciting Surah Al-Ikhlas, which begins with this name, equals one-third of the Quran in reward. This name purifies one's belief in Allah's uniqueness and removes any subtle forms of associating partners with Him.",
    quranReference: "112:1",
    relatedNames: [66, 68, 3]
  },
  {
    number: 68, arabic: "الصَّمَدُ", transliteration: "As-Samad", english: "The Eternal Refuge", bangla: "অমুখাপেক্ষী",
    meaning: "As-Samad is the One to whom all creation turns in their needs, while He Himself is free from all needs. He is the self-sufficient Master upon whom all depend. He does not eat, drink, sleep, or require anything from His creation. Every creature relies on Him for existence, sustenance, and guidance, while He relies on nothing and no one. He is the eternal, absolute, and perfect refuge.",
    benefits: "Reciting this name fulfills needs and makes one self-sufficient. It helps remove dependence on creation and strengthens reliance on the Creator. It is part of Surah Al-Ikhlas, which provides immense spiritual protection.",
    quranReference: "112:2",
    relatedNames: [66, 67, 88]
  },
  {
    number: 69, arabic: "الْقَادِرُ", transliteration: "Al-Qadir", english: "The All-Powerful", bangla: "শক্তিমান",
    meaning: "Al-Qadir is the One who has complete power over all things. He can do anything He wills, and nothing is beyond His capability. He creates, destroys, gives life, causes death, honors, and humiliates - all with absolute ease and without the slightest effort. His power is unlimited, unconditional, and unmatched by anything in creation.",
    benefits: "Invoking this name strengthens faith in Allah's ability to change any situation. It is powerful during seemingly impossible circumstances, reminding the believer that Allah can do all things. It builds unshakeable trust in divine power.",
    quranReference: "6:65",
    relatedNames: [53, 54, 70]
  },
  {
    number: 70, arabic: "الْمُقْتَدِرُ", transliteration: "Al-Muqtadir", english: "The Creator of Power", bangla: "ক্ষমতাবান",
    meaning: "Al-Muqtadir is the One who has absolute and prevailing power to ordain and determine all things. While Al-Qadir refers to Allah's inherent ability, Al-Muqtadir emphasizes the actual exercise and manifestation of that power in creation. He demonstrates His power through His creation, His decrees, and His management of all affairs in the universe.",
    benefits: "Reciting this name brings empowerment and the ability to overcome challenges. It is recommended for those who feel powerless or overwhelmed. It reminds the believer that divine power is always at work in their lives.",
    quranReference: "54:42",
    relatedNames: [53, 54, 69]
  },
  {
    number: 71, arabic: "الْمُقَدِّمُ", transliteration: "Al-Muqaddim", english: "The Expediter", bangla: "অগ্রসরকারী",
    meaning: "Al-Muqaddim is the One who brings forward and advances whomever He wills. He advances people in rank, status, knowledge, and closeness to Him. He expedites what is beneficial and promotes whom He chooses. He brought some prophets before others, some nations before others, and some events before others - all according to His perfect wisdom and plan.",
    benefits: "Invoking this name is beneficial for those seeking advancement and progress in their lives. It helps in overcoming delays and moving forward. It is especially powerful for those who feel stuck or stagnant.",
    quranReference: "50:28",
    relatedNames: [72, 23, 24]
  },
  {
    number: 72, arabic: "الْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", english: "The Delayer", bangla: "বিলম্বকারী",
    meaning: "Al-Mu'akhkhir is the One who delays and holds back what He wills. He postpones events, delays punishment to give time for repentance, and holds back blessings until the right time. His delaying is always based on wisdom that may be beyond human understanding. Sometimes what seems like a delay is actually divine protection or perfect timing.",
    benefits: "Understanding this name brings patience with Allah's timing. It teaches the believer that divine delays are not denials but are based on wisdom. It helps accept waiting periods with trust and contentment.",
    quranReference: "14:42",
    relatedNames: [71, 22, 25]
  },
  {
    number: 73, arabic: "الْأَوَّلُ", transliteration: "Al-Awwal", english: "The First", bangla: "প্রথম",
    meaning: "Al-Awwal is the One who existed before everything else. He is the First without a beginning, the One who has always existed. Before time, before space, before any creation, there was Allah. He has no starting point, no origin, and nothing preceded Him. His firstness is absolute and eternal - He is the First from whom all existence originates.",
    benefits: "Reciting this name together with Al-Akhir, Az-Zahir, and Al-Batin (as mentioned in the Prophet's dua before sleeping) brings comprehensive protection and spiritual closeness to Allah. It removes attachment to temporal things.",
    quranReference: "57:3",
    relatedNames: [74, 75, 76]
  },
  {
    number: 74, arabic: "الْآخِرُ", transliteration: "Al-Akhir", english: "The Last", bangla: "শেষ",
    meaning: "Al-Akhir is the One who remains after everything else ceases to exist. He is the Last without an end, the One who will continue to exist when all of creation has perished. After the Day of Judgment, after Paradise and Hell are established, Allah will remain forever. His lastness is absolute - there is no end to His existence, and He will never cease to be.",
    benefits: "Reflecting on this name helps put worldly matters in perspective. Everything in this world will end, but Allah will remain forever. This brings comfort in loss and motivates focus on the eternal over the temporary.",
    quranReference: "57:3",
    relatedNames: [73, 75, 76]
  },
  {
    number: 75, arabic: "الظَّاهِرُ", transliteration: "Az-Zahir", english: "The Manifest", bangla: "প্রকাশ্য",
    meaning: "Az-Zahir is the One who is manifest and apparent through His signs and creation. Although He cannot be seen in this world, His existence is evident in everything around us - in the order of the universe, the beauty of nature, the complexity of life, and the guidance of revelation. He is above all creation, and nothing is above Him.",
    benefits: "Invoking this name helps one see the signs of Allah everywhere, strengthening faith through observation of the natural world. It opens the eyes of the heart to perceive divine manifestations in daily life.",
    quranReference: "57:3",
    relatedNames: [73, 74, 76]
  },
  {
    number: 76, arabic: "الْبَاطِنُ", transliteration: "Al-Batin", english: "The Hidden", bangla: "গোপন",
    meaning: "Al-Batin is the One who is hidden from human perception and senses. He is closer to us than our jugular vein, yet He cannot be perceived by sight in this world. His essence, His true nature, and the full reality of His attributes are beyond human comprehension. He is hidden not due to absence but due to the limitation of human perception before His overwhelming reality.",
    benefits: "Reflecting on this name develops inner awareness and spiritual depth. It reminds the believer that Allah is always close, even when unseen. It strengthens the connection between the heart and the unseen Creator.",
    quranReference: "57:3",
    relatedNames: [73, 74, 75]
  },
  {
    number: 77, arabic: "الْوَالِي", transliteration: "Al-Wali", english: "The Governor", bangla: "শাসনকর্তা",
    meaning: "Al-Wali is the One who is the sole Governor and Administrator of all creation. He manages and governs the affairs of the entire universe with absolute authority and perfect wisdom. Every event, from the movement of galaxies to the growth of a seed, is under His direct governance. His governance is comprehensive, continuous, and unchallenged.",
    benefits: "Reciting this name helps in accepting divine governance over all affairs. It strengthens trust in Allah's management of one's life and reduces the anxiety of trying to control everything. It brings peace through surrender to divine will.",
    quranReference: "13:11",
    relatedNames: [3, 55, 84]
  },
  {
    number: 78, arabic: "الْمُتَعَالِي", transliteration: "Al-Muta'ali", english: "The Most Exalted", bangla: "সর্বোচ্চ মর্যাদাবান",
    meaning: "Al-Muta'ali is the One who is supremely exalted above all creation and above everything that can be conceived. He is above all deficiency, above all limitation, and above every comparison. His exaltation is not merely spatial but encompasses every dimension - He is exalted in His being, His attributes, His power, and His sovereignty.",
    benefits: "Invoking this name raises the believer's aspirations and removes attachment to lowly pursuits. It brings honor and exaltation in one's character, helping one rise above petty matters and focus on what truly matters.",
    quranReference: "13:9",
    relatedNames: [36, 37, 10]
  },
  {
    number: 79, arabic: "الْبَرُّ", transliteration: "Al-Barr", english: "The Source of Goodness", bangla: "পুণ্যদাতা",
    meaning: "Al-Barr is the One who is the source of all goodness, kindness, and righteousness. He treats His servants with immense kindness that exceeds what they deserve. His goodness reaches every creature, and His kindness is gentle, continuous, and overwhelming. He is good to those who obey Him and even to those who disobey Him, giving them time to repent.",
    benefits: "Reciting this name attracts goodness and kindness into one's life. It inspires the believer to be good to others as Allah is good to them. It brings barakah and blessings in one's relationships and dealings.",
    quranReference: "52:28",
    relatedNames: [1, 2, 83]
  },
  {
    number: 80, arabic: "التَّوَّابُ", transliteration: "At-Tawwab", english: "The Acceptor of Repentance", bangla: "তওবা কবুলকারী",
    meaning: "At-Tawwab is the One who constantly turns toward His servants in forgiveness and accepts their repentance. The name implies a continuous, repetitive action - He turns toward His servants again and again, every time they turn to Him in repentance. He not only accepts repentance but also facilitates it by inspiring the desire to repent and creating the conditions for sincere return.",
    benefits: "Reciting this name facilitates sincere repentance and opens the door to forgiveness. It is especially powerful after committing a sin, as it invokes the One who loves to accept repentance. It removes despair and strengthens hope.",
    quranReference: "2:37",
    relatedNames: [14, 34, 82]
  },
  {
    number: 81, arabic: "الْمُنْتَقِمُ", transliteration: "Al-Muntaqim", english: "The Avenger", bangla: "প্রতিশোধ গ্রহণকারী",
    meaning: "Al-Muntaqim is the One who justly punishes the wrongdoers and takes retribution against those who persist in tyranny and rebellion. His vengeance is not like human vengeance driven by emotion; it is perfectly just, proportionate, and based on complete wisdom. He gives ample opportunity for repentance before His punishment descends, and His punishment serves as a deterrent and a restoration of justice.",
    benefits: "Reflecting on this name instills a healthy fear of Allah's punishment and motivates avoidance of sin. It brings comfort to the oppressed, knowing that Allah will ultimately avenge injustice. It should be paired with reflection on His mercy.",
    quranReference: "32:22",
    relatedNames: [15, 25, 28]
  },
  {
    number: 82, arabic: "الْعَفُوُّ", transliteration: "Al-Afuww", english: "The Pardoner", bangla: "মার্জনাকারী",
    meaning: "Al-Afuww is the One who pardons and erases sins completely. While Al-Ghafur covers the sin, Al-Afuww wipes it out as if it never existed. His pardoning goes beyond forgiveness - it is a complete erasure and obliteration of the sin from the record. The Prophet taught Aisha to ask 'O Allah, You are Al-Afuww, You love to pardon, so pardon me' during Laylatul Qadr.",
    benefits: "This is one of the most powerful names to invoke during the Night of Power (Laylatul Qadr). Reciting the dua 'Allahumma innaka Afuwwun tuhibbul afwa fa'fu anni' brings complete pardoning of sins. It is a cornerstone of Ramadan supplications.",
    quranReference: "4:99",
    relatedNames: [14, 34, 80]
  },
  {
    number: 83, arabic: "الرَّؤُوفُ", transliteration: "Ar-Ra'uf", english: "The Compassionate", bangla: "অত্যন্ত স্নেহশীল",
    meaning: "Ar-Ra'uf is the One who shows the most tender compassion and gentleness to His servants. His compassion is so intense that it surpasses the tenderness of a mother for her newborn child. He is gentle with His servants, does not burden them beyond their capacity, and shows them kindness in ways they may not even perceive. His compassion is active, practical, and deeply personal.",
    benefits: "Invoking this name brings tenderness and compassion into one's life. It softens hardened hearts and inspires gentle treatment of others. It is especially powerful during times of emotional pain, as it invokes the most tender compassion of Allah.",
    quranReference: "2:207",
    relatedNames: [1, 2, 47]
  },
  {
    number: 84, arabic: "مَالِكُ الْمُلْكِ", transliteration: "Malikul-Mulk", english: "Owner of Sovereignty", bangla: "সার্বভৌমত্বের মালিক",
    meaning: "Malikul-Mulk is the Owner of all sovereignty and dominion. He grants power and authority to whomever He wills and takes it away from whomever He wills. All kingdoms, empires, and governments exist only by His permission and can be removed at His command. He is the ultimate Owner of everything, and all claims to ownership by creation are merely temporary trusts.",
    benefits: "Reciting this name develops detachment from worldly power and status. It reminds the believer that all authority comes from Allah and can be taken away at any time. It brings acceptance of divine decree regarding gains and losses.",
    quranReference: "3:26",
    relatedNames: [3, 24, 25]
  },
  {
    number: 85, arabic: "ذُوالْجَلَالِ وَالْإِكْرَامِ", transliteration: "Dhul-Jalali wal-Ikram", english: "Lord of Majesty and Bounty", bangla: "মহিমা ও সম্মানের অধিকারী",
    meaning: "Dhul-Jalali wal-Ikram is the One who possesses both absolute majesty that inspires awe and generous bounty that inspires love and gratitude. He combines the attributes of jalal (might, grandeur, and awe) with ikram (generosity, honor, and bounty). He is both feared for His majesty and loved for His generosity - a perfect balance that leads to the most complete form of worship.",
    benefits: "The Prophet said to persist in asking by this name, as it is among the greatest names of Allah. Reciting it brings both awe and gratitude, fear and hope, creating the perfect inner state for worship.",
    quranReference: "55:27",
    relatedNames: [41, 42, 48]
  },
  {
    number: 86, arabic: "الْمُقْسِطُ", transliteration: "Al-Muqsit", english: "The Equitable", bangla: "ন্যায়বিচারক",
    meaning: "Al-Muqsit is the One who acts with complete equity and fairness. He establishes justice in the universe and ensures that every soul receives exactly what it deserves. His equity is perfect, encompassing every aspect of His creation and every interaction between His servants. He loves those who are just and commands His servants to establish justice on earth.",
    benefits: "Invoking this name inspires fairness in one's dealings and strengthens one's commitment to justice. It is powerful for those who have been wronged, as it calls upon the One who establishes perfect equity.",
    quranReference: "3:18",
    relatedNames: [28, 29, 51]
  },
  {
    number: 87, arabic: "الْجَامِعُ", transliteration: "Al-Jami", english: "The Gatherer", bangla: "সমবেতকারী",
    meaning: "Al-Jami is the One who gathers and assembles all of creation. He will gather all of humanity on the Day of Judgment for the final reckoning. He gathers hearts together in love and faith, gathers diverse things in harmony, and brings together what was scattered. He unifies the seemingly contradictory aspects of existence into a cohesive and purposeful whole.",
    benefits: "Reciting this name helps in reuniting loved ones and bringing people together. It is powerful for resolving disputes and creating harmony. It strengthens faith in the Day of Gathering when all accounts will be settled.",
    quranReference: "3:9",
    relatedNames: [49, 50, 28]
  },
  {
    number: 88, arabic: "الْغَنِيُّ", transliteration: "Al-Ghani", english: "The Self-Sufficient", bangla: "অমুখাপেক্ষী",
    meaning: "Al-Ghani is the One who is completely self-sufficient and independent of all creation. He needs nothing from anyone - no worship, no praise, no sustenance. All of creation needs Him, but He needs nothing. He is rich beyond measure, possessing all things and lacking nothing. Our worship does not benefit Him, and our disobedience does not harm Him.",
    benefits: "Reflecting on this name develops true humility and removes the illusion that Allah needs our worship. It helps the believer understand that worship is for our own benefit. It brings contentment and freedom from materialistic attachment.",
    quranReference: "35:15",
    relatedNames: [64, 68, 45]
  },
  {
    number: 89, arabic: "الْمُغْنِي", transliteration: "Al-Mughni", english: "The Enricher", bangla: "সমৃদ্ধকারী",
    meaning: "Al-Mughni is the One who enriches His servants and frees them from need. He grants wealth, sufficiency, and contentment to whomever He wills. His enrichment is not limited to material wealth but includes spiritual richness, contentment of the heart, and sufficiency in all affairs. True richness is the richness of the soul that He grants to His faithful servants.",
    benefits: "Invoking this name brings both material and spiritual enrichment. It is powerful for those seeking financial stability or freedom from debt. It brings contentment, which the Prophet described as true richness.",
    quranReference: "9:28",
    relatedNames: [16, 17, 88]
  },
  {
    number: 90, arabic: "الْمَانِعُ", transliteration: "Al-Mani", english: "The Preventer", bangla: "প্রতিরোধকারী",
    meaning: "Al-Mani is the One who prevents and withholds what He wills from whomever He wills. He shields and protects His servants from harm, blocks evil from reaching them, and prevents blessings from reaching those who are undeserving. His preventing is always based on wisdom, whether we understand it or not. Sometimes He prevents us from getting what we want to protect us from what would ultimately harm us.",
    benefits: "Understanding this name brings acceptance when things do not go as planned. It teaches that when Allah prevents something, it is a form of protection. It brings peace and trust in divine wisdom even when facing rejection or prevention.",
    quranReference: "67:21",
    relatedNames: [20, 22, 91]
  },
  {
    number: 91, arabic: "الضَّارُّ", transliteration: "Ad-Darr", english: "The Distresser", bangla: "ক্ষতিসাধনকারী",
    meaning: "Ad-Darr is the One who creates distress and affliction as a test, purification, or punishment. He sends trials and hardships to His servants to test their faith, purify their sins, and elevate their ranks. No harm can come to anyone except by His permission, and every difficulty contains hidden wisdom. This name should always be understood alongside An-Nafi (The Beneficial).",
    benefits: "Reflecting on this name brings understanding that trials are from Allah and serve a greater purpose. It removes blame from creation and directs all complaints to Allah. It is best paired with reflection on An-Nafi for balanced understanding.",
    quranReference: "6:17",
    relatedNames: [90, 92, 15]
  },
  {
    number: 92, arabic: "النَّافِعُ", transliteration: "An-Nafi", english: "The Propitious", bangla: "উপকারকারী",
    meaning: "An-Nafi is the One who creates all benefit and good. Every blessing, every advantage, and every benefit that any creature experiences is from Him. He benefits His servants through guidance, provision, health, knowledge, and countless other means. No one can benefit another except by His permission, and all true benefit ultimately comes from Him alone.",
    benefits: "Invoking this name attracts benefit and good into one's life. It is recommended before undertaking any endeavor, seeking Allah's beneficial outcome. It strengthens trust that only Allah can truly benefit or harm.",
    quranReference: "48:11",
    relatedNames: [16, 17, 91]
  },
  {
    number: 93, arabic: "النُّورُ", transliteration: "An-Nur", english: "The Light", bangla: "আলো",
    meaning: "An-Nur is the Light of the heavens and the earth. He illuminates the hearts with faith, the minds with knowledge, and the world with His guidance. The famous 'Verse of Light' (Ayat an-Nur) in Surah An-Nur describes His light using the most beautiful parable. He is the source of all light - physical, intellectual, and spiritual. Without His light, there would be only darkness.",
    benefits: "Reciting this name brings spiritual illumination and guidance. It is powerful for those feeling lost in darkness, whether physical, emotional, or spiritual. It opens the eyes of the heart and brings clarity and understanding.",
    quranReference: "24:35",
    relatedNames: [94, 19, 46]
  },
  {
    number: 94, arabic: "الْهَادِي", transliteration: "Al-Hadi", english: "The Guide", bangla: "পথপ্রদর্শক",
    meaning: "Al-Hadi is the One who guides creation to the straight path. He guides the hearts to faith, the minds to truth, and the bodies to beneficial actions. His guidance is comprehensive - He guides every creature to what it needs for survival, guides humanity through revelation and prophets, and guides individual hearts through inspiration and signs. Without His guidance, no one can find the right path.",
    benefits: "Invoking this name is essential when seeking direction in life. It is the essence of the prayer 'Ihdinas siratal mustaqim' (Guide us to the straight path) recited in every unit of prayer. It brings clarity and direction in times of confusion.",
    quranReference: "22:54",
    relatedNames: [18, 93, 98]
  },
  {
    number: 95, arabic: "الْبَدِيعُ", transliteration: "Al-Badi", english: "The Incomparable", bangla: "অতুলনীয় স্রষ্টা",
    meaning: "Al-Badi is the One who creates in incomparable, original, and unprecedented ways. He is the Originator of the heavens and the earth, creating them without any pre-existing model or blueprint. Every creation is unique, original, and bears the stamp of His incomparable creativity. He is the ultimate Innovator whose works cannot be replicated or imitated by any other being.",
    benefits: "Reciting this name inspires originality and creative thinking. It helps one appreciate the uniqueness and beauty of Allah's creation. It is powerful for those seeking innovative solutions and fresh perspectives.",
    quranReference: "2:117",
    relatedNames: [11, 12, 13]
  },
  {
    number: 96, arabic: "الْبَاقِي", transliteration: "Al-Baqi", english: "The Everlasting", bangla: "চিরস্থায়ী",
    meaning: "Al-Baqi is the One who remains forever, whose existence has no end. Everything in creation will perish and come to an end, but He alone will remain. His permanence is absolute and complete, contrasting with the temporary and fleeting nature of all created things. The awareness that only Allah is everlasting puts all worldly matters in proper perspective.",
    benefits: "Reflecting on this name helps overcome attachment to the temporary things of this world. It motivates investment in the eternal Hereafter over the fleeting dunya. It brings peace through the knowledge that the Everlasting One is always there.",
    quranReference: "55:27",
    relatedNames: [62, 73, 74]
  },
  {
    number: 97, arabic: "الْوَارِثُ", transliteration: "Al-Warith", english: "The Inheritor", bangla: "উত্তরাধিকারী",
    meaning: "Al-Warith is the One who inherits all things after the destruction of all creation. When every king has lost their kingdom, every wealthy person has lost their wealth, and every powerful person has lost their power, everything returns to its true Owner - Allah. He is the ultimate Inheritor of the heavens, the earth, and everything in them.",
    benefits: "Invoking this name develops generosity and detachment from wealth, knowing that all possessions ultimately return to Allah. It inspires spending in His cause and removes the fear of poverty that prevents giving.",
    quranReference: "15:23",
    relatedNames: [3, 84, 96]
  },
  {
    number: 98, arabic: "الرَّشِيدُ", transliteration: "Ar-Rashid", english: "The Guide to the Right Path", bangla: "সঠিক পথপ্রদর্শক",
    meaning: "Ar-Rashid is the One who directs and guides all things to their proper course and conclusion. His guidance is perfect and always leads to the right outcome. He directs every affair in the universe to its intended goal with perfect precision and wisdom. Unlike human guidance that can be misguided, His direction is always absolutely right and beneficial.",
    benefits: "Reciting this name helps in making right decisions and following the correct path. It is especially powerful when facing major life decisions, seeking divine guidance to choose the path that leads to the best outcome.",
    quranReference: "11:87",
    relatedNames: [46, 94, 93]
  },
  {
    number: 99, arabic: "الصَّبُورُ", transliteration: "As-Sabur", english: "The Patient", bangla: "ধৈর্যশীল",
    meaning: "As-Sabur is the One whose patience is unlimited and beyond human comprehension. He witnesses disobedience, sin, and ingratitude from His servants continuously, yet He does not hasten their punishment. He gives them time, provides for them, and continues to send them guidance even as they rebel against Him. His patience is the greatest of all patience, and it is this divine patience that gives sinners the opportunity to repent.",
    benefits: "Reflecting on this name inspires patience in the believer, knowing that Allah Himself is the Most Patient. It helps one endure hardship, delay gratification, and maintain composure during trials. It is the final of the 99 names, reminding us that patience is the crown of all virtues.",
    quranReference: "2:153",
    relatedNames: [32, 1, 2]
  }
];

// ============================================================
// PRAYER TIMES NAMES - For UI Labels
// ============================================================
const PRAYER_NAMES = [
  { id: "fajr", english: "Fajr", arabic: "الفجر", bangla: "ফজর", description: "Dawn Prayer" },
  { id: "sunrise", english: "Sunrise", arabic: "الشروق", bangla: "সূর্যোদয়", description: "Sunrise" },
  { id: "dhuhr", english: "Dhuhr", arabic: "الظهر", bangla: "যোহর", description: "Noon Prayer" },
  { id: "asr", english: "Asr", arabic: "العصر", bangla: "আসর", description: "Afternoon Prayer" },
  { id: "maghrib", english: "Maghrib", arabic: "المغرب", bangla: "মাগরিব", description: "Sunset Prayer" },
  { id: "isha", english: "Isha", arabic: "العشاء", bangla: "ইশা", description: "Night Prayer" },
  { id: "tahajjud", english: "Tahajjud", arabic: "التهجد", bangla: "তাহাজ্জুদ", description: "Late Night Prayer" }
];

// ============================================================
// HIJRI MONTHS - Islamic Calendar Month Names
// ============================================================
const HIJRI_MONTHS = [
  { number: 1, arabic: "مُحَرَّم", english: "Muharram", bangla: "মুহাররম", sacred: true },
  { number: 2, arabic: "صَفَر", english: "Safar", bangla: "সফর", sacred: false },
  { number: 3, arabic: "رَبِيع الأَوَّل", english: "Rabi ul-Awwal", bangla: "রবিউল আউয়াল", sacred: false },
  { number: 4, arabic: "رَبِيع الثَّانِي", english: "Rabi uth-Thani", bangla: "রবিউস সানী", sacred: false },
  { number: 5, arabic: "جُمَادَى الأُولَى", english: "Jumada al-Ula", bangla: "জুমাদাল উলা", sacred: false },
  { number: 6, arabic: "جُمَادَى الثَّانِيَة", english: "Jumada ath-Thaniya", bangla: "জুমাদাস সানিয়া", sacred: false },
  { number: 7, arabic: "رَجَب", english: "Rajab", bangla: "রজব", sacred: true },
  { number: 8, arabic: "شَعْبَان", english: "Sha'ban", bangla: "শাবান", sacred: false },
  { number: 9, arabic: "رَمَضَان", english: "Ramadan", bangla: "রমযান", sacred: false },
  { number: 10, arabic: "شَوَّال", english: "Shawwal", bangla: "শাওয়াল", sacred: false },
  { number: 11, arabic: "ذُو القَعْدَة", english: "Dhul Qa'dah", bangla: "যিলকদ", sacred: true },
  { number: 12, arabic: "ذُو الحِجَّة", english: "Dhul Hijjah", bangla: "যিলহজ্জ", sacred: true }
];

// ============================================================
// PILLARS AND ARTICLES OF FAITH
// ============================================================
const PILLARS_OF_ISLAM = [
  {
    number: 1,
    arabic: "الشَّهَادَة",
    english: "Shahada (Declaration of Faith)",
    bangla: "শাহাদাহ (সাক্ষ্য দেওয়া)",
    description: "Declaring that there is no god but Allah and Muhammad is His messenger.",
    banglaDescription: "এই সাক্ষ্য দেওয়া যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ তাঁর রাসূল।"
  },
  {
    number: 2,
    arabic: "الصَّلَاة",
    english: "Salah (Prayer)",
    bangla: "সালাত (নামায)",
    description: "Performing the five daily prayers.",
    banglaDescription: "পাঁচ ওয়াক্ত সালাত আদায় করা।"
  },
  {
    number: 3,
    arabic: "الزَّكَاة",
    english: "Zakat (Almsgiving)",
    bangla: "যাকাত",
    description: "Giving a portion of wealth to those in need.",
    banglaDescription: "সম্পদের নির্দিষ্ট অংশ দরিদ্রদের দান করা।"
  },
  {
    number: 4,
    arabic: "الصَّوْم",
    english: "Sawm (Fasting)",
    bangla: "সাওম (রোযা)",
    description: "Fasting during the month of Ramadan.",
    banglaDescription: "রমযান মাসে রোযা রাখা।"
  },
  {
    number: 5,
    arabic: "الحَجّ",
    english: "Hajj (Pilgrimage)",
    bangla: "হজ্জ",
    description: "Pilgrimage to Makkah at least once in a lifetime for those who are able.",
    banglaDescription: "সক্ষম ব্যক্তির জীবনে অন্তত একবার মক্কায় হজ্জ পালন করা।"
  }
];

const ARTICLES_OF_FAITH = [
  {
    number: 1,
    arabic: "الإِيمَانُ بِاللَّهِ",
    english: "Belief in Allah",
    bangla: "আল্লাহর প্রতি ঈমান",
    description: "Belief in the existence and oneness of Allah."
  },
  {
    number: 2,
    arabic: "الإِيمَانُ بِالْمَلَائِكَةِ",
    english: "Belief in Angels",
    bangla: "ফেরেশতাদের প্রতি ঈমান",
    description: "Belief in the angels created by Allah."
  },
  {
    number: 3,
    arabic: "الإِيمَانُ بِالْكُتُبِ",
    english: "Belief in Divine Books",
    bangla: "আসমানী কিতাবসমূহের প্রতি ঈমান",
    description: "Belief in the holy books revealed by Allah, including the Quran, Torah, Psalms, and Gospel."
  },
  {
    number: 4,
    arabic: "الإِيمَانُ بِالرُّسُلِ",
    english: "Belief in Prophets",
    bangla: "রাসূলদের প্রতি ঈমান",
    description: "Belief in all prophets and messengers sent by Allah."
  },
  {
    number: 5,
    arabic: "الإِيمَانُ بِالْيَوْمِ الْآخِرِ",
    english: "Belief in the Day of Judgment",
    bangla: "পরকালের প্রতি ঈমান",
    description: "Belief in the Day of Judgment and the afterlife."
  },
  {
    number: 6,
    arabic: "الإِيمَانُ بِالْقَدَرِ",
    english: "Belief in Divine Decree",
    bangla: "তাকদীরের প্রতি ঈমান",
    description: "Belief in the divine decree of Allah, both good and bad."
  }
];

// ============================================================
// QURAN STATISTICS
// ============================================================
const QURAN_STATS = {
  totalSurahs: 114,
  totalAyahs: 6236,
  totalJuz: 30,
  totalHizb: 60,
  totalRuku: 558,
  totalSajdas: 15,
  totalMeccan: 86,
  totalMedinan: 28,
  totalWords: 77430,
  totalLetters: 323671,
  longestSurah: { number: 2, name: "Al-Baqarah", ayahs: 286 },
  shortestSurah: { number: 108, name: "Al-Kawthar", ayahs: 3 },
  longestAyah: { surah: 2, ayah: 282, topic: "The Verse of Debt" },
  sajdaTilawahVerses: [
    { surah: 7, ayah: 206 },
    { surah: 13, ayah: 15 },
    { surah: 16, ayah: 50 },
    { surah: 17, ayah: 109 },
    { surah: 19, ayah: 58 },
    { surah: 22, ayah: 18 },
    { surah: 22, ayah: 77 },
    { surah: 25, ayah: 60 },
    { surah: 27, ayah: 26 },
    { surah: 32, ayah: 15 },
    { surah: 38, ayah: 24 },
    { surah: 41, ayah: 38 },
    { surah: 53, ayah: 62 },
    { surah: 84, ayah: 21 },
    { surah: 96, ayah: 19 }
  ]
};

// ============================================================
// TAFSIR SOURCES - Reference Information
// ============================================================
const TAFSIR_SOURCES = [
  { id: "ibn-kathir", name: "Tafsir Ibn Kathir", arabicName: "تفسير ابن كثير", banglaName: "তাফসীর ইবনে কাসীর", language: "Arabic", identifier: "ar.ibnkathir" },
  { id: "jalalayn", name: "Tafsir al-Jalalayn", arabicName: "تفسير الجلالين", banglaName: "তাফসীর জালালাইন", language: "Arabic", identifier: "ar.jalalayn" },
  { id: "maariful-quran", name: "Ma'ariful Quran", arabicName: "معارف القرآن", banglaName: "মাআরিফুল কুরআন", language: "Urdu/English", identifier: "en.maarifulquran" },
  { id: "fi-zilal", name: "Fi Zilal al-Quran", arabicName: "في ظلال القرآن", banglaName: "ফী যিলালিল কুরআন", language: "Arabic", identifier: "ar.fizilal" },
  { id: "tabari", name: "Tafsir at-Tabari", arabicName: "تفسير الطبري", banglaName: "তাফসীর আত-তাবারী", language: "Arabic", identifier: "ar.tabari" },
  { id: "qurtubi", name: "Tafsir al-Qurtubi", arabicName: "تفسير القرطبي", banglaName: "তাফসীর আল-কুরতুবী", language: "Arabic", identifier: "ar.qurtubi" },
  { id: "baghawi", name: "Tafsir al-Baghawi", arabicName: "تفسير البغوي", banglaName: "তাফসীর আল-বাগভী", language: "Arabic", identifier: "ar.baghawi" },
  { id: "saadi", name: "Tafsir as-Sa'di", arabicName: "تفسير السعدي", banglaName: "তাফসীর আস-সাদী", language: "Arabic", identifier: "ar.saadi" }
];

// ============================================================
// TRANSLATION EDITIONS
// ============================================================
const TRANSLATION_EDITIONS = [
  { id: "en-sahih", name: "Saheeh International", language: "English", identifier: "en.sahih", banglaName: "সহীহ ইন্টারন্যাশনাল" },
  { id: "en-yusufali", name: "Abdullah Yusuf Ali", language: "English", identifier: "en.yusufali", banglaName: "আবদুল্লাহ ইউসুফ আলী" },
  { id: "en-pickthall", name: "Mohammed Marmaduke Pickthall", language: "English", identifier: "en.pickthall", banglaName: "পিকথল" },
  { id: "en-hilali", name: "Muhammad Taqi-ud-Din al-Hilali & Muhammad Muhsin Khan", language: "English", identifier: "en.hilali", banglaName: "হিলালী ও খান" },
  { id: "bn-bengali", name: "Muhiuddin Khan", language: "Bengali", identifier: "bn.bengali", banglaName: "মুহিউদ্দীন খান" },
  { id: "bn-bayaan", name: "Bayaan Foundation", language: "Bengali", identifier: "bn.bayaan", banglaName: "বায়ান ফাউন্ডেশন" },
  { id: "ur-jalandhry", name: "Fateh Muhammad Jalandhry", language: "Urdu", identifier: "ur.jalandhry", banglaName: "ফাতেহ মুহাম্মদ জালান্ধ্রী" },
  { id: "fr-hamidullah", name: "Muhammad Hamidullah", language: "French", identifier: "fr.hamidullah", banglaName: "হামিদুল্লাহ (ফরাসি)" },
  { id: "tr-diyanet", name: "Diyanet Isleri", language: "Turkish", identifier: "tr.diyanet", banglaName: "দিয়ানেত (তুর্কি)" },
  { id: "id-indonesian", name: "Indonesian Ministry of Religious Affairs", language: "Indonesian", identifier: "id.indonesian", banglaName: "ইন্দোনেশিয়ান" }
];

// ============================================================
// EXPORT HELPER - Make all constants globally accessible
// ============================================================
// All constants are already global (declared with const at top level)
// This section is for documentation and module compatibility

// ============================================================
// PROPHETS MENTIONED IN THE QURAN
// ============================================================
const PROPHETS_IN_QURAN = [
  { number: 1, arabic: "آدَم", english: "Adam", bangla: "আদম (আ.)", mentionCount: 25, surahs: [2, 3, 5, 7, 17, 18, 19, 20, 36] },
  { number: 2, arabic: "إِدْرِيس", english: "Idris (Enoch)", bangla: "ইদরীস (আ.)", mentionCount: 2, surahs: [19, 21] },
  { number: 3, arabic: "نُوح", english: "Nuh (Noah)", bangla: "নূহ (আ.)", mentionCount: 43, surahs: [3, 4, 6, 7, 9, 10, 11, 14, 17, 21, 23, 25, 26, 29, 33, 37, 38, 40, 42, 50, 51, 53, 54, 57, 66, 71] },
  { number: 4, arabic: "هُود", english: "Hud", bangla: "হূদ (আ.)", mentionCount: 7, surahs: [7, 11, 26, 46] },
  { number: 5, arabic: "صَالِح", english: "Salih", bangla: "সালিহ (আ.)", mentionCount: 9, surahs: [7, 11, 26, 27] },
  { number: 6, arabic: "إِبْرَاهِيم", english: "Ibrahim (Abraham)", bangla: "ইবরাহীম (আ.)", mentionCount: 69, surahs: [2, 3, 4, 6, 9, 11, 12, 14, 15, 16, 19, 21, 22, 26, 29, 33, 37, 38, 42, 43, 51, 53, 57, 60, 87] },
  { number: 7, arabic: "لُوط", english: "Lut (Lot)", bangla: "লূত (আ.)", mentionCount: 27, surahs: [6, 7, 11, 15, 21, 22, 26, 27, 29, 37, 38, 50, 51, 54, 66] },
  { number: 8, arabic: "إِسْمَاعِيل", english: "Ismail (Ishmael)", bangla: "ইসমাঈল (আ.)", mentionCount: 12, surahs: [2, 3, 4, 6, 14, 19, 21, 38] },
  { number: 9, arabic: "إِسْحَاق", english: "Ishaq (Isaac)", bangla: "ইসহাক (আ.)", mentionCount: 17, surahs: [2, 3, 4, 6, 11, 12, 14, 19, 21, 29, 37, 38] },
  { number: 10, arabic: "يَعْقُوب", english: "Yaqub (Jacob)", bangla: "ইয়াকূব (আ.)", mentionCount: 16, surahs: [2, 3, 4, 6, 11, 12, 19, 21, 29, 38] },
  { number: 11, arabic: "يُوسُف", english: "Yusuf (Joseph)", bangla: "ইউসুফ (আ.)", mentionCount: 27, surahs: [6, 12, 40] },
  { number: 12, arabic: "أَيُّوب", english: "Ayyub (Job)", bangla: "আইয়ূব (আ.)", mentionCount: 4, surahs: [4, 6, 21, 38] },
  { number: 13, arabic: "شُعَيْب", english: "Shu'ayb", bangla: "শুআইব (আ.)", mentionCount: 11, surahs: [7, 11, 26, 29] },
  { number: 14, arabic: "مُوسَى", english: "Musa (Moses)", bangla: "মূসা (আ.)", mentionCount: 136, surahs: [2, 4, 5, 6, 7, 10, 11, 14, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 32, 33, 37, 40, 41, 42, 43, 44, 46, 51, 53, 61, 79, 87] },
  { number: 15, arabic: "هَارُون", english: "Harun (Aaron)", bangla: "হারূন (আ.)", mentionCount: 20, surahs: [2, 4, 6, 7, 10, 19, 20, 21, 23, 25, 26, 28, 37] },
  { number: 16, arabic: "ذُوالْكِفْل", english: "Dhul-Kifl (Ezekiel)", bangla: "যুলকিফল (আ.)", mentionCount: 2, surahs: [21, 38] },
  { number: 17, arabic: "دَاوُد", english: "Dawud (David)", bangla: "দাউদ (আ.)", mentionCount: 16, surahs: [2, 4, 5, 6, 17, 21, 27, 34, 38] },
  { number: 18, arabic: "سُلَيْمَان", english: "Sulaiman (Solomon)", bangla: "সুলাইমান (আ.)", mentionCount: 17, surahs: [2, 4, 6, 21, 27, 34, 38] },
  { number: 19, arabic: "إِلْيَاس", english: "Ilyas (Elijah)", bangla: "ইলিয়াস (আ.)", mentionCount: 2, surahs: [6, 37] },
  { number: 20, arabic: "الْيَسَع", english: "Al-Yasa (Elisha)", bangla: "আল-ইয়াসা (আ.)", mentionCount: 2, surahs: [6, 38] },
  { number: 21, arabic: "يُونُس", english: "Yunus (Jonah)", bangla: "ইউনুস (আ.)", mentionCount: 4, surahs: [4, 6, 10, 37, 68] },
  { number: 22, arabic: "زَكَرِيَّا", english: "Zakariya (Zechariah)", bangla: "যাকারিয়া (আ.)", mentionCount: 7, surahs: [3, 6, 19, 21] },
  { number: 23, arabic: "يَحْيَى", english: "Yahya (John)", bangla: "ইয়াহইয়া (আ.)", mentionCount: 5, surahs: [3, 6, 19, 21] },
  { number: 24, arabic: "عِيسَى", english: "Isa (Jesus)", bangla: "ঈসা (আ.)", mentionCount: 25, surahs: [2, 3, 4, 5, 6, 9, 19, 21, 23, 33, 42, 43, 57, 61] },
  { number: 25, arabic: "مُحَمَّد", english: "Muhammad", bangla: "মুহাম্মাদ (সা.)", mentionCount: 4, surahs: [3, 33, 47, 48] }
];

// ============================================================
// COMMON DHIKR - Remembrance Phrases
// ============================================================
const COMMON_DHIKR = [
  {
    id: 1,
    arabic: "سُبْحَانَ اللَّهِ",
    transliteration: "SubhanAllah",
    english: "Glory be to Allah",
    bangla: "আল্লাহর পবিত্রতা ঘোষণা করছি",
    virtue: "A palm tree is planted in Paradise for the one who says it.",
    reference: "Tirmidhi 3464"
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    english: "All praise is due to Allah",
    bangla: "সকল প্রশংসা আল্লাহর",
    virtue: "It fills the scale of good deeds.",
    reference: "Muslim 223"
  },
  {
    id: 3,
    arabic: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    english: "Allah is the Greatest",
    bangla: "আল্লাহ সবচেয়ে মহান",
    virtue: "It fills what is between the heavens and the earth.",
    reference: "Muslim 223"
  },
  {
    id: 4,
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
    transliteration: "La ilaha illallah",
    english: "There is no god but Allah",
    bangla: "আল্লাহ ছাড়া কোনো ইলাহ নেই",
    virtue: "The best remembrance. The most virtuous thing said by the Prophets.",
    reference: "Tirmidhi 3585"
  },
  {
    id: 5,
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "SubhanAllahi wa bihamdihi",
    english: "Glory be to Allah and praise Him",
    bangla: "আল্লাহর পবিত্রতা ঘোষণা এবং তাঁর প্রশংসা",
    virtue: "Whoever says it 100 times a day, his sins are forgiven even if they are like the foam of the sea.",
    reference: "Sahih al-Bukhari 6405"
  },
  {
    id: 6,
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
    transliteration: "SubhanAllahi wa bihamdihi, SubhanAllahil-'Adhim",
    english: "Glory be to Allah and praise Him, Glory be to Allah the Great",
    bangla: "আল্লাহর পবিত্রতা ও প্রশংসা, মহান আল্লাহর পবিত্রতা",
    virtue: "Two words that are light on the tongue, heavy on the scale, beloved to the Most Merciful.",
    reference: "Sahih al-Bukhari 6406"
  },
  {
    id: 7,
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "La hawla wa la quwwata illa billah",
    english: "There is no power nor strength except with Allah",
    bangla: "আল্লাহর সাহায্য ছাড়া কোনো ক্ষমতা ও শক্তি নেই",
    virtue: "It is a treasure from the treasures of Paradise.",
    reference: "Sahih al-Bukhari 4205"
  },
  {
    id: 8,
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    transliteration: "Astaghfirullah",
    english: "I seek forgiveness from Allah",
    bangla: "আমি আল্লাহর ক্ষমা চাই",
    virtue: "Whoever makes it a habit, Allah will make for him a way out of every difficulty.",
    reference: "Abu Dawud 1518"
  },
  {
    id: 9,
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
    english: "None has the right to be worshipped but Allah alone, with no partner. To Him belongs sovereignty and all praise, and He is over all things omnipotent.",
    bangla: "আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরীক নেই। রাজত্ব তাঁরই, প্রশংসা তাঁরই এবং তিনি সকল কিছুর উপর ক্ষমতাবান।",
    virtue: "Whoever says it 100 times a day gets reward equal to freeing 10 slaves, 100 good deeds, 100 sins removed, and protection from Shaytan.",
    reference: "Sahih al-Bukhari 6403"
  },
  {
    id: 10,
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
    transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad",
    english: "O Allah, send blessings upon Muhammad and the family of Muhammad",
    bangla: "হে আল্লাহ, মুহাম্মাদ ও তাঁর পরিবারের উপর দরূদ পাঠাও",
    virtue: "Whoever sends one blessing upon me, Allah sends ten blessings upon him.",
    reference: "Muslim 384"
  },
  {
    id: 11,
    arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ",
    transliteration: "SubhanAllahi wal-hamdu lillahi wa la ilaha illallahu wallahu akbar",
    english: "Glory be to Allah, all praise is due to Allah, there is no god but Allah, Allah is the Greatest",
    bangla: "আল্লাহর পবিত্রতা, সকল প্রশংসা আল্লাহর, আল্লাহ ছাড়া কোনো ইলাহ নেই, আল্লাহ সবচেয়ে মহান",
    virtue: "More beloved to the Prophet (PBUH) than everything upon which the sun rises.",
    reference: "Muslim 2695"
  },
  {
    id: 12,
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration: "Hasbiyallahu la ilaha illa huwa, 'alayhi tawakkaltu wa huwa Rabbul-'Arshil-'Adhim",
    english: "Allah is sufficient for me. There is no god but Him. I have placed my trust in Him and He is Lord of the Magnificent Throne.",
    bangla: "আল্লাহ আমার জন্য যথেষ্ট। তিনি ছাড়া কোনো ইলাহ নেই। আমি তাঁর উপর ভরসা করি এবং তিনি মহান আরশের রব।",
    virtue: "Whoever says it seven times in the morning and evening, Allah will suffice him in whatever concerns him.",
    reference: "Abu Dawud 5081"
  }
];

// ============================================================
// QURAN READING PLAN - 30 Day Khatm Schedule
// ============================================================
const READING_PLAN_30_DAYS = [
  { day: 1, juz: 1, surahs: "Al-Fatiha (1) to Al-Baqarah (2:141)", bangla: "আল-ফাতিহা থেকে আল-বাকারা ২:১৪১" },
  { day: 2, juz: 2, surahs: "Al-Baqarah (2:142-252)", bangla: "আল-বাকারা ২:১৪২-২৫২" },
  { day: 3, juz: 3, surahs: "Al-Baqarah (2:253) to Aal-E-Imran (3:92)", bangla: "আল-বাকারা ২:২৫৩ থেকে আল-ইমরান ৩:৯২" },
  { day: 4, juz: 4, surahs: "Aal-E-Imran (3:93) to An-Nisa (4:23)", bangla: "আল-ইমরান ৩:৯৩ থেকে আন-নিসা ৪:২৩" },
  { day: 5, juz: 5, surahs: "An-Nisa (4:24-147)", bangla: "আন-নিসা ৪:২৪-১৪৭" },
  { day: 6, juz: 6, surahs: "An-Nisa (4:148) to Al-Ma'idah (5:81)", bangla: "আন-নিসা ৪:১৪৮ থেকে আল-মায়িদাহ ৫:৮১" },
  { day: 7, juz: 7, surahs: "Al-Ma'idah (5:82) to Al-An'am (6:110)", bangla: "আল-মায়িদাহ ৫:৮২ থেকে আল-আনআম ৬:১১০" },
  { day: 8, juz: 8, surahs: "Al-An'am (6:111) to Al-A'raf (7:87)", bangla: "আল-আনআম ৬:১১১ থেকে আল-আরাফ ৭:৮৭" },
  { day: 9, juz: 9, surahs: "Al-A'raf (7:88) to Al-Anfal (8:40)", bangla: "আল-আরাফ ৭:৮৮ থেকে আল-আনফাল ৮:৪০" },
  { day: 10, juz: 10, surahs: "Al-Anfal (8:41) to At-Tawbah (9:92)", bangla: "আল-আনফাল ৮:৪১ থেকে আত-তাওবাহ ৯:৯২" },
  { day: 11, juz: 11, surahs: "At-Tawbah (9:93) to Hud (11:5)", bangla: "আত-তাওবাহ ৯:৯৩ থেকে হূদ ১১:৫" },
  { day: 12, juz: 12, surahs: "Hud (11:6) to Yusuf (12:52)", bangla: "হূদ ১১:৬ থেকে ইউসুফ ১২:৫২" },
  { day: 13, juz: 13, surahs: "Yusuf (12:53) to Ibrahim (14:52)", bangla: "ইউসুফ ১২:৫৩ থেকে ইবরাহীম ১৪:৫২" },
  { day: 14, juz: 14, surahs: "Al-Hijr (15) to An-Nahl (16:128)", bangla: "আল-হিজর ১৫ থেকে আন-নাহল ১৬:১২৮" },
  { day: 15, juz: 15, surahs: "Al-Isra (17) to Al-Kahf (18:74)", bangla: "আল-ইসরা ১৭ থেকে আল-কাহফ ১৮:৭৪" },
  { day: 16, juz: 16, surahs: "Al-Kahf (18:75) to Ta-Ha (20:135)", bangla: "আল-কাহফ ১৮:৭৫ থেকে তা-হা ২০:১৩৫" },
  { day: 17, juz: 17, surahs: "Al-Anbiya (21) to Al-Hajj (22:78)", bangla: "আল-আম্বিয়া ২১ থেকে আল-হজ্জ ২২:৭৮" },
  { day: 18, juz: 18, surahs: "Al-Mu'minun (23) to Al-Furqan (25:20)", bangla: "আল-মুমিনুন ২৩ থেকে আল-ফুরকান ২৫:২০" },
  { day: 19, juz: 19, surahs: "Al-Furqan (25:21) to An-Naml (27:55)", bangla: "আল-ফুরকান ২৫:২১ থেকে আন-নামল ২৭:৫৫" },
  { day: 20, juz: 20, surahs: "An-Naml (27:56) to Al-Ankabut (29:45)", bangla: "আন-নামল ২৭:৫৬ থেকে আল-আনকাবূত ২৯:৪৫" },
  { day: 21, juz: 21, surahs: "Al-Ankabut (29:46) to Al-Ahzab (33:30)", bangla: "আল-আনকাবূত ২৯:৪৬ থেকে আল-আহযাব ৩৩:৩০" },
  { day: 22, juz: 22, surahs: "Al-Ahzab (33:31) to Ya-Sin (36:27)", bangla: "আল-আহযাব ৩৩:৩১ থেকে ইয়া-সীন ৩৬:২৭" },
  { day: 23, juz: 23, surahs: "Ya-Sin (36:28) to Az-Zumar (39:31)", bangla: "ইয়া-সীন ৩৬:২৮ থেকে আয-যুমার ৩৯:৩১" },
  { day: 24, juz: 24, surahs: "Az-Zumar (39:32) to Fussilat (41:46)", bangla: "আয-যুমার ৩৯:৩২ থেকে ফুসসিলাত ৪১:৪৬" },
  { day: 25, juz: 25, surahs: "Fussilat (41:47) to Al-Jathiyah (45:37)", bangla: "ফুসসিলাত ৪১:৪৭ থেকে আল-জাসিয়া ৪৫:৩৭" },
  { day: 26, juz: 26, surahs: "Al-Ahqaf (46) to Adh-Dhariyat (51:30)", bangla: "আল-আহকাফ ৪৬ থেকে আয-যারিয়াত ৫১:৩০" },
  { day: 27, juz: 27, surahs: "Adh-Dhariyat (51:31) to Al-Hadid (57:29)", bangla: "আয-যারিয়াত ৫১:৩১ থেকে আল-হাদীদ ৫৭:২৯" },
  { day: 28, juz: 28, surahs: "Al-Mujadila (58) to At-Tahrim (66:12)", bangla: "আল-মুজাদিলা ৫৮ থেকে আত-তাহরীম ৬৬:১২" },
  { day: 29, juz: 29, surahs: "Al-Mulk (67) to Al-Mursalat (77:50)", bangla: "আল-মুলক ৬৭ থেকে আল-মুরসালাত ৭৭:৫০" },
  { day: 30, juz: 30, surahs: "An-Naba (78) to An-Nas (114)", bangla: "আন-নাবা ৭৮ থেকে আন-নাস ১১৪" }
];

// ============================================================
// QURAN BOOKMARKS - Default Bookmarks for Special Passages
// ============================================================
const SPECIAL_PASSAGES = [
  {
    id: "ayatul-kursi",
    name: "Ayatul Kursi",
    banglaName: "আয়াতুল কুরসী",
    surah: 2,
    ayah: 255,
    description: "The Greatest Verse in the Quran. Recite for protection."
  },
  {
    id: "last-two-baqarah",
    name: "Last Two Verses of Al-Baqarah",
    banglaName: "সূরা বাকারার শেষ দুই আয়াত",
    surah: 2,
    ayahStart: 285,
    ayahEnd: 286,
    description: "Whoever recites them at night, they will suffice him."
  },
  {
    id: "surah-kahf-first-ten",
    name: "First 10 Verses of Al-Kahf",
    banglaName: "সূরা কাহফের প্রথম ১০ আয়াত",
    surah: 18,
    ayahStart: 1,
    ayahEnd: 10,
    description: "Protection from the trial of Dajjal."
  },
  {
    id: "surah-yasin",
    name: "Surah Ya-Sin",
    banglaName: "সূরা ইয়াসীন",
    surah: 36,
    ayahStart: 1,
    ayahEnd: 83,
    description: "The Heart of the Quran."
  },
  {
    id: "surah-mulk",
    name: "Surah Al-Mulk",
    banglaName: "সূরা আল-মুলক",
    surah: 67,
    ayahStart: 1,
    ayahEnd: 30,
    description: "Recite nightly. It intercedes for its reciter and protects from the punishment of the grave."
  },
  {
    id: "surah-waqiah",
    name: "Surah Al-Waqi'ah",
    banglaName: "সূরা আল-ওয়াকিয়াহ",
    surah: 56,
    ayahStart: 1,
    ayahEnd: 96,
    description: "Whoever recites it every night will never be afflicted by poverty."
  },
  {
    id: "surah-rahman",
    name: "Surah Ar-Rahman",
    banglaName: "সূরা আর-রহমান",
    surah: 55,
    ayahStart: 1,
    ayahEnd: 78,
    description: "The Bride of the Quran. Enumerates Allah's blessings."
  },
  {
    id: "surah-fatiha",
    name: "Surah Al-Fatiha",
    banglaName: "সূরা আল-ফাতিহা",
    surah: 1,
    ayahStart: 1,
    ayahEnd: 7,
    description: "The Opening. The Greatest Surah in the Quran. Recited in every unit of prayer."
  },
  {
    id: "four-quls",
    name: "The Four Quls",
    banglaName: "চার কুল",
    surahs: [109, 112, 113, 114],
    description: "Surah Al-Kafirun, Al-Ikhlas, Al-Falaq, and An-Nas. Recite for protection."
  },
  {
    id: "verse-of-throne",
    name: "Verse of the Throne",
    banglaName: "আরশের আয়াত",
    surah: 9,
    ayah: 129,
    description: "Hasbiyallahu la ilaha illa Huwa - Allah is sufficient for me."
  }
];

// ============================================================
// ADDITIONAL DAILY VERSES - More Verses for Variety
// ============================================================
const ADDITIONAL_VERSES = [
  {
    surah: 2,
    ayah: 45,
    arabicText: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ",
    englishText: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive.",
    banglaText: "তোমরা ধৈর্য ও সালাতের মাধ্যমে সাহায্য প্রার্থনা করো। নিশ্চয়ই তা বিনীতদের ছাড়া অন্যদের জন্য কঠিন।"
  },
  {
    surah: 3,
    ayah: 185,
    arabicText: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ",
    englishText: "Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection.",
    banglaText: "প্রত্যেক প্রাণকে মৃত্যুর স্বাদ গ্রহণ করতে হবে। কিয়ামতের দিনই তোমাদের পূর্ণ প্রতিফল দেওয়া হবে।"
  },
  {
    surah: 6,
    ayah: 59,
    arabicText: "وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ ۚ وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ",
    englishText: "And with Him are the keys of the unseen; none knows them except Him. And He knows what is on the land and in the sea.",
    banglaText: "গায়েবের চাবিসমূহ তাঁরই কাছে, তিনি ছাড়া কেউ তা জানে না। স্থলে ও সমুদ্রে যা কিছু আছে তিনি তা জানেন।"
  },
  {
    surah: 7,
    ayah: 56,
    arabicText: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا وَادْعُوهُ خَوْفًا وَطَمَعًا ۚ إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ",
    englishText: "And cause not corruption upon the earth after its reformation. And invoke Him in fear and aspiration. Indeed, the mercy of Allah is near to the doers of good.",
    banglaText: "পৃথিবীতে সংশোধনের পর বিশৃঙ্খলা সৃষ্টি করো না। তাঁকে ভয়ে ও আশায় ডাকো। নিশ্চয়ই আল্লাহর রহমত সৎকর্মশীলদের নিকটবর্তী।"
  },
  {
    surah: 8,
    ayah: 46,
    arabicText: "وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ ۖ وَاصْبِرُوا ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    englishText: "And obey Allah and His Messenger, and do not dispute and thus lose courage and your strength would depart; and be patient. Indeed, Allah is with the patient.",
    banglaText: "আল্লাহ ও তাঁর রাসূলের আনুগত্য করো, পরস্পর বিবাদ করো না, তাহলে তোমরা সাহস হারাবে এবং তোমাদের শক্তি বিলুপ্ত হবে। ধৈর্য ধারণ করো। নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে।"
  },
  {
    surah: 9,
    ayah: 51,
    arabicText: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا ۚ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
    englishText: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.' And upon Allah let the believers rely.",
    banglaText: "বলো, আল্লাহ আমাদের জন্য যা নির্ধারণ করেছেন তা ছাড়া কিছুই আমাদের আঘাত করবে না। তিনি আমাদের অভিভাবক। মুমিনরা যেন আল্লাহর উপরই ভরসা করে।"
  },
  {
    surah: 10,
    ayah: 62,
    arabicText: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    englishText: "Unquestionably, for the allies of Allah there will be no fear concerning them, nor will they grieve.",
    banglaText: "জেনে রাখো, আল্লাহর বন্ধুদের কোনো ভয় নেই এবং তারা দুঃখিতও হবে না।"
  },
  {
    surah: 11,
    ayah: 6,
    arabicText: "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا وَيَعْلَمُ مُسْتَقَرَّهَا وَمُسْتَوْدَعَهَا",
    englishText: "And there is no creature on earth but that upon Allah is its provision, and He knows its place of dwelling and place of storage.",
    banglaText: "পৃথিবীতে এমন কোনো প্রাণী নেই যার রিযিক আল্লাহর দায়িত্বে নেই। তিনি তার বাসস্থান ও সংরক্ষণস্থল জানেন।"
  },
  {
    surah: 17,
    ayah: 82,
    arabicText: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ",
    englishText: "And We send down of the Quran that which is healing and mercy for the believers.",
    banglaText: "আমি কুরআনে এমন কিছু নাযিল করি যা মুমিনদের জন্য শিফা ও রহমত।"
  },
  {
    surah: 18,
    ayah: 10,
    arabicText: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    englishText: "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
    banglaText: "হে আমাদের রব, আমাদের তোমার পক্ষ থেকে রহমত দান করো এবং আমাদের কাজকে সঠিক পথে পরিচালিত করো।"
  },
  {
    surah: 20,
    ayah: 114,
    arabicText: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    englishText: "And say, 'My Lord, increase me in knowledge.'",
    banglaText: "বলো, 'হে আমার রব, আমার জ্ঞান বৃদ্ধি করে দাও।'"
  },
  {
    surah: 25,
    ayah: 74,
    arabicText: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    englishText: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
    banglaText: "হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদের থেকে আমাদের চোখের শীতলতা দান করো এবং আমাদেরকে মুত্তাকীদের আদর্শ বানাও।"
  },
  {
    surah: 31,
    ayah: 18,
    arabicText: "وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ",
    englishText: "And do not turn your cheek in contempt toward people and do not walk through the earth exultantly. Indeed, Allah does not like everyone self-deluded and boastful.",
    banglaText: "মানুষের সামনে তোমার গাল ফুলিয়ো না এবং পৃথিবীতে দম্ভভরে চলো না। নিশ্চয়ই আল্লাহ কোনো দাম্ভিক অহংকারীকে পছন্দ করেন না।"
  },
  {
    surah: 33,
    ayah: 21,
    arabicText: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
    englishText: "There has certainly been for you in the Messenger of Allah an excellent pattern.",
    banglaText: "তোমাদের জন্য আল্লাহর রাসূলের মধ্যে রয়েছে উত্তম আদর্শ।"
  },
  {
    surah: 36,
    ayah: 36,
    arabicText: "سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ",
    englishText: "Exalted is He who created all pairs - from what the earth grows and from themselves and from that which they do not know.",
    banglaText: "পবিত্র সেই সত্তা যিনি সকল জোড়া সৃষ্টি করেছেন - যমীন যা উৎপন্ন করে তা থেকে, তাদের নিজেদের থেকে এবং তারা যা জানে না তা থেকে।"
  },
  {
    surah: 42,
    ayah: 30,
    arabicText: "وَمَا أَصَابَكُم مِّن مُّصِيبَةٍ فَبِمَا كَسَبَتْ أَيْدِيكُمْ وَيَعْفُو عَن كَثِيرٍ",
    englishText: "And whatever strikes you of disaster - it is for what your hands have earned; but He pardons much.",
    banglaText: "তোমাদের উপর যে বিপদই আসে, তা তোমাদের হাতের কামাই। তিনি অনেক কিছু ক্ষমা করে দেন।"
  },
  {
    surah: 47,
    ayah: 7,
    arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ",
    englishText: "O you who have believed, if you support Allah, He will support you and plant firmly your feet.",
    banglaText: "হে ঈমানদারগণ, তোমরা যদি আল্লাহকে সাহায্য করো, তিনি তোমাদের সাহায্য করবেন এবং তোমাদের পদসমূহ সুদৃঢ় করবেন।"
  },
  {
    surah: 53,
    ayah: 39,
    arabicText: "وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ",
    englishText: "And that there is not for man except that for which he strives.",
    banglaText: "মানুষ তাই পায় যা সে চেষ্টা করে।"
  },
  {
    surah: 57,
    ayah: 4,
    arabicText: "هُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۚ يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا",
    englishText: "It is He who created the heavens and earth in six days and then established Himself above the Throne. He knows what penetrates into the earth and what emerges from it.",
    banglaText: "তিনিই আসমানসমূহ ও যমীনকে ছয় দিনে সৃষ্টি করেছেন, তারপর আরশে ইস্তিওয়া করেছেন। তিনি জানেন কী যমীনে প্রবেশ করে এবং কী তা থেকে বের হয়।"
  },
  {
    surah: 59,
    ayah: 22,
    arabicText: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
    englishText: "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.",
    banglaText: "তিনি আল্লাহ, তিনি ছাড়া কোনো ইলাহ নেই। তিনি অদৃশ্য ও দৃশ্যের জ্ঞানী। তিনি পরম করুণাময়, অসীম দয়ালু।"
  },
  {
    surah: 64,
    ayah: 11,
    arabicText: "مَا أَصَابَ مِن مُّصِيبَةٍ إِلَّا بِإِذْنِ اللَّهِ ۗ وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ",
    englishText: "No disaster strikes except by permission of Allah. And whoever believes in Allah - He will guide his heart.",
    banglaText: "আল্লাহর অনুমতি ছাড়া কোনো বিপদ আসে না। আর যে আল্লাহর উপর ঈমান আনে, তিনি তার অন্তরকে সঠিক পথে পরিচালিত করেন।"
  },
  {
    surah: 66,
    ayah: 8,
    arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا",
    englishText: "O you who have believed, repent to Allah with sincere repentance.",
    banglaText: "হে ঈমানদারগণ, আল্লাহর কাছে খাঁটি তওবা করো।"
  },
  {
    surah: 76,
    ayah: 3,
    arabicText: "إِنَّا هَدَيْنَاهُ السَّبِيلَ إِمَّا شَاكِرًا وَإِمَّا كَفُورًا",
    englishText: "Indeed, We guided him to the way, be he grateful or be he ungrateful.",
    banglaText: "নিশ্চয়ই আমি তাকে পথ দেখিয়েছি - সে কৃতজ্ঞ হোক বা অকৃতজ্ঞ।"
  },
  {
    surah: 87,
    ayah: 1,
    arabicText: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
    englishText: "Exalt the name of your Lord, the Most High.",
    banglaText: "তোমার সুমহান রবের নামের পবিত্রতা ঘোষণা করো।"
  },
  {
    surah: 89,
    ayah: 27,
    arabicText: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً",
    englishText: "O reassured soul, return to your Lord, well-pleased and pleasing to Him.",
    banglaText: "হে প্রশান্ত আত্মা, তোমার রবের কাছে ফিরে যাও সন্তুষ্ট ও সন্তোষজনক অবস্থায়।"
  },
  {
    surah: 95,
    ayah: 4,
    arabicText: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
    englishText: "We have certainly created man in the best of stature.",
    banglaText: "নিশ্চয়ই আমি মানুষকে সর্বোত্তম গঠনে সৃষ্টি করেছি।"
  },
  {
    surah: 96,
    ayah: 1,
    arabicText: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",
    englishText: "Read in the name of your Lord who created. Created man from a clinging substance.",
    banglaText: "পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন। যিনি মানুষকে জমাট রক্ত থেকে সৃষ্টি করেছেন।"
  },
  {
    surah: 97,
    ayah: 1,
    arabicText: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
    englishText: "Indeed, We sent it down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months.",
    banglaText: "নিশ্চয়ই আমি এটা কদরের রাতে নাযিল করেছি। তুমি কি জানো কদরের রাত কী? কদরের রাত হাজার মাসের চেয়ে উত্তম।"
  },
  {
    surah: 109,
    ayah: 1,
    arabicText: "قُلْ يَا أَيُّهَا الْكَافِرُونَ لَا أَعْبُدُ مَا تَعْبُدُونَ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
    englishText: "Say, 'O disbelievers, I do not worship what you worship. Nor are you worshippers of what I worship. For you is your religion, and for me is my religion.'",
    banglaText: "বলো, হে কাফিরগণ, আমি তার ইবাদত করি না যার ইবাদত তোমরা করো। তোমরাও তাঁর ইবাদতকারী নও যাঁর ইবাদত আমি করি। তোমাদের দ্বীন তোমাদের এবং আমার দ্বীন আমার।"
  }
];

// ============================================================
// QURAN LEARNING - Tajweed Rules Summary
// ============================================================
const TAJWEED_RULES = [
  {
    id: 1,
    arabic: "الإِدْغَام",
    english: "Idgham (Merging)",
    bangla: "ইদগাম (মিলিয়ে পড়া)",
    description: "Merging of noon sakinah or tanween with certain letters (ي ر م ل و ن)",
    banglaDescription: "নূন সাকিনাহ বা তানভীনকে নির্দিষ্ট হরফের সাথে মিলিয়ে পড়া"
  },
  {
    id: 2,
    arabic: "الإِخْفَاء",
    english: "Ikhfa (Hiding)",
    bangla: "ইখফা (লুকিয়ে পড়া)",
    description: "Pronouncing noon sakinah or tanween between Idhar and Idgham with ghunna",
    banglaDescription: "নূন সাকিনাহ বা তানভীনকে ইযহার ও ইদগামের মধ্যবর্তী অবস্থায় গুন্নাহসহ পড়া"
  },
  {
    id: 3,
    arabic: "الإِظْهَار",
    english: "Idhar (Clear)",
    bangla: "ইযহার (স্পষ্ট করে পড়া)",
    description: "Clear pronunciation of noon sakinah or tanween before throat letters (ء ه ع ح غ خ)",
    banglaDescription: "নূন সাকিনাহ বা তানভীনকে কণ্ঠনালীর হরফের আগে স্পষ্ট করে পড়া"
  },
  {
    id: 4,
    arabic: "الإِقْلَاب",
    english: "Iqlab (Conversion)",
    bangla: "ইকলাব (পরিবর্তন)",
    description: "Converting noon sakinah or tanween to meem when followed by ba (ب)",
    banglaDescription: "নূন সাকিনাহ বা তানভীনকে বা (ب) এর আগে মীমে পরিবর্তন করা"
  },
  {
    id: 5,
    arabic: "المَدّ",
    english: "Madd (Prolongation)",
    bangla: "মদ (দীর্ঘায়িত করা)",
    description: "Prolongation of vowel sounds. Natural madd is 2 counts.",
    banglaDescription: "স্বরের দীর্ঘায়িতকরণ। প্রাকৃতিক মদ ২ হরকত।"
  },
  {
    id: 6,
    arabic: "القَلْقَلَة",
    english: "Qalqalah (Echo)",
    bangla: "কলকলাহ (প্রতিধ্বনি)",
    description: "Echo or bouncing sound when pronouncing certain letters (ق ط ب ج د) in their sukoon state",
    banglaDescription: "নির্দিষ্ট হরফসমূহকে (ق ط ب ج د) সাকিন অবস্থায় ঝংকার দিয়ে পড়া"
  },
  {
    id: 7,
    arabic: "الغُنَّة",
    english: "Ghunnah (Nasalization)",
    bangla: "গুন্নাহ (নাকের আওয়াজ)",
    description: "Nasal sound when pronouncing noon and meem with shaddah, lasting 2 counts",
    banglaDescription: "নূন ও মীম শাদ্দাহসহ পড়ার সময় ২ হরকত নাকের আওয়াজ করা"
  },
  {
    id: 8,
    arabic: "الوَقْف",
    english: "Waqf (Stopping)",
    bangla: "ওয়াকফ (থামা)",
    description: "Rules for stopping at the end of a verse or in the middle of recitation",
    banglaDescription: "আয়াতের শেষে বা তেলাওয়াতের মধ্যে থামার নিয়ম"
  }
];

// ============================================================
// PROPHETS_DATA - Detailed Stories of 25 Prophets in the Quran
// ============================================================
const PROPHETS_DATA = [
  {
    name: "Adam",
    arabicName: "آدَم",
    banglaName: "আদম (আ.)",
    meaning: "Man, Earth",
    quranMentions: 25,
    surahs: [2, 3, 5, 7, 17, 18, 19, 20, 36],
    story: "Adam (AS) was the first human being and the first prophet created by Allah. Allah created him from clay and breathed His spirit into him. He was honored above all creation when Allah commanded the angels to prostrate before him. All obeyed except Iblis (Satan), who refused out of arrogance, claiming superiority because he was made from fire while Adam was made from clay.\n\nAllah placed Adam in Paradise (Jannah) and created Hawwa (Eve) as his companion. They were permitted to enjoy everything in Paradise except one tree. However, Iblis deceived them into eating from the forbidden tree. Upon realizing their mistake, Adam and Hawwa sincerely repented, and Allah accepted their repentance, teaching humanity the path of tawbah (repentance).\n\nAdam and Hawwa were then sent down to earth to live as Allah's representatives (khalifah). Adam was given knowledge of the names of all things, demonstrating human capacity for learning. He taught his children monotheism and righteous living, establishing the foundation of human civilization on earth.\n\nAdam lived for approximately 960 years and had many children. His story teaches the concepts of free will, the danger of arrogance, the mercy of repentance, and the honor Allah bestowed upon humanity.",
    miracles: ["Knowledge of the names of all things", "Angels prostrated before him", "Created directly by Allah's hands"],
    lessons: ["Repentance is always accepted by Allah", "Arrogance leads to downfall", "Humans are honored creations", "Shaytan is the eternal enemy of mankind", "Following divine commands leads to success"],
    timeline: "Beginning of creation",
    title: "Khalifatullah (Representative of Allah on Earth)",
    relatedVerses: [
      { surah: 2, ayah: 30, text: "Indeed, I will make upon the earth a khalifah (successive authority)." },
      { surah: 2, ayah: 37, text: "Then Adam received from his Lord some words, and He accepted his repentance." },
      { surah: 7, ayah: 11, text: "We created you, then fashioned you, then told the angels: Prostrate to Adam." }
    ]
  },
  {
    name: "Idris",
    arabicName: "إِدْرِيس",
    banglaName: "ইদরীস (আ.)",
    meaning: "To study, to learn",
    quranMentions: 2,
    surahs: [19, 21],
    story: "Idris (AS) is believed to be among the earliest prophets after Adam and his son Shith (Seth). He is identified by many scholars as the biblical Enoch. Idris was known for being the first to write with a pen and the first to sew garments. Before him, people wore animal skins.\n\nIdris was a man of truth and patience. He called his people to worship Allah alone and to follow righteous conduct. He was deeply devoted to knowledge, spending much of his time in contemplation and worship. Allah raised him to a high station, both in terms of spiritual rank and physical elevation.\n\nThe Quran praises Idris for his truthfulness and patience, mentioning that Allah raised him to a lofty place. Some scholars interpret this as Allah raising his status in Paradise, while others suggest he was physically raised to the heavens. During the Night Journey (Isra and Mi'raj), Prophet Muhammad (SAW) met Idris in the fourth heaven.",
    miracles: ["Raised to a high station by Allah", "First to write with a pen", "First to study astronomy and mathematics"],
    lessons: ["The pursuit of knowledge is noble", "Patience and truthfulness earn Allah's favor", "Devotion to worship elevates one's rank"],
    timeline: "Pre-flood era, after Adam (AS)",
    title: "The Truthful Prophet",
    relatedVerses: [
      { surah: 19, ayah: 56, text: "And mention in the Book, Idris. Indeed, he was a man of truth and a prophet." },
      { surah: 19, ayah: 57, text: "And We raised him to a high station." },
      { surah: 21, ayah: 85, text: "And Ismail and Idris and Dhul-Kifl; all were of the patient." }
    ]
  },
  {
    name: "Nuh",
    arabicName: "نُوح",
    banglaName: "নূহ (আ.)",
    meaning: "Rest, Comfort",
    quranMentions: 43,
    surahs: [3, 4, 6, 7, 9, 10, 11, 14, 17, 21, 23, 25, 26, 29, 33, 37, 38, 40, 42, 50, 51, 53, 54, 57, 66, 71],
    story: "Nuh (AS) is one of the five greatest prophets (Ulul Azm) in Islam. He was sent to his people who had fallen into idol worship, worshipping idols named Wadd, Suwa, Yaghuth, Ya'uq, and Nasr. Nuh tirelessly called his people to monotheism for 950 years, yet only a small number believed.\n\nHis people mocked and ridiculed him, and even his own wife and one of his sons refused to believe. Despite this heartbreak, Nuh remained steadfast in his mission. He called his people day and night, openly and secretly, using every method of persuasion. Yet they would put their fingers in their ears and cover themselves with their garments in rejection.\n\nWhen Allah's decree came, Nuh was commanded to build a massive ark. His people laughed at him for building a ship on dry land far from any ocean. Allah then caused water to gush from the earth and pour from the sky in a great flood. Nuh called to his son to board the ark, but his son refused, saying he would take refuge on a mountain. The waves came between them, and his son was among the drowned.\n\nThe ark carried the believers and pairs of every animal species. After the flood subsided, the ark settled on Mount Judi. Nuh's story is a powerful reminder of patience in dawah, the consequences of rejecting Allah's message, and that family ties cannot save one from divine judgment.",
    miracles: ["Building the Ark by divine instruction", "The Great Flood", "Preservation of all animal species on the Ark"],
    lessons: ["Patience in calling people to Allah", "Family bonds do not override faith", "Allah's punishment is inevitable for the persistent disbelievers", "Steadfastness despite mockery", "Even prophets face personal losses"],
    timeline: "Approximately 3000-4000 BCE",
    title: "Shaykh al-Anbiya (Elder of the Prophets)",
    relatedVerses: [
      { surah: 71, ayah: 5, text: "He said, My Lord, indeed I invited my people night and day." },
      { surah: 11, ayah: 42, text: "And Nuh called to his son who was apart, O my son, come aboard with us." },
      { surah: 11, ayah: 44, text: "And it was said, O earth, swallow your water, and O sky, withhold. And the water subsided." }
    ]
  },
  {
    name: "Hud",
    arabicName: "هُود",
    banglaName: "হূদ (আ.)",
    meaning: "He who guides",
    quranMentions: 7,
    surahs: [7, 11, 26, 46],
    story: "Hud (AS) was sent to the people of 'Ad, an ancient Arab tribe that lived in the region of Al-Ahqaf in southern Arabia (modern-day Yemen/Oman). The people of 'Ad were physically powerful, building impressive structures and monuments. They were known for their strength and arrogance, saying 'Who is mightier than us in strength?'\n\nHud called his people to worship Allah alone and abandon their idols. He reminded them that their strength, wealth, and magnificent buildings were all blessings from Allah. Despite his persistent efforts, the majority rejected his message and challenged him to bring the punishment he warned about.\n\nAllah sent upon the people of 'Ad a furious, devastating wind that lasted seven nights and eight days. The wind destroyed everything in its path, leaving the people of 'Ad lying prostrate as if they were hollow trunks of palm trees. Only Hud and those who believed with him were saved.\n\nThe story of 'Ad serves as a warning against arrogance and the false security of material power. Their magnificent civilization was wiped out completely, and their ruins serve as a reminder of Allah's power.",
    miracles: ["Saved from the devastating wind that destroyed his people", "Divinely protected during the storm"],
    lessons: ["Material strength cannot protect against Allah's punishment", "Arrogance leads to destruction", "Building grand civilizations without faith is meaningless", "Trust in Allah rather than worldly power"],
    timeline: "After Nuh (AS), approximately 2500-2000 BCE",
    title: "Prophet to the People of 'Ad",
    relatedVerses: [
      { surah: 11, ayah: 50, text: "And to 'Ad We sent their brother Hud. He said, O my people, worship Allah; you have no deity other than Him." },
      { surah: 46, ayah: 25, text: "Destroying everything by command of its Lord. And they became so that nothing could be seen except their dwellings." },
      { surah: 7, ayah: 65, text: "And to 'Ad, their brother Hud. He said, O my people, worship Allah; you have no deity other than Him." }
    ]
  },
  {
    name: "Saleh",
    arabicName: "صَالِح",
    banglaName: "সালিহ (আ.)",
    meaning: "Pious, Righteous",
    quranMentions: 9,
    surahs: [7, 11, 26, 27],
    story: "Saleh (AS) was sent to the people of Thamud, an ancient Arab tribe that lived in the rocky region of Al-Hijr (modern-day Mada'in Saleh in Saudi Arabia). The Thamud were skilled in carving homes and palaces out of mountains and were blessed with fertile land, gardens, and springs.\n\nSaleh called his people to worship Allah alone, but they rejected him. They demanded a miracle as proof of his prophethood. By Allah's permission, a miraculous she-camel emerged from a rock. Saleh told his people this was a sign from Allah and warned them not to harm the camel, giving it its rightful share of water on alternate days.\n\nDespite the clear miracle, nine men from among the Thamud conspired and hamstrung the she-camel, killing it. They then challenged Saleh to bring the threatened punishment. Saleh warned them they had only three days before destruction would come. On the appointed day, a mighty blast (sayhah) seized them, and they lay dead in their homes.\n\nThe ruins of Thamud still exist today in Al-Ula, Saudi Arabia, as a testament to this story. Prophet Muhammad (SAW) passed by these ruins and warned his companions not to enter them except in a state of weeping.",
    miracles: ["The she-camel that emerged from a rock", "Prophecy of destruction in three days"],
    lessons: ["Miracles alone do not guarantee faith", "Harming Allah's signs brings destruction", "Conspiracy against truth is futile", "Archaeological evidence confirms Quranic accounts"],
    timeline: "After Hud (AS), approximately 2000-1500 BCE",
    title: "Prophet to the People of Thamud",
    relatedVerses: [
      { surah: 7, ayah: 73, text: "And to Thamud, their brother Saleh. He said, O my people, worship Allah; you have no deity other than Him." },
      { surah: 11, ayah: 64, text: "O my people, this is the she-camel of Allah as a sign for you." },
      { surah: 26, ayah: 155, text: "He said, This is a she-camel. For her is a right of water, and for you is a right of water on an alternate day." }
    ]
  },
  {
    name: "Ibrahim",
    arabicName: "إِبْرَاهِيم",
    banglaName: "ইবরাহীম (আ.)",
    meaning: "Father of many",
    quranMentions: 69,
    surahs: [2, 3, 4, 6, 9, 11, 12, 14, 15, 16, 19, 21, 22, 26, 29, 33, 37, 38, 42, 43, 51, 53, 57, 60, 87],
    story: "Ibrahim (AS) is one of the greatest prophets and is known as Khalilullah (Friend of Allah). He is the patriarch of the three Abrahamic religions. Born in a land of idol worshippers, Ibrahim used his intellect to search for the truth, observing the stars, moon, and sun, before concluding that only the Creator of all these could be worthy of worship.\n\nIbrahim confronted his father Azar and his people about their idol worship. When they refused to listen, he broke their idols to prove their powerlessness. For this, King Nimrod ordered Ibrahim to be thrown into a massive fire. Allah commanded the fire to be cool and safe for Ibrahim, and he emerged unharmed - one of his greatest miracles.\n\nIbrahim was tested throughout his life. He was commanded to leave his wife Hajar and infant son Ismail in the barren valley of Makkah. Hajar's desperate search for water between the hills of Safa and Marwa led to the miraculous spring of Zamzam. Later, Ibrahim was commanded in a dream to sacrifice his son Ismail. Both father and son submitted to Allah's will, and at the last moment, Allah replaced Ismail with a ram. This event is commemorated annually during Eid ul-Adha.\n\nIbrahim and Ismail together built the Kaaba in Makkah, the first house of worship for Allah on earth. Ibrahim's prayer for Makkah to be a place of peace and for a messenger to arise from his descendants was fulfilled with Prophet Muhammad (SAW).",
    miracles: ["Survived being thrown into fire", "Spring of Zamzam for his family", "Ram sent from heaven as substitute for sacrifice", "Building the Kaaba"],
    lessons: ["Use intellect to find the truth", "Stand firm against falsehood even if alone", "Complete submission to Allah's will", "Trust in Allah's plan even when it seems difficult", "The reward of sacrifice is greater than what is given up"],
    timeline: "Approximately 2000-1800 BCE",
    title: "Khalilullah (Friend of Allah)",
    relatedVerses: [
      { surah: 21, ayah: 69, text: "We said, O fire, be coolness and safety upon Ibrahim." },
      { surah: 37, ayah: 102, text: "He said, O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast." },
      { surah: 2, ayah: 127, text: "And when Ibrahim was raising the foundations of the House and Ismail." }
    ]
  },
  {
    name: "Lut",
    arabicName: "لُوط",
    banglaName: "লূত (আ.)",
    meaning: "Veil, Cover",
    quranMentions: 27,
    surahs: [6, 7, 11, 15, 21, 22, 26, 27, 29, 37, 38, 50, 51, 54, 66],
    story: "Lut (AS) was the nephew of Ibrahim (AS) and believed in his message. He was sent as a prophet to the people of Sodom and Gomorrah, cities near the Dead Sea. His people were engaged in grave immorality, including highway robbery and indecent acts in their gatherings.\n\nLut tirelessly warned his people to abandon their sinful ways and return to the worship of Allah. They rejected him and even threatened to expel him. When angels came to Lut in the form of handsome young men, his people rushed to his house with evil intentions. Lut was deeply distressed and tried to reason with them, but they refused to listen.\n\nThe angels revealed their true identity to Lut and told him to leave the city with his family during the night. They were instructed not to look back. His wife, who was among the disbelievers, did not leave with them. At dawn, Allah's punishment came - the cities were turned upside down, and stones of baked clay rained down upon the inhabitants.\n\nThe area where these cities once stood is believed to be near the Dead Sea, the lowest point on Earth, which to this day remains a desolate, lifeless region.",
    miracles: ["Angels protected him from his people", "Divinely guided escape from destruction"],
    lessons: ["Stand against immorality regardless of social pressure", "Allah's protection for the righteous", "Even family members may not share one's faith", "Societal corruption leads to collective punishment"],
    timeline: "Contemporary of Ibrahim (AS), approximately 2000-1800 BCE",
    title: "Prophet to the People of Sodom",
    relatedVerses: [
      { surah: 7, ayah: 80, text: "And Lut, when he said to his people, Do you commit such immorality as no one has preceded you with from among the worlds?" },
      { surah: 11, ayah: 82, text: "So when Our command came, We made the highest part of the city its lowest and rained upon them stones of layered hard clay." },
      { surah: 26, ayah: 167, text: "They said, If you do not desist, O Lut, you will surely be of those evicted." }
    ]
  },
  {
    name: "Ismail",
    arabicName: "إِسْمَاعِيل",
    banglaName: "ইসমাঈল (আ.)",
    meaning: "God hears",
    quranMentions: 12,
    surahs: [2, 3, 4, 6, 14, 19, 21, 38],
    story: "Ismail (AS) was the firstborn son of Ibrahim (AS) and Hajar. As an infant, he was taken with his mother to the barren valley of Makkah by Ibrahim, following Allah's command. When their provisions ran out, Hajar ran seven times between the hills of Safa and Marwa searching for water. Allah caused the spring of Zamzam to gush forth near baby Ismail.\n\nThe tribe of Jurhum settled near Zamzam, and Ismail grew up among them, learning Arabic. He became known for his excellent character, truthfulness, and patience. The greatest test came when Ibrahim saw in a dream that he should sacrifice Ismail. When told of the dream, young Ismail responded with remarkable faith: 'O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast.'\n\nWhen both father and son had submitted to Allah's will and Ibrahim had laid Ismail down for sacrifice, Allah called out that Ibrahim had fulfilled the vision. A ram was sent from heaven as a ransom. This supreme act of obedience is commemorated every year on Eid ul-Adha.\n\nIsmail later helped his father Ibrahim build the Kaaba. He married from the Jurhum tribe and his descendants became the Arabs of the Hijaz. Prophet Muhammad (SAW) is a direct descendant of Ismail (AS).",
    miracles: ["Zamzam spring gushed forth near him", "Replaced by a ram during sacrifice", "Helped build the Kaaba"],
    lessons: ["Obedience to parents and to Allah", "Youth can demonstrate extraordinary faith", "Patience and willingness to sacrifice", "The lineage of prophethood"],
    timeline: "Son of Ibrahim, approximately 1900 BCE",
    title: "Dhabihullah (The Sacrifice of Allah)",
    relatedVerses: [
      { surah: 37, ayah: 102, text: "He said, O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast." },
      { surah: 19, ayah: 54, text: "And mention in the Book, Ismail. Indeed, he was true to his promise, and he was a messenger and a prophet." },
      { surah: 2, ayah: 127, text: "And when Ibrahim was raising the foundations of the House and Ismail, saying: Our Lord, accept this from us." }
    ]
  },
  {
    name: "Ishaq",
    arabicName: "إِسْحَاق",
    banglaName: "ইসহাক (আ.)",
    meaning: "He laughs",
    quranMentions: 17,
    surahs: [2, 3, 4, 6, 11, 12, 14, 19, 21, 29, 37, 38],
    story: "Ishaq (AS) was the second son of Ibrahim (AS), born to his wife Sarah in their old age. The birth was announced by angels who visited Ibrahim to give him glad tidings. Sarah, who was standing nearby, laughed in amazement because both she and Ibrahim were very old. The angels confirmed that this was Allah's decree.\n\nIshaq grew up as a righteous man and prophet. He continued the mission of monotheism established by his father Ibrahim. He was blessed with prophethood, wisdom, and righteous offspring. His son Yaqub (Jacob) carried on the prophetic lineage, and through Yaqub came the twelve tribes of Israel and many subsequent prophets.\n\nThe Quran consistently mentions Ishaq alongside Ibrahim and Yaqub as examples of righteous servants who were guided by Allah. They are described as men of strength and vision, who were purified with a pure quality: remembrance of the eternal home.",
    miracles: ["Miraculous birth in old age of both parents", "Angels announced his birth directly"],
    lessons: ["Allah's promises always come true", "Nothing is impossible for Allah", "Righteous parents produce righteous offspring", "Gratitude for unexpected blessings"],
    timeline: "Son of Ibrahim, approximately 1900 BCE",
    title: "Gift of Allah to Ibrahim in Old Age",
    relatedVerses: [
      { surah: 11, ayah: 71, text: "And his wife was standing, and she smiled. Then We gave her good tidings of Ishaq, and after Ishaq, Yaqub." },
      { surah: 37, ayah: 112, text: "And We gave him good tidings of Ishaq, a prophet from among the righteous." },
      { surah: 21, ayah: 72, text: "And We gave him Ishaq and Yaqub in addition, and all of them We made righteous." }
    ]
  },
  {
    name: "Yaqub",
    arabicName: "يَعْقُوب",
    banglaName: "ইয়াকূব (আ.)",
    meaning: "Supplanter, One who follows",
    quranMentions: 16,
    surahs: [2, 3, 4, 6, 11, 12, 19, 21, 29, 38],
    story: "Yaqub (AS), also known as Israel, was the son of Ishaq and the grandson of Ibrahim. He was blessed with twelve sons, who became the ancestors of the twelve tribes of Bani Israel (Children of Israel). Among his sons, Yusuf held a special place in his heart.\n\nYaqub's life was marked by deep faith and immense trials, particularly regarding his beloved son Yusuf. When Yusuf's brothers threw him into a well out of jealousy, they brought back a bloodied shirt claiming a wolf had eaten him. Yaqub recognized their deception and said his patience was beautiful (sabrun jameel). He wept for Yusuf so much that he lost his eyesight.\n\nDespite decades of separation, Yaqub never lost hope in Allah's mercy. He told his sons: 'Do not despair of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.' When Yusuf's shirt was placed on his face years later, his eyesight was miraculously restored.\n\nYaqub eventually reunited with Yusuf in Egypt. Before his death, he gathered his sons and asked them what they would worship after him. They affirmed their commitment to worshipping the God of their fathers - Ibrahim, Ismail, and Ishaq - One God, and to Him they submitted.",
    miracles: ["Eyesight restored by Yusuf's shirt", "Prophetic dreams and insight"],
    lessons: ["Beautiful patience (Sabr Jameel)", "Never despair of Allah's mercy", "A father's love and trust in Allah", "Jealousy among siblings can be destructive", "Faith endures through the longest trials"],
    timeline: "Grandson of Ibrahim, approximately 1800 BCE",
    title: "Israel (Servant of God)",
    relatedVerses: [
      { surah: 12, ayah: 18, text: "He said, Rather, your souls have enticed you to something, so patience is most fitting." },
      { surah: 12, ayah: 87, text: "Do not despair of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people." },
      { surah: 12, ayah: 96, text: "And when the bearer of good tidings arrived, he cast it over his face, and he returned seeing." }
    ]
  },
  {
    name: "Yusuf",
    arabicName: "يُوسُف",
    banglaName: "ইউসুফ (আ.)",
    meaning: "God increases",
    quranMentions: 27,
    surahs: [6, 12, 40],
    story: "Yusuf (AS) is described as having been given half of all beauty. His story, told primarily in Surah Yusuf (Chapter 12), is called by Allah 'the best of stories.' As a young boy, Yusuf saw a dream of eleven stars, the sun, and the moon prostrating to him. His father Yaqub advised him not to tell his brothers, fearing their jealousy.\n\nDespite this, his brothers' jealousy led them to throw Yusuf into a deep well. He was rescued by a passing caravan and sold as a slave in Egypt to a nobleman named Al-Aziz. In Al-Aziz's household, the wife attempted to seduce Yusuf, but he refused, choosing prison over sin. His famous words were: 'My Lord, prison is more beloved to me than that to which they invite me.'\n\nIn prison, Yusuf interpreted the dreams of two fellow prisoners. Later, when the King of Egypt had a dream that his advisors could not interpret, Yusuf correctly interpreted it as a prophecy of seven years of abundance followed by seven years of famine. Impressed, the king freed Yusuf and appointed him as treasurer of Egypt.\n\nDuring the famine, Yusuf's brothers came to Egypt seeking grain, not recognizing him. After a series of tests, Yusuf revealed his identity and forgave his brothers. He brought his entire family to Egypt, and his childhood dream was fulfilled when his parents and brothers prostrated before him in respect. His story is a masterclass in patience, forgiveness, and trusting Allah's plan.",
    miracles: ["Prophetic dream interpretation", "Extraordinary beauty", "Rise from slavery to governance"],
    lessons: ["Patience through injustice leads to elevation", "Resist temptation with faith", "Forgive those who wrong you", "Allah's plan is always better than ours", "Dreams can be divine messages", "Character and competence lead to success"],
    timeline: "Great-grandson of Ibrahim, approximately 1700 BCE",
    title: "As-Siddiq (The Truthful)",
    relatedVerses: [
      { surah: 12, ayah: 4, text: "When Yusuf said to his father, O my father, indeed I have seen eleven stars and the sun and the moon; I saw them prostrating to me." },
      { surah: 12, ayah: 33, text: "He said, My Lord, prison is more beloved to me than that to which they invite me." },
      { surah: 12, ayah: 92, text: "He said, No blame will there be upon you today. Allah will forgive you; and He is the most merciful of the merciful." }
    ]
  },
  {
    name: "Ayyub",
    arabicName: "أَيُّوب",
    banglaName: "আইয়ূব (আ.)",
    meaning: "To return to God",
    quranMentions: 4,
    surahs: [4, 6, 21, 38],
    story: "Ayyub (AS) was a wealthy and righteous prophet who was blessed with health, family, and abundant provisions. His story is one of the most powerful examples of patience in the face of severe trials. Allah tested Ayyub by removing his blessings one by one - his wealth was destroyed, his children perished, and he was afflicted with a severe illness that lasted for years.\n\nDespite losing everything, Ayyub never complained or lost faith. He continued to worship Allah and remained grateful. People abandoned him, and even his community distanced themselves. Through all his suffering, only his devoted wife remained by his side, supporting him through the darkest times.\n\nAfter years of patient endurance, Ayyub called upon his Lord: 'Indeed, adversity has touched me, and you are the Most Merciful of the merciful.' Allah responded to his prayer and commanded him to strike the ground with his foot. A spring of cool water gushed forth. Ayyub bathed in it and drank from it, and Allah restored his health completely.\n\nAllah then restored Ayyub's family, doubling what he had before, as a mercy and a reminder for people of understanding. His story is the ultimate testament that patience through adversity is rewarded manifold.",
    miracles: ["Healing spring from striking the ground", "Complete restoration of health", "Family and wealth doubled"],
    lessons: ["Patience during extreme hardship is the highest virtue", "Never lose hope in Allah's mercy", "Trials are tests, not punishments", "Gratitude should be maintained in all circumstances", "True faith is proven during difficulty"],
    timeline: "Descendant of Ibrahim, approximately 1500 BCE",
    title: "The Patient Prophet",
    relatedVerses: [
      { surah: 21, ayah: 83, text: "And Ayyub, when he called to his Lord, Indeed, adversity has touched me, and you are the Most Merciful of the merciful." },
      { surah: 21, ayah: 84, text: "So We responded to him and removed what afflicted him of adversity. And We gave him back his family and the like thereof with them." },
      { surah: 38, ayah: 44, text: "Strike with your foot; this is a cool bath and drink." }
    ]
  },
  {
    name: "Shuaib",
    arabicName: "شُعَيْب",
    banglaName: "শুআইব (আ.)",
    meaning: "Who shows the right path",
    quranMentions: 11,
    surahs: [7, 11, 26, 29],
    story: "Shuaib (AS) was sent to the people of Madyan (Midian) and the Companions of the Thicket (Ashab al-Aykah). His people lived near the region of modern-day northwest Saudi Arabia and were known as merchants and traders. However, they were deeply dishonest in their business dealings, cheating in weights and measures.\n\nShuaib, known for his eloquence, called his people to worship Allah alone and to practice fair dealing in business. He warned them: 'Give full measure and weight, and do not deprive people of their due.' Despite his compelling arguments and beautiful speech, his people rejected him and threatened to stone him or expel him from their city.\n\nThe people of Madyan were destroyed by a combination of punishments: an earthquake (rajfah) seized them, and they were found dead in their homes, lying face down. The Companions of the Thicket were punished with intense heat and a shadow of cloud that rained fire upon them.\n\nShuaib is often identified as the father-in-law of Musa (AS), as Musa married one of his daughters after fleeing Egypt. His story particularly emphasizes the importance of honesty in business and commercial dealings.",
    miracles: ["Divinely protected from his people's threats", "Eloquent preaching that earned him the title 'Orator of the Prophets'"],
    lessons: ["Honesty in business is a religious obligation", "Cheating in trade is a serious sin", "Eloquence should be used for truth", "Economic justice is part of faith"],
    timeline: "Before Musa (AS), approximately 1500-1400 BCE",
    title: "Khatib al-Anbiya (Orator of the Prophets)",
    relatedVerses: [
      { surah: 7, ayah: 85, text: "And to Madyan, their brother Shuaib. He said, O my people, worship Allah; you have no deity other than Him." },
      { surah: 11, ayah: 84, text: "And give full measure and weight and do not deprive people of their due." },
      { surah: 26, ayah: 181, text: "Give full measure and do not be of those who cause loss." }
    ]
  },
  {
    name: "Musa",
    arabicName: "مُوسَى",
    banglaName: "মূসা (আ.)",
    meaning: "Drawn out of the water",
    quranMentions: 136,
    surahs: [2, 4, 5, 6, 7, 10, 11, 14, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 32, 33, 37, 40, 41, 42, 43, 44, 46, 51, 53, 61, 79, 87],
    story: "Musa (AS) is the most frequently mentioned prophet in the Quran, with his name appearing 136 times. He is one of the five greatest prophets (Ulul Azm). Born during a time when Pharaoh was killing all newborn Israelite boys, his mother placed him in a basket on the Nile River by Allah's inspiration. Remarkably, the basket was found by Pharaoh's household, and Musa was raised in the very palace of the tyrant who sought to destroy him.\n\nAs a young man, Musa accidentally killed an Egyptian and fled to Madyan, where he married the daughter of Shuaib (AS) and worked as a shepherd for ten years. On his journey back to Egypt, Allah spoke to him directly at Mount Tur (Sinai), commissioning him as a prophet and giving him two signs: his staff that could transform into a serpent, and his hand that shone white when drawn from his cloak.\n\nMusa confronted Pharaoh with nine clear signs, demanding the freedom of the Israelites. Pharaoh refused, even after witnessing the miracles. Finally, Allah commanded Musa to lead the Israelites out of Egypt. When they reached the sea with Pharaoh's army in pursuit, Allah commanded Musa to strike the sea with his staff. The sea split into two towering walls, and the Israelites crossed safely. When Pharaoh and his army followed, the sea closed upon them, drowning them all.\n\nAfter the Exodus, Musa received the Torah on Mount Sinai during forty days of seclusion. He continued to lead the Israelites, facing their frequent complaints and disobedience, including the incident of the golden calf. His patience with his people and his intimate conversations with Allah (earning him the title Kalimullah) make his story the most detailed prophetic narrative in the Quran.",
    miracles: ["Staff turning into a serpent", "Luminous hand", "Parting of the Red Sea", "Water from rock", "Nine signs to Pharaoh", "The Torah revealed to him"],
    lessons: ["Trust in Allah's plan even in impossible situations", "Stand up to tyranny and oppression", "Leadership requires immense patience", "Direct connection with Allah through supplication", "Freedom is a divine right"],
    timeline: "Approximately 1400-1200 BCE",
    title: "Kalimullah (The One Who Spoke with Allah)",
    relatedVerses: [
      { surah: 20, ayah: 12, text: "Indeed, I am your Lord, so remove your sandals. Indeed, you are in the sacred valley of Tuwa." },
      { surah: 26, ayah: 63, text: "Then We inspired to Musa, Strike with your staff the sea, and it parted." },
      { surah: 28, ayah: 7, text: "And We inspired to the mother of Musa, Suckle him; but when you fear for him, cast him into the river." }
    ]
  },
  {
    name: "Harun",
    arabicName: "هَارُون",
    banglaName: "হারূন (আ.)",
    meaning: "Mountain of strength",
    quranMentions: 20,
    surahs: [2, 4, 6, 7, 10, 19, 20, 21, 23, 25, 26, 28, 37],
    story: "Harun (AS) was the elder brother of Musa (AS) and was appointed as his assistant and co-prophet at Musa's own request. When Musa was given his mission to confront Pharaoh, he prayed to Allah to appoint Harun as his helper, saying: 'And appoint for me a minister from my family - Harun, my brother. Increase through him my strength, and let him share my task.'\n\nHarun was known for being more eloquent than Musa, and he served as the spokesperson when they confronted Pharaoh together. He stood firmly by his brother's side throughout the struggle against Pharaoh's tyranny and during the Exodus from Egypt.\n\nWhen Musa went to Mount Sinai for forty days to receive the Torah, he left Harun in charge of the Israelites. During Musa's absence, a man named Samiri led some of the people astray by creating a golden calf for worship. Harun tried his best to prevent them but was outnumbered and threatened. When Musa returned and confronted him, Harun explained: 'O son of my mother, indeed the people oppressed me and were about to kill me.'\n\nHarun was a compassionate and gentle leader. He passed away before Musa, and his death was deeply mourned by the Israelites who loved him greatly for his kindness.",
    miracles: ["Appointed as prophet alongside Musa", "Witnessed the miracles of the staff and the parting of the sea"],
    lessons: ["Supporting others in righteous work is noble", "Leadership requires compassion", "Doing one's best even when overwhelmed", "The importance of teamwork in serving Allah's cause"],
    timeline: "Brother of Musa, approximately 1400-1200 BCE",
    title: "Wazir (Minister) of Musa",
    relatedVerses: [
      { surah: 20, ayah: 29, text: "And appoint for me a minister from my family - Harun, my brother." },
      { surah: 20, ayah: 94, text: "He said, O son of my mother, do not seize me by my beard or by my head." },
      { surah: 7, ayah: 142, text: "And Musa said to his brother Harun, Take my place among my people and do right." }
    ]
  },
  {
    name: "Dhul-Kifl",
    arabicName: "ذُوالْكِفْل",
    banglaName: "যুলকিফল (আ.)",
    meaning: "The one with a portion/guarantee",
    quranMentions: 2,
    surahs: [21, 38],
    story: "Dhul-Kifl (AS) is mentioned twice in the Quran among the righteous and patient prophets. His exact identity has been debated by scholars. Some identify him with the biblical prophet Ezekiel, while others suggest he may be Elijah or even a righteous man who was not necessarily a prophet but was elevated to that status.\n\nThe name Dhul-Kifl means 'the one with the kifl (portion or guarantee),' which some scholars interpret as meaning he guaranteed to fulfill certain religious duties. According to some traditions, when an elderly prophet was looking for a successor who would fast all day, pray all night, and never get angry, Dhul-Kifl stepped forward and fulfilled this commitment perfectly.\n\nThe Quran groups him with Ismail and Ilyas as men of patience and righteousness: 'And Ismail and Idris and Dhul-Kifl; all were of the patient. And We admitted them into Our mercy. Indeed, they were of the righteous.' This association with great prophets affirms his high standing.\n\nRegardless of the scholarly debate about his specific identity, the Quran's praise of his patience and righteousness provides a model for believers to emulate.",
    miracles: ["Mentioned among the righteous by Allah", "Fulfilled his guarantee of continuous worship"],
    lessons: ["Fulfilling commitments to Allah is praiseworthy", "Patience is a mark of the righteous", "Consistency in worship earns Allah's favor"],
    timeline: "Uncertain, possibly contemporary with other Israelite prophets",
    title: "The One with the Guarantee",
    relatedVerses: [
      { surah: 21, ayah: 85, text: "And Ismail and Idris and Dhul-Kifl; all were of the patient." },
      { surah: 21, ayah: 86, text: "And We admitted them into Our mercy. Indeed, they were of the righteous." },
      { surah: 38, ayah: 48, text: "And remember Ismail, Al-Yasa and Dhul-Kifl, and all are among the outstanding." }
    ]
  },
  {
    name: "Dawud",
    arabicName: "دَاوُد",
    banglaName: "দাউদ (আ.)",
    meaning: "Beloved",
    quranMentions: 16,
    surahs: [2, 4, 5, 6, 17, 21, 27, 34, 38],
    story: "Dawud (AS) was both a prophet and a king of Israel. As a young man in the army of King Talut (Saul), Dawud courageously faced the giant warrior Jalut (Goliath) and killed him with a sling and stones, a moment that changed the course of history. This victory established Dawud as a leader, and he eventually became king.\n\nAllah blessed Dawud with many extraordinary gifts. He was given the Zabur (Psalms), a book of divine hymns and wisdom. His voice was so beautiful that when he recited the Zabur, the mountains and birds would join in glorifying Allah alongside him. Iron was made soft in his hands, allowing him to mold it into armor without fire, effectively making him the first maker of chain mail.\n\nDawud was also known as an exemplary judge. The Quran mentions a parable involving two disputants who came to him, testing his judgment. This incident reminded him to always be just and fair. He established a pattern of worship that included fasting on alternate days, which the Prophet Muhammad (SAW) described as the most beloved type of fasting to Allah.\n\nDawud's kingdom was prosperous, and he prepared his son Sulaiman to succeed him. He is remembered as a model of combining worldly leadership with spiritual devotion.",
    miracles: ["Mountains and birds glorified Allah with him", "Iron made soft in his hands", "Killed Jalut (Goliath)", "Given the Zabur (Psalms)"],
    lessons: ["Courage against seemingly impossible odds", "Combining worship with worldly responsibility", "Justice must be upheld at all times", "Skills and talents are gifts from Allah to be used for good"],
    timeline: "Approximately 1000 BCE",
    title: "Khalifatullah (Successor on Earth), King-Prophet",
    relatedVerses: [
      { surah: 21, ayah: 79, text: "And We subjected the mountains to exalt Allah with Dawud, and also the birds." },
      { surah: 34, ayah: 10, text: "And We certainly gave Dawud from Us bounty. O mountains, repeat praises with him, and the birds as well." },
      { surah: 2, ayah: 251, text: "And Dawud killed Jalut, and Allah gave him the kingship and wisdom." }
    ]
  },
  {
    name: "Sulaiman",
    arabicName: "سُلَيْمَان",
    banglaName: "সুলাইমান (আ.)",
    meaning: "Man of peace",
    quranMentions: 17,
    surahs: [2, 4, 6, 21, 27, 34, 38],
    story: "Sulaiman (AS) inherited the kingdom and prophethood from his father Dawud. He was given a kingdom unlike any other - Allah subjected the wind to his command, allowing him to travel vast distances. He was given the ability to understand the language of birds, ants, and other creatures. Even the jinn were subjected to his command, working for him in construction, diving for pearls, and other tasks.\n\nThe Quran recounts how Sulaiman once heard an ant warning its colony to enter their dwellings lest Sulaiman and his armies inadvertently crush them. Sulaiman smiled and prayed: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me.'\n\nThe story of Sulaiman and the Queen of Sheba (Bilqis) is particularly detailed. When Sulaiman learned that the people of Sheba worshipped the sun, he sent a letter inviting the queen to submit to Allah. The queen eventually visited Sulaiman, and when she saw his magnificent palace with a floor made of smooth glass (which she mistook for water), she recognized the truth and submitted to Allah.\n\nSulaiman died while leaning on his staff. His death went unnoticed until a creature of the earth ate through the staff and his body fell. This demonstrated that the jinn, who continued working thinking he was alive, did not possess knowledge of the unseen. Despite his immense power and kingdom, Sulaiman remained a devoted servant of Allah.",
    miracles: ["Control over wind", "Understanding the language of animals", "Command over jinn", "Vast kingdom unlike any other"],
    lessons: ["Power and wealth should be used for Allah's service", "Be grateful for every blessing", "True knowledge belongs only to Allah", "Humility despite possessing great power", "Compassion even for the smallest creatures"],
    timeline: "Son of Dawud, approximately 970-930 BCE",
    title: "King-Prophet with Command over Creation",
    relatedVerses: [
      { surah: 27, ayah: 16, text: "And Sulaiman inherited Dawud. He said, O people, we have been taught the language of birds." },
      { surah: 27, ayah: 18, text: "Until, when they came upon the valley of the ants, an ant said, O ants, enter your dwellings." },
      { surah: 34, ayah: 14, text: "And when We decreed for Sulaiman death, nothing indicated to the jinn his death except a creature of the earth eating his staff." }
    ]
  },
  {
    name: "Ilyas",
    arabicName: "إِلْيَاس",
    banglaName: "ইলিয়াস (আ.)",
    meaning: "My God is Allah",
    quranMentions: 2,
    surahs: [6, 37],
    story: "Ilyas (AS), identified with the biblical Elijah, was sent to the people of Baalbek in modern-day Lebanon. His people had fallen into the worship of an idol called Ba'l, despite being descendants of the Israelites who had received divine guidance through Musa and the Torah.\n\nIlyas courageously confronted his people about their idol worship, asking them: 'Will you not fear Allah? Do you call upon Ba'l and leave the best of creators - Allah, your Lord and the Lord of your first forefathers?' Despite his earnest preaching, the majority of his people rejected his message.\n\nThe Quran praises Ilyas among the messengers, stating: 'And indeed, Ilyas was from among the messengers.' He is commended for his sincerity and devotion to calling people away from idol worship back to pure monotheism. 'Peace be upon the family of Ilyas' - this salutation from Allah Himself indicates his high status.\n\nIlyas is remembered as one who stood alone against widespread corruption and idolatry, maintaining his faith and continuing his mission despite opposition.",
    miracles: ["Steadfastness in calling people away from Ba'l worship", "Divinely sent as a messenger"],
    lessons: ["Stand against idol worship in all its forms", "Courage to speak truth to power", "Salaam from Allah is the ultimate honor"],
    timeline: "Approximately 870 BCE, Kingdom of Israel",
    title: "The Prophet who Opposed Ba'l Worship",
    relatedVerses: [
      { surah: 37, ayah: 123, text: "And indeed, Ilyas was from among the messengers." },
      { surah: 37, ayah: 125, text: "Do you call upon Ba'l and leave the best of creators?" },
      { surah: 37, ayah: 130, text: "Peace be upon the family of Ilyas." }
    ]
  },
  {
    name: "Al-Yasa",
    arabicName: "الْيَسَع",
    banglaName: "আল-ইয়াসা (আ.)",
    meaning: "God is salvation",
    quranMentions: 2,
    surahs: [6, 38],
    story: "Al-Yasa (AS), identified with the biblical Elisha, was the successor of Ilyas (AS). He continued the mission of calling the Israelites to worship Allah alone after Ilyas departed. Al-Yasa carried on the prophetic tradition with dedication and righteousness.\n\nThe Quran mentions Al-Yasa twice, both times in the company of other esteemed prophets. In Surah Al-An'am, he is listed among those who were guided by Allah: 'And Ismail and Al-Yasa and Yunus and Lut - all of them We preferred over the worlds.' In Surah Sad, he is described as being among the outstanding: 'And remember Ismail, Al-Yasa and Dhul-Kifl, and all are among the outstanding.'\n\nWhile the Quran does not provide detailed accounts of his specific deeds and miracles, his inclusion among the chosen and outstanding prophets affirms his elevated status. Traditional Islamic sources describe him as a patient, devoted prophet who performed miracles and guided his people back to the straight path.\n\nHis mention alongside prophets like Ismail, Yunus, Lut, and Dhul-Kifl establishes him as one of the righteous and preferred servants of Allah.",
    miracles: ["Continued the miracles and mission of Ilyas", "Guided the Israelites after Ilyas"],
    lessons: ["Continuing the work of predecessors is noble", "Being among the outstanding requires dedication", "Quiet, consistent service to Allah is valued"],
    timeline: "Successor of Ilyas, approximately 850 BCE",
    title: "Successor of Ilyas",
    relatedVerses: [
      { surah: 6, ayah: 86, text: "And Ismail and Al-Yasa and Yunus and Lut - all of them We preferred over the worlds." },
      { surah: 38, ayah: 48, text: "And remember Ismail, Al-Yasa and Dhul-Kifl, and all are among the outstanding." }
    ]
  },
  {
    name: "Yunus",
    arabicName: "يُونُس",
    banglaName: "ইউনুস (আ.)",
    meaning: "Dove",
    quranMentions: 4,
    surahs: [4, 6, 10, 37, 68],
    story: "Yunus (AS), also known as Dhun-Nun (The Man of the Whale), was sent to the people of Nineveh (in modern-day Iraq). He preached to his people, but they refused to believe. Frustrated with their rejection, Yunus left his people without Allah's permission, boarding a ship to sail away.\n\nA terrible storm arose at sea, and the crew drew lots to lighten the ship's load by throwing someone overboard. The lot fell on Yunus three times, and he was cast into the sea. A great whale (or fish) swallowed him. In the darkness of the whale's belly, at the bottom of the sea, at night - in layers of darkness upon darkness - Yunus called out to Allah with the famous supplication: 'La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimin' (There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers).\n\nAllah heard his prayer, and the whale cast him out onto the shore. He was ill and weak, and Allah caused a gourd plant to grow over him, providing shade and nourishment for his recovery.\n\nRemarkably, Yunus's people - after witnessing the signs of impending punishment - actually believed and repented. They are the only community mentioned in the Quran whose collective repentance saved them from destruction. Yunus returned to find his people as believers.",
    miracles: ["Survived in the belly of the whale", "His people's collective repentance saved them"],
    lessons: ["Never abandon your mission without Allah's permission", "Repentance is accepted even in the darkest moments", "An entire community can be saved through sincere repentance", "The power of the dua of Yunus (AS)"],
    timeline: "Approximately 800 BCE",
    title: "Dhun-Nun (The Man of the Whale)",
    relatedVerses: [
      { surah: 21, ayah: 87, text: "And he called out within the darknesses: There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." },
      { surah: 37, ayah: 144, text: "And had he not been of those who exalt Allah, he would have remained inside its belly until the Day they are resurrected." },
      { surah: 10, ayah: 98, text: "Then why has there not been a city that believed so its faith benefited it except the people of Yunus?" }
    ]
  },
  {
    name: "Zakariya",
    arabicName: "زَكَرِيَّا",
    banglaName: "যাকারিয়া (আ.)",
    meaning: "God remembers",
    quranMentions: 7,
    surahs: [3, 6, 19, 21],
    story: "Zakariya (AS) was a righteous prophet and priest who served at the temple in Jerusalem. He was the guardian of Maryam (Mary), the mother of Isa (AS). Whenever Zakariya visited Maryam in her prayer chamber, he found her provided with food. When he asked where it came from, she replied: 'It is from Allah. Indeed, Allah provides for whom He wills without account.'\n\nInspired by witnessing Allah's provision for Maryam, the elderly Zakariya - whose wife was barren and he himself was old with white hair - made a heartfelt supplication: 'My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy.' He asked Allah for an heir who would carry on the prophetic mission.\n\nAllah answered his prayer and gave him glad tidings of a son named Yahya - a name never given before. When Zakariya asked for a sign, Allah told him his sign would be that he would not be able to speak to people for three days, though he would still be able to communicate through gestures. During those three days, he glorified Allah morning and evening.\n\nZakariya's story beautifully illustrates that it is never too late to ask Allah for anything, and that sincere supplication is always heard.",
    miracles: ["Blessed with a son in extreme old age", "Witnessed miraculous provision for Maryam", "Sign of three days of silence"],
    lessons: ["Never consider yourself too old for Allah's blessings", "Sincerity in dua is key", "Witnessing others' blessings should inspire hope", "Gratitude and glorification of Allah"],
    timeline: "Approximately 100 BCE - 1 CE",
    title: "Guardian of Maryam",
    relatedVerses: [
      { surah: 19, ayah: 4, text: "He said, My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy." },
      { surah: 3, ayah: 39, text: "Then the angels called him while he was standing in prayer in the chamber: Indeed, Allah gives you good tidings of Yahya." },
      { surah: 21, ayah: 90, text: "So We responded to him, and We gave him Yahya, and amended for him his wife." }
    ]
  },
  {
    name: "Yahya",
    arabicName: "يَحْيَى",
    banglaName: "ইয়াহইয়া (আ.)",
    meaning: "God gives life",
    quranMentions: 5,
    surahs: [3, 6, 19, 21],
    story: "Yahya (AS), identified with John the Baptist, was the son of Zakariya (AS). His birth was itself a miracle, as his father was extremely old and his mother was barren. Even his name was unique - Allah stated: 'We have not assigned to any before this name' (Quran 19:7).\n\nFrom a young age, Yahya was given wisdom, compassion, and purity by Allah. The Quran states: 'O Yahya, take the Scripture with determination. And We gave him judgment while yet a boy.' He grew up devout, dutiful to his parents, and free from arrogance and disobedience.\n\nYahya was characterized by several exceptional qualities: he was compassionate toward people, pure from sin, dutiful to his parents, and neither overbearing nor disobedient. He was the first to believe in and confirm the prophethood of Isa (AS), his cousin.\n\nThe Quran sends peace upon Yahya three times: on the day he was born, the day he dies, and the day he will be raised alive. This triple salutation indicates his special status with Allah. Yahya dedicated his life to calling people to repentance and righteousness, preparing the way for the message of Isa (AS).",
    miracles: ["Given wisdom as a child", "Miraculous birth", "Purity and righteousness from youth"],
    lessons: ["Youth is no barrier to wisdom and piety", "Compassion and purity are noble qualities", "Confirming truth when you see it", "Devotion to parents is a mark of righteousness"],
    timeline: "Contemporary of Isa, approximately 1 BCE - 30 CE",
    title: "The Pure and Compassionate Prophet",
    relatedVerses: [
      { surah: 19, ayah: 12, text: "O Yahya, take the Scripture with determination. And We gave him judgment while yet a boy." },
      { surah: 19, ayah: 13, text: "And affection from Us and purity, and he was fearing of Allah." },
      { surah: 19, ayah: 15, text: "And peace be upon him the day he was born and the day he dies and the day he is raised alive." }
    ]
  },
  {
    name: "Isa",
    arabicName: "عِيسَى",
    banglaName: "ঈসা (আ.)",
    meaning: "God saves",
    quranMentions: 25,
    surahs: [2, 3, 4, 5, 6, 9, 19, 21, 23, 33, 42, 43, 57, 61],
    story: "Isa (AS), known as Jesus, holds a unique and honored position in Islam. He was born miraculously without a father to Maryam (Mary), one of the most righteous women in history. When the angel Jibril appeared to Maryam to announce the birth, she asked how she could have a child when no man had touched her. The angel replied: 'Thus it will be; your Lord says, It is easy for Me.'\n\nIsa performed extraordinary miracles from birth itself. As a newborn, he spoke from the cradle to defend his mother's honor when people accused her of immorality. He declared: 'Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.' As he grew, Allah gave him the ability to heal the blind and the leper, bring the dead back to life by Allah's permission, and breathe life into clay birds.\n\nIsa was given the Injeel (Gospel) and called the Children of Israel to worship Allah alone. He confirmed the Torah that came before him and gave glad tidings of a messenger to come after him named Ahmad (Muhammad). Despite his clear miracles, many of his people rejected him, and some plotted to kill him.\n\nIslam teaches that Isa was not crucified but was raised alive to heaven by Allah: 'They did not kill him, nor did they crucify him; but another was made to resemble him to them.' Isa will return before the Day of Judgment, break the cross, establish justice, and confirm the message of Islam.\n\nIsa is not considered divine in Islam but is honored as one of the greatest prophets and messengers of Allah, born of a miraculous birth and given extraordinary signs.",
    miracles: ["Born without a father", "Spoke from the cradle", "Healed the blind and lepers", "Raised the dead by Allah's permission", "Created birds from clay", "Table spread from heaven", "Raised alive to heaven"],
    lessons: ["Allah's power transcends natural laws", "Prophets are servants of Allah, not divine", "Clear evidence may still be rejected by the arrogant", "Patience with those who reject the truth", "Humility despite possessing great gifts"],
    timeline: "Approximately 1 CE - 33 CE",
    title: "Ruhullah (Spirit of Allah), Al-Masih (The Messiah)",
    relatedVerses: [
      { surah: 19, ayah: 30, text: "He said, Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet." },
      { surah: 3, ayah: 49, text: "And a messenger to the Children of Israel, saying: I have come to you with a sign from your Lord." },
      { surah: 4, ayah: 157, text: "They did not kill him, nor did they crucify him; but another was made to resemble him to them." }
    ]
  },
  {
    name: "Muhammad",
    arabicName: "مُحَمَّد",
    banglaName: "মুহাম্মাদ (সা.)",
    meaning: "The Praised One",
    quranMentions: 4,
    surahs: [3, 33, 47, 48],
    story: "Muhammad (SAW) is the final prophet and messenger of Allah, sent as a mercy to all of mankind and jinn. Born in Makkah around 570 CE to the Quraysh tribe, he was orphaned at a young age - his father Abdullah died before his birth, and his mother Aminah passed away when he was six. He was raised first by his grandfather Abdul Muttalib and then by his uncle Abu Talib.\n\nKnown from youth as As-Sadiq Al-Amin (The Truthful, The Trustworthy), Muhammad (SAW) was respected by all in Makkah. At age 40, while meditating in the Cave of Hira during the month of Ramadan, the angel Jibril appeared to him with the first revelation: 'Read in the name of your Lord who created.' This began a 23-year period of revelation that would complete the Quran.\n\nThe early years of his prophethood in Makkah were marked by severe persecution. The Muslims were boycotted, tortured, and killed for their faith. After 13 years, Muhammad (SAW) made the Hijra (migration) to Madinah, where he established the first Islamic state based on justice, brotherhood, and the worship of Allah alone.\n\nIn Madinah, the Prophet (SAW) faced numerous military challenges but also demonstrated remarkable statesmanship, establishing treaties (including the Treaty of Hudaybiyyah), building alliances, and creating a model society. In the 8th year after Hijra, Makkah was peacefully conquered, and the Prophet (SAW) destroyed the 360 idols around the Kaaba, restoring it to the worship of Allah alone.\n\nThe Prophet Muhammad (SAW) delivered his farewell sermon during his final Hajj, emphasizing equality, justice, and the completion of the religion. He passed away in Madinah in 632 CE at age 63, having transformed Arabia and laid the foundation for a civilization that would span the globe. His character, teachings, and the Quran remain the guiding light for over 1.8 billion Muslims worldwide.",
    miracles: ["The Quran - the eternal miracle", "Isra and Mi'raj (Night Journey and Ascension)", "Splitting of the moon", "Water flowing from his fingers", "Feeding many from little food", "The Quraysh's inability to produce anything like the Quran"],
    lessons: ["Mercy and compassion in all dealings", "Justice for all regardless of status", "Patience through persecution", "Forgiveness even toward enemies", "The balance of spiritual and worldly life", "The finality and completeness of the Islamic message"],
    timeline: "570 CE - 632 CE",
    title: "Habibullah (Beloved of Allah), Rahmatul lil-Alameen (Mercy to the Worlds), Khatam an-Nabiyyin (Seal of the Prophets)",
    relatedVerses: [
      { surah: 33, ayah: 40, text: "Muhammad is not the father of any of your men, but he is the Messenger of Allah and the seal of the prophets." },
      { surah: 21, ayah: 107, text: "And We have not sent you, O Muhammad, except as a mercy to the worlds." },
      { surah: 48, ayah: 29, text: "Muhammad is the Messenger of Allah; and those with him are forceful against the disbelievers, merciful among themselves." }
    ]
  }
];

// ============================================================
// ACHIEVEMENTS_DATA - Gamification Achievements for Quran App
// ============================================================
const ACHIEVEMENTS_DATA = [
  { id: "first_step", title: "First Step", description: "Read your first ayah", icon: "fa-shoe-prints", category: "reading", requirement: { type: "ayahs_read", count: 1 }, points: 10, rarity: "common", banglaTitle: "প্রথম পদক্ষেপ", banglaDescription: "প্রথম আয়াত পড়ুন" },
  { id: "ten_ayahs", title: "Curious Reader", description: "Read 10 ayahs", icon: "fa-book-open", category: "reading", requirement: { type: "ayahs_read", count: 10 }, points: 20, rarity: "common", banglaTitle: "কৌতূহলী পাঠক", banglaDescription: "১০টি আয়াত পড়ুন" },
  { id: "fifty_ayahs", title: "Dedicated Reader", description: "Read 50 ayahs", icon: "fa-book-reader", category: "reading", requirement: { type: "ayahs_read", count: 50 }, points: 50, rarity: "common", banglaTitle: "নিবেদিত পাঠক", banglaDescription: "৫০টি আয়াত পড়ুন" },
  { id: "hundred_ayahs", title: "Avid Reader", description: "Read 100 ayahs", icon: "fa-glasses", category: "reading", requirement: { type: "ayahs_read", count: 100 }, points: 100, rarity: "common", banglaTitle: "আগ্রহী পাঠক", banglaDescription: "১০০টি আয়াত পড়ুন" },
  { id: "five_hundred_ayahs", title: "Page Turner", description: "Read 500 ayahs", icon: "fa-scroll", category: "reading", requirement: { type: "ayahs_read", count: 500 }, points: 250, rarity: "rare", banglaTitle: "পাতা উল্টানো", banglaDescription: "৫০০টি আয়াত পড়ুন" },
  { id: "thousand_ayahs", title: "Bookworm", description: "Read 1000 ayahs", icon: "fa-feather-alt", category: "reading", requirement: { type: "ayahs_read", count: 1000 }, points: 500, rarity: "rare", banglaTitle: "বইপোকা", banglaDescription: "১০০০টি আয়াত পড়ুন" },
  { id: "all_ayahs", title: "Khatm Complete", description: "Read all 6236 ayahs", icon: "fa-quran", category: "reading", requirement: { type: "ayahs_read", count: 6236 }, points: 2000, rarity: "legendary", banglaTitle: "খতম সম্পন্ন", banglaDescription: "সম্পূর্ণ ৬২৩৬টি আয়াত পড়ুন" },
  { id: "surah_complete", title: "Chapter Complete", description: "Finish reading a complete surah", icon: "fa-check-circle", category: "reading", requirement: { type: "surahs_complete", count: 1 }, points: 30, rarity: "common", banglaTitle: "অধ্যায় সম্পন্ন", banglaDescription: "একটি সম্পূর্ণ সূরা পড়ুন" },
  { id: "ten_surahs", title: "Surah Explorer", description: "Complete 10 different surahs", icon: "fa-map-signs", category: "reading", requirement: { type: "surahs_complete", count: 10 }, points: 150, rarity: "rare", banglaTitle: "সূরা অনুসন্ধানকারী", banglaDescription: "১০টি ভিন্ন সূরা পড়ুন" },
  { id: "thirty_surahs", title: "Surah Traveler", description: "Complete 30 different surahs", icon: "fa-route", category: "reading", requirement: { type: "surahs_complete", count: 30 }, points: 400, rarity: "epic", banglaTitle: "সূরা পর্যটক", banglaDescription: "৩০টি ভিন্ন সূরা পড়ুন" },
  { id: "all_surahs", title: "Master Reader", description: "Complete all 114 surahs", icon: "fa-crown", category: "reading", requirement: { type: "surahs_complete", count: 114 }, points: 2500, rarity: "legendary", banglaTitle: "মাস্টার পাঠক", banglaDescription: "সকল ১১৪টি সূরা পড়ুন" },
  { id: "juz_complete", title: "Juz Master", description: "Complete reading an entire Juz", icon: "fa-layer-group", category: "reading", requirement: { type: "juz_complete", count: 1 }, points: 100, rarity: "rare", banglaTitle: "পারা মাস্টার", banglaDescription: "একটি সম্পূর্ণ পারা পড়ুন" },
  { id: "ten_juz", title: "Third Complete", description: "Complete 10 Juz", icon: "fa-star-half-alt", category: "reading", requirement: { type: "juz_complete", count: 10 }, points: 500, rarity: "epic", banglaTitle: "এক-তৃতীয়াংশ সম্পন্ন", banglaDescription: "১০টি পারা পড়ুন" },
  { id: "all_juz", title: "Quran Guardian", description: "Complete all 30 Juz", icon: "fa-shield-alt", category: "reading", requirement: { type: "juz_complete", count: 30 }, points: 3000, rarity: "legendary", banglaTitle: "কুরআনের রক্ষক", banglaDescription: "সকল ৩০টি পারা পড়ুন" },
  { id: "memorize_fatiha", title: "Foundation", description: "Memorize Surah Al-Fatiha", icon: "fa-brain", category: "memorization", requirement: { type: "memorize_surah", surah: 1 }, points: 50, rarity: "common", banglaTitle: "ভিত্তি", banglaDescription: "সূরা আল-ফাতিহা মুখস্থ করুন" },
  { id: "memorize_ikhlas", title: "Sincerity", description: "Memorize Surah Al-Ikhlas", icon: "fa-heart", category: "memorization", requirement: { type: "memorize_surah", surah: 112 }, points: 30, rarity: "common", banglaTitle: "ইখলাস", banglaDescription: "সূরা আল-ইখলাস মুখস্থ করুন" },
  { id: "memorize_three_quls", title: "Protected", description: "Memorize the three Qul surahs (112, 113, 114)", icon: "fa-shield-virus", category: "memorization", requirement: { type: "memorize_surahs", surahs: [112, 113, 114] }, points: 80, rarity: "common", banglaTitle: "সুরক্ষিত", banglaDescription: "তিনটি কুল সূরা মুখস্থ করুন" },
  { id: "memorize_five", title: "Memory Builder", description: "Memorize 5 surahs", icon: "fa-memory", category: "memorization", requirement: { type: "memorize_count", count: 5 }, points: 150, rarity: "rare", banglaTitle: "স্মৃতি নির্মাতা", banglaDescription: "৫টি সূরা মুখস্থ করুন" },
  { id: "memorize_ten", title: "Hafiz Journey", description: "Memorize 10 surahs", icon: "fa-graduation-cap", category: "memorization", requirement: { type: "memorize_count", count: 10 }, points: 300, rarity: "epic", banglaTitle: "হাফিজের পথে", banglaDescription: "১০টি সূরা মুখস্থ করুন" },
  { id: "memorize_juz_amma", title: "Juz Amma Complete", description: "Memorize all surahs of Juz 30", icon: "fa-award", category: "memorization", requirement: { type: "memorize_juz", juz: 30 }, points: 1000, rarity: "epic", banglaTitle: "আম্মা পারা সম্পন্ন", banglaDescription: "৩০তম পারার সকল সূরা মুখস্থ করুন" },
  { id: "memorize_ayatul_kursi", title: "Throne Verse", description: "Memorize Ayatul Kursi (2:255)", icon: "fa-chess-king", category: "memorization", requirement: { type: "memorize_ayah", surah: 2, ayah: 255 }, points: 100, rarity: "rare", banglaTitle: "আয়াতুল কুরসী", banglaDescription: "আয়াতুল কুরসী মুখস্থ করুন" },
  { id: "streak_three", title: "Getting Started", description: "Read Quran for 3 consecutive days", icon: "fa-fire", category: "streak", requirement: { type: "streak_days", count: 3 }, points: 30, rarity: "common", banglaTitle: "শুরু হলো", banglaDescription: "পরপর ৩ দিন কুরআন পড়ুন" },
  { id: "streak_seven", title: "Week Warrior", description: "Read Quran for 7 consecutive days", icon: "fa-fire-alt", category: "streak", requirement: { type: "streak_days", count: 7 }, points: 70, rarity: "common", banglaTitle: "সপ্তাহ যোদ্ধা", banglaDescription: "পরপর ৭ দিন কুরআন পড়ুন" },
  { id: "streak_fourteen", title: "Fortnight Focus", description: "Read Quran for 14 consecutive days", icon: "fa-calendar-check", category: "streak", requirement: { type: "streak_days", count: 14 }, points: 150, rarity: "rare", banglaTitle: "পাক্ষিক মনোযোগ", banglaDescription: "পরপর ১৪ দিন কুরআন পড়ুন" },
  { id: "streak_thirty", title: "Monthly Master", description: "Read Quran for 30 consecutive days", icon: "fa-medal", category: "streak", requirement: { type: "streak_days", count: 30 }, points: 500, rarity: "epic", banglaTitle: "মাসিক মাস্টার", banglaDescription: "পরপর ৩০ দিন কুরআন পড়ুন" },
  { id: "streak_sixty", title: "Devotion", description: "Read Quran for 60 consecutive days", icon: "fa-gem", category: "streak", requirement: { type: "streak_days", count: 60 }, points: 1000, rarity: "epic", banglaTitle: "নিষ্ঠা", banglaDescription: "পরপর ৬০ দিন কুরআন পড়ুন" },
  { id: "streak_ninety", title: "Unwavering", description: "Read Quran for 90 consecutive days", icon: "fa-mountain", category: "streak", requirement: { type: "streak_days", count: 90 }, points: 1500, rarity: "legendary", banglaTitle: "অবিচল", banglaDescription: "পরপর ৯০ দিন কুরআন পড়ুন" },
  { id: "streak_365", title: "Year of Light", description: "Read Quran for 365 consecutive days", icon: "fa-sun", category: "streak", requirement: { type: "streak_days", count: 365 }, points: 5000, rarity: "legendary", banglaTitle: "আলোর বছর", banglaDescription: "পরপর ৩৬৫ দিন কুরআন পড়ুন" },
  { id: "night_owl", title: "Night Owl", description: "Read Quran after midnight", icon: "fa-moon", category: "dedication", requirement: { type: "time_based", after: "00:00", before: "04:00" }, points: 50, rarity: "rare", banglaTitle: "রাতের পাখি", banglaDescription: "মধ্যরাতের পর কুরআন পড়ুন" },
  { id: "early_bird", title: "Early Bird", description: "Read Quran at Fajr time", icon: "fa-dove", category: "dedication", requirement: { type: "time_based", prayer: "fajr" }, points: 50, rarity: "rare", banglaTitle: "ভোরের পাখি", banglaDescription: "ফজরের সময় কুরআন পড়ুন" },
  { id: "friday_reader", title: "Jumu'ah Reader", description: "Read Surah Al-Kahf on Friday", icon: "fa-mosque", category: "dedication", requirement: { type: "surah_on_day", surah: 18, day: 5 }, points: 60, rarity: "common", banglaTitle: "জুমুআর পাঠক", banglaDescription: "শুক্রবারে সূরা কাহফ পড়ুন" },
  { id: "ramadan_reader", title: "Ramadan Spirit", description: "Read Quran during Ramadan", icon: "fa-star-and-crescent", category: "dedication", requirement: { type: "read_in_ramadan" }, points: 200, rarity: "rare", banglaTitle: "রমযানের আত্মা", banglaDescription: "রমযানে কুরআন পড়ুন" },
  { id: "tahajjud_reader", title: "Night Worshipper", description: "Read Quran during Tahajjud time 10 times", icon: "fa-pray", category: "dedication", requirement: { type: "tahajjud_reads", count: 10 }, points: 300, rarity: "epic", banglaTitle: "রাতের ইবাদতকারী", banglaDescription: "তাহাজ্জুদের সময় ১০ বার কুরআন পড়ুন" },
  { id: "first_bookmark", title: "Marked", description: "Create your first bookmark", icon: "fa-bookmark", category: "exploration", requirement: { type: "bookmarks", count: 1 }, points: 10, rarity: "common", banglaTitle: "চিহ্নিত", banglaDescription: "প্রথম বুকমার্ক তৈরি করুন" },
  { id: "ten_bookmarks", title: "Collector", description: "Create 10 bookmarks", icon: "fa-tags", category: "exploration", requirement: { type: "bookmarks", count: 10 }, points: 50, rarity: "common", banglaTitle: "সংগ্রাহক", banglaDescription: "১০টি বুকমার্ক তৈরি করুন" },
  { id: "fifty_bookmarks", title: "Curator", description: "Create 50 bookmarks", icon: "fa-archive", category: "exploration", requirement: { type: "bookmarks", count: 50 }, points: 150, rarity: "rare", banglaTitle: "তত্ত্বাবধায়ক", banglaDescription: "৫০টি বুকমার্ক তৈরি করুন" },
  { id: "hundred_bookmarks", title: "Librarian", description: "Create 100 bookmarks", icon: "fa-book-medical", category: "exploration", requirement: { type: "bookmarks", count: 100 }, points: 300, rarity: "epic", banglaTitle: "গ্রন্থাগারিক", banglaDescription: "১০০টি বুকমার্ক তৈরি করুন" },
  { id: "first_note", title: "Reflector", description: "Write your first note on an ayah", icon: "fa-pen", category: "exploration", requirement: { type: "notes", count: 1 }, points: 15, rarity: "common", banglaTitle: "চিন্তাশীল", banglaDescription: "প্রথম আয়াতে নোট লিখুন" },
  { id: "search_explorer", title: "Seeker", description: "Use the search feature 10 times", icon: "fa-search", category: "exploration", requirement: { type: "searches", count: 10 }, points: 30, rarity: "common", banglaTitle: "অনুসন্ধানকারী", banglaDescription: "সার্চ ফিচার ১০ বার ব্যবহার করুন" },
  { id: "tafsir_reader", title: "Scholar", description: "Read tafsir for 50 different ayahs", icon: "fa-university", category: "exploration", requirement: { type: "tafsir_reads", count: 50 }, points: 200, rarity: "rare", banglaTitle: "আলেম", banglaDescription: "৫০টি ভিন্ন আয়াতের তাফসীর পড়ুন" },
  { id: "tafsir_master", title: "Mufassir", description: "Read tafsir for 200 different ayahs", icon: "fa-user-graduate", category: "exploration", requirement: { type: "tafsir_reads", count: 200 }, points: 800, rarity: "epic", banglaTitle: "মুফাসসির", banglaDescription: "২০০টি ভিন্ন আয়াতের তাফসীর পড়ুন" },
  { id: "dua_learner", title: "Supplicant", description: "Read 10 different duas", icon: "fa-hands", category: "exploration", requirement: { type: "duas_read", count: 10 }, points: 40, rarity: "common", banglaTitle: "দোয়াকারী", banglaDescription: "১০টি ভিন্ন দোয়া পড়ুন" },
  { id: "all_duas", title: "Dua Master", description: "Read all available duas", icon: "fa-praying-hands", category: "exploration", requirement: { type: "duas_read", count: 50 }, points: 300, rarity: "epic", banglaTitle: "দোয়া মাস্টার", banglaDescription: "সকল দোয়া পড়ুন" },
  { id: "names_learner", title: "Name Knower", description: "Learn 10 Names of Allah", icon: "fa-star", category: "exploration", requirement: { type: "names_learned", count: 10 }, points: 50, rarity: "common", banglaTitle: "নাম জানা", banglaDescription: "আল্লাহর ১০টি নাম শিখুন" },
  { id: "all_names", title: "Asma ul-Husna", description: "Learn all 99 Names of Allah", icon: "fa-star-of-david", category: "exploration", requirement: { type: "names_learned", count: 99 }, points: 1000, rarity: "legendary", banglaTitle: "আসমাউল হুসনা", banglaDescription: "আল্লাহর ৯৯টি নাম শিখুন" },
  { id: "share_first", title: "Spreader of Light", description: "Share an ayah for the first time", icon: "fa-share-alt", category: "social", requirement: { type: "shares", count: 1 }, points: 20, rarity: "common", banglaTitle: "আলো ছড়ানো", banglaDescription: "প্রথমবার একটি আয়াত শেয়ার করুন" },
  { id: "share_ten", title: "Messenger of Good", description: "Share 10 ayahs", icon: "fa-share-square", category: "social", requirement: { type: "shares", count: 10 }, points: 80, rarity: "rare", banglaTitle: "কল্যাণের বাহক", banglaDescription: "১০টি আয়াত শেয়ার করুন" },
  { id: "share_fifty", title: "Dawah Ambassador", description: "Share 50 ayahs", icon: "fa-bullhorn", category: "social", requirement: { type: "shares", count: 50 }, points: 250, rarity: "epic", banglaTitle: "দাওয়াতের দূত", banglaDescription: "৫০টি আয়াত শেয়ার করুন" },
  { id: "reciter_explorer", title: "Voice Seeker", description: "Listen to 5 different reciters", icon: "fa-headphones", category: "exploration", requirement: { type: "reciters_listened", count: 5 }, points: 40, rarity: "common", banglaTitle: "কণ্ঠ অনুসন্ধানী", banglaDescription: "৫ জন ভিন্ন ক্বারীর তেলাওয়াত শুনুন" },
  { id: "audio_listener", title: "Listener", description: "Listen to 100 ayahs recited", icon: "fa-volume-up", category: "dedication", requirement: { type: "ayahs_listened", count: 100 }, points: 100, rarity: "rare", banglaTitle: "শ্রোতা", banglaDescription: "১০০টি আয়াতের তেলাওয়াত শুনুন" },
  { id: "meccan_explorer", title: "Meccan Explorer", description: "Read 10 Meccan surahs", icon: "fa-kaaba", category: "exploration", requirement: { type: "meccan_surahs", count: 10 }, points: 80, rarity: "common", banglaTitle: "মক্কী অনুসন্ধানী", banglaDescription: "১০টি মক্কী সূরা পড়ুন" },
  { id: "medinan_explorer", title: "Medinan Explorer", description: "Read 10 Medinan surahs", icon: "fa-city", category: "exploration", requirement: { type: "medinan_surahs", count: 10 }, points: 80, rarity: "common", banglaTitle: "মাদানী অনুসন্ধানী", banglaDescription: "১০টি মাদানী সূরা পড়ুন" },
  { id: "longest_surah", title: "Marathon Reader", description: "Read Surah Al-Baqarah completely", icon: "fa-running", category: "dedication", requirement: { type: "complete_surah", surah: 2 }, points: 500, rarity: "epic", banglaTitle: "ম্যারাথন পাঠক", banglaDescription: "সম্পূর্ণ সূরা আল-বাকারা পড়ুন" },
  { id: "yasin_reader", title: "Heart Reader", description: "Read Surah Ya-Sin completely", icon: "fa-heartbeat", category: "dedication", requirement: { type: "complete_surah", surah: 36 }, points: 100, rarity: "rare", banglaTitle: "হৃদয়ের পাঠক", banglaDescription: "সম্পূর্ণ সূরা ইয়াসীন পড়ুন" },
  { id: "mulk_reader", title: "Sovereignty", description: "Read Surah Al-Mulk completely", icon: "fa-chess-rook", category: "dedication", requirement: { type: "complete_surah", surah: 67 }, points: 80, rarity: "rare", banglaTitle: "সার্বভৌমত্ব", banglaDescription: "সম্পূর্ণ সূরা আল-মুলক পড়ুন" },
  { id: "rahman_reader", title: "Beauty of Quran", description: "Read Surah Ar-Rahman completely", icon: "fa-hand-holding-heart", category: "dedication", requirement: { type: "complete_surah", surah: 55 }, points: 80, rarity: "rare", banglaTitle: "কুরআনের সৌন্দর্য", banglaDescription: "সম্পূর্ণ সূরা আর-রহমান পড়ুন" },
  { id: "prophet_stories", title: "Story Seeker", description: "Read about all 25 prophets", icon: "fa-users", category: "exploration", requirement: { type: "prophets_read", count: 25 }, points: 200, rarity: "epic", banglaTitle: "গল্প অনুসন্ধানী", banglaDescription: "২৫ জন নবীর গল্প পড়ুন" },
  { id: "plan_starter", title: "Plan Maker", description: "Start a reading plan", icon: "fa-clipboard-list", category: "dedication", requirement: { type: "plan_started" }, points: 25, rarity: "common", banglaTitle: "পরিকল্পনাকারী", banglaDescription: "একটি পড়ার পরিকল্পনা শুরু করুন" },
  { id: "plan_complete", title: "Plan Master", description: "Complete a reading plan", icon: "fa-flag-checkered", category: "dedication", requirement: { type: "plan_completed" }, points: 500, rarity: "epic", banglaTitle: "পরিকল্পনা মাস্টার", banglaDescription: "একটি পড়ার পরিকল্পনা সম্পন্ন করুন" }
];

// ============================================================
// TAFSIR_TOPICS - Study Topics for Thematic Quran Study
// ============================================================
const TAFSIR_TOPICS = [
  { id: "tawheed", title: "Tawheed (Monotheism)", arabicTitle: "التوحيد", banglaTitle: "তাওহীদ (একত্ববাদ)", description: "The Oneness of Allah in His Lordship, Worship, and Names and Attributes. The fundamental concept of Islamic theology.", category: "theology", relatedSurahs: [1, 112, 2, 3, 6, 7, 16, 21, 59, 114], keyVerses: [{ surah: 112, ayah: 1 }, { surah: 2, ayah: 255 }, { surah: 59, ayah: 22 }], subtopics: ["Tawheed ar-Rububiyyah", "Tawheed al-Uluhiyyah", "Tawheed al-Asma wa Sifat", "Shirk and its types", "Evidence of Allah's existence"] },
  { id: "risalah", title: "Risalah (Prophethood)", arabicTitle: "الرسالة", banglaTitle: "রিসালাহ (নবুওয়াত)", description: "The institution of prophethood, the role of prophets, and the chain of divine messengers from Adam to Muhammad (SAW).", category: "theology", relatedSurahs: [2, 3, 4, 6, 11, 12, 19, 21, 26, 33], keyVerses: [{ surah: 33, ayah: 40 }, { surah: 21, ayah: 25 }, { surah: 3, ayah: 81 }], subtopics: ["Purpose of prophets", "Qualities of prophets", "Miracles", "Seal of prophethood", "Common message of all prophets"] },
  { id: "akhirah", title: "Akhirah (Afterlife)", arabicTitle: "الآخرة", banglaTitle: "আখিরাত (পরকাল)", description: "Life after death, the Day of Judgment, resurrection, accountability, Paradise, and Hellfire.", category: "eschatology", relatedSurahs: [56, 69, 75, 78, 79, 81, 82, 84, 88, 99, 101], keyVerses: [{ surah: 99, ayah: 7 }, { surah: 56, ayah: 1 }, { surah: 75, ayah: 1 }], subtopics: ["Signs of the Hour", "Death and Barzakh", "Resurrection", "The Reckoning", "The Bridge (Sirat)", "Paradise and Hellfire"] },
  { id: "salah", title: "Salah (Prayer)", arabicTitle: "الصلاة", banglaTitle: "সালাত (নামায)", description: "The five daily prayers, their importance, rules, and spiritual significance in Islam.", category: "jurisprudence", relatedSurahs: [1, 2, 4, 5, 11, 17, 20, 29, 62, 73, 107], keyVerses: [{ surah: 2, ayah: 43 }, { surah: 29, ayah: 45 }, { surah: 20, ayah: 14 }], subtopics: ["Obligation of prayer", "Times of prayer", "Khushu in prayer", "Congregational prayer", "Friday prayer", "Night prayer"] },
  { id: "zakah", title: "Zakah (Charity)", arabicTitle: "الزكاة", banglaTitle: "যাকাত", description: "Obligatory charity, its calculation, recipients, and role in purifying wealth and reducing inequality.", category: "jurisprudence", relatedSurahs: [2, 9, 24, 57, 73, 98], keyVerses: [{ surah: 9, ayah: 60 }, { surah: 2, ayah: 267 }, { surah: 9, ayah: 103 }], subtopics: ["Nisab and calculation", "Eight categories of recipients", "Sadaqah vs Zakah", "Zakatul Fitr", "Wealth purification"] },
  { id: "sawm", title: "Sawm (Fasting)", arabicTitle: "الصوم", banglaTitle: "সাওম (রোযা)", description: "Fasting during Ramadan and voluntary fasts, their rules, exemptions, and spiritual benefits.", category: "jurisprudence", relatedSurahs: [2, 97], keyVerses: [{ surah: 2, ayah: 183 }, { surah: 2, ayah: 185 }, { surah: 97, ayah: 1 }], subtopics: ["Obligation of fasting", "Rules of fasting", "Exemptions", "Laylatul Qadr", "Voluntary fasts", "Itikaf"] },
  { id: "hajj", title: "Hajj (Pilgrimage)", arabicTitle: "الحج", banglaTitle: "হজ্জ", description: "The annual pilgrimage to Makkah, its rites, significance, and connection to Ibrahim (AS).", category: "jurisprudence", relatedSurahs: [2, 3, 5, 22], keyVerses: [{ surah: 22, ayah: 27 }, { surah: 2, ayah: 196 }, { surah: 3, ayah: 97 }], subtopics: ["Pillars of Hajj", "Umrah", "Tawaf and Sa'i", "Day of Arafah", "Eid ul-Adha", "History of the Kaaba"] },
  { id: "jihad", title: "Jihad (Striving)", arabicTitle: "الجهاد", banglaTitle: "জিহাদ (সংগ্রাম)", description: "Striving in the way of Allah through personal struggle, spreading knowledge, and defending the faith.", category: "ethics", relatedSurahs: [2, 3, 4, 8, 9, 22, 29, 47, 49, 61], keyVerses: [{ surah: 29, ayah: 69 }, { surah: 22, ayah: 78 }, { surah: 2, ayah: 190 }], subtopics: ["Jihad of the self", "Jihad of knowledge", "Rules of engagement", "Just war theory", "Peace and treaties"] },
  { id: "marriage", title: "Marriage and Family", arabicTitle: "النكاح والأسرة", banglaTitle: "বিবাহ ও পরিবার", description: "Islamic guidelines on marriage, family life, rights of spouses, and raising children.", category: "jurisprudence", relatedSurahs: [2, 4, 24, 25, 30, 33, 60, 65, 66], keyVerses: [{ surah: 30, ayah: 21 }, { surah: 4, ayah: 19 }, { surah: 25, ayah: 74 }], subtopics: ["Rights of spouses", "Mahr", "Mutual respect", "Raising children", "Divorce procedures", "Kindness to parents"] },
  { id: "inheritance", title: "Inheritance (Mirath)", arabicTitle: "الميراث", banglaTitle: "মীরাস (উত্তরাধিকার)", description: "Islamic inheritance law, the precise shares allocated to different family members.", category: "jurisprudence", relatedSurahs: [2, 4, 5], keyVerses: [{ surah: 4, ayah: 11 }, { surah: 4, ayah: 12 }, { surah: 4, ayah: 176 }], subtopics: ["Fixed shares", "Residuary heirs", "Exclusion rules", "Wasiyyah (will)", "Debt settlement before inheritance"] },
  { id: "justice", title: "Justice (Adl)", arabicTitle: "العدل", banglaTitle: "আদল (ন্যায়বিচার)", description: "The Islamic emphasis on justice in all affairs, including courts, business, and personal dealings.", category: "ethics", relatedSurahs: [4, 5, 6, 16, 42, 49, 57], keyVerses: [{ surah: 4, ayah: 135 }, { surah: 5, ayah: 8 }, { surah: 16, ayah: 90 }], subtopics: ["Justice in testimony", "Justice with enemies", "Social justice", "Economic justice", "Racial equality"] },
  { id: "patience", title: "Sabr (Patience)", arabicTitle: "الصبر", banglaTitle: "সবর (ধৈর্য)", description: "The virtue of patience in Islam, its types, rewards, and how to develop it.", category: "ethics", relatedSurahs: [2, 3, 8, 11, 12, 16, 31, 39, 42, 103], keyVerses: [{ surah: 2, ayah: 153 }, { surah: 3, ayah: 200 }, { surah: 94, ayah: 5 }], subtopics: ["Patience in obedience", "Patience in adversity", "Patience from sin", "Rewards of patience", "Stories of patient prophets"] },
  { id: "gratitude", title: "Shukr (Gratitude)", arabicTitle: "الشكر", banglaTitle: "শুকর (কৃতজ্ঞতা)", description: "Gratitude to Allah and its role in increasing blessings and spiritual well-being.", category: "ethics", relatedSurahs: [2, 14, 16, 27, 31, 34, 55], keyVerses: [{ surah: 14, ayah: 7 }, { surah: 2, ayah: 152 }, { surah: 55, ayah: 13 }], subtopics: ["Gratitude of the heart", "Gratitude of the tongue", "Gratitude of the limbs", "Ingratitude and its consequences", "Blessings to be grateful for"] },
  { id: "tawbah", title: "Tawbah (Repentance)", arabicTitle: "التوبة", banglaTitle: "তাওবাহ (অনুশোচনা)", description: "The concept of repentance in Islam, its conditions, and Allah's infinite mercy in accepting repentance.", category: "ethics", relatedSurahs: [4, 9, 24, 25, 39, 42, 66], keyVerses: [{ surah: 39, ayah: 53 }, { surah: 25, ayah: 70 }, { surah: 66, ayah: 8 }], subtopics: ["Conditions of tawbah", "Tawbah Nasuha", "Allah's mercy", "Stories of repentance", "Never despair of Allah's mercy"] },
  { id: "tawakkul", title: "Tawakkul (Trust in Allah)", arabicTitle: "التوكل", banglaTitle: "তাওয়াক্কুল (আল্লাহর উপর ভরসা)", description: "Placing complete trust in Allah while taking necessary means, and the balance between effort and reliance.", category: "ethics", relatedSurahs: [3, 5, 8, 9, 11, 12, 14, 25, 33, 39, 65], keyVerses: [{ surah: 65, ayah: 3 }, { surah: 3, ayah: 159 }, { surah: 9, ayah: 51 }], subtopics: ["Meaning of tawakkul", "Tawakkul vs laziness", "Taking means", "Examples from prophets", "Fruits of tawakkul"] },
  { id: "creation", title: "Creation of the Universe", arabicTitle: "خلق الكون", banglaTitle: "সৃষ্টিজগত", description: "Quranic descriptions of the creation of the heavens, earth, mountains, seas, and all living things.", category: "science", relatedSurahs: [2, 6, 7, 10, 13, 16, 21, 25, 30, 35, 36, 41, 51, 55, 67, 71, 79], keyVerses: [{ surah: 21, ayah: 30 }, { surah: 51, ayah: 47 }, { surah: 41, ayah: 11 }], subtopics: ["Big Bang in Quran", "Expanding universe", "Creation in six days", "Water as origin of life", "Mountains as pegs", "Pairs in creation"] },
  { id: "angels", title: "Angels (Mala'ikah)", arabicTitle: "الملائكة", banglaTitle: "ফেরেশতা", description: "The nature, roles, and categories of angels in Islam.", category: "theology", relatedSurahs: [2, 8, 16, 35, 53, 66, 70, 74, 97], keyVerses: [{ surah: 35, ayah: 1 }, { surah: 2, ayah: 30 }, { surah: 66, ayah: 6 }], subtopics: ["Nature of angels", "Jibril", "Mikail", "Israfil", "Angel of Death", "Recording angels", "Munkar and Nakir"] },
  { id: "jinn", title: "Jinn", arabicTitle: "الجن", banglaTitle: "জিন", description: "The world of Jinn, their creation, types, and relationship with humans.", category: "theology", relatedSurahs: [6, 7, 15, 18, 34, 46, 55, 72, 114], keyVerses: [{ surah: 55, ayah: 15 }, { surah: 72, ayah: 1 }, { surah: 51, ayah: 56 }], subtopics: ["Creation of Jinn", "Types of Jinn", "Iblis and Shaytan", "Jinn who believe", "Protection from evil Jinn", "Sulaiman and the Jinn"] },
  { id: "day_of_judgment", title: "Day of Judgment", arabicTitle: "يوم القيامة", banglaTitle: "কিয়ামতের দিন", description: "Detailed descriptions of the events of the Day of Judgment, from the blowing of the trumpet to the final reckoning.", category: "eschatology", relatedSurahs: [18, 20, 39, 56, 69, 75, 78, 79, 81, 82, 84, 88, 99, 101], keyVerses: [{ surah: 81, ayah: 1 }, { surah: 82, ayah: 1 }, { surah: 99, ayah: 1 }], subtopics: ["Signs before Judgment Day", "The Trumpet", "Resurrection", "The Gathering", "The Record of Deeds", "The Scale", "The Bridge", "Intercession"] },
  { id: "paradise", title: "Jannah (Paradise)", arabicTitle: "الجنة", banglaTitle: "জান্নাত (স্বর্গ)", description: "Descriptions of Paradise, its levels, rivers, gardens, and the ultimate reward of seeing Allah.", category: "eschatology", relatedSurahs: [2, 3, 4, 9, 13, 47, 55, 56, 76, 88], keyVerses: [{ surah: 56, ayah: 10 }, { surah: 55, ayah: 46 }, { surah: 76, ayah: 13 }], subtopics: ["Levels of Paradise", "Rivers of Paradise", "Descriptions of reward", "Hoor al-Ayn", "Seeing Allah", "Eternal bliss", "How to earn Paradise"] },
  { id: "hellfire", title: "Jahannam (Hellfire)", arabicTitle: "جهنم", banglaTitle: "জাহান্নাম (নরক)", description: "Descriptions of Hellfire, its punishments, and the deeds that lead to it.", category: "eschatology", relatedSurahs: [2, 3, 4, 14, 18, 22, 56, 67, 74, 77, 104], keyVerses: [{ surah: 104, ayah: 4 }, { surah: 56, ayah: 41 }, { surah: 74, ayah: 26 }], subtopics: ["Gates of Hellfire", "Descriptions of punishment", "Tree of Zaqqum", "Deeds leading to Hellfire", "Temporary vs eternal punishment", "Seeking refuge from Hellfire"] },
  { id: "previous_nations", title: "Stories of Previous Nations", arabicTitle: "قصص الأمم السابقة", banglaTitle: "পূর্ববর্তী জাতিসমূহের কাহিনী", description: "Stories of nations destroyed for their disbelief: 'Ad, Thamud, People of Lut, People of Shu'ayb, Pharaoh, etc.", category: "history", relatedSurahs: [7, 11, 15, 25, 26, 27, 29, 40, 44, 51, 54, 69, 89], keyVerses: [{ surah: 7, ayah: 59 }, { surah: 11, ayah: 100 }, { surah: 89, ayah: 6 }], subtopics: ["People of Nuh", "People of 'Ad", "People of Thamud", "People of Lut", "People of Shu'ayb", "Pharaoh and his army", "People of Tubba", "Lessons from their destruction"] },
  { id: "scientific_miracles", title: "Scientific Miracles", arabicTitle: "الإعجاز العلمي", banglaTitle: "বৈজ্ঞানিক মুজিযা", description: "Quranic verses that align with modern scientific discoveries in embryology, astronomy, geology, and more.", category: "science", relatedSurahs: [16, 21, 23, 36, 39, 41, 51, 55, 71, 78, 86, 96], keyVerses: [{ surah: 21, ayah: 30 }, { surah: 23, ayah: 12 }, { surah: 51, ayah: 47 }], subtopics: ["Embryology", "Expanding universe", "Water cycle", "Mountain formation", "Barrier between seas", "Iron from outer space", "Fingerprints", "Deep sea darkness"] },
  { id: "women_in_quran", title: "Women in the Quran", arabicTitle: "المرأة في القرآن", banglaTitle: "কুরআনে নারী", description: "The status, rights, and stories of women as presented in the Quran.", category: "ethics", relatedSurahs: [3, 4, 12, 19, 24, 27, 28, 33, 58, 60, 66], keyVerses: [{ surah: 4, ayah: 1 }, { surah: 33, ayah: 35 }, { surah: 3, ayah: 195 }], subtopics: ["Maryam", "Wife of Pharaoh (Asiya)", "Queen of Sheba", "Mothers of believers", "Rights of women", "Equality in worship and reward"] },
  { id: "economics", title: "Islamic Economics", arabicTitle: "الاقتصاد الإسلامي", banglaTitle: "ইসলামী অর্থনীতি", description: "Quranic principles on wealth, trade, riba (interest), charity, and economic justice.", category: "jurisprudence", relatedSurahs: [2, 3, 4, 5, 9, 11, 24, 57, 59, 107], keyVerses: [{ surah: 2, ayah: 275 }, { surah: 2, ayah: 282 }, { surah: 59, ayah: 7 }], subtopics: ["Prohibition of riba", "Fair trade", "Zakah and sadaqah", "Distribution of wealth", "Contracts and debts", "Trustworthiness in business"] },
  { id: "human_nature", title: "Human Nature (Fitrah)", arabicTitle: "الفطرة", banglaTitle: "ফিতরাহ (মানব প্রকৃতি)", description: "The Quran's description of human nature, strengths, weaknesses, and the purpose of creation.", category: "ethics", relatedSurahs: [2, 7, 12, 17, 30, 33, 51, 70, 75, 76, 95, 96, 103], keyVerses: [{ surah: 51, ayah: 56 }, { surah: 95, ayah: 4 }, { surah: 30, ayah: 30 }], subtopics: ["Purpose of creation", "Fitrah (innate nature)", "Free will and accountability", "Nafs and its stages", "Strengths and weaknesses", "Honor of human beings"] },
  { id: "dawah", title: "Dawah (Calling to Islam)", arabicTitle: "الدعوة", banglaTitle: "দাওয়াহ (ইসলামের দিকে আহ্বান)", description: "Principles and methods of inviting people to Islam with wisdom and beautiful preaching.", category: "ethics", relatedSurahs: [3, 12, 14, 16, 41, 46], keyVerses: [{ surah: 16, ayah: 125 }, { surah: 41, ayah: 33 }, { surah: 3, ayah: 104 }], subtopics: ["Wisdom in dawah", "Beautiful preaching", "Debate with what is best", "Patience with rejection", "Leading by example"] },
  { id: "dhikr", title: "Dhikr (Remembrance of Allah)", arabicTitle: "الذكر", banglaTitle: "যিকর (আল্লাহর স্মরণ)", description: "The importance, forms, and benefits of remembering Allah throughout the day.", category: "ethics", relatedSurahs: [2, 3, 7, 13, 18, 29, 33, 39, 62, 73, 87], keyVerses: [{ surah: 13, ayah: 28 }, { surah: 2, ayah: 152 }, { surah: 33, ayah: 41 }], subtopics: ["Importance of dhikr", "Morning and evening adhkar", "Dhikr after prayer", "Benefits of dhikr", "Heart finds rest in dhikr"] },
  { id: "quran_itself", title: "The Quran About Itself", arabicTitle: "القرآن عن نفسه", banglaTitle: "কুরআন নিজের সম্পর্কে", description: "What the Quran says about its own nature, preservation, purpose, and challenge to humanity.", category: "theology", relatedSurahs: [2, 3, 4, 6, 10, 12, 15, 17, 25, 36, 38, 39, 41, 43, 56, 85], keyVerses: [{ surah: 15, ayah: 9 }, { surah: 17, ayah: 88 }, { surah: 56, ayah: 77 }], subtopics: ["Names of the Quran", "Preservation guarantee", "Challenge to produce its like", "Healing and mercy", "Guidance for mankind", "The Night of Revelation"] },
  { id: "social_conduct", title: "Social Conduct (Adab)", arabicTitle: "الآداب الاجتماعية", banglaTitle: "সামাজিক আচরণ (আদব)", description: "Islamic etiquette in social interactions including greeting, visiting, and community life.", category: "ethics", relatedSurahs: [4, 17, 24, 25, 31, 33, 49, 58], keyVerses: [{ surah: 49, ayah: 11 }, { surah: 49, ayah: 12 }, { surah: 31, ayah: 18 }], subtopics: ["Greeting with Salam", "Backbiting and slander", "Suspicion and spying", "Respecting privacy", "Humility", "Brotherhood and sisterhood"] },
  { id: "dietary_laws", title: "Halal and Haram Foods", arabicTitle: "الحلال والحرام في الطعام", banglaTitle: "হালাল ও হারাম খাবার", description: "Quranic guidelines on permissible and prohibited foods and drinks.", category: "jurisprudence", relatedSurahs: [2, 5, 6, 16], keyVerses: [{ surah: 2, ayah: 168 }, { surah: 5, ayah: 3 }, { surah: 16, ayah: 114 }], subtopics: ["Halal animals", "Prohibited foods", "Slaughtering method", "Intoxicants", "Moderation in eating", "Gratitude for food"] },
  { id: "governance", title: "Islamic Governance", arabicTitle: "الحكم في الإسلام", banglaTitle: "ইসলামী শাসনব্যবস্থা", description: "Principles of leadership, consultation (shura), justice, and governance in Islam.", category: "jurisprudence", relatedSurahs: [3, 4, 5, 38, 42, 49], keyVerses: [{ surah: 42, ayah: 38 }, { surah: 4, ayah: 58 }, { surah: 5, ayah: 44 }], subtopics: ["Shura (consultation)", "Justice in governance", "Accountability of leaders", "Rights of citizens", "Rule by Allah's law"] },
  { id: "environment", title: "Environmental Stewardship", arabicTitle: "حماية البيئة", banglaTitle: "পরিবেশ সংরক্ষণ", description: "The Quran's teachings on caring for the earth, animals, and natural resources.", category: "ethics", relatedSurahs: [2, 6, 7, 16, 27, 30, 55], keyVerses: [{ surah: 7, ayah: 56 }, { surah: 30, ayah: 41 }, { surah: 6, ayah: 38 }], subtopics: ["Khalifah (stewardship)", "Not causing corruption", "Water conservation", "Animal welfare", "Balance in nature"] },
  { id: "death_dying", title: "Death and the Grave", arabicTitle: "الموت والقبر", banglaTitle: "মৃত্যু ও কবর", description: "Islamic teachings about death, the soul's journey, life in the grave (Barzakh), and preparation for the Hereafter.", category: "eschatology", relatedSurahs: [3, 6, 23, 32, 39, 50, 56, 67, 75], keyVerses: [{ surah: 3, ayah: 185 }, { surah: 50, ayah: 19 }, { surah: 23, ayah: 99 }], subtopics: ["Certainty of death", "The soul at death", "Life in Barzakh", "Punishment and bliss of the grave", "Preparing for death"] },
  { id: "brotherhood", title: "Brotherhood in Islam", arabicTitle: "الأخوة في الإسلام", banglaTitle: "ইসলামে ভ্রাতৃত্ব", description: "The bonds of Islamic brotherhood, unity, and the prohibition of division.", category: "ethics", relatedSurahs: [3, 8, 9, 49, 59, 61], keyVerses: [{ surah: 49, ayah: 10 }, { surah: 3, ayah: 103 }, { surah: 49, ayah: 13 }], subtopics: ["Believers are brothers", "Unity and avoiding division", "Rights of Muslims upon each other", "Helping one another in goodness", "Racial and ethnic equality"] },
  { id: "sincerity", title: "Ikhlas (Sincerity)", arabicTitle: "الإخلاص", banglaTitle: "ইখলাস (নিষ্ঠা)", description: "The importance of sincerity in worship and deeds, and avoiding showing off (riya).", category: "ethics", relatedSurahs: [2, 4, 7, 18, 39, 98, 107, 112], keyVerses: [{ surah: 39, ayah: 2 }, { surah: 98, ayah: 5 }, { surah: 18, ayah: 110 }], subtopics: ["Meaning of ikhlas", "Riya (showing off)", "Hidden shirk", "Deeds for Allah alone", "Purifying intentions"] },
  { id: "parents", title: "Honoring Parents", arabicTitle: "بر الوالدين", banglaTitle: "পিতামাতার সম্মান", description: "The Quran's emphasis on honoring, respecting, and caring for parents.", category: "ethics", relatedSurahs: [2, 4, 6, 14, 17, 29, 31, 46], keyVerses: [{ surah: 17, ayah: 23 }, { surah: 31, ayah: 14 }, { surah: 46, ayah: 15 }], subtopics: ["Second only to worshipping Allah", "Kindness in old age", "Prayer for parents", "Mother's sacrifice", "Disobedience to parents"] },
  { id: "charity_sadaqah", title: "Sadaqah (Voluntary Charity)", arabicTitle: "الصدقة", banglaTitle: "সাদাকাহ (স্বেচ্ছায় দান)", description: "The virtue, types, and rewards of voluntary charity beyond obligatory Zakah.", category: "ethics", relatedSurahs: [2, 3, 9, 57, 63, 64], keyVerses: [{ surah: 2, ayah: 261 }, { surah: 2, ayah: 274 }, { surah: 57, ayah: 18 }], subtopics: ["Types of sadaqah", "Sadaqah jariyah (ongoing charity)", "Charity with sincerity", "Spending from what you love", "Rewards multiply 700 times"] },
  { id: "knowledge", title: "Knowledge (Ilm)", arabicTitle: "العلم", banglaTitle: "ইলম (জ্ঞান)", description: "The high status of knowledge in Islam, the first word revealed was 'Read', and the obligation to seek knowledge.", category: "ethics", relatedSurahs: [2, 3, 20, 35, 39, 58, 96], keyVerses: [{ surah: 96, ayah: 1 }, { surah: 20, ayah: 114 }, { surah: 39, ayah: 9 }], subtopics: ["Obligation of seeking knowledge", "Knowledge vs ignorance", "Scholars' status", "Acting upon knowledge", "Teaching others"] },
  { id: "qadr", title: "Qadr (Divine Decree)", arabicTitle: "القدر", banglaTitle: "কদর (তাকদীর)", description: "Belief in divine destiny, predestination, free will, and trusting Allah's plan.", category: "theology", relatedSurahs: [3, 9, 11, 35, 54, 57, 64], keyVerses: [{ surah: 54, ayah: 49 }, { surah: 57, ayah: 22 }, { surah: 64, ayah: 11 }], subtopics: ["Four levels of Qadr", "Free will vs predestination", "Trusting Allah's plan", "Patience with destiny", "Everything is written"] }
];

// ============================================================
// QURAN_FACTS - Interesting Facts About the Quran
// ============================================================
const QURAN_FACTS = [
  { fact: "The Quran has 114 surahs, 6236 ayahs, 77,430 words, and 323,671 letters.", banglaFact: "কুরআনে ১১৪টি সূরা, ৬২৩৬টি আয়াত, ৭৭,৪৩০টি শব্দ এবং ৩,২৩,৬৭১টি অক্ষর রয়েছে।", category: "numbers", source: "Islamic scholarship" },
  { fact: "The longest surah is Al-Baqarah with 286 ayahs, and the shortest is Al-Kawthar with 3 ayahs.", banglaFact: "সবচেয়ে বড় সূরা আল-বাকারা (২৮৬ আয়াত) এবং সবচেয়ে ছোট সূরা আল-কাউসার (৩ আয়াত)।", category: "numbers", source: "Quran" },
  { fact: "The longest ayah in the Quran is Ayah 282 of Surah Al-Baqarah (the Verse of Debt).", banglaFact: "কুরআনের দীর্ঘতম আয়াত হলো সূরা আল-বাকারার ২৮২ নং আয়াত (ঋণের আয়াত)।", category: "numbers", source: "Quran" },
  { fact: "The word 'Allah' appears 2,698 times in the Quran.", banglaFact: "কুরআনে 'আল্লাহ' শব্দটি ২,৬৯৮ বার এসেছে।", category: "numbers", source: "Islamic scholarship" },
  { fact: "The word 'Rahim' (merciful) appears 114 times, matching the total number of surahs.", banglaFact: "'রহীম' (দয়ালু) শব্দটি ১১৪ বার এসেছে, যা সূরার মোট সংখ্যার সমান।", category: "numbers", source: "Islamic scholarship" },
  { fact: "The Quran was revealed over a period of approximately 23 years (610-632 CE).", banglaFact: "কুরআন প্রায় ২৩ বছরে (৬১০-৬৩২ খ্রিস্টাব্দ) নাযিল হয়েছে।", category: "revelation", source: "Islamic history" },
  { fact: "The first verses revealed were the first five ayahs of Surah Al-Alaq (96:1-5).", banglaFact: "প্রথম নাযিলকৃত আয়াত হলো সূরা আল-আলাকের প্রথম পাঁচটি আয়াত (৯৬:১-৫)।", category: "revelation", source: "Sahih al-Bukhari" },
  { fact: "The last complete surah revealed was Surah An-Nasr (110).", banglaFact: "সর্বশেষ সম্পূর্ণ নাযিলকৃত সূরা হলো সূরা আন-নাসর (১১০)।", category: "revelation", source: "Islamic scholarship" },
  { fact: "Surah At-Tawbah (9) is the only surah that does not begin with Bismillah.", banglaFact: "সূরা আত-তাওবাহ (৯) একমাত্র সূরা যা বিসমিল্লাহ দিয়ে শুরু হয় না।", category: "structure", source: "Quran" },
  { fact: "Surah An-Naml (27) contains two Bismillahs - one at the beginning and one in verse 30.", banglaFact: "সূরা আন-নামল (২৭)-এ দুটি বিসমিল্লাহ আছে - একটি শুরুতে এবং একটি ৩০ নং আয়াতে।", category: "structure", source: "Quran" },
  { fact: "86 surahs were revealed in Makkah and 28 in Madinah.", banglaFact: "৮৬টি সূরা মক্কায় এবং ২৮টি সূরা মদীনায় নাযিল হয়েছে।", category: "revelation", source: "Islamic scholarship" },
  { fact: "The Quran mentions 25 prophets by name.", banglaFact: "কুরআনে ২৫ জন নবীর নাম উল্লেখ করা হয়েছে।", category: "numbers", source: "Quran" },
  { fact: "Prophet Musa (AS) is the most mentioned prophet in the Quran (136 times).", banglaFact: "মূসা (আ.) কুরআনে সবচেয়ে বেশি উল্লেখিত নবী (১৩৬ বার)।", category: "numbers", source: "Islamic scholarship" },
  { fact: "Maryam (Mary) is the only woman mentioned by name in the Quran. An entire surah (19) is named after her.", banglaFact: "মারইয়াম (মরিয়ম) কুরআনে নামসহ উল্লেখিত একমাত্র নারী। একটি সম্পূর্ণ সূরা (১৯) তাঁর নামে।", category: "numbers", source: "Quran" },
  { fact: "The word 'day' (yawm) appears 365 times in the Quran, matching the number of days in a year.", banglaFact: "'দিন' (ইয়াওম) শব্দটি কুরআনে ৩৬৫ বার এসেছে, যা এক বছরের দিনের সমান।", category: "miracles", source: "Numerical analysis" },
  { fact: "The words 'life' (hayat) and 'death' (mawt) each appear 145 times.", banglaFact: "'জীবন' (হায়াত) এবং 'মৃত্যু' (মাওত) প্রতিটি ১৪৫ বার এসেছে।", category: "miracles", source: "Numerical analysis" },
  { fact: "The words 'angels' (mala'ikah) and 'devils' (shayatin) each appear 88 times.", banglaFact: "'ফেরেশতা' (মালাইকাহ) এবং 'শয়তান' (শায়াতীন) প্রতিটি ৮৮ বার এসেছে।", category: "miracles", source: "Numerical analysis" },
  { fact: "The words 'this world' (dunya) and 'hereafter' (akhirah) each appear 115 times.", banglaFact: "'দুনিয়া' এবং 'আখিরাত' প্রতিটি ১১৫ বার এসেছে।", category: "miracles", source: "Numerical analysis" },
  { fact: "The word 'month' (shahr) appears 12 times, matching the number of months in a year.", banglaFact: "'মাস' (শাহর) শব্দটি ১২ বার এসেছে, যা বছরের মাসের সমান।", category: "miracles", source: "Numerical analysis" },
  { fact: "The Quran mentions the word 'sea' (bahr) 32 times and 'land' (barr) 13 times. 32/45 = 71.1% and 13/45 = 28.9%, matching the actual ratio of water to land on Earth.", banglaFact: "'সমুদ্র' (বাহর) ৩২ বার এবং 'স্থল' (বার) ১৩ বার এসেছে। অনুপাত ৭১.১% ও ২৮.৯%, যা পৃথিবীর পানি ও স্থলভাগের প্রকৃত অনুপাতের সমান।", category: "miracles", source: "Numerical analysis" },
  { fact: "The Quran was compiled into a single book (mushaf) during the caliphate of Abu Bakr (RA).", banglaFact: "আবু বকর (রা.)-এর খিলাফতকালে কুরআন একটি গ্রন্থে (মুসহাফ) সংকলিত হয়।", category: "revelation", source: "Sahih al-Bukhari" },
  { fact: "The standardized copies of the Quran were distributed during the caliphate of Uthman (RA).", banglaFact: "উসমান (রা.)-এর খিলাফতকালে কুরআনের প্রমিত কপি বিতরণ করা হয়।", category: "revelation", source: "Sahih al-Bukhari" },
  { fact: "There are 15 places of Sajdah Tilawah (prostration) in the Quran.", banglaFact: "কুরআনে ১৫টি সিজদায়ে তিলাওয়াতের স্থান রয়েছে।", category: "numbers", source: "Islamic jurisprudence" },
  { fact: "The Quran has 30 Juz (parts), 60 Hizb, 240 Rub (quarters), and 558 Ruku.", banglaFact: "কুরআনে ৩০টি পারা, ৬০টি হিযব, ২৪০টি রুব (চতুর্থাংশ) এবং ৫৫৮টি রুকু রয়েছে।", category: "structure", source: "Islamic scholarship" },
  { fact: "Surah Al-Fatiha is recited at least 17 times daily in the five obligatory prayers.", banglaFact: "সূরা আল-ফাতিহা পাঁচ ওয়াক্ত ফরজ নামাযে প্রতিদিন কমপক্ষে ১৭ বার পড়া হয়।", category: "numbers", source: "Islamic practice" },
  { fact: "The Quran challenges anyone to produce even a single surah like it (Quran 2:23).", banglaFact: "কুরআন যে কাউকে এর মতো একটি সূরাও রচনা করতে চ্যালেঞ্জ করে (কুরআন ২:২৩)।", category: "miracles", source: "Quran 2:23" },
  { fact: "The Quran describes the stages of embryonic development 1400 years before modern embryology confirmed them.", banglaFact: "আধুনিক ভ্রূণবিদ্যা নিশ্চিত করার ১৪০০ বছর আগেই কুরআন ভ্রূণের বিকাশের ধাপগুলো বর্ণনা করেছে।", category: "miracles", source: "Quran 23:12-14" },
  { fact: "The Quran describes mountains as 'pegs' (awtal), which modern geology confirms as mountains having deep roots.", banglaFact: "কুরআন পাহাড়কে 'পেরেক' (আওতাদ) বলেছে, যা আধুনিক ভূতত্ত্ব নিশ্চিত করেছে - পাহাড়ের গভীর শিকড় থাকে।", category: "miracles", source: "Quran 78:7" },
  { fact: "The Quran mentions a barrier between two seas that do not mix (55:19-20), confirmed by modern oceanography.", banglaFact: "কুরআন দুই সমুদ্রের মধ্যে একটি অন্তরায়ের কথা বলেছে যা মিশ্রিত হয় না (৫৫:১৯-২০), আধুনিক সমুদ্রবিদ্যা এটি নিশ্চিত করেছে।", category: "miracles", source: "Quran 55:19-20" },
  { fact: "The Quran states the universe is expanding (51:47), which was confirmed by Edwin Hubble in 1929.", banglaFact: "কুরআন বলেছে মহাবিশ্ব প্রসারিত হচ্ছে (৫১:৪৭), যা ১৯২৯ সালে এডউইন হাবল নিশ্চিত করেন।", category: "miracles", source: "Quran 51:47" },
  { fact: "The word 'Quran' itself appears 70 times in the Quran.", banglaFact: "'কুরআন' শব্দটি নিজে কুরআনে ৭০ বার এসেছে।", category: "numbers", source: "Islamic scholarship" },
  { fact: "Surah Ar-Rahman (55) contains the phrase 'Which of the favors of your Lord will you deny?' repeated 31 times.", banglaFact: "সূরা আর-রহমানে (৫৫) 'তোমরা তোমাদের রবের কোন নেয়ামতকে অস্বীকার করবে?' বাক্যটি ৩১ বার পুনরাবৃত্তি হয়েছে।", category: "structure", source: "Quran" },
  { fact: "The middle surah of the Quran is Surah Al-Hadid (57), and 57 is the numerical value (abjad) of the word 'iron' mentioned in it.", banglaFact: "কুরআনের মধ্যবর্তী সূরা হলো সূরা আল-হাদীদ (৫৭), এবং ৫৭ হলো 'লোহা' শব্দের আবজাদ সংখ্যামান।", category: "structure", source: "Numerical analysis" },
  { fact: "Bismillahir Rahmanir Raheem has 19 Arabic letters, and 19 is a significant number in the Quran.", banglaFact: "বিসমিল্লাহির রাহমানির রাহীমে ১৯টি আরবি অক্ষর আছে, এবং ১৯ কুরআনে একটি তাৎপর্যপূর্ণ সংখ্যা।", category: "miracles", source: "Quran 74:30" },
  { fact: "The Quran mentions iron (hadid) being 'sent down' (anzalna), which scientists confirm as iron came to Earth from outer space via meteorites.", banglaFact: "কুরআন লোহাকে (হাদীদ) 'নাযিল করা' (আনযালনা) বলেছে, বিজ্ঞানীরা নিশ্চিত করেছেন যে লোহা উল্কাপিণ্ডের মাধ্যমে মহাকাশ থেকে পৃথিবীতে এসেছে।", category: "miracles", source: "Quran 57:25" },
  { fact: "The Quran describes the deep sea darkness in layers (24:40), confirmed by modern oceanography.", banglaFact: "কুরআন গভীর সমুদ্রের স্তরে স্তরে অন্ধকারের বর্ণনা দেয় (২৪:৪০), যা আধুনিক সমুদ্রবিদ্যা নিশ্চিত করেছে।", category: "miracles", source: "Quran 24:40" },
  { fact: "Every letter in the Quran carries reward. The Prophet (SAW) said each letter earns 10 hasanat (good deeds).", banglaFact: "কুরআনের প্রতিটি অক্ষরে সওয়াব রয়েছে। নবী (সা.) বলেছেন প্রতিটি অক্ষরে ১০টি নেকি।", category: "revelation", source: "Tirmidhi 2910" },
  { fact: "The Quran mentions fingerprints being unique (75:4), a fact not known until the 19th century.", banglaFact: "কুরআন আঙুলের ছাপ অনন্য হওয়ার কথা বলেছে (৭৫:৪), যা ১৯ শতক পর্যন্ত জানা ছিল না।", category: "miracles", source: "Quran 75:4" },
  { fact: "The Quran was memorized by thousands of companions (sahabah) during the Prophet's lifetime.", banglaFact: "নবী (সা.)-এর জীবদ্দশায় হাজার হাজার সাহাবী কুরআন মুখস্থ করেছিলেন।", category: "revelation", source: "Islamic history" },
  { fact: "Today, millions of people (Huffaz) have memorized the entire Quran, making it the most memorized book in history.", banglaFact: "আজ লক্ষ লক্ষ মানুষ (হাফিজ) সম্পূর্ণ কুরআন মুখস্থ করেছেন, যা এটিকে ইতিহাসে সবচেয়ে বেশি মুখস্থ করা গ্রন্থে পরিণত করেছে।", category: "miracles", source: "Modern statistics" },
  { fact: "The Quran has remained unchanged for over 1400 years, the only religious scripture preserved in its original language.", banglaFact: "কুরআন ১৪০০ বছরেরও বেশি সময় ধরে অপরিবর্তিত রয়েছে, মূল ভাষায় সংরক্ষিত একমাত্র ধর্মগ্রন্থ।", category: "miracles", source: "Quran 15:9" },
  { fact: "Surah Al-Kahf (18) is recommended to be recited every Friday for protection from the trial of Dajjal.", banglaFact: "সূরা আল-কাহফ (১৮) দাজ্জালের ফিতনা থেকে সুরক্ষার জন্য প্রতি শুক্রবার পড়ার সুপারিশ করা হয়।", category: "revelation", source: "Muslim 809" },
  { fact: "Surah Al-Mulk (67) protects from the punishment of the grave when recited every night.", banglaFact: "সূরা আল-মুলক (৬৭) প্রতি রাতে পড়লে কবরের আযাব থেকে রক্ষা করে।", category: "revelation", source: "Tirmidhi 2890" },
  { fact: "The Prophet (SAW) said that Surah Al-Baqarah and Aal-E-Imran will intercede for their reciters on Judgment Day.", banglaFact: "নবী (সা.) বলেছেন সূরা আল-বাকারা ও আল-ইমরান কিয়ামতের দিন তাদের পাঠকদের জন্য সুপারিশ করবে।", category: "revelation", source: "Muslim 804" },
  { fact: "The Quran was revealed in the dialect of the Quraysh tribe of Makkah.", banglaFact: "কুরআন মক্কার কুরাইশ গোত্রের উপভাষায় নাযিল হয়েছে।", category: "language", source: "Islamic scholarship" },
  { fact: "The Arabic of the Quran is considered the highest form of Arabic literature ever produced.", banglaFact: "কুরআনের আরবি সর্বকালের সর্বোচ্চ আরবি সাহিত্য হিসেবে বিবেচিত।", category: "language", source: "Arabic literary tradition" },
  { fact: "The Quran uses over 70,000 unique word forms, showcasing extraordinary linguistic richness.", banglaFact: "কুরআনে ৭০,০০০-এরও বেশি অনন্য শব্দরূপ ব্যবহৃত হয়েছে, যা অসাধারণ ভাষাগত সমৃদ্ধি প্রদর্শন করে।", category: "language", source: "Arabic linguistic analysis" },
  { fact: "No two surahs in the Quran have the same opening combination of letters (Huroof Muqatta'at).", banglaFact: "কুরআনে কোনো দুটি সূরার শুরুতে একই হরূফে মুকাত্তাআত (বিচ্ছিন্ন অক্ষর) নেই।", category: "structure", source: "Quran" },
  { fact: "29 surahs begin with Huroof Muqatta'at (disconnected letters) like Alif-Lam-Meem, whose meaning is known only to Allah.", banglaFact: "২৯টি সূরা হরূফে মুকাত্তাআত (বিচ্ছিন্ন অক্ষর) দিয়ে শুরু হয় যেমন আলিফ-লাম-মীম, যার অর্থ শুধু আল্লাহই জানেন।", category: "structure", source: "Quran" },
  { fact: "The Quran mentions the water cycle in detail (39:21, 23:18) centuries before it was scientifically understood.", banglaFact: "কুরআন পানির চক্র বিস্তারিতভাবে বর্ণনা করেছে (৩৯:২১, ২৩:১৮) বৈজ্ঞানিকভাবে বোঝার শত শত বছর আগে।", category: "miracles", source: "Quran 39:21" },
  { fact: "The Quran describes the sun as a 'lamp' (siraj) and the moon as 'reflected light' (nur/munir), accurately distinguishing between them.", banglaFact: "কুরআন সূর্যকে 'প্রদীপ' (সিরাজ) এবং চাঁদকে 'প্রতিফলিত আলো' (নূর/মুনীর) বলেছে, সঠিকভাবে পার্থক্য করেছে।", category: "miracles", source: "Quran 71:16" },
  { fact: "Surah Yusuf (12) is the only surah that tells a complete story from beginning to end without interruption.", banglaFact: "সূরা ইউসুফ (১২) একমাত্র সূরা যা বাধা ছাড়াই শুরু থেকে শেষ পর্যন্ত একটি সম্পূর্ণ গল্প বলে।", category: "structure", source: "Quran" },
  { fact: "The phrase 'In the name of Allah, the Most Gracious, the Most Merciful' appears 114 times (113 at surah beginnings + 1 in 27:30).", banglaFact: "'বিসমিল্লাহির রাহমানির রাহীম' ১১৪ বার এসেছে (১১৩ সূরার শুরুতে + ১ বার ২৭:৩০-এ)।", category: "structure", source: "Quran" },
  { fact: "The Quran was revealed in seven different modes of recitation (Ahruf), and today we have 10 authentic readings (Qira'at).", banglaFact: "কুরআন সাতটি ভিন্ন তেলাওয়াত পদ্ধতিতে (আহরুফ) নাযিল হয়েছে, এবং আজ ১০টি প্রামাণিক কিরাআত রয়েছে।", category: "revelation", source: "Sahih al-Bukhari" },
  { fact: "The most recited verse in the world is Surah Al-Fatiha, recited by Muslims billions of times daily in their prayers.", banglaFact: "বিশ্বে সবচেয়ে বেশি পঠিত আয়াত হলো সূরা আল-ফাতিহা, মুসলমানরা প্রতিদিন নামাযে বিলিয়ন বার পাঠ করেন।", category: "numbers", source: "Islamic practice" },
  { fact: "The Quran contains approximately 6,000 verses about natural phenomena, science, and the physical world.", banglaFact: "কুরআনে প্রাকৃতিক ঘটনা, বিজ্ঞান এবং ভৌত জগত সম্পর্কে প্রায় ৬,০০০ আয়াত রয়েছে।", category: "numbers", source: "Islamic scholarship" },
  { fact: "The Quran's mathematical structure includes patterns based on the number 19, as mentioned in 74:30.", banglaFact: "কুরআনের গাণিতিক কাঠামোতে ১৯ সংখ্যার উপর ভিত্তি করে প্যাটার্ন রয়েছে, যেমন ৭৪:৩০-এ উল্লেখ করা হয়েছে।", category: "miracles", source: "Quran 74:30" },
  { fact: "The first surah revealed in full was Surah Al-Fatiha, and it is called Umm al-Kitab (Mother of the Book).", banglaFact: "প্রথম সম্পূর্ণ নাযিলকৃত সূরা হলো সূরা আল-ফাতিহা, এবং একে উম্মুল কিতাব (গ্রন্থের জননী) বলা হয়।", category: "revelation", source: "Islamic scholarship" },
  { fact: "The Quran describes the development of clouds and rain formation (24:43) matching modern meteorological knowledge.", banglaFact: "কুরআন মেঘ গঠন ও বৃষ্টি সৃষ্টির বর্ণনা দেয় (২৪:৪৩) যা আধুনিক আবহাওয়াবিদ্যার সাথে মিলে যায়।", category: "miracles", source: "Quran 24:43" },
  { fact: "The word 'man' (rajul) and 'woman' (imra'ah) each appear 24 times in the Quran.", banglaFact: "'পুরুষ' (রজুল) এবং 'নারী' (ইমরাআহ) প্রতিটি কুরআনে ২৴ বার এসেছে।", category: "miracles", source: "Numerical analysis" },
  { fact: "The Arabic text of the Quran has no variant readings that change its meaning, despite being transmitted across centuries and continents.", banglaFact: "কুরআনের আরবি পাঠে এমন কোনো ভিন্ন পাঠ নেই যা এর অর্থ পরিবর্তন করে, শতাব্দী ও মহাদেশ জুড়ে প্রেরিত হওয়া সত্ত্বেও।", category: "miracles", source: "Manuscript evidence" },
  { fact: "The oldest known Quran manuscripts (Birmingham/Sana'a) date to within the lifetime of the Prophet's companions and match today's text.", banglaFact: "সবচেয়ে পুরনো কুরআন পাণ্ডুলিপি (বার্মিংহাম/সানআ) নবীর সাহাবীদের জীবদ্দশায়কার এবং আজকের পাঠের সাথে মিলে যায়।", category: "miracles", source: "Archaeological evidence" },
  { fact: "Surah Al-Ikhlas (112) is equivalent to one-third of the Quran in reward, as stated by the Prophet (SAW).", banglaFact: "সূরা আল-ইখলাস (১১২) সওয়াবের দিক থেকে কুরআনের এক-তৃতীয়াংশের সমান, যেমন নবী (সা.) বলেছেন।", category: "revelation", source: "Sahih al-Bukhari 5015" },
  { fact: "The Quran was initially written on palm leaves, flat stones, bones, and leather before being compiled.", banglaFact: "কুরআন প্রথমে খেজুর পাতা, চ্যাপ্টা পাথর, হাড় এবং চামড়ায় লেখা হতো সংকলনের আগে।", category: "revelation", source: "Islamic history" },
  { fact: "Ayatul Kursi (2:255) is called the greatest verse in the Quran by the Prophet Muhammad (SAW).", banglaFact: "আয়াতুল কুরসী (২:২৫৫) নবী মুহাম্মাদ (সা.) কর্তৃক কুরআনের সর্বশ্রেষ্ঠ আয়াত বলে ঘোষিত।", category: "revelation", source: "Muslim 810" },
  { fact: "The Quran has been translated into over 100 languages, but the Arabic original remains the definitive text.", banglaFact: "কুরআন ১০০-এরও বেশি ভাষায় অনুবাদ হয়েছে, তবে আরবি মূল পাঠই চূড়ান্ত।", category: "language", source: "Modern scholarship" },
  { fact: "Every Ramadan, millions of Muslims complete the recitation of the entire Quran (Khatm).", banglaFact: "প্রতি রমযানে লক্ষ লক্ষ মুসলমান সম্পূর্ণ কুরআন পাঠ (খতম) সম্পন্ন করেন।", category: "numbers", source: "Islamic practice" },
  { fact: "The Quran mentions bees and their production of honey as a healing substance (16:68-69).", banglaFact: "কুরআন মৌমাছি এবং তাদের মধু উৎপাদনকে নিরাময়কারী পদার্থ হিসেবে উল্লেখ করেছে (১৬:৬৮-৬৯)।", category: "miracles", source: "Quran 16:68-69" },
  { fact: "The shortest verse in the Quran is 'Mudhammatan' (55:64), a single word meaning 'Dark green'.", banglaFact: "কুরআনের সবচেয়ে ছোট আয়াত হলো 'মুদহাম্মাতান' (৫৫:৬৪), একটি শব্দ যার অর্থ 'গাঢ় সবুজ'।", category: "structure", source: "Quran" },
  { fact: "The Quran addresses Prophet Muhammad (SAW) directly with 'Qul' (Say) over 300 times.", banglaFact: "কুরআন নবী মুহাম্মাদ (সা.)-কে সরাসরি 'কুল' (বলো) দিয়ে ৩০০-এরও বেশি বার সম্বোধন করে।", category: "language", source: "Quran" },
  { fact: "The Quran contains approximately 1,000 verses related to science and natural phenomena.", banglaFact: "কুরআনে বিজ্ঞান ও প্রাকৃতিক ঘটনা সম্পর্কিত প্রায় ১,০০০ আয়াত রয়েছে।", category: "miracles", source: "Islamic scholarship" },
  { fact: "Surah Al-Baqarah contains the longest ayah (282) and the famous Ayatul Kursi (255).", banglaFact: "সূরা আল-বাকারায় সবচেয়ে দীর্ঘ আয়াত (২৮২) এবং বিখ্যাত আয়াতুল কুরসী (২৫৫) রয়েছে।", category: "structure", source: "Quran" },
  { fact: "The Quran mentions 'thinking' and 'reflection' (tafakkur/tadabbur) over 700 times, emphasizing intellectual engagement.", banglaFact: "কুরআন 'চিন্তা' ও 'গভীর ভাবনা' (তাফাক্কুর/তাদাব্বুর) ৭০০-এরও বেশি বার উল্লেখ করে, বুদ্ধিবৃত্তিক সম্পৃক্ততার উপর জোর দিয়ে।", category: "language", source: "Islamic scholarship" },
  { fact: "The number of letters 'Alif', 'Lam', and 'Meem' in the surahs that start with 'Alif Lam Meem' have mathematical patterns.", banglaFact: "যে সূরাগুলো 'আলিফ লাম মীম' দিয়ে শুরু হয় সেগুলোতে 'আলিফ', 'লাম' এবং 'মীম' অক্ষরের গাণিতিক প্যাটার্ন রয়েছে।", category: "miracles", source: "Numerical analysis" },
  { fact: "The Quran predicted the Romans would win after their defeat (30:2-4), which came true within the predicted timeframe.", banglaFact: "কুরআন ভবিষ্যদ্বাণী করেছিল রোমানরা পরাজয়ের পর জিতবে (৩০:২-৪), যা পূর্বাভাসিত সময়সীমার মধ্যে সত্য হয়েছিল।", category: "miracles", source: "Quran 30:2-4" },
  { fact: "The Quran mentions that ants communicate with each other (27:18), confirmed by modern entomology.", banglaFact: "কুরআন উল্লেখ করে যে পিপীলিকারা পরস্পর যোগাযোগ করে (২৭:১৮), যা আধুনিক কীটতত্ত্ব নিশ্চিত করেছে।", category: "miracles", source: "Quran 27:18" },
  { fact: "The total number of 'Bismillah' in the Quran is 114, equal to the number of surahs.", banglaFact: "কুরআনে 'বিসমিল্লাহ'-এর মোট সংখ্যা ১১৪, সূরার সংখ্যার সমান।", category: "structure", source: "Quran" },
  { fact: "The Quran's literary style combines prose and poetry in a unique form called 'Saj' (rhymed prose) that has never been replicated.", banglaFact: "কুরআনের সাহিত্যিক রীতি গদ্য ও কবিতাকে 'সজ' (ছন্দবদ্ধ গদ্য) নামে একটি অনন্য রূপে মিলিত করে যা কখনো পুনরায় তৈরি হয়নি।", category: "language", source: "Arabic literary tradition" },
  { fact: "Surah Al-Fatiha has over 25 names/titles, more than any other surah.", banglaFact: "সূরা আল-ফাতিহার ২৫টিরও বেশি নাম/উপাধি রয়েছে, অন্য যে কোনো সূরার চেয়ে বেশি।", category: "structure", source: "Islamic scholarship" },
  { fact: "The Quran describes the orbit of celestial bodies (36:40, 21:33) centuries before Kepler's laws of planetary motion.", banglaFact: "কুরআন মহাকাশীয় বস্তুর কক্ষপথ বর্ণনা করে (৩৬:৪০, ২১:৩৩) কেপলারের গ্রহ গতির সূত্রের শত শত বছর আগে।", category: "miracles", source: "Quran 36:40" },
  { fact: "The Arabic word 'Iqra' (Read) was the first word of the Quran to be revealed, emphasizing the importance of literacy.", banglaFact: "'ইকরা' (পড়ো) আরবি শব্দটি কুরআনের প্রথম নাযিলকৃত শব্দ, সাক্ষরতার গুরুত্ব তুলে ধরে।", category: "revelation", source: "Quran 96:1" },
  { fact: "The Quran uses rhetorical questions over 1,200 times to engage the reader's reflection.", banglaFact: "কুরআন পাঠকের চিন্তাকে সম্পৃক্ত করতে ১,২০০-এরও বেশি বার অলংকারিক প্রশ্ন ব্যবহার করে।", category: "language", source: "Arabic literary analysis" },
  { fact: "There are exactly 14 different combinations of Huroof Muqatta'at used across the 29 surahs.", banglaFact: "২৯টি সূরায় ঠিক ১৪টি ভিন্ন হরূফে মুকাত্তাআতের সমন্বয় ব্যবহৃত হয়েছে।", category: "structure", source: "Quran" },
  { fact: "The Quran mentions the word 'Sabr' (patience) 90 times, highlighting its central importance in Islamic spirituality.", banglaFact: "কুরআনে 'সবর' (ধৈর্য) শব্দটি ৯০ বার উল্লেখ করা হয়েছে, ইসলামী আধ্যাত্মিকতায় এর কেন্দ্রীয় গুরুত্ব তুলে ধরে।", category: "numbers", source: "Quran word count" },
  { fact: "Surah Ar-Rahman repeats 'Which of the favors of your Lord will you deny?' exactly 31 times.", banglaFact: "সূরা আর-রহমানে 'তোমরা তোমাদের রবের কোন অনুগ্রহকে অস্বীকার করবে?' ঠিক ৩১ বার পুনরাবৃত্তি করা হয়েছে।", category: "structure", source: "Quran 55" },
  { fact: "The Quran contains approximately 77,439 words according to classical scholars.", banglaFact: "ক্লাসিক্যাল পণ্ডিতদের মতে কুরআনে প্রায় ৭৭,৪৩৯টি শব্দ রয়েছে।", category: "numbers", source: "Classical Quran studies" },
  { fact: "The word 'Quran' itself appears 70 times in the Quran.", banglaFact: "'কুরআন' শব্দটি নিজে কুরআনে ৭০ বার আবির্ভূত হয়েছে।", category: "numbers", source: "Quran" },
  { fact: "Surah Al-Baqarah verse 282 is the longest verse in the Quran, dealing with financial contracts and debts.", banglaFact: "সূরা আল-বাকারার ২৮২ নম্বর আয়াত কুরআনের দীর্ঘতম আয়াত, যা আর্থিক চুক্তি ও ঋণ সংক্রান্ত।", category: "structure", source: "Quran 2:282" },
  { fact: "The Quran was revealed over approximately 22 years, 5 months, and 14 days.", banglaFact: "কুরআন প্রায় ২২ বছর, ৫ মাস এবং ১৪ দিনে নাযিল হয়েছিল।", category: "revelation", source: "Islamic history" },
  { fact: "There are 15 places in the Quran where prostration (Sajdah Tilawah) is recommended upon recitation.", banglaFact: "কুরআনে ১৫টি স্থান রয়েছে যেখানে তিলাওয়াতের সময় সেজদা (সেজদায়ে তিলাওয়াত) করার সুপারিশ করা হয়।", category: "structure", source: "Islamic jurisprudence" },
  { fact: "The word 'Tawbah' (repentance) and its derivatives appear 87 times in the Quran.", banglaFact: "'তাওবাহ' (তওবা) শব্দ ও এর শাখা-প্রশাখা কুরআনে ৮৭ বার উল্লেখিত হয়েছে।", category: "numbers", source: "Quran word analysis" },
  { fact: "Surah Al-Kawthar (108) is the shortest surah with only 3 verses and 10 words.", banglaFact: "সূরা আল-কাউসার (১০৮) সবচেয়ে ছোট সূরা মাত্র ৩ আয়াত ও ১০ শব্দ নিয়ে।", category: "structure", source: "Quran 108" },
  { fact: "The Quran mentions 'Dhikr' (remembrance of Allah) and its derivatives over 280 times.", banglaFact: "কুরআনে 'যিকর' (আল্লাহর স্মরণ) ও এর শাখা-প্রশাখা ২৮০ বারেরও বেশি উল্লেখিত হয়েছে।", category: "numbers", source: "Quran word analysis" },
  { fact: "The story of Prophet Musa covers about one-third of Surah Al-Qasas, making it one of the most detailed prophetic narratives.", banglaFact: "নবী মূসার কাহিনী সূরা আল-কাসাসের প্রায় এক-তৃতীয়াংশ জুড়ে রয়েছে, এটি সবচেয়ে বিশদ নবী-কাহিনীগুলির একটি।", category: "structure", source: "Quran 28" },
  { fact: "The Quran's text has been preserved in an unbroken chain of transmission (mutawatir) from the Prophet to the present day.", banglaFact: "কুরআনের পাঠ্য নবী থেকে বর্তমান পর্যন্ত একটি অবিচ্ছিন্ন বর্ণনা পরম্পরায় (মুতাওয়াতির) সংরক্ষিত হয়েছে।", category: "revelation", source: "Islamic scholarship" },
  { fact: "The Quran describes embryological development (23:12-14) with remarkable accuracy, centuries before modern embryology.", banglaFact: "কুরআন ভ্রূণতাত্ত্বিক বিকাশ (২৩:১২-১৪) অসাধারণ নির্ভুলতায় বর্ণনা করে, আধুনিক ভ্রূণবিদ্যার শত শত বছর আগে।", category: "miracles", source: "Quran 23:12-14" },
  { fact: "There are exactly 30 different numbers mentioned in the Quran, from 1 to 100,000.", banglaFact: "কুরআনে ১ থেকে ১,০০,০০০ পর্যন্ত ঠিক ৩০টি ভিন্ন সংখ্যা উল্লেখিত হয়েছে।", category: "numbers", source: "Quran numerical analysis" },
  { fact: "The phrase 'O you who believe' (Ya ayyuhalladhina amanu) appears 89 times in the Quran, addressing the believers directly.", banglaFact: "'হে তোমরা যারা ঈমান এনেছ' (ইয়া আইয়্যুহাল্লাযীনা আমানু) কুরআনে ৮৯ বার আবির্ভূত হয়েছে, সরাসরি মুমিনদের সম্বোধন করে।", category: "language", source: "Quran" },
  { fact: "The Quran mentions iron (Hadid) in Surah 57:25, stating it was 'sent down,' which aligns with the scientific fact that iron originated from supernovae in outer space.", banglaFact: "কুরআন সূরা ৫৭:২৫-এ লোহা (হাদিদ) উল্লেখ করে বলে এটি 'নাযিল করা হয়েছে,' যা বৈজ্ঞানিক সত্যের সাথে মিলে যে লোহা মহাকাশের সুপারনোভা থেকে উদ্ভূত।", category: "miracles", source: "Quran 57:25" },
  { fact: "Surah Yusuf (12) is called 'the best of stories' (Ahsanul Qasas) by the Quran itself and is the only surah that tells a complete story from beginning to end.", banglaFact: "সূরা ইউসুফ (১২) কুরআন নিজেই একে 'সর্বোত্তম কাহিনী' (আহসানুল কাসাস) বলে এবং এটিই একমাত্র সূরা যা শুরু থেকে শেষ পর্যন্ত একটি সম্পূর্ণ কাহিনী বর্ণনা করে।", category: "structure", source: "Quran 12:3" },
  { fact: "The word 'Aql' (reason/intellect) and its derivatives appear 49 times in the Quran, encouraging rational thinking.", banglaFact: "'আকল' (বুদ্ধি/বিচারবুদ্ধি) শব্দ ও এর শাখা-প্রশাখা কুরআনে ৪৯ বার উল্লেখিত হয়েছে, যুক্তিসঙ্গত চিন্তাভাবনাকে উৎসাহিত করে।", category: "numbers", source: "Quran word analysis" },
  { fact: "The Quran was compiled into a single book (Mushaf) during the caliphate of Abu Bakr and standardized during Uthman's caliphate.", banglaFact: "কুরআন আবু বকরের খেলাফতকালে একটি একক গ্রন্থে (মুসহাফ) সংকলিত হয় এবং উসমানের খেলাফতকালে মানসম্মত করা হয়।", category: "revelation", source: "Islamic history" }
];

// ============================================================
// READING_PLAN_TEMPLATES - Predefined Reading Plans
// ============================================================
const READING_PLAN_TEMPLATES = [
  {
    id: "plan_30_days",
    title: "30-Day Khatm",
    banglaTitle: "৩০ দিনে খতম",
    description: "Complete the entire Quran in 30 days by reading 1 Juz per day. Ideal for Ramadan.",
    duration: 30,
    dailyPages: 20,
    difficulty: "intermediate",
    icon: "fa-calendar-alt",
    schedule: [
      { day: 1, startSurah: 1, startAyah: 1, endSurah: 2, endAyah: 141 },
      { day: 2, startSurah: 2, startAyah: 142, endSurah: 2, endAyah: 252 },
      { day: 3, startSurah: 2, startAyah: 253, endSurah: 3, endAyah: 92 },
      { day: 4, startSurah: 3, startAyah: 93, endSurah: 4, endAyah: 23 },
      { day: 5, startSurah: 4, startAyah: 24, endSurah: 4, endAyah: 147 },
      { day: 6, startSurah: 4, startAyah: 148, endSurah: 5, endAyah: 81 },
      { day: 7, startSurah: 5, startAyah: 82, endSurah: 6, endAyah: 110 },
      { day: 8, startSurah: 6, startAyah: 111, endSurah: 7, endAyah: 87 },
      { day: 9, startSurah: 7, startAyah: 88, endSurah: 8, endAyah: 40 },
      { day: 10, startSurah: 8, startAyah: 41, endSurah: 9, endAyah: 92 },
      { day: 11, startSurah: 9, startAyah: 93, endSurah: 11, endAyah: 5 },
      { day: 12, startSurah: 11, startAyah: 6, endSurah: 12, endAyah: 52 },
      { day: 13, startSurah: 12, startAyah: 53, endSurah: 14, endAyah: 52 },
      { day: 14, startSurah: 15, startAyah: 1, endSurah: 16, endAyah: 128 },
      { day: 15, startSurah: 17, startAyah: 1, endSurah: 18, endAyah: 74 },
      { day: 16, startSurah: 18, startAyah: 75, endSurah: 20, endAyah: 135 },
      { day: 17, startSurah: 21, startAyah: 1, endSurah: 22, endAyah: 78 },
      { day: 18, startSurah: 23, startAyah: 1, endSurah: 25, endAyah: 20 },
      { day: 19, startSurah: 25, startAyah: 21, endSurah: 27, endAyah: 55 },
      { day: 20, startSurah: 27, startAyah: 56, endSurah: 29, endAyah: 45 },
      { day: 21, startSurah: 29, startAyah: 46, endSurah: 33, endAyah: 30 },
      { day: 22, startSurah: 33, startAyah: 31, endSurah: 36, endAyah: 27 },
      { day: 23, startSurah: 36, startAyah: 28, endSurah: 39, endAyah: 31 },
      { day: 24, startSurah: 39, startAyah: 32, endSurah: 41, endAyah: 46 },
      { day: 25, startSurah: 41, startAyah: 47, endSurah: 45, endAyah: 37 },
      { day: 26, startSurah: 46, startAyah: 1, endSurah: 51, endAyah: 30 },
      { day: 27, startSurah: 51, startAyah: 31, endSurah: 57, endAyah: 29 },
      { day: 28, startSurah: 58, startAyah: 1, endSurah: 66, endAyah: 12 },
      { day: 29, startSurah: 67, startAyah: 1, endSurah: 77, endAyah: 50 },
      { day: 30, startSurah: 78, startAyah: 1, endSurah: 114, endAyah: 6 }
    ]
  },
  {
    id: "plan_60_days",
    title: "60-Day Khatm",
    banglaTitle: "৬০ দিনে খতম",
    description: "A relaxed pace of half a Juz per day. Good for beginners who want to complete the Quran.",
    duration: 60,
    dailyPages: 10,
    difficulty: "beginner",
    icon: "fa-clock",
    schedule: [
      { day: 1, startSurah: 1, startAyah: 1, endSurah: 2, endAyah: 74 },
      { day: 60, startSurah: 100, startAyah: 1, endSurah: 114, endAyah: 6 }
    ]
  },
  {
    id: "plan_90_days",
    title: "90-Day Khatm",
    banglaTitle: "৯০ দিনে খতম",
    description: "Read one-third of a Juz daily. Ideal for those with busy schedules.",
    duration: 90,
    dailyPages: 7,
    difficulty: "beginner",
    icon: "fa-hourglass-half",
    schedule: [
      { day: 1, startSurah: 1, startAyah: 1, endSurah: 2, endAyah: 48 },
      { day: 90, startSurah: 110, startAyah: 1, endSurah: 114, endAyah: 6 }
    ]
  },
  {
    id: "plan_180_days",
    title: "6-Month Khatm",
    banglaTitle: "৬ মাসে খতম",
    description: "Slow and steady - about 4 pages per day. Perfect for deep reflection on each verse.",
    duration: 180,
    dailyPages: 4,
    difficulty: "beginner",
    icon: "fa-seedling",
    schedule: [
      { day: 1, startSurah: 1, startAyah: 1, endSurah: 2, endAyah: 25 },
      { day: 180, startSurah: 112, startAyah: 1, endSurah: 114, endAyah: 6 }
    ]
  },
  {
    id: "plan_365_days",
    title: "1-Year Khatm",
    banglaTitle: "১ বছরে খতম",
    description: "Read just 2 pages per day for a full year. Very manageable for anyone.",
    duration: 365,
    dailyPages: 2,
    difficulty: "beginner",
    icon: "fa-calendar",
    schedule: [
      { day: 1, startSurah: 1, startAyah: 1, endSurah: 2, endAyah: 10 },
      { day: 365, startSurah: 114, startAyah: 1, endSurah: 114, endAyah: 6 }
    ]
  },
  {
    id: "plan_ramadan",
    title: "Ramadan Special",
    banglaTitle: "রমযান স্পেশাল",
    description: "Complete the Quran during Ramadan with daily targets aligned to Taraweeh prayers.",
    duration: 30,
    dailyPages: 20,
    difficulty: "intermediate",
    icon: "fa-star-and-crescent",
    schedule: [
      { day: 1, startSurah: 1, startAyah: 1, endSurah: 2, endAyah: 141 },
      { day: 30, startSurah: 78, startAyah: 1, endSurah: 114, endAyah: 6 }
    ]
  },
  {
    id: "plan_friday_surahs",
    title: "Friday Surahs",
    banglaTitle: "শুক্রবারের সূরাসমূহ",
    description: "Focus on surahs recommended for Friday reading: Al-Kahf, Ya-Sin, Ad-Dukhan, and more.",
    duration: 52,
    dailyPages: 5,
    difficulty: "beginner",
    icon: "fa-mosque",
    schedule: [
      { day: 1, startSurah: 18, startAyah: 1, endSurah: 18, endAyah: 110 },
      { day: 2, startSurah: 36, startAyah: 1, endSurah: 36, endAyah: 83 },
      { day: 3, startSurah: 44, startAyah: 1, endSurah: 44, endAyah: 59 },
      { day: 4, startSurah: 32, startAyah: 1, endSurah: 32, endAyah: 30 }
    ]
  },
  {
    id: "plan_short_surahs",
    title: "Short Surahs First",
    banglaTitle: "ছোট সূরা প্রথমে",
    description: "Start with the short surahs of Juz 30 and work backwards. Great for building confidence.",
    duration: 60,
    dailyPages: 10,
    difficulty: "beginner",
    icon: "fa-sort-amount-up",
    schedule: [
      { day: 1, startSurah: 78, startAyah: 1, endSurah: 114, endAyah: 6 },
      { day: 60, startSurah: 1, startAyah: 1, endSurah: 2, endAyah: 141 }
    ]
  },
  {
    id: "plan_revelation_order",
    title: "Revelation Order",
    banglaTitle: "নাযিলের ক্রমে",
    description: "Read the Quran in the order it was revealed, starting with Al-Alaq (96).",
    duration: 90,
    dailyPages: 7,
    difficulty: "advanced",
    icon: "fa-sort-numeric-down",
    schedule: [
      { day: 1, startSurah: 96, startAyah: 1, endSurah: 96, endAyah: 19 },
      { day: 2, startSurah: 68, startAyah: 1, endSurah: 68, endAyah: 52 },
      { day: 3, startSurah: 73, startAyah: 1, endSurah: 73, endAyah: 20 }
    ]
  },
  {
    id: "plan_thematic",
    title: "Thematic Reading",
    banglaTitle: "বিষয়ভিত্তিক পড়া",
    description: "Read surahs grouped by theme: Tawheed, Stories, Laws, Afterlife, and more.",
    duration: 45,
    dailyPages: 14,
    difficulty: "advanced",
    icon: "fa-layer-group",
    schedule: [
      { day: 1, startSurah: 112, startAyah: 1, endSurah: 112, endAyah: 4 },
      { day: 2, startSurah: 109, startAyah: 1, endSurah: 109, endAyah: 6 },
      { day: 3, startSurah: 113, startAyah: 1, endSurah: 114, endAyah: 6 }
    ]
  }
];

// ============================================================
// ISLAMIC_MONTHS_DETAILED - Hijri Months with Significance
// ============================================================
const ISLAMIC_MONTHS_DETAILED = [
  { number: 1, name: "Muharram", arabicName: "مُحَرَّم", banglaName: "মুহাররম", significance: "First month of the Islamic calendar. One of the four sacred months. Contains the Day of Ashura (10th), a day of fasting commemorating Allah saving Musa (AS) from Pharaoh.", events: ["Islamic New Year (1st)", "Day of Ashura (10th)", "Fasting recommended (9th-10th)"], recommendedActions: ["Fast on 9th and 10th", "Increase worship", "Reflect on the Hijra", "Give charity"] },
  { number: 2, name: "Safar", arabicName: "صَفَر", banglaName: "সফর", significance: "Second month. In the pre-Islamic era, Arabs considered this an unlucky month, but Islam rejected such superstitions. The Prophet (SAW) said there is no bad omen in Safar.", events: ["Prophet's illness began (last days)", "Battle of Abwa"], recommendedActions: ["Reject superstitions", "Continue regular worship", "Seek Allah's protection", "Give sadaqah"] },
  { number: 3, name: "Rabi ul-Awwal", arabicName: "رَبِيع الأَوَّل", banglaName: "রবিউল আউয়াল", significance: "Third month. The month in which Prophet Muhammad (SAW) was born (12th) and also the month in which he passed away. The Hijra to Madinah was completed in this month.", events: ["Birth of Prophet Muhammad (SAW) - 12th", "Death of Prophet Muhammad (SAW) - 12th", "Hijra to Madinah"], recommendedActions: ["Send salawat on the Prophet", "Study the Seerah", "Follow the Sunnah", "Teach children about the Prophet"] },
  { number: 4, name: "Rabi uth-Thani", arabicName: "رَبِيع الثَّانِي", banglaName: "রবিউস সানী", significance: "Fourth month. Also known as Rabi al-Akhir. No specific events of great significance, but worship continues as usual.", events: ["Death of Fatimah az-Zahra (RA) - some opinions"], recommendedActions: ["Continue Quran recitation", "Maintain prayers", "Seek knowledge", "Help others"] },
  { number: 5, name: "Jumada al-Ula", arabicName: "جُمَادَى الأُولَى", banglaName: "জুমাদাল উলা", significance: "Fifth month. Named for the drying of water in the pre-Islamic calendar. Historical events include several important battles.", events: ["Battle of Mu'tah", "Death of Abu Talib (some opinions)"], recommendedActions: ["Maintain good deeds", "Fast voluntary fasts", "Study Islamic history", "Increase dhikr"] },
  { number: 6, name: "Jumada ath-Thaniya", arabicName: "جُمَادَى الثَّانِيَة", banglaName: "জুমাদাস সানিয়া", significance: "Sixth month. Also known as Jumada al-Akhirah. Marks the midpoint of the Islamic year.", events: ["Birth of Fatimah az-Zahra (RA) - some opinions", "Death of Abu Bakr (RA) - some opinions"], recommendedActions: ["Prepare for Rajab and Ramadan", "Increase istighfar", "Review yearly goals", "Strengthen family bonds"] },
  { number: 7, name: "Rajab", arabicName: "رَجَب", banglaName: "রজব", significance: "Seventh month. One of the four sacred months. The month of the miraculous Night Journey and Ascension (Isra and Mi'raj) of Prophet Muhammad (SAW). Fighting is prohibited in this month.", events: ["Isra and Mi'raj (27th)", "Change of Qiblah from Jerusalem to Makkah"], recommendedActions: ["Increase worship", "Fast voluntary fasts", "Prepare for Ramadan", "Recite more Quran", "Make istighfar"] },
  { number: 8, name: "Sha'ban", arabicName: "شَعْبَان", banglaName: "শাবান", significance: "Eighth month. The month before Ramadan. The Prophet (SAW) used to fast most of this month. Contains the night of Shab-e-Barat (15th), a night of forgiveness.", events: ["Shab-e-Barat (15th night)", "Deeds are presented to Allah", "Intensive fasting by the Prophet"], recommendedActions: ["Fast frequently", "Prepare for Ramadan", "Seek forgiveness", "Pray on the 15th night", "Review Quran skills"] },
  { number: 9, name: "Ramadan", arabicName: "رَمَضَان", banglaName: "রমযান", significance: "Ninth month. The holiest month in Islam. Obligatory fasting from dawn to sunset. The Quran was first revealed in this month. Contains Laylatul Qadr (Night of Power), better than 1,000 months.", events: ["Quran first revealed", "Battle of Badr (17th)", "Conquest of Makkah (20th/21st)", "Laylatul Qadr (odd nights of last 10)", "Eid ul-Fitr (after Ramadan)"], recommendedActions: ["Fast every day", "Complete Quran recitation", "Pray Taraweeh", "Give charity generously", "Perform I'tikaf in last 10 days", "Seek Laylatul Qadr", "Make abundant dua"] },
  { number: 10, name: "Shawwal", arabicName: "شَوَّال", banglaName: "শাওয়াল", significance: "Tenth month. Begins with Eid ul-Fitr. Recommended to fast six days in this month; combined with Ramadan fasting, it equals fasting the entire year.", events: ["Eid ul-Fitr (1st)", "Six fasts of Shawwal", "Battle of Uhud", "Marriage of Prophet to Aisha (RA)"], recommendedActions: ["Celebrate Eid", "Fast 6 days of Shawwal", "Pay Zakat ul-Fitr", "Maintain Ramadan habits", "Visit family and friends"] },
  { number: 11, name: "Dhul Qa'dah", arabicName: "ذُو القَعْدَة", banglaName: "যিলকদ", significance: "Eleventh month. One of the four sacred months. Historically a month of truce when fighting was forbidden. The Treaty of Hudaybiyyah took place in this month.", events: ["Treaty of Hudaybiyyah", "Preparations for Hajj begin"], recommendedActions: ["Prepare for Hajj if going", "Maintain sacred month respect", "Increase worship", "Fast voluntary fasts"] },
  { number: 12, name: "Dhul Hijjah", arabicName: "ذُو الحِجَّة", banglaName: "যিলহজ্জ", significance: "Twelfth and final month. Contains the Hajj pilgrimage and Eid ul-Adha. The first 10 days are the most blessed days of the year. One of the four sacred months.", events: ["First 10 days (most blessed)", "Day of Arafah (9th)", "Eid ul-Adha (10th)", "Days of Tashreeq (11-13th)", "Hajj rituals (8-12th)"], recommendedActions: ["Fast first 9 days especially Arafah", "Perform Hajj if able", "Offer Qurbani", "Make takbeer, tahleel, tahmeed", "Give charity", "Celebrate Eid"] }
];

// ============================================================
// RECITER_DATA - Popular Quran Reciters (Extended)
// ============================================================
const RECITER_DATA = [
  { id: 1, name: "Mishary Rashid Alafasy", arabicName: "مشاري راشد العفاسي", style: "Murattal", country: "Kuwait", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/", thumbnail: "", popular: true },
  { id: 2, name: "Abdul Basit Abdul Samad", arabicName: "عبد الباسط عبد الصمد", style: "Murattal & Mujawwad", country: "Egypt", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.abdulsamad/", thumbnail: "", popular: true },
  { id: 3, name: "Mahmoud Khalil Al-Husary", arabicName: "محمود خليل الحصري", style: "Murattal", country: "Egypt", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.husary/", thumbnail: "", popular: true },
  { id: 4, name: "Mohamed Siddiq Al-Minshawi", arabicName: "محمد صديق المنشاوي", style: "Murattal & Mujawwad", country: "Egypt", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.minshawi/", thumbnail: "", popular: true },
  { id: 5, name: "Abdur-Rahman As-Sudais", arabicName: "عبد الرحمن السديس", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.abdurrahmaansudais/", thumbnail: "", popular: true },
  { id: 6, name: "Abu Bakr Al-Shatri", arabicName: "أبو بكر الشاطري", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.shaatree/", thumbnail: "", popular: true },
  { id: 7, name: "Ahmed ibn Ali Al-Ajamy", arabicName: "أحمد بن علي العجمي", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.ahmedajamy/", thumbnail: "", popular: false },
  { id: 8, name: "Maher Al-Muaiqly", arabicName: "ماهر المعيقلي", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.mapiqueally/", thumbnail: "", popular: true },
  { id: 9, name: "Saad Al-Ghamdi", arabicName: "سعد الغامدي", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.saoodshuraym/", thumbnail: "", popular: true },
  { id: 10, name: "Hani Ar-Rifai", arabicName: "هاني الرفاعي", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.hanirifai/", thumbnail: "", popular: false },
  { id: 11, name: "Saud Ash-Shuraim", arabicName: "سعود الشريم", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.saoodshuraym/", thumbnail: "", popular: true },
  { id: 12, name: "Abdullah Basfar", arabicName: "عبد الله بصفر", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.abdullahbasfar/", thumbnail: "", popular: false },
  { id: 13, name: "Yasser Al-Dosari", arabicName: "ياسر الدوسري", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.yasserdossari/", thumbnail: "", popular: true },
  { id: 14, name: "Ibrahim Al-Akhdar", arabicName: "إبراهيم الأخضر", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.ibrahimakhdar/", thumbnail: "", popular: false },
  { id: 15, name: "Nasser Al-Qatami", arabicName: "ناصر القطامي", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.nasserqatami/", thumbnail: "", popular: true },
  { id: 16, name: "Fares Abbad", arabicName: "فارس عباد", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.faresabbad/", thumbnail: "", popular: false },
  { id: 17, name: "Muhammad Ayyub", arabicName: "محمد أيوب", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.muhammadayyub/", thumbnail: "", popular: true },
  { id: 18, name: "Bandar Baleela", arabicName: "بندر بليلة", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.bandarbaleela/", thumbnail: "", popular: false },
  { id: 19, name: "Ahmad Al-Hawashi", arabicName: "أحمد الحواشي", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.ahmedalhawashi/", thumbnail: "", popular: false },
  { id: 20, name: "Khalid Al-Qahtani", arabicName: "خالد القحطاني", style: "Murattal", country: "Saudi Arabia", audioBaseUrl: "https://cdn.islamic.network/quran/audio/128/ar.khalidqahtani/", thumbnail: "", popular: false }
];

// ============================================================
// TAJWEED_RULES_DETAILED - Comprehensive Tajweed Rules
// ============================================================
const TAJWEED_RULES_DETAILED = [
  { id: 1, name: "Idgham with Ghunnah", arabicName: "إدغام بغنة", banglaName: "ইদগাম মা'আল গুন্নাহ", description: "When Noon Sakinah or Tanween is followed by Ya, Nun, Meem, or Waw (يَنْمُو), the Noon merges into the following letter with a nasal sound (ghunnah) lasting 2 counts.", banglaDescription: "নূন সাকিনাহ বা তানভীনের পর ইয়া, নূন, মীম, বা ওয়াও আসলে নূনকে পরবর্তী অক্ষরে মিলিয়ে ২ হরকত গুন্নাহসহ পড়তে হয়।", examples: [{ arabic: "مِنْ يَعْمَلْ", explanation: "min ya'mal - the Noon merges into Ya with ghunnah" }, { arabic: "وَجْهًا وَّاحِدًا", explanation: "wajhan wahidan - Tanween merges into Waw with ghunnah" }], category: "noon" },
  { id: 2, name: "Idgham without Ghunnah", arabicName: "إدغام بلا غنة", banglaName: "ইদগাম বিলা গুন্নাহ", description: "When Noon Sakinah or Tanween is followed by Lam or Ra (لر), the Noon merges completely without any nasal sound.", banglaDescription: "নূন সাকিনাহ বা তানভীনের পর লাম বা রা আসলে নূন সম্পূর্ণভাবে গুন্নাহ ছাড়াই মিলে যায়।", examples: [{ arabic: "مِنْ رَبِّهِمْ", explanation: "mir-rabbihim - Noon merges into Ra without ghunnah" }, { arabic: "هُدًى لِلْمُتَّقِينَ", explanation: "hudal-lil muttaqeen - Tanween merges into Lam without ghunnah" }], category: "noon" },
  { id: 3, name: "Ikhfa Haqeeqi", arabicName: "إخفاء حقيقي", banglaName: "ইখফা হাকীকী", description: "When Noon Sakinah or Tanween is followed by one of 15 letters (ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك), the Noon is hidden with a nasal sound for 2 counts.", banglaDescription: "নূন সাকিনাহ বা তানভীনের পর ১৫টি নির্দিষ্ট অক্ষরের একটি আসলে নূনকে ২ হরকত গুন্নাহসহ লুকিয়ে পড়তে হয়।", examples: [{ arabic: "مِنْ قَبْلِ", explanation: "min qabli - Noon is hidden before Qaf" }, { arabic: "أَنْتُمْ", explanation: "antum - Noon is hidden before Ta" }], category: "noon" },
  { id: 4, name: "Izhar Halqi", arabicName: "إظهار حلقي", banglaName: "ইযহার হালকী", description: "When Noon Sakinah or Tanween is followed by one of the six throat letters (ء ه ع ح غ خ), the Noon is pronounced clearly without merging or hiding.", banglaDescription: "নূন সাকিনাহ বা তানভীনের পর ছয়টি কণ্ঠনালীর অক্ষরের একটি আসলে নূনকে স্পষ্টভাবে পড়তে হয়।", examples: [{ arabic: "مِنْ عِلْمٍ", explanation: "min 'ilmin - Noon is pronounced clearly before Ain" }, { arabic: "مَنْ آمَنَ", explanation: "man aamana - Noon is clear before Hamza" }], category: "noon" },
  { id: 5, name: "Iqlab", arabicName: "إقلاب", banglaName: "ইকলাব", description: "When Noon Sakinah or Tanween is followed by Ba (ب), the Noon changes to a Meem sound with ghunnah for 2 counts.", banglaDescription: "নূন সাকিনাহ বা তানভীনের পর বা (ب) আসলে নূনকে মীমের আওয়াজে ২ হরকত গুন্নাহসহ পড়তে হয়।", examples: [{ arabic: "مِنْ بَعْدِ", explanation: "mim ba'di - Noon changes to Meem before Ba" }, { arabic: "سَمِيعًا بَصِيرًا", explanation: "samee'am baseeran - Tanween changes to Meem before Ba" }], category: "noon" },
  { id: 6, name: "Ikhfa Shafawi", arabicName: "إخفاء شفوي", banglaName: "ইখফা শাফাবী", description: "When Meem Sakinah is followed by Ba (ب), the Meem is hidden with a ghunnah lasting 2 counts.", banglaDescription: "মীম সাকিনাহর পর বা (ب) আসলে মীমকে ২ হরকত গুন্নাহসহ লুকিয়ে পড়তে হয়।", examples: [{ arabic: "تَرْمِيهِمْ بِحِجَارَةٍ", explanation: "tarmeehim bihijaratin - Meem is hidden before Ba" }], category: "meem" },
  { id: 7, name: "Idgham Shafawi", arabicName: "إدغام شفوي", banglaName: "ইদগাম শাফাবী", description: "When Meem Sakinah is followed by another Meem (م), the two Meems merge into one with ghunnah for 2 counts.", banglaDescription: "মীম সাকিনাহর পর আরেকটি মীম আসলে দুটি মীম ২ হরকত গুন্নাহসহ একত্রিত হয়।", examples: [{ arabic: "لَهُمْ مَا", explanation: "lahumma - two Meems merge with ghunnah" }], category: "meem" },
  { id: 8, name: "Izhar Shafawi", arabicName: "إظهار شفوي", banglaName: "ইযহার শাফাবী", description: "When Meem Sakinah is followed by any letter other than Ba or Meem, the Meem is pronounced clearly.", banglaDescription: "মীম সাকিনাহর পর বা ও মীম ছাড়া অন্য যেকোনো অক্ষর আসলে মীমকে স্পষ্টভাবে পড়তে হয়।", examples: [{ arabic: "أَلَمْ تَرَ", explanation: "alam tara - Meem is clear before Ta" }], category: "meem" },
  { id: 9, name: "Madd Tabee'i (Natural Madd)", arabicName: "مد طبيعي", banglaName: "মদ তাবীঈ (স্বাভাবিক মদ)", description: "The natural prolongation of vowels (Alif, Waw, Ya) for exactly 2 counts. This is the basic madd.", banglaDescription: "স্বরবর্ণের (আলিফ, ওয়াও, ইয়া) স্বাভাবিক দীর্ঘায়িত ঠিক ২ হরকত। এটি মৌলিক মদ।", examples: [{ arabic: "قَالَ", explanation: "qaala - Alif after Fatha is stretched 2 counts" }, { arabic: "يَقُولُ", explanation: "yaqoolu - Waw after Damma is stretched 2 counts" }], category: "madd" },
  { id: 10, name: "Madd Muttasil (Connected Madd)", arabicName: "مد متصل", banglaName: "মদ মুত্তাসিল (সংযুক্ত মদ)", description: "When a Madd letter is followed by a Hamza within the same word, it is stretched 4-5 counts. This madd is obligatory (wajib).", banglaDescription: "যখন মদের অক্ষরের পর একই শব্দে হামযা আসে, তখন ৪-৫ হরকত টানতে হয়। এই মদ ওয়াজিব।", examples: [{ arabic: "جَاءَ", explanation: "jaa'a - Alif followed by Hamza, stretch 4-5 counts" }, { arabic: "سُوءَ", explanation: "soo'a - Waw followed by Hamza, stretch 4-5 counts" }], category: "madd" },
  { id: 11, name: "Madd Munfasil (Separated Madd)", arabicName: "مد منفصل", banglaName: "মদ মুনফাসিল (বিচ্ছিন্ন মদ)", description: "When a Madd letter at the end of a word is followed by a Hamza at the beginning of the next word, it is stretched 4-5 counts.", banglaDescription: "যখন শব্দের শেষে মদের অক্ষর এবং পরবর্তী শব্দের শুরুতে হামযা থাকে, তখন ৪-৫ হরকত টানতে হয়।", examples: [{ arabic: "يَا أَيُّهَا", explanation: "yaa ayyuha - Alif at end of Ya, Hamza starts next word" }, { arabic: "فِي أَنفُسِهِمْ", explanation: "fee anfusihim - Ya at end, Hamza starts next word" }], category: "madd" },
  { id: 12, name: "Madd Lazim (Necessary Madd)", arabicName: "مد لازم", banglaName: "মদ লাযিম (আবশ্যিক মদ)", description: "When a Madd letter is followed by a Sukoon or Shaddah in the same word, it is stretched for 6 counts. This is obligatory.", banglaDescription: "যখন মদের অক্ষরের পর একই শব্দে সুকূন বা শাদ্দাহ থাকে, তখন ৬ হরকত টানতে হয়। এটি আবশ্যিক।", examples: [{ arabic: "الْحَاقَّةُ", explanation: "al-haaqqah - Alif followed by Shaddah on Qaf, stretch 6 counts" }, { arabic: "الضَّالِّينَ", explanation: "ad-daaaalleen - stretch 6 counts" }], category: "madd" },
  { id: 13, name: "Qalqalah Sughra (Minor Echo)", arabicName: "قلقلة صغرى", banglaName: "কলকলাহ সুগরা (ছোট ঝংকার)", description: "A slight bouncing/echoing sound when one of the five Qalqalah letters (ق ط ب ج د) has a Sukoon in the middle of a word.", banglaDescription: "পাঁচটি কলকলাহ অক্ষরের (ق ط ب ج د) কোনো একটি শব্দের মাঝে সাকিন থাকলে হালকা ঝংকারের আওয়াজ হয়।", examples: [{ arabic: "يَجْعَلُ", explanation: "yaj'alu - slight echo on Jeem" }, { arabic: "يَقْطَعُ", explanation: "yaqta'u - slight echo on Qaf" }], category: "qalqalah" },
  { id: 14, name: "Qalqalah Kubra (Major Echo)", arabicName: "قلقلة كبرى", banglaName: "কলকলাহ কুবরা (বড় ঝংকার)", description: "A stronger bouncing/echoing sound when one of the five Qalqalah letters appears at the end of a word when stopping.", banglaDescription: "পাঁচটি কলকলাহ অক্ষরের কোনো একটি শব্দের শেষে থামার সময় থাকলে জোরালো ঝংকারের আওয়াজ হয়।", examples: [{ arabic: "الْفَلَقْ", explanation: "al-falaq - strong echo on Qaf when stopping" }, { arabic: "مَسَدْ", explanation: "masad - strong echo on Dal when stopping" }], category: "qalqalah" },
  { id: 15, name: "Ghunnah", arabicName: "غنة", banglaName: "গুন্নাহ (নাসিকা ধ্বনি)", description: "A nasal sound produced from the nose lasting 2 counts. Appears with Noon and Meem when they have Shaddah.", banglaDescription: "নাক থেকে উৎপন্ন ২ হরকত দৈর্ঘ্যের নাসিকা ধ্বনি। নূন ও মীমে শাদ্দাহ থাকলে এটি হয়।", examples: [{ arabic: "إِنَّ", explanation: "inna - ghunnah on Noon with Shaddah" }, { arabic: "ثُمَّ", explanation: "thumma - ghunnah on Meem with Shaddah" }], category: "noon" },
  { id: 16, name: "Waqf (Stopping Rules)", arabicName: "الوقف", banglaName: "ওয়াকফ (থামার নিয়ম)", description: "Rules governing where and how to stop during Quran recitation. Includes mandatory stops, prohibited stops, and preferred stops.", banglaDescription: "কুরআন তেলাওয়াতের সময় কোথায় এবং কীভাবে থামতে হবে তার নিয়মাবলী।", examples: [{ arabic: "مـ (mandatory stop)", explanation: "Must stop here" }, { arabic: "لا (do not stop)", explanation: "Should not stop here" }, { arabic: "ج (permissible)", explanation: "May stop or continue" }], category: "waqf" },
  { id: 17, name: "Tafkheem (Heavy Letters)", arabicName: "تفخيم", banglaName: "তাফখীম (মোটা উচ্চারণ)", description: "Making certain letters sound 'heavy' or 'thick'. The letters خ ص ض ط ظ غ ق are always heavy. Lam in 'Allah' and Ra have conditional rules.", banglaDescription: "নির্দিষ্ট অক্ষরগুলোকে 'মোটা' বা 'ভারী' করে উচ্চারণ করা। خ ص ض ط ظ غ ق সবসময় মোটা।", examples: [{ arabic: "صَادِقِينَ", explanation: "saadiqeen - Saad is always heavy" }, { arabic: "طَيِّبًا", explanation: "tayyiban - Taa is always heavy" }], category: "other" },
  { id: 18, name: "Tarqeeq (Light Letters)", arabicName: "ترقيق", banglaName: "তারকীক (পাতলা উচ্চারণ)", description: "Making letters sound 'light' or 'thin'. Most Arabic letters are naturally light except the seven heavy letters.", banglaDescription: "অক্ষরগুলোকে 'পাতলা' বা 'হালকা' করে উচ্চারণ করা। সাতটি মোটা অক্ষর ছাড়া অধিকাংশ আরবি অক্ষর স্বাভাবিকভাবে পাতলা।", examples: [{ arabic: "بِسْمِ", explanation: "bismi - Ba, Sin, Meem are all light" }], category: "other" },
  { id: 19, name: "Rules of Ra", arabicName: "أحكام الراء", banglaName: "রা-এর নিয়মাবলী", description: "The letter Ra can be pronounced heavy (tafkheem) or light (tarqeeq) depending on its vowel and surrounding letters.", banglaDescription: "রা অক্ষরটি এর হরকত ও পার্শ্ববর্তী অক্ষরের উপর নির্ভর করে মোটা বা পাতলা উচ্চারিত হতে পারে।", examples: [{ arabic: "رَبِّ", explanation: "Rabb - Ra with Fatha is heavy" }, { arabic: "رِجَالٌ", explanation: "rijaal - Ra with Kasra is light" }], category: "other" },
  { id: 20, name: "Rules of Lam in Allah", arabicName: "أحكام لام الجلالة", banglaName: "আল্লাহ-এর লাম-এর নিয়ম", description: "The Lam in the word 'Allah' is heavy (tafkheem) when preceded by Fatha or Damma, and light (tarqeeq) when preceded by Kasra.", banglaDescription: "'আল্লাহ' শব্দের লাম ফাতহা বা দাম্মার পর মোটা এবং কাসরার পর পাতলা হয়।", examples: [{ arabic: "قَالَ اللَّهُ", explanation: "qaalallahu - Lam is heavy after Fatha" }, { arabic: "بِسْمِ اللَّهِ", explanation: "bismillahi - Lam is light after Kasra" }], category: "other" }
];

// ============================================================
// SURAH_THEMES - Thematic Analysis for Each Surah
// ============================================================
const SURAH_THEMES = {
  1: { mainTheme: "The essence of worship and supplication", subThemes: ["Praise of Allah", "Seeking guidance", "The straight path"], keyTopics: ["Fatiha as prayer", "Tawheed", "Categories of people", "Daily recitation"] },
  2: { mainTheme: "Comprehensive guidance for the Muslim community", subThemes: ["Laws and legislation", "Stories of previous nations", "Faith and disbelief"], keyTopics: ["Adam's story", "Ibrahim's legacy", "Change of Qiblah", "Fasting", "Hajj", "Riba prohibition", "Ayatul Kursi", "Debt verse"] },
  3: { mainTheme: "Steadfastness in faith and lessons from Uhud", subThemes: ["Family of Imran", "Isa's story", "Battle of Uhud"], keyTopics: ["Maryam's birth", "Isa's miracles", "Patience in battle", "Unity of believers", "Death of every soul"] },
  4: { mainTheme: "Rights and justice, especially for women and orphans", subThemes: ["Women's rights", "Inheritance laws", "Social justice"], keyTopics: ["Marriage laws", "Inheritance shares", "Protection of orphans", "Justice for all", "Obedience to authority"] },
  5: { mainTheme: "Fulfilling covenants and completing the religion", subThemes: ["Halal and Haram", "Relations with People of the Book", "Divine law"], keyTopics: ["Food laws", "Wudu and Tayammum", "The Table Spread miracle", "Murder of Abel", "Completion of the religion"] },
  6: { mainTheme: "Tawheed and refutation of polytheism", subThemes: ["Allah as Creator", "Rejection of idols", "Evidence in creation"], keyTopics: ["Stars, moon, sun analogy", "Ibrahim's search for truth", "Livestock laws", "Names of prophets listed"] },
  7: { mainTheme: "Stories of prophets and their nations' responses", subThemes: ["Adam and Iblis", "Nations destroyed", "The covenant of humanity"], keyTopics: ["Adam's creation", "People of 'Ad", "People of Thamud", "People of Lut", "Musa and Pharaoh", "The covenant of Alastu"] },
  8: { mainTheme: "Battle of Badr and principles of warfare", subThemes: ["Divine aid in battle", "Spoils of war", "Trust in Allah"], keyTopics: ["Victory at Badr", "Distribution of spoils", "Angels' assistance", "Preparation for defense"] },
  9: { mainTheme: "Repentance and dealing with hypocrites", subThemes: ["Breaking treaties with polytheists", "Hypocrisy exposed", "Charity and Zakah"], keyTopics: ["No Bismillah", "Disavowal of treaties", "Battle of Tabuk", "Categories of Zakah recipients", "Tawbah of three companions"] },
  10: { mainTheme: "The Quran as guidance and Yunus's people's repentance", subThemes: ["Truth of revelation", "Stories of Nuh and Musa", "Only nation saved by repentance"], keyTopics: ["Challenge of the Quran", "Pharaoh's drowning", "Yunus's people repent", "No compulsion in faith"] },
  11: { mainTheme: "Prophets' struggles and divine justice", subThemes: ["Nuh's ark", "Hud and 'Ad", "Saleh and Thamud"], keyTopics: ["Nuh and his son", "Destruction of nations", "Shuaib and Madyan", "Steadfastness in dawah"] },
  12: { mainTheme: "The best of stories - Yusuf's journey from slavery to sovereignty", subThemes: ["Patience through trials", "Forgiveness", "Divine plan"], keyTopics: ["Yusuf's dream", "Brothers' jealousy", "Resisting temptation", "Prison and dream interpretation", "Reunion and forgiveness"] },
  13: { mainTheme: "Signs of Allah in nature and divine sovereignty", subThemes: ["Thunder glorifies Allah", "Guidance and misguidance", "Change within oneself"], keyTopics: ["Natural signs", "Allah does not change a people until they change themselves", "Remembrance brings peace"] },
  14: { mainTheme: "Ibrahim's prayers and gratitude", subThemes: ["Musa's story", "Gratitude increases blessings", "Ibrahim's supplication"], keyTopics: ["Leading from darkness to light", "If you are grateful I will increase you", "Ibrahim's prayer for Makkah"] },
  15: { mainTheme: "Preservation of the Quran and stories of destroyed nations", subThemes: ["Protection of Scripture", "Creation of Adam", "Iblis's refusal"], keyTopics: ["We will guard the Quran", "Angels visit Ibrahim", "People of the Stone (Hijr)"] },
  16: { mainTheme: "Allah's blessings in creation and gratitude", subThemes: ["Signs in nature", "Bee and honey", "Calling to Allah with wisdom"], keyTopics: ["Blessings enumerated", "Bee's inspiration", "Call with wisdom and good preaching", "Patience"] },
  17: { mainTheme: "The Night Journey and moral commandments", subThemes: ["Isra and Mi'raj", "Children of Israel", "Ethical guidelines"], keyTopics: ["Night Journey to Jerusalem", "Kindness to parents", "Do not kill your children", "Walk not on earth with arrogance"] },
  18: { mainTheme: "Four great stories of trial and faith", subThemes: ["People of the Cave", "The Two Gardens", "Musa and Khidr", "Dhul-Qarnayn"], keyTopics: ["Youth who believed", "Wealth vs faith", "Hidden wisdom", "Yajuj and Majuj", "Friday recitation"] },
  19: { mainTheme: "Mercy of Allah through miraculous births and prophets", subThemes: ["Zakariya and Yahya", "Maryam and Isa", "Ibrahim's gentleness"], keyTopics: ["Miraculous births", "Isa speaks from cradle", "Ibrahim's dialogue with father", "Idris raised high"] },
  20: { mainTheme: "Musa's comprehensive story and the Quran's purpose", subThemes: ["Musa's calling at Tur", "Pharaoh's tyranny", "Golden calf incident"], keyTopics: ["Allah speaks to Musa", "Staff miracle", "Samiri's deception", "Adam's story", "Quran as reminder"] },
  21: { mainTheme: "Prophets and their devotion to Allah", subThemes: ["Day of Judgment", "Multiple prophets' stories", "Ibrahim breaks idols"], keyTopics: ["The earth and heavens were joined", "Ibrahim's logic against idols", "Dawud and Sulaiman", "Dua of Yunus", "Mercy to the worlds"] },
  22: { mainTheme: "Hajj and worship of Allah", subThemes: ["Pilgrimage rites", "Resurrection", "Permission to fight"], keyTopics: ["Hajj proclamation", "Sacrifice", "Two sajdahs", "Permission for defensive fighting", "Hearts find peace in remembrance"] },
  23: { mainTheme: "Qualities of successful believers", subThemes: ["Characteristics of believers", "Creation of man", "Previous prophets"], keyTopics: ["Believers succeed", "Stages of creation", "Nuh's ark", "Musa and Harun", "Isa and Maryam"] },
  24: { mainTheme: "Light, modesty, and social ethics", subThemes: ["Laws of modesty", "The verse of Light", "Accusations and evidence"], keyTopics: ["Punishment for slander", "Lowering the gaze", "Hijab", "Nur verse", "Asking permission to enter homes"] },
  25: { mainTheme: "The Criterion between truth and falsehood", subThemes: ["Quran as Furqan", "Qualities of righteous servants", "Rejection of polytheism"], keyTopics: ["Quran is the Criterion", "Walking humbly on earth", "Spending in moderation", "Servants of the Most Merciful"] },
  26: { mainTheme: "Poets vs Prophets - truth of revelation", subThemes: ["Musa vs Pharaoh", "Multiple prophets' stories", "Quran is not poetry"], keyTopics: ["Magicians believe", "Nuh's people", "'Ad and Thamud", "Lut's people", "Shuaib", "Trustworthy Spirit brought it down"] },
  27: { mainTheme: "Sulaiman's kingdom and the power of faith", subThemes: ["Sulaiman and ants", "Queen of Sheba", "Musa's signs"], keyTopics: ["Ant speaks", "Hoopoe's report", "Bilqis accepts Islam", "Letter in Bismillah", "Lut saved"] },
  28: { mainTheme: "The stories behind faith - Musa's early life", subThemes: ["Musa's birth and upbringing", "Qarun's arrogance", "Promise to the Prophet"], keyTopics: ["Musa's mother inspired", "Musa in Madyan", "Burning bush", "Qarun's treasure", "Return to Makkah promised"] },
  29: { mainTheme: "Trials test faith and the spider's web analogy", subThemes: ["Tests of belief", "Weakness of false deities", "Ibrahim's faith"], keyTopics: ["Do people think they won't be tested?", "Spider web analogy", "Recite Quran", "Strive for Allah"] },
  30: { mainTheme: "Roman defeat and signs in creation", subThemes: ["Prophecy of Roman victory", "Signs in nature", "Human soul"], keyTopics: ["Romans will win", "Creation in pairs", "Fitrah of man", "Travel and reflect", "Corruption by man's hands"] },
  31: { mainTheme: "Luqman's wisdom and parental advice", subThemes: ["Wisdom from Allah", "Parental guidance", "Knowledge of Allah"], keyTopics: ["Luqman's advice to son", "Don't associate partners with Allah", "Be moderate in walking", "Lower your voice", "Knowledge of the Hour"] },
  32: { mainTheme: "Prostration and the truth of resurrection", subThemes: ["Creation from clay", "Souls at death", "Believers vs disbelievers"], keyTopics: ["Sajdah verse", "Creation in stages", "Souls taken at death", "No eye has seen what awaits", "Patience like Ulul Azm"] },
  33: { mainTheme: "The Prophet's household and Battle of the Trench", subThemes: ["Ahzab battle", "Hijab legislation", "Prophet's wives"], keyTopics: ["Allied forces defeated", "Social reforms", "Mothers of believers", "Seal of prophets", "Trust and obedience to Prophet"] },
  34: { mainTheme: "Sheba's story and the impotence of false gods", subThemes: ["Dawud and Sulaiman's blessings", "Saba's destruction", "Gratitude vs ingratitude"], keyTopics: ["Dawud's gifts", "Sulaiman's death", "Dam burst of Saba", "Idols cannot help", "Truth vs falsehood"] },
  35: { mainTheme: "Allah as the Originator of creation", subThemes: ["Angels with wings", "Mercy and provision", "Inheritance of the Book"], keyTopics: ["Angels with 2, 3, 4 wings", "None can withhold Allah's mercy", "Fresh water and salt water", "Three categories of inheritors"] },
  36: { mainTheme: "The heart of the Quran - resurrection and divine power", subThemes: ["Messengers to a city", "Signs in nature", "Resurrection proof"], keyTopics: ["Heart of Quran", "Man from edge of city", "Dead earth revived", "Sun and moon in orbits", "Kun Fayakun (Be and it is)"] },
  37: { mainTheme: "Angels in ranks and prophets' stories", subThemes: ["Jinn and stars", "Ibrahim's sacrifice", "Various prophets"], keyTopics: ["Saffat angels", "Ibrahim and the fire", "Sacrifice of Ismail", "Musa and Harun", "Ilyas", "Yunus and the whale"] },
  38: { mainTheme: "Dawud's story, Iblis's arrogance, and the Quran's message", subThemes: ["Sad - mysterious letter", "Dawud as judge", "Sulaiman's trial"], keyTopics: ["Dawud's judgment", "Sulaiman and horses", "Ayyub's patience", "Iblis's vow", "Adam's creation"] },
  39: { mainTheme: "Sincerity in worship and groups on Judgment Day", subThemes: ["Zumar (groups)", "Sincerity to Allah", "Mercy and forgiveness"], keyTopics: ["Worship with sincerity", "Do not despair of Allah's mercy", "Groups entering Paradise/Hell", "Earth grasped on Day of Judgment"] },
  40: { mainTheme: "The believing man from Pharaoh's family", subThemes: ["Ha-Meem series begins", "Believer's defense of Musa", "Arrogance of Pharaoh"], keyTopics: ["Forgiver of sins", "Believing man's speech", "Pharaoh's arrogance", "Call upon Me, I will respond", "Creation greater than human creation"] },
  41: { mainTheme: "Quran explained in detail - revelation and creation", subThemes: ["Fussilat - explained", "Creation in stages", "Good repels evil"], keyTopics: ["Quran in Arabic", "Heavens and earth created", "Good deed vs bad deed", "Enemies become friends", "Skin testifies"] },
  42: { mainTheme: "Consultation (Shura) and divine revelation", subThemes: ["Types of revelation", "Unity in religion", "Consultation principle"], keyTopics: ["Three types of revelation", "One religion for all prophets", "Shura (consultation)", "Patience and forgiveness"] },
  43: { mainTheme: "Gold adornments and following truth over tradition", subThemes: ["Quran as clear Book", "Ibrahim rejected traditions", "Isa is a servant"], keyTopics: ["Following fathers blindly", "Pharaoh's gold", "Isa as servant not divine", "Zukhruf (adornments)"] },
  44: { mainTheme: "The Night of Decree and Pharaoh's punishment", subThemes: ["Blessed night", "Smoke", "Pharaoh's people drowned"], keyTopics: ["Laylah Mubarakah", "Smoke as sign", "Pharaoh's arrogance", "Tree of Zaqqum"] },
  45: { mainTheme: "Kneeling before Allah on Judgment Day", subThemes: ["Signs in creation", "Following desires", "Every nation kneeling"], keyTopics: ["Signs in yourselves", "Following desires is misguidance", "Every nation will kneel", "Time destroys us - refuted"] },
  46: { mainTheme: "Sand dunes of 'Ad and honoring parents", subThemes: ["Quran confirms Torah", "Jinn listen to Quran", "Patience like prophets"], keyTopics: ["Ahqaf region", "Kindness to parents", "Jinn accept Islam", "Patience like Ulul Azm prophets"] },
  47: { mainTheme: "The Prophet Muhammad and fighting for truth", subThemes: ["Rules of warfare", "Hypocrites exposed", "Support Allah's cause"], keyTopics: ["Good deeds not wasted", "Rivers of Paradise described", "If you support Allah, He supports you", "Spending in Allah's cause"] },
  48: { mainTheme: "The great victory of Hudaybiyyah", subThemes: ["Treaty as victory", "Bai'ah under the tree", "Promise of Makkah's conquest"], keyTopics: ["Clear victory", "Tranquility in hearts", "Pledge of Ridwan", "Muhammad is Messenger of Allah", "Promise of entry to Masjid al-Haram"] },
  49: { mainTheme: "Islamic etiquette and brotherhood", subThemes: ["Respect for the Prophet", "Avoiding suspicion", "Racial equality"], keyTopics: ["Verify news", "Do not mock others", "Avoid suspicion and spying", "Do not backbite", "Most noble is most righteous", "True believers described"] },
  50: { mainTheme: "Resurrection and the nearness of death", subThemes: ["Qaf and the Quran", "Creation as proof", "Angel of death near"], keyTopics: ["We are nearer than jugular vein", "Two recording angels", "Death comes with truth", "Paradise brought near", "Glorify before sunrise and sunset"] },
  51: { mainTheme: "Signs of Allah scattered in creation", subThemes: ["Wind and rain", "Ibrahim's guests", "Purpose of creation"], keyTopics: ["Scattering winds", "Ibrahim and the angels", "Lut's people destroyed", "Musa and Pharaoh", "Created jinn and humans to worship"] },
  52: { mainTheme: "Mount Sinai and the truth of punishment", subThemes: ["Oath by the Mount", "Description of Paradise", "Warning to deniers"], keyTopics: ["Mount Tur", "Delights of Paradise", "Patience for judgment", "Glorify at night and when stars retreat"] },
  53: { mainTheme: "The Star and the Prophet's ascension", subThemes: ["Mi'raj details", "Lat, Uzza, Manat rejected", "Accountability"], keyTopics: ["Your companion has not erred", "Two bow-lengths away", "Lote Tree", "False goddesses", "Man gets only what he strives for"] },
  54: { mainTheme: "The moon split and ease of the Quran", subThemes: ["Hour draws near", "Nations destroyed", "Quran made easy"], keyTopics: ["Moon split", "We made Quran easy to remember", "People of Nuh", "'Ad destroyed", "Thamud destroyed", "Lut's people"] },
  55: { mainTheme: "The Most Merciful's countless blessings", subThemes: ["Teaching the Quran", "Balance in creation", "Two gardens of Paradise"], keyTopics: ["Which favors will you deny?", "He taught the Quran", "Created man", "Balance and justice", "Everyone on earth perishes", "Two gardens"] },
  56: { mainTheme: "The Inevitable Event and three groups of people", subThemes: ["Day of Judgment", "Three categories", "Quran's honor"], keyTopics: ["Three groups: foremost, right, left", "Rewards of the righteous", "Punishment of the wicked", "Creation as proof", "Quran in a preserved book"] },
  57: { mainTheme: "Iron, balance, and the nature of worldly life", subThemes: ["Allah's sovereignty", "Charity and sacrifice", "Monasticism not prescribed"], keyTopics: ["Iron sent down", "Race toward forgiveness", "Worldly life is amusement", "Light on Day of Judgment", "Be God-conscious"] },
  58: { mainTheme: "The plea and divine justice in disputes", subThemes: ["Zihar (unjust divorce)", "Secret counsel rules", "True faith in gatherings"], keyTopics: ["Allah heard the woman's plea", "Zihar ruling", "Secret meetings", "Make room in assemblies", "Elevating the knowledgeable"] },
  59: { mainTheme: "Exile of treacherous people and Allah's names", subThemes: ["Banu Nadir expelled", "Wealth distribution", "Names of Allah"], keyTopics: ["Gathering for exile", "Wealth does not circulate among the rich", "What the Messenger gives, take it", "Beautiful Names of Allah at end"] },
  60: { mainTheme: "Testing allegiance and relations with non-hostile disbelievers", subThemes: ["Loyalty in faith", "Ibrahim's example", "Treating non-hostile people justly"], keyTopics: ["Do not take enemies as allies", "Ibrahim's disavowal", "Allah does not forbid kindness to those who don't fight you", "Testing believing women who migrate"] },
  61: { mainTheme: "Ranks in faith and supporting Allah's cause", subThemes: ["Striving in Allah's cause", "Isa predicts Ahmad", "Helpers of Allah"], keyTopics: ["Why say what you don't do?", "Isa announces Ahmad", "Companions of Isa", "Commerce that saves from punishment"] },
  62: { mainTheme: "Friday prayer and the Torah's bearers", subThemes: ["Jumu'ah obligation", "Unlettered messenger", "Leaving trade for prayer"], keyTopics: ["Sent among the unlettered", "Donkey carrying books", "Hasten to Friday prayer", "Do not leave for trade during prayer"] },
  63: { mainTheme: "Exposure of hypocrites' tactics", subThemes: ["Hypocrisy described", "Abdullah ibn Ubayy", "Spend before death"], keyTopics: ["Beautiful exterior, empty inside", "They are the enemy", "They say don't spend on those with the Messenger", "Spend before death comes"] },
  64: { mainTheme: "Mutual loss and gain on Judgment Day", subThemes: ["Created for a purpose", "Family as trial", "Charity and patience"], keyTopics: ["Some believe, some disbelieve", "Family and wealth as tests", "Spend in charity", "Whatever you lend to Allah will be multiplied"] },
  65: { mainTheme: "Divorce procedures and trusting Allah", subThemes: ["Iddah (waiting period)", "Rights of divorced women", "Tawakkul in difficulty"], keyTopics: ["Proper divorce process", "Three menstrual cycles", "Whoever fears Allah, He provides a way out", "Allah is sufficient", "Seven heavens and earths"] },
  66: { mainTheme: "The Prophet's household and repentance", subThemes: ["Incident with wives", "Repentance commanded", "Examples of women"], keyTopics: ["Tahrim incident", "Sincere repentance", "Wife of Pharaoh as example", "Maryam as example", "Wife of Nuh and Lut as counter-examples"] },
  67: { mainTheme: "Allah's sovereignty over creation and death", subThemes: ["Purpose of life and death", "Protection from punishment", "Signs in creation"], keyTopics: ["Created death and life to test", "Seven heavens in layers", "Walk on earth He made for you", "If water disappeared, who brings it?"] },
  68: { mainTheme: "The Pen and the Prophet's noble character", subThemes: ["Oath by the Pen", "Owners of the Garden", "Prophet's great character"], keyTopics: ["You are upon great moral character", "Story of the garden owners", "Yunus referenced", "Truth of the Quran"] },
  69: { mainTheme: "The inevitable reality of Judgment Day", subThemes: ["Destroyed nations", "Day of Judgment described", "Quran's truth"], keyTopics: ["Thamud and 'Ad destroyed", "Record books given", "Right hand rejoices", "Left hand despairs", "Not a poet's word"] },
  70: { mainTheme: "Ascending stairways and human impatience", subThemes: ["Angels ascend", "Human nature", "Day of Judgment"], keyTopics: ["Angels ascend in 50,000 years", "Man is impatient", "But not those who pray", "Qualities of the saved"] },
  71: { mainTheme: "Nuh's 950-year mission and his people's rejection", subThemes: ["Nuh's dawah methods", "Idols of Nuh's people", "Nuh's prayer"], keyTopics: ["Called day and night", "Night and secret call", "Open call", "Idols: Wadd, Suwa, etc.", "Nuh's prayer against his people"] },
  72: { mainTheme: "Jinn who believed after hearing the Quran", subThemes: ["Jinn listen to Quran", "Monotheism affirmed", "Unseen belongs to Allah"], keyTopics: ["Group of Jinn listened", "We believed in it", "Mosques belong to Allah", "No one knows the unseen"] },
  73: { mainTheme: "Night prayer and spiritual preparation", subThemes: ["Muzzammil - the wrapped one", "Tahajjud prayer", "Patience with enemies"], keyTopics: ["Stand in prayer at night", "Recite Quran slowly", "Remember Allah's name", "Be patient with what they say"] },
  74: { mainTheme: "Rise and warn - the Prophet's mission begins", subThemes: ["Command to warn", "Day of Judgment", "Number 19"], keyTopics: ["Arise and warn", "Your Lord magnify", "Description of Saqar (Hell)", "Over it are 19", "What has driven you to Saqar?"] },
  75: { mainTheme: "Resurrection and the soul at death", subThemes: ["Self-reproaching soul", "Proof of resurrection", "The moment of death"], keyTopics: ["I swear by the self-reproaching soul", "Can He not bring bones back?", "Yes, even fingertips", "Eyes stare, legs give out"] },
  76: { mainTheme: "Human creation and rewards of the righteous", subThemes: ["Created from mixed fluid", "Gratitude or ingratitude", "Paradise described"], keyTopics: ["There was a time man was nothing", "We guided him to the way", "Righteous drink from a cup", "Green silk garments", "Silver vessels"] },
  77: { mainTheme: "The winds and woe to the deniers", subThemes: ["Winds sent forth", "Day of Judgment", "Repeated warning"], keyTopics: ["Woe that Day to the deniers", "Did We not destroy former peoples?", "Created from despised water", "Earth contains living and dead"] },
  78: { mainTheme: "The Great News of resurrection", subThemes: ["Creation as evidence", "Description of that Day", "Reward and punishment"], keyTopics: ["What are they asking about?", "The Great News", "Earth as a bed", "Mountains as pegs", "Day of Decision"] },
  79: { mainTheme: "Those who extract souls and the Day of Reckoning", subThemes: ["Angels of death", "Musa and Pharaoh", "Hour's approach"], keyTopics: ["Those who extract violently", "Musa at the sacred valley", "Are you harder to create or the heaven?", "When eyes are dazzled"] },
  80: { mainTheme: "The Prophet frowned - lesson in priorities", subThemes: ["Blind man comes seeking", "Human creation", "Day of Judgment"], keyTopics: ["He frowned and turned away", "The blind man seeking knowledge", "From what did He create him?", "Day man flees from brother"] },
  81: { mainTheme: "The Day when all is overturned", subThemes: ["Cosmic events", "Accountability", "Truth of revelation"], keyTopics: ["Sun wrapped up", "Stars fall", "Mountains removed", "Girl buried alive asked", "This is word of a noble messenger"] },
  82: { mainTheme: "The cleaving of the sky", subThemes: ["Sky breaks apart", "Recording angels", "Judgment Day"], keyTopics: ["When sky breaks apart", "When stars scatter", "When graves overturned", "Noble recording angels", "Every soul will know its deeds"] },
  83: { mainTheme: "Woe to those who cheat in measures", subThemes: ["Fraud in business", "Record of the wicked", "Record of the righteous"], keyTopics: ["Woe to those who give less", "Sijjeen record", "Illiyyeen record", "Righteous will laugh at disbelievers"] },
  84: { mainTheme: "The sky splits and accounts are given", subThemes: ["Sky obeys its Lord", "Two types of people", "Quran's preservation"], keyTopics: ["Sky splits open", "Right hand receives book happily", "Behind the back receives book", "Prostrate when Quran is read"] },
  85: { mainTheme: "The people of the trench - persecution of believers", subThemes: ["Martyrdom of believers", "Allah witnesses all", "Preserved Tablet"], keyTopics: ["Companions of the trench", "Cursed those who persecuted believers", "Severe punishment for them", "Glorious Quran in Preserved Tablet"] },
  86: { mainTheme: "The night-comer star and human creation", subThemes: ["Piercing star", "Man's origin", "Quran is decisive"], keyTopics: ["Star of piercing brightness", "Created from fluid", "Earth splits for plants", "Quran is decisive word"] },
  87: { mainTheme: "Glorifying the Most High", subThemes: ["Allah created and proportioned", "Quran as reminder", "Hereafter is better"], keyTopics: ["Glorify name of Lord Most High", "We will teach you to recite", "Remind if reminding benefits", "Scrolls of Ibrahim and Musa"] },
  88: { mainTheme: "The overwhelming event of Judgment Day", subThemes: ["Faces humbled and faces joyful", "Signs in creation", "Accountability"], keyTopics: ["Has the news reached you?", "Faces that day humbled", "Faces that day pleased", "Elevated couches", "Do they not look at the camel?"] },
  89: { mainTheme: "Dawn's oath and the fate of nations", subThemes: ["Destroyed nations", "Test of wealth", "The satisfied soul"], keyTopics: ["By the dawn", "'Ad with lofty pillars", "Thamud who carved rocks", "Pharaoh of the stakes", "Return to your Lord, satisfied"] },
  90: { mainTheme: "The city of Makkah and the steep path", subThemes: ["Trials of life", "Freeing slaves", "Feeding the poor"], keyTopics: ["This city (Makkah)", "We created man in hardship", "Two eyes, tongue, two lips", "Two highways (good and evil)", "Steep path: freeing slaves, feeding hungry"] },
  91: { mainTheme: "The sun and purification of the soul", subThemes: ["Oaths by creation", "Soul's potential", "Thamud destroyed"], keyTopics: ["By the sun and its brightness", "Soul inspired with wickedness and righteousness", "Successful is he who purifies it", "Thamud denied and hamstrung she-camel"] },
  92: { mainTheme: "The night and contrasting human efforts", subThemes: ["Those who give vs those who withhold", "Allah guides", "Warning of blazing fire"], keyTopics: ["Night covers", "Efforts are diverse", "Who gives and fears Allah", "Who withholds and is self-satisfied", "Wealth won't help in the grave"] },
  93: { mainTheme: "Morning brightness and Allah's care for the Prophet", subThemes: ["Allah has not forsaken you", "Past blessings recalled", "Gratitude commands"], keyTopics: ["Your Lord has not forsaken you", "Hereafter is better than first", "Were you not an orphan?", "As for the favor of your Lord, proclaim it"] },
  94: { mainTheme: "Relief after hardship", subThemes: ["Expansion of the chest", "Burden removed", "With hardship comes ease"], keyTopics: ["Did We not expand your breast?", "Removed your burden", "With hardship comes ease (twice)", "When free, devote yourself to worship"] },
  95: { mainTheme: "The fig and the best of creation", subThemes: ["Sacred locations", "Human dignity", "Lowest of the low"], keyTopics: ["By the fig and olive", "Mount Sinai", "Makkah", "Best of stature", "Returned to lowest", "Except believers"] },
  96: { mainTheme: "Read! The first revelation and human arrogance", subThemes: ["Command to read", "Man's transgression", "Prostrate and draw near"], keyTopics: ["Read in the name of your Lord", "Created man from a clot", "Man transgresses when rich", "Prostrate and draw near to Allah"] },
  97: { mainTheme: "The Night of Power - better than 1000 months", subThemes: ["Quran revealed this night", "Angels descend", "Peace until dawn"], keyTopics: ["We sent it down in the Night of Power", "Better than 1000 months", "Angels and Spirit descend", "Peace until dawn"] },
  98: { mainTheme: "Clear evidence for People of the Book", subThemes: ["Messenger with pure pages", "True religion described", "Best of creatures"], keyTopics: ["A messenger reciting pure pages", "Worship Allah sincerely", "Establish prayer, give zakah", "Best of creatures are believers"] },
  99: { mainTheme: "The earthquake of the Last Day", subThemes: ["Earth shakes violently", "Earth reveals her stories", "Atoms of deeds weigh"], keyTopics: ["When earth is shaken", "Earth throws out its burdens", "What is wrong with it?", "Whoever does atom's weight good sees it", "Atom's weight evil sees it"] },
  100: { mainTheme: "The charging horses and human ingratitude", subThemes: ["Horses in battle", "Human nature", "Day of Judgment"], keyTopics: ["By the charging horses", "Man is ungrateful to Lord", "He is witness to that", "He loves wealth intensely", "Graves turned inside out"] },
  101: { mainTheme: "The striking calamity of Judgment Day", subThemes: ["People like scattered moths", "Mountains like carded wool", "The Scale"], keyTopics: ["What is the Striking Calamity?", "People like moths", "Mountains like wool", "Heavy scales succeed", "Light scales - abyss"] },
  102: { mainTheme: "Competition in worldly increase distracts from the Hereafter", subThemes: ["Distracted by accumulation", "Certainty of death", "Accountability for blessings"], keyTopics: ["Competition diverts you", "Until you visit the graves", "You will surely know", "Asked about every pleasure"] },
  103: { mainTheme: "Time and the formula for salvation", subThemes: ["By time", "Humanity in loss", "Four conditions for success"], keyTopics: ["By time", "Man is in loss", "Except: faith", "Good deeds", "Advise truth", "Advise patience"] },
  104: { mainTheme: "Woe to the backbiter and slanderer", subThemes: ["Backbiting and mocking", "Hoarding wealth", "Crushing fire"], keyTopics: ["Woe to every scorner and mocker", "Who collects wealth and counts it", "Thrown into the Crusher", "Fire of Allah, kindled"] },
  105: { mainTheme: "The story of the Elephant Army attacking Makkah", subThemes: ["Abraha's army", "Birds with stones", "Divine protection of Kaaba"], keyTopics: ["Did you not see what your Lord did?", "Companions of the Elephant", "Birds in flocks", "Stones of baked clay", "Made like eaten straw"] },
  106: { mainTheme: "The Quraysh's trade journeys and gratitude", subThemes: ["Winter and summer caravans", "Security of Makkah", "Worship the Lord of this House"], keyTopics: ["Accustomed security of Quraysh", "Winter and summer journeys", "Worship Lord of this House", "Who fed them from hunger", "Secured them from fear"] },
  107: { mainTheme: "Small kindnesses and hypocritical worship", subThemes: ["Denying the religion", "Heedless of prayer", "Refusing small kindnesses"], keyTopics: ["Who denies the Recompense?", "Repels the orphan", "Does not encourage feeding poor", "Woe to those who pray heedlessly", "Who show off", "Withhold small kindnesses"] },
  108: { mainTheme: "Abundance given to the Prophet", subThemes: ["Al-Kawthar (river in Paradise)", "Prayer and sacrifice", "Enemy cut off"], keyTopics: ["We gave you Al-Kawthar", "Pray to your Lord and sacrifice", "Your enemy is the one cut off"] },
  109: { mainTheme: "Declaration of separation from disbelief", subThemes: ["Clear distinction", "No compromise in worship", "Religious freedom"], keyTopics: ["I do not worship what you worship", "Nor will you worship what I worship", "For you your religion, for me mine"] },
  110: { mainTheme: "The coming victory and the Prophet's task", subThemes: ["Conquest of Makkah", "People enter Islam in crowds", "Glorify and seek forgiveness"], keyTopics: ["When comes Allah's victory", "People entering Islam in multitudes", "Glorify your Lord's praise", "Seek His forgiveness"] },
  111: { mainTheme: "Abu Lahab's destruction - wealth cannot save", subThemes: ["Hands of Abu Lahab", "Wife carrying thorns", "Rope of palm fiber"], keyTopics: ["Perished are the hands of Abu Lahab", "His wealth won't avail him", "He will burn in fire", "His wife carrying firewood"] },
  112: { mainTheme: "Pure monotheism - the essence of Tawheed", subThemes: ["Allah is One", "Allah is Self-Sufficient", "Nothing is like Him"], keyTopics: ["He is Allah, the One", "The Eternal Refuge", "He neither begets nor is born", "None is equal to Him", "Equal to one-third of Quran"] },
  113: { mainTheme: "Seeking refuge from external evils", subThemes: ["Lord of daybreak", "Evil of creation", "Envy and dark magic"], keyTopics: ["Seek refuge in Lord of daybreak", "Evil of what He created", "Evil of darkness", "Evil of those who blow on knots", "Evil of the envious"] },
  114: { mainTheme: "Seeking refuge from internal whispering", subThemes: ["Lord, King, God of mankind", "Whispering Satan", "From jinn and humans"], keyTopics: ["Lord of mankind", "King of mankind", "God of mankind", "Evil of the retreating whisperer", "Whispers in breasts", "From among jinn and mankind"] }
};

// ============================================================
// QURANIC_STORIES - Major Narratives from the Quran
// ============================================================
const QURANIC_STORIES = [
  {
    id: "story_adam",
    title: "The Story of Adam and Hawa",
    arabicTitle: "قصة آدم وحواء",
    banglaTitle: "আদম ও হাওয়ার কাহিনী",
    category: "prophets",
    primarySurahs: [2, 7, 15, 17, 20, 38],
    keyVerses: ["2:30-39", "7:11-25", "15:26-44", "20:115-123", "38:71-85"],
    summary: "Allah created Adam from clay, taught him the names of all things, and commanded the angels to prostrate before him. Iblis refused out of arrogance. Adam and Hawa were placed in Paradise but were deceived by Shaytan into eating from the forbidden tree. They repented sincerely, and Allah forgave them and sent them to earth as vicegerents.",
    banglaSummary: "আল্লাহ আদমকে মাটি থেকে সৃষ্টি করেন, তাকে সকল বস্তুর নাম শিক্ষা দেন এবং ফেরেশতাদের তাঁর সামনে সেজদা করতে আদেশ করেন। ইবলিস অহংকারবশত অস্বীকার করে। আদম ও হাওয়াকে জান্নাতে রাখা হয়, কিন্তু শয়তান তাদের নিষিদ্ধ গাছ থেকে খেতে প্রলুব্ধ করে। তারা আন্তরিকভাবে তওবা করেন এবং আল্লাহ তাদের ক্ষমা করেন।",
    lessons: [
      "Arrogance leads to downfall, as shown by Iblis's refusal to prostrate",
      "Sincere repentance is always accepted by Allah",
      "Humans are honored by Allah above many other creations",
      "Shaytan is an open enemy to humanity",
      "Knowledge is a gift that elevates one's status"
    ],
    characters: ["Adam (AS)", "Hawa (Eve)", "Iblis (Satan)", "Angels"],
    themes: ["Creation", "Arrogance vs Humility", "Repentance", "Free Will", "Divine Knowledge"]
  },
  {
    id: "story_nuh",
    title: "The Story of Nuh and the Great Flood",
    arabicTitle: "قصة نوح والطوفان",
    banglaTitle: "নূহ ও মহাপ্লাবনের কাহিনী",
    category: "prophets",
    primarySurahs: [7, 11, 23, 26, 29, 37, 54, 71],
    keyVerses: ["11:25-49", "23:23-30", "26:105-122", "71:1-28"],
    summary: "Prophet Nuh called his people to worship Allah alone for 950 years, but most refused. Allah commanded him to build an ark. When the flood came, only the believers and pairs of animals were saved. Even Nuh's own son refused to board and perished. After the flood, the believers settled on Mount Judi and began rebuilding civilization.",
    banglaSummary: "নবী নূহ ৯৫০ বছর ধরে তাঁর জাতিকে একমাত্র আল্লাহর ইবাদতের দিকে আহ্বান করেন, কিন্তু বেশিরভাগই অস্বীকার করে। আল্লাহ তাঁকে একটি নৌকা তৈরি করতে আদেশ দেন। বন্যা এলে শুধু মুমিন ও জোড়া জোড়া প্রাণী রক্ষা পায়। নূহের নিজের ছেলেও উঠতে অস্বীকার করে ধ্বংস হয়।",
    lessons: [
      "Persistence in da'wah despite rejection is a prophetic quality",
      "Family ties do not guarantee guidance - faith is individual",
      "Allah's punishment comes after extended warnings are ignored",
      "Preparation and obedience to Allah's command are essential",
      "A small group of sincere believers is more beloved than masses of disbelievers"
    ],
    characters: ["Nuh (AS)", "Nuh's wife", "Nuh's son (Kan'an)", "Believers"],
    themes: ["Patience in Da'wah", "Divine Punishment", "Faith vs Family", "Obedience", "New Beginnings"]
  },
  {
    id: "story_ibrahim",
    title: "The Story of Ibrahim - Friend of Allah",
    arabicTitle: "قصة إبراهيم خليل الله",
    banglaTitle: "ইবরাহীম - আল্লাহর খলীলের কাহিনী",
    category: "prophets",
    primarySurahs: [2, 6, 14, 19, 21, 26, 29, 37, 60],
    keyVerses: ["2:124-141", "2:258-260", "6:74-83", "14:35-41", "21:51-73", "37:83-113"],
    summary: "Ibrahim questioned idol worship from a young age and debated with his father and king Nimrod. He was thrown into a fire which Allah made cool and safe. He migrated, built the Kaaba with his son Ismail, and was tested with the command to sacrifice his son. He passed every test and was honored with the title Khalilullah (Friend of Allah).",
    banglaSummary: "ইবরাহীম ছোটবেলা থেকেই মূর্তিপূজা নিয়ে প্রশ্ন করেন এবং তাঁর পিতা ও রাজা নমরুদের সাথে বিতর্ক করেন। তাঁকে আগুনে নিক্ষেপ করা হয় যা আল্লাহ শীতল ও নিরাপদ করে দেন। তিনি হিজরত করেন, পুত্র ইসমাঈলের সাথে কাবা নির্মাণ করেন এবং পুত্রকে কুরবানীর আদেশে পরীক্ষিত হন।",
    lessons: [
      "True faith requires questioning falsehood even when it comes from family",
      "Allah protects those who trust in Him completely",
      "Willingness to sacrifice everything for Allah is the highest form of devotion",
      "Building institutions of worship is a lasting legacy",
      "Intellectual reasoning can lead to the truth of monotheism"
    ],
    characters: ["Ibrahim (AS)", "Sarah", "Hajar", "Ismail (AS)", "Ishaq (AS)", "Nimrod", "Azar (father)"],
    themes: ["Monotheism", "Sacrifice", "Trust in Allah", "Intellectual Faith", "Legacy"]
  },
  {
    id: "story_yusuf",
    title: "The Story of Yusuf - The Best of Stories",
    arabicTitle: "قصة يوسف أحسن القصص",
    banglaTitle: "ইউসুফের কাহিনী - সর্বোত্তম কাহিনী",
    category: "prophets",
    primarySurahs: [12],
    keyVerses: ["12:1-111"],
    summary: "Yusuf was given the gift of dream interpretation and extraordinary beauty. His jealous brothers threw him into a well. He was sold as a slave in Egypt, falsely accused by the minister's wife, and imprisoned. He interpreted the king's dream, became the minister of Egypt, and eventually reunited with his family, forgiving his brothers completely.",
    banglaSummary: "ইউসুফকে স্বপ্নের ব্যাখ্যা ও অসাধারণ সৌন্দর্যের উপহার দেওয়া হয়। তাঁর ঈর্ষান্বিত ভাইয়েরা তাঁকে কূপে ফেলে দেয়। তিনি মিশরে দাস হিসেবে বিক্রি হন, মন্ত্রীর স্ত্রীর দ্বারা মিথ্যা অভিযুক্ত হন এবং কারাগারে যান। রাজার স্বপ্নের ব্যাখ্যা করে তিনি মিশরের মন্ত্রী হন এবং পরিবারের সাথে পুনর্মিলিত হন।",
    lessons: [
      "Patience through prolonged hardship leads to ultimate success",
      "Beauty and talent can be both a blessing and a test",
      "Forgiveness is the mark of true nobility",
      "Allah's plan unfolds in ways we cannot foresee",
      "Jealousy destroys relationships but truth eventually prevails"
    ],
    characters: ["Yusuf (AS)", "Yaqub (AS)", "Brothers of Yusuf", "Zulaykha (Potiphar's wife)", "King of Egypt"],
    themes: ["Patience", "Forgiveness", "Divine Plan", "Jealousy", "Dream Interpretation", "Justice"]
  },
  {
    id: "story_musa_pharaoh",
    title: "The Story of Musa and Pharaoh",
    arabicTitle: "قصة موسى وفرعون",
    banglaTitle: "মূসা ও ফিরাউনের কাহিনী",
    category: "prophets",
    primarySurahs: [2, 7, 10, 20, 26, 28, 44, 79],
    keyVerses: ["7:103-137", "20:9-98", "26:10-68", "28:3-43"],
    summary: "Musa was born during Pharaoh's oppression of the Israelites. Raised in Pharaoh's palace, he later fled to Midian after accidentally killing a man. Allah spoke to him at the burning bush, gave him miracles, and sent him back to confront Pharaoh. After nine plagues and the dramatic parting of the Red Sea, the Israelites were freed and Pharaoh drowned.",
    banglaSummary: "মূসা ফিরাউনের বনী ইসরাঈলের উপর নির্যাতনের সময় জন্মগ্রহণ করেন। ফিরাউনের প্রাসাদে বড় হয়ে, একজনকে দুর্ঘটনাবশত হত্যার পর মাদিয়ানে পালিয়ে যান। আল্লাহ জ্বলন্ত ঝোপে তাঁর সাথে কথা বলেন, মুজিযা দেন এবং ফিরাউনের মুখোমুখি হতে পাঠান। নয়টি বিপর্যয় ও লোহিত সাগর বিভক্তির পর বনী ইসরাঈল মুক্তি পায় এবং ফিরাউন ডুবে যায়।",
    lessons: [
      "Tyranny will always be defeated by truth",
      "Allah prepares His servants through life experiences before giving them their mission",
      "Miracles are signs from Allah, not magic",
      "Even the most powerful ruler is powerless before Allah",
      "Liberation from oppression is a divine promise"
    ],
    characters: ["Musa (AS)", "Harun (AS)", "Pharaoh", "Asiya (Pharaoh's wife)", "Musa's mother", "Musa's sister"],
    themes: ["Freedom from Oppression", "Courage", "Divine Signs", "Justice", "Trust in Allah"]
  },
  {
    id: "story_musa_khidr",
    title: "The Story of Musa and Al-Khidr",
    arabicTitle: "قصة موسى والخضر",
    banglaTitle: "মূসা ও খিযিরের কাহিনী",
    category: "prophets",
    primarySurahs: [18],
    keyVerses: ["18:60-82"],
    summary: "Musa traveled to meet Al-Khidr, a servant of Allah endowed with special knowledge. Al-Khidr agreed to let Musa accompany him on the condition that Musa would not question his actions. Al-Khidr damaged a boat, killed a boy, and repaired a wall without payment. Each time Musa questioned him. Finally, Al-Khidr revealed the divine wisdom behind each seemingly unjust action.",
    banglaSummary: "মূসা আল-খিযিরের সাথে দেখা করতে যান, যিনি আল্লাহর বিশেষ জ্ঞানপ্রাপ্ত বান্দা। খিযির মূসাকে সাথে নেওয়ার শর্তে বলেন যে তিনি তাঁর কাজ নিয়ে প্রশ্ন করবেন না। খিযির একটি নৌকা ক্ষতিগ্রস্ত করেন, একটি বালককে হত্যা করেন এবং বিনা পারিশ্রমিকে একটি দেয়াল মেরামত করেন। প্রতিবার মূসা প্রশ্ন করেন। অবশেষে খিযির প্রতিটি কাজের পেছনের ঐশ্বরিক প্রজ্ঞা প্রকাশ করেন।",
    lessons: [
      "Human knowledge is limited - only Allah has complete wisdom",
      "What appears harmful may actually be beneficial",
      "Patience is required when we cannot understand Allah's plan",
      "True knowledge comes with humility",
      "Events have hidden dimensions that only Allah fully understands"
    ],
    characters: ["Musa (AS)", "Al-Khidr", "The boat owners", "The boy", "The orphans"],
    themes: ["Hidden Wisdom", "Patience", "Humility", "Divine Knowledge", "Trust in Allah's Plan"]
  },
  {
    id: "story_isa",
    title: "The Story of Isa ibn Maryam",
    arabicTitle: "قصة عيسى ابن مريم",
    banglaTitle: "ঈসা ইবনে মারিয়ামের কাহিনী",
    category: "prophets",
    primarySurahs: [3, 5, 19, 43, 61],
    keyVerses: ["3:42-63", "5:110-120", "19:16-40"],
    summary: "Maryam, a devout woman, was given the miraculous news of a son without a father. Isa was born miraculously, spoke from the cradle defending his mother's honor, and was given numerous miracles including healing the sick and raising the dead by Allah's permission. He called his people to worship Allah alone. When they plotted to kill him, Allah raised him to heaven.",
    banglaSummary: "মারিয়াম, একজন ধর্মপরায়ণ নারী, পিতা ছাড়াই পুত্রের অলৌকিক সুসংবাদ পান। ঈসা অলৌকিকভাবে জন্মগ্রহণ করেন, দোলনা থেকে কথা বলে মায়ের সম্মান রক্ষা করেন এবং আল্লাহর অনুমতিতে রোগী নিরাময় ও মৃতকে জীবিত করার অসংখ্য মুজিযা পান। তিনি তাঁর জাতিকে একমাত্র আল্লাহর ইবাদতের দিকে আহ্বান করেন।",
    lessons: [
      "Allah's power transcends natural laws",
      "Piety and devotion are rewarded with miraculous blessings",
      "Prophets are human beings, not divine",
      "Miracles are given by Allah's permission, not by the prophet's own power",
      "False accusations against righteous people are eventually disproven"
    ],
    characters: ["Isa (AS)", "Maryam", "Zakariyya (AS)", "The Disciples (Hawariyyun)", "Imran's family"],
    themes: ["Miraculous Birth", "Monotheism", "Miracles", "Piety", "Divine Protection"]
  },
  {
    id: "story_sulayman",
    title: "The Story of Sulayman - King and Prophet",
    arabicTitle: "قصة سليمان الملك والنبي",
    banglaTitle: "সুলাইমান - রাজা ও নবীর কাহিনী",
    category: "prophets",
    primarySurahs: [2, 21, 27, 34, 38],
    keyVerses: ["21:78-82", "27:15-44", "34:12-14", "38:30-40"],
    summary: "Sulayman was given a kingdom unlike any other. He could command the wind, understood the language of birds and animals, and had jinn and humans in his service. He communicated with the Queen of Sheba (Bilqis) through a hoopoe bird, and she eventually embraced faith. Despite his immense power, he remained grateful and devoted to Allah.",
    banglaSummary: "সুলাইমানকে এমন রাজত্ব দেওয়া হয় যা অন্য কারো ছিল না। তিনি বাতাসকে আদেশ করতে পারতেন, পাখি ও প্রাণীদের ভাষা বুঝতেন এবং জিন ও মানুষ তাঁর সেবায় ছিল। তিনি হুদহুদ পাখির মাধ্যমে সাবার রানী (বিলকিস) এর সাথে যোগাযোগ করেন এবং তিনি অবশেষে ঈমান আনেন।",
    lessons: [
      "Power and wealth are tests from Allah that must be met with gratitude",
      "True leadership combines strength with justice and wisdom",
      "Communication and diplomacy can achieve more than warfare",
      "Even the most powerful beings (jinn) are subject to Allah's command",
      "Gratitude for blessings is the way to preserve them"
    ],
    characters: ["Sulayman (AS)", "Dawud (AS)", "Queen of Sheba (Bilqis)", "Hoopoe bird", "Jinn"],
    themes: ["Power and Gratitude", "Wisdom", "Leadership", "Communication", "Faith"]
  },
  {
    id: "story_dawud",
    title: "The Story of Dawud - The Warrior Prophet",
    arabicTitle: "قصة داود النبي المحارب",
    banglaTitle: "দাউদ - যোদ্ধা নবীর কাহিনী",
    category: "prophets",
    primarySurahs: [2, 21, 27, 34, 38],
    keyVerses: ["2:251", "21:78-80", "34:10-11", "38:17-26"],
    summary: "Dawud defeated the giant Goliath (Jalut) as a young man with unwavering faith. He was given the Zabur (Psalms), a beautiful voice that caused mountains and birds to glorify Allah with him, and the ability to soften iron with his bare hands. He established justice in his kingdom and was tested by two disputants who came to him.",
    banglaSummary: "দাউদ যুবক বয়সে অটল বিশ্বাস নিয়ে দৈত্য জালুতকে পরাজিত করেন। তাঁকে যাবুর (গীতসংহিতা), এক সুন্দর কণ্ঠস্বর দেওয়া হয় যা পাহাড় ও পাখিদের তাঁর সাথে আল্লাহর গুণগান করতে বাধ্য করত এবং খালি হাতে লোহা নরম করার ক্ষমতা দেওয়া হয়। তিনি তাঁর রাজ্যে ন্যায়বিচার প্রতিষ্ঠা করেন।",
    lessons: [
      "Faith and courage can defeat seemingly impossible odds",
      "Spiritual worship and worldly leadership can coexist",
      "Justice must be maintained even by those in power",
      "Natural gifts should be used in the service of Allah",
      "Self-accountability is essential for spiritual growth"
    ],
    characters: ["Dawud (AS)", "Jalut (Goliath)", "Talut (Saul)", "Sulayman (AS)"],
    themes: ["Courage", "Justice", "Worship", "Natural Gifts", "Self-Accountability"]
  },
  {
    id: "story_ayyub",
    title: "The Story of Ayyub - Patience Personified",
    arabicTitle: "قصة أيوب الصابر",
    banglaTitle: "আইয়ূব - ধৈর্যের প্রতীকের কাহিনী",
    category: "prophets",
    primarySurahs: [21, 38],
    keyVerses: ["21:83-84", "38:41-44"],
    summary: "Ayyub was a wealthy and righteous prophet who was tested with the loss of his wealth, children, and health. He suffered for years with a severe illness but never complained to anyone except Allah. He remained patient and grateful, continuing to worship Allah. When he called upon Allah in his distress, Allah healed him, restored his family, and multiplied his wealth.",
    banglaSummary: "আইয়ূব একজন ধনী ও ধার্মিক নবী ছিলেন যাকে তাঁর সম্পদ, সন্তান ও স্বাস্থ্য হারানোর মাধ্যমে পরীক্ষা করা হয়। তিনি বছরের পর বছর কঠিন রোগে ভুগেছেন কিন্তু আল্লাহ ছাড়া কারো কাছে অভিযোগ করেননি। তিনি ধৈর্যশীল ও কৃতজ্ঞ থাকেন। আল্লাহ তাঁকে সুস্থ করেন, পরিবার ফিরিয়ে দেন ও সম্পদ বহুগুণ করেন।",
    lessons: [
      "True patience means not complaining to creation, only to the Creator",
      "Tests from Allah can affect every aspect of life simultaneously",
      "Maintaining faith during extreme hardship is the ultimate test",
      "Allah restores what was lost and adds more for those who are patient",
      "Suffering can be a means of spiritual elevation"
    ],
    characters: ["Ayyub (AS)", "His wife", "Shaytan"],
    themes: ["Patience", "Perseverance", "Faith During Hardship", "Divine Restoration", "Gratitude"]
  },
  {
    id: "story_ashab_kahf",
    title: "The Story of the People of the Cave",
    arabicTitle: "قصة أصحاب الكهف",
    banglaTitle: "আসহাবে কাহফের কাহিনী",
    category: "general",
    primarySurahs: [18],
    keyVerses: ["18:9-26"],
    summary: "A group of young believers fled from their tyrannical king who persecuted monotheists. They took refuge in a cave, and Allah caused them to sleep for 309 years. When they awoke, they thought they had slept only a day. The story demonstrates Allah's power over time and His protection of sincere believers who sacrifice everything for their faith.",
    banglaSummary: "একদল যুবক ঈমানদার তাদের অত্যাচারী রাজা থেকে পালিয়ে যান যিনি একেশ্বরবাদীদের নির্যাতন করতেন। তারা একটি গুহায় আশ্রয় নেন এবং আল্লাহ তাদের ৩০৯ বছর ঘুমিয়ে রাখেন। জেগে উঠলে তারা মনে করেন মাত্র একদিন ঘুমিয়েছেন। কাহিনীটি সময়ের উপর আল্লাহর ক্ষমতা এবং আন্তরিক মুমিনদের সুরক্ষা প্রদর্শন করে।",
    lessons: [
      "Young people can be the strongest champions of faith",
      "Allah protects those who sacrifice for His sake",
      "Time is under Allah's complete control",
      "Standing for truth may require leaving comfort behind",
      "A small group of sincere believers is more valuable than masses of compromisers"
    ],
    characters: ["The young believers", "Their dog", "The tyrannical king", "The people of the city"],
    themes: ["Youth and Faith", "Sacrifice", "Divine Protection", "Time", "Courage"]
  },
  {
    id: "story_dhul_qarnayn",
    title: "The Story of Dhul-Qarnayn",
    arabicTitle: "قصة ذي القرنين",
    banglaTitle: "যুলকারনাইনের কাহিনী",
    category: "general",
    primarySurahs: [18],
    keyVerses: ["18:83-101"],
    summary: "Dhul-Qarnayn was a just and powerful ruler who traveled to the east and west of the earth. He encountered different peoples and dealt with each justly. When he found a people oppressed by Yajuj and Majuj (Gog and Magog), he built a massive wall of iron and copper to protect them. Despite his immense power, he attributed all success to Allah.",
    banglaSummary: "যুলকারনাইন একজন ন্যায়পরায়ণ ও শক্তিশালী শাসক ছিলেন যিনি পূর্ব ও পশ্চিমে ভ্রমণ করেন। তিনি বিভিন্ন জাতির সাথে ন্যায়সঙ্গতভাবে আচরণ করেন। ইয়াজুজ ও মাজুজ দ্বারা নির্যাতিত একটি জাতি পেয়ে তিনি লোহা ও তামার একটি বিশাল প্রাচীর তৈরি করেন। তাঁর বিপুল ক্ষমতা সত্ত্বেও তিনি সব সাফল্য আল্লাহকে দেন।",
    lessons: [
      "Power should be used to establish justice and protect the weak",
      "A just ruler helps people regardless of their background",
      "True leadership attributes success to Allah, not to oneself",
      "Using knowledge and resources to solve problems is a form of worship",
      "Even the mightiest structures are temporary compared to Allah's creation"
    ],
    characters: ["Dhul-Qarnayn", "People of the East", "People between the mountains", "Yajuj and Majuj"],
    themes: ["Just Leadership", "Power and Responsibility", "Protection of the Weak", "Humility", "Engineering"]
  },
  {
    id: "story_luqman",
    title: "The Wisdom of Luqman",
    arabicTitle: "حكمة لقمان",
    banglaTitle: "লুকমানের প্রজ্ঞা",
    category: "wisdom",
    primarySurahs: [31],
    keyVerses: ["31:12-19"],
    summary: "Luqman was a wise man whom Allah blessed with profound wisdom. His advice to his son is recorded in the Quran as a model of parental guidance. He taught his son about monotheism, the importance of prayer, patience in hardship, modesty in character, and how to conduct oneself in society with humility and grace.",
    banglaSummary: "লুকমান একজন জ্ঞানী ব্যক্তি ছিলেন যাকে আল্লাহ গভীর প্রজ্ঞায় ভূষিত করেন। তাঁর পুত্রকে দেওয়া উপদেশ কুরআনে পিতামাতার দিকনির্দেশনার আদর্শ হিসেবে লিপিবদ্ধ। তিনি তাঁর পুত্রকে একত্ববাদ, নামাজের গুরুত্ব, কষ্টে ধৈর্য, চরিত্রে বিনয় এবং সমাজে নম্রতার শিক্ষা দেন।",
    lessons: [
      "Gratitude to Allah is the foundation of wisdom",
      "Parents have a duty to teach their children correct beliefs",
      "Shirk (polytheism) is the greatest injustice",
      "Good character includes modesty, gentleness, and lowering one's voice",
      "Wisdom is a gift from Allah that surpasses material wealth"
    ],
    characters: ["Luqman", "His son"],
    themes: ["Parental Guidance", "Wisdom", "Monotheism", "Character", "Modesty"]
  },
  {
    id: "story_maryam",
    title: "The Story of Maryam - The Chosen Woman",
    arabicTitle: "قصة مريم المصطفاة",
    banglaTitle: "মারিয়াম - মনোনীত নারীর কাহিনী",
    category: "prophets",
    primarySurahs: [3, 19, 66],
    keyVerses: ["3:35-47", "19:16-34", "66:12"],
    summary: "Maryam was dedicated to the service of Allah by her mother before birth. She was raised in the temple under the care of Prophet Zakariyya, who found miraculous provisions with her. She was chosen above all women of the worlds and given the miraculous birth of Isa without a father. She endured false accusations with patience and was vindicated by her infant son's miraculous speech.",
    banglaSummary: "মারিয়ামকে তাঁর মা জন্মের আগেই আল্লাহর সেবায় উৎসর্গ করেন। তিনি নবী যাকারিয়ার তত্ত্বাবধানে মন্দিরে বড় হন, যিনি তাঁর কাছে অলৌকিক রিযিক দেখতে পান। তিনি বিশ্বের সকল নারীর উপর মনোনীত হন এবং পিতা ছাড়াই ঈসার অলৌকিক জন্ম পান। মিথ্যা অভিযোগ ধৈর্যের সাথে সহ্য করেন এবং শিশুপুত্রের অলৌকিক কথা বলার মাধ্যমে নির্দোষ প্রমাণিত হন।",
    lessons: [
      "Devotion to Allah from an early age brings extraordinary blessings",
      "Women hold positions of the highest honor in Islam",
      "Patience during false accusations is rewarded by divine vindication",
      "Allah provides for His servants from sources they cannot imagine",
      "Trust in Allah's plan even when it seems impossible"
    ],
    characters: ["Maryam", "Hannah (Maryam's mother)", "Zakariyya (AS)", "Isa (AS)", "Imran"],
    themes: ["Devotion", "Honor of Women", "Patience", "Miraculous Provision", "Trust"]
  },
  {
    id: "story_qarun",
    title: "The Story of Qarun - Wealth and Arrogance",
    arabicTitle: "قصة قارون",
    banglaTitle: "কারুনের কাহিনী - সম্পদ ও অহংকার",
    category: "general",
    primarySurahs: [28],
    keyVerses: ["28:76-82"],
    summary: "Qarun was from the people of Musa and was blessed with immense wealth. His treasures were so vast that their keys alone were a burden for a group of strong men. Instead of being grateful, he became arrogant and claimed his wealth was due to his own knowledge. He refused to spend in Allah's cause. Allah caused the earth to swallow him and his palace as a lesson for all mankind.",
    banglaSummary: "কারুন মূসার জাতির লোক ছিলেন এবং তাঁকে বিপুল সম্পদ দেওয়া হয়। তাঁর ধনভাণ্ডারের চাবিগুলোই একদল শক্তিশালী পুরুষের জন্য বোঝা ছিল। কৃতজ্ঞ না হয়ে তিনি অহংকারী হন এবং দাবি করেন সম্পদ তাঁর নিজের জ্ঞানের কারণে। আল্লাহর পথে ব্যয় করতে অস্বীকার করেন। আল্লাহ ভূমি ধসিয়ে তাঁকে ও তাঁর প্রাসাদকে গ্রাস করান।",
    lessons: [
      "Wealth is a test from Allah, not proof of divine favor",
      "Arrogance about one's possessions leads to destruction",
      "True success is in the Hereafter, not in worldly accumulation",
      "Attributing blessings to oneself rather than Allah is a form of kufr",
      "Those who desire worldly show will not succeed in the Hereafter"
    ],
    characters: ["Qarun", "Musa (AS)", "The people who envied Qarun", "The wise among his people"],
    themes: ["Wealth and Arrogance", "Gratitude", "Divine Punishment", "Materialism", "Humility"]
  },
  {
    id: "story_ashab_ukhdood",
    title: "The Story of the People of the Ditch",
    arabicTitle: "قصة أصحاب الأخدود",
    banglaTitle: "আসহাবুল উখদূদের কাহিনী",
    category: "general",
    primarySurahs: [85],
    keyVerses: ["85:1-11"],
    summary: "A tyrannical king ordered trenches to be dug and filled with fire, then commanded believers to be thrown into them if they refused to renounce their faith. The believers chose death over disbelief, willingly jumping into the fire rather than compromising their faith. Allah cursed the perpetrators and promised the believers gardens beneath which rivers flow.",
    banglaSummary: "একজন অত্যাচারী রাজা গর্ত খুঁড়ে আগুনে ভরাতে আদেশ দেন, তারপর মুমিনদের ঈমান ত্যাগ না করলে আগুনে নিক্ষেপ করতে আদেশ দেন। মুমিনরা কুফরির চেয়ে মৃত্যু বেছে নেন, ঈমানে আপোষ করার বদলে স্বেচ্ছায় আগুনে ঝাঁপ দেন। আল্লাহ অত্যাচারীদের অভিশাপ দেন এবং মুমিনদের জান্নাতের প্রতিশ্রুতি দেন।",
    lessons: [
      "Faith may demand the ultimate sacrifice",
      "Tyrants who persecute believers face divine wrath",
      "The value of faith exceeds the value of life itself",
      "Allah witnesses all injustice and will bring justice",
      "Martyrdom for faith is the highest station"
    ],
    characters: ["The tyrannical king", "The believing boy", "The sorcerer", "The monk", "The believers"],
    themes: ["Martyrdom", "Faith vs Tyranny", "Ultimate Sacrifice", "Divine Justice", "Perseverance"]
  }
];

// ============================================================
// COMPANION_DATA - Major Companions of the Prophet (SAW)
// ============================================================
const COMPANION_DATA = [
  {
    id: "abu_bakr",
    name: "Abu Bakr As-Siddiq",
    arabicName: "أبو بكر الصديق",
    banglaName: "আবু বকর আস-সিদ্দীক (রা.)",
    title: "As-Siddiq (The Truthful)",
    birthYear: "573 CE",
    deathYear: "634 CE",
    tribe: "Quraysh (Banu Taym)",
    relationship: "Father-in-law of the Prophet, first Caliph",
    notableAchievements: [
      "First free adult male to accept Islam",
      "Accompanied the Prophet during Hijrah to Madinah",
      "First Caliph of Islam (632-634 CE)",
      "Compiled the Quran into one manuscript",
      "Fought the Wars of Apostasy (Riddah Wars)",
      "Freed Bilal and other slaves who accepted Islam"
    ],
    quranReferences: ["9:40"],
    famousQuotes: [
      "If the faith of Abu Bakr were weighed against the faith of the people of the earth, it would outweigh theirs.",
      "O people, if anyone worshipped Muhammad, let him know that Muhammad is dead. But if anyone worshipped Allah, let him know that Allah is alive and will never die."
    ],
    personality: "Known for his gentleness, generosity, and unwavering loyalty to the Prophet. He spent his entire fortune in the cause of Islam.",
    category: "Khulafa Rashidun"
  },
  {
    id: "umar_ibn_khattab",
    name: "Umar ibn Al-Khattab",
    arabicName: "عمر بن الخطاب",
    banglaName: "উমর ইবনুল খাত্তাব (রা.)",
    title: "Al-Faruq (The Distinguisher between Right and Wrong)",
    birthYear: "584 CE",
    deathYear: "644 CE",
    tribe: "Quraysh (Banu Adi)",
    relationship: "Father-in-law of the Prophet, second Caliph",
    notableAchievements: [
      "Second Caliph of Islam (634-644 CE)",
      "Expanded the Islamic empire to include Persia, Syria, Egypt, and Jerusalem",
      "Established the Hijri calendar",
      "Created the Bayt al-Mal (public treasury) and welfare system",
      "Introduced the system of Shura (consultation) in governance",
      "Known for walking the streets at night to check on citizens"
    ],
    quranReferences: ["66:1-5"],
    famousQuotes: [
      "We were the most humiliated people on earth and Allah gave us honour through Islam.",
      "Hold yourself accountable before you are held accountable.",
      "The best of you is the one who is best to his family."
    ],
    personality: "Known for his strong sense of justice, decisive leadership, and living a simple life despite ruling a vast empire.",
    category: "Khulafa Rashidun"
  },
  {
    id: "uthman_ibn_affan",
    name: "Uthman ibn Affan",
    arabicName: "عثمان بن عفان",
    banglaName: "উসমান ইবনে আফফান (রা.)",
    title: "Dhun-Nurayn (Possessor of Two Lights)",
    birthYear: "576 CE",
    deathYear: "656 CE",
    tribe: "Quraysh (Banu Umayya)",
    relationship: "Son-in-law of the Prophet (married two of his daughters), third Caliph",
    notableAchievements: [
      "Third Caliph of Islam (644-656 CE)",
      "Standardized the Quran into one official text (Uthmanic Codex)",
      "Expanded the Prophet's Mosque in Madinah",
      "Purchased the well of Rumah for public use",
      "Equipped the army of Tabuk with his personal wealth",
      "One of the first to accept Islam"
    ],
    quranReferences: [],
    famousQuotes: [
      "If our hearts were truly clean, we would never have enough of the Word of Allah.",
      "Allah did not give you these blessings so that you could build walls around them."
    ],
    personality: "Known for his extreme generosity, modesty, shyness, and love of the Quran. Even the angels felt shy before him.",
    category: "Khulafa Rashidun"
  },
  {
    id: "ali_ibn_abi_talib",
    name: "Ali ibn Abi Talib",
    arabicName: "علي بن أبي طالب",
    banglaName: "আলী ইবনে আবী তালিব (রা.)",
    title: "Asadullah (Lion of Allah)",
    birthYear: "601 CE",
    deathYear: "661 CE",
    tribe: "Quraysh (Banu Hashim)",
    relationship: "Cousin and son-in-law of the Prophet, fourth Caliph",
    notableAchievements: [
      "First child/youth to accept Islam",
      "Fourth Caliph of Islam (656-661 CE)",
      "Slept in the Prophet's bed during Hijrah to distract assassins",
      "Carried the standard at the Battle of Khaybar",
      "Known as 'the gate to the city of knowledge'",
      "Father of Hasan and Husayn, grandsons of the Prophet"
    ],
    quranReferences: ["3:61"],
    famousQuotes: [
      "Patience is of two kinds: patience over what pains you, and patience against what you covet.",
      "People are enemies of what they don't know.",
      "He who has a thousand friends has not a friend to spare, and he who has one enemy will meet him everywhere."
    ],
    personality: "Known for his bravery, deep knowledge, eloquent speech, and unwavering devotion. He was both a warrior and a scholar.",
    category: "Khulafa Rashidun"
  },
  {
    id: "khadijah",
    name: "Khadijah bint Khuwaylid",
    arabicName: "خديجة بنت خويلد",
    banglaName: "খাদিজা বিনতে খুওয়াইলিদ (রা.)",
    title: "Mother of the Believers",
    birthYear: "555 CE",
    deathYear: "619 CE",
    tribe: "Quraysh (Banu Asad)",
    relationship: "First wife of the Prophet",
    notableAchievements: [
      "First person to accept Islam",
      "Supported the Prophet emotionally and financially during the early years",
      "Successful businesswoman before and after marriage",
      "Mother of Fatimah and other children of the Prophet",
      "Stood by the Prophet during the boycott of Banu Hashim",
      "Angel Jibreel sent her salam from Allah"
    ],
    quranReferences: [],
    famousQuotes: [
      "Never! By Allah, Allah will never disgrace you. You keep good relations with your kith and kin, help the poor, serve your guests generously, and assist those afflicted by calamity."
    ],
    personality: "Known for her intelligence, dignity, unwavering support, and deep faith. She was the Prophet's greatest supporter during the most difficult years of his mission.",
    category: "Mothers of the Believers"
  },
  {
    id: "aisha",
    name: "Aisha bint Abu Bakr",
    arabicName: "عائشة بنت أبي بكر",
    banglaName: "আইশা বিনতে আবু বকর (রা.)",
    title: "Mother of the Believers, The Scholar",
    birthYear: "613 CE",
    deathYear: "678 CE",
    tribe: "Quraysh (Banu Taym)",
    relationship: "Wife of the Prophet, daughter of Abu Bakr",
    notableAchievements: [
      "One of the greatest scholars of Islam",
      "Narrated over 2,210 hadith from the Prophet",
      "Many senior companions sought her knowledge and rulings",
      "Taught for over 40 years after the Prophet's death",
      "Corrected other companions' misunderstandings of hadith",
      "Expert in Quran interpretation, inheritance law, and medicine"
    ],
    quranReferences: ["24:11-20", "66:1-5"],
    famousQuotes: [
      "The Prophet's character was the Quran.",
      "What a fine thing is generosity provided it is not followed by reminders of one's generosity."
    ],
    personality: "Known for her sharp intellect, photographic memory, eloquence, and deep understanding of Islamic law. She was the most prolific female narrator of hadith.",
    category: "Mothers of the Believers"
  },
  {
    id: "bilal",
    name: "Bilal ibn Rabah",
    arabicName: "بلال بن رباح",
    banglaName: "বিলাল ইবনে রাবাহ (রা.)",
    title: "The First Muezzin of Islam",
    birthYear: "580 CE",
    deathYear: "640 CE",
    tribe: "Abyssinian origin",
    relationship: "Close companion and muezzin of the Prophet",
    notableAchievements: [
      "First person to give the Adhan (call to prayer)",
      "One of the earliest converts to Islam",
      "Endured severe torture for his faith, repeating 'Ahad, Ahad' (One, One)",
      "Freed from slavery by Abu Bakr",
      "Fought in the Battle of Badr and other battles",
      "The Prophet said his footsteps could be heard in Paradise"
    ],
    quranReferences: [],
    famousQuotes: [
      "Ahad! Ahad! (One! One!) - said while being tortured on hot sand"
    ],
    personality: "Known for his steadfastness under persecution, beautiful voice, and unwavering monotheistic conviction. He is a symbol of Islam's commitment to equality regardless of race.",
    category: "Early Companions"
  },
  {
    id: "khalid_ibn_walid",
    name: "Khalid ibn Al-Walid",
    arabicName: "خالد بن الوليد",
    banglaName: "খালিদ ইবনুল ওয়ালীদ (রা.)",
    title: "Sayfullah (Sword of Allah)",
    birthYear: "585 CE",
    deathYear: "642 CE",
    tribe: "Quraysh (Banu Makhzum)",
    relationship: "Military commander and companion",
    notableAchievements: [
      "Undefeated in over 100 battles as a commander",
      "Led the Battle of Mutah after the commanders fell",
      "Given the title 'Sword of Allah' by the Prophet",
      "Key commander in the conquest of Iraq and Syria",
      "Defeated the Sassanid and Byzantine empires",
      "Converted to Islam in 629 CE after initially fighting against Muslims"
    ],
    quranReferences: [],
    famousQuotes: [
      "I have fought in so many battles seeking martyrdom that there is no spot in my body left without a scar or wound. And yet here I am, dying on my bed like an old camel."
    ],
    personality: "Known for his unmatched military genius, courage, and strategic brilliance. He was one of the greatest military commanders in history.",
    category: "Military Companions"
  },
  {
    id: "abu_hurairah",
    name: "Abu Hurairah",
    arabicName: "أبو هريرة",
    banglaName: "আবু হুরাইরাহ (রা.)",
    title: "The Father of the Kitten",
    birthYear: "603 CE",
    deathYear: "681 CE",
    tribe: "Daws (from Yemen)",
    relationship: "Companion and hadith narrator",
    notableAchievements: [
      "Most prolific narrator of hadith (5,374 narrations)",
      "Dedicated his life to learning and memorizing the Prophet's sayings",
      "The Prophet made dua for his memory, after which he never forgot anything",
      "Served as governor of Bahrain under Umar",
      "Spent his days in the Prophet's mosque learning",
      "His narrations form a significant portion of hadith literature"
    ],
    quranReferences: [],
    famousQuotes: [
      "I divided my night into three parts: one for prayer, one for sleep, and one for reviewing the hadith of the Messenger of Allah."
    ],
    personality: "Known for his incredible memory, devotion to hadith preservation, love for cats (hence his name), and dedication to knowledge. He sacrificed worldly comfort for the sake of preserving the Prophet's words.",
    category: "Scholars Among Companions"
  },
  {
    id: "fatimah",
    name: "Fatimah bint Muhammad",
    arabicName: "فاطمة بنت محمد",
    banglaName: "ফাতিমা বিনতে মুহাম্মাদ (রা.)",
    title: "Az-Zahra (The Radiant One), Leader of the Women of Paradise",
    birthYear: "605 CE",
    deathYear: "632 CE",
    tribe: "Quraysh (Banu Hashim)",
    relationship: "Daughter of the Prophet, wife of Ali",
    notableAchievements: [
      "The Prophet said she is the leader of the women of Paradise",
      "Mother of Hasan and Husayn, through whom the Prophet's lineage continues",
      "Known for her piety, modesty, and resemblance to the Prophet in character",
      "Supported her father during the difficult years in Makkah",
      "The Prophet would stand up for her out of respect when she entered",
      "Her faith and patience during extreme poverty are legendary"
    ],
    quranReferences: ["33:33"],
    famousQuotes: [
      "The best of women are four: Maryam bint Imran, Asiya bint Muzahim, Khadijah bint Khuwaylid, and Fatimah bint Muhammad."
    ],
    personality: "Known for her deep devotion, patience in poverty, and the Prophet's special love for her. She is considered the most beloved person to the Prophet among women.",
    category: "Ahl al-Bayt"
  },
  {
    id: "salman_farsi",
    name: "Salman Al-Farsi",
    arabicName: "سلمان الفارسي",
    banglaName: "সালমান আল-ফারসী (রা.)",
    title: "Salman the Persian, Member of the Prophet's Household",
    birthYear: "568 CE",
    deathYear: "656 CE",
    tribe: "Persian (from Isfahan)",
    relationship: "Close companion, adopted into the Prophet's household",
    notableAchievements: [
      "Traveled from Persia to Arabia seeking the true religion",
      "Suggested digging a trench (khandaq) at the Battle of the Trench",
      "The Prophet said 'Salman is one of us, the people of the household'",
      "Served as governor of Al-Mada'in (Ctesiphon)",
      "Converted from Zoroastrianism to Christianity to Islam in his search for truth",
      "His life story spans multiple religions and civilizations"
    ],
    quranReferences: [],
    famousQuotes: [
      "I searched for the truth across many lands and religions until Allah guided me to the Prophet Muhammad."
    ],
    personality: "Known for his relentless search for truth, wisdom, humility despite his advanced learning, and strategic thinking. He represents the universal nature of Islam transcending national boundaries.",
    category: "Early Companions"
  },
  {
    id: "abdullah_ibn_masud",
    name: "Abdullah ibn Mas'ud",
    arabicName: "عبد الله بن مسعود",
    banglaName: "আবদুল্লাহ ইবনে মাসউদ (রা.)",
    title: "Master of Quran Recitation",
    birthYear: "594 CE",
    deathYear: "653 CE",
    tribe: "Banu Hudhail",
    relationship: "Close companion, personal attendant of the Prophet",
    notableAchievements: [
      "One of the first to recite the Quran publicly in Makkah",
      "The Prophet said 'Take the Quran from four: Ibn Masud, Salim, Muadh, and Ubayy'",
      "Served as the Prophet's personal attendant, carrying his shoes and walking stick",
      "Expert in Quran interpretation and Islamic jurisprudence",
      "His codex of the Quran was highly respected among the companions",
      "Sixth person to accept Islam"
    ],
    quranReferences: [],
    famousQuotes: [
      "The Prophet said about me: 'His legs will be heavier than Mount Uhud on the Day of Judgment.'"
    ],
    personality: "Known for his deep knowledge of the Quran, thin physical frame but immense spiritual weight, and devotion to learning directly from the Prophet.",
    category: "Scholars Among Companions"
  },
  {
    id: "musab_ibn_umayr",
    name: "Mus'ab ibn Umayr",
    arabicName: "مصعب بن عمير",
    banglaName: "মুসআব ইবনে উমাইর (রা.)",
    title: "The First Ambassador of Islam",
    birthYear: "594 CE",
    deathYear: "625 CE",
    tribe: "Quraysh (Banu Abd al-Dar)",
    relationship: "Companion and first envoy to Madinah",
    notableAchievements: [
      "First Muslim ambassador sent to Madinah to teach Islam",
      "Through his da'wah, most of Madinah accepted Islam before Hijrah",
      "Was from the wealthiest family in Makkah but gave up everything for Islam",
      "Martyred at the Battle of Uhud while carrying the Muslim banner",
      "His burial shroud was so short it could not cover his entire body",
      "Transformed from pampered youth to the most dedicated missionary"
    ],
    quranReferences: [],
    famousQuotes: [
      "He gave up the luxuries of Makkah and wore such patched clothes that the Prophet and companions wept seeing him."
    ],
    personality: "Known for his incredible sacrifice, persuasive da'wah skills, transformation from wealth to asceticism, and ultimate martyrdom. He exemplifies the power of faith to transform a person completely.",
    category: "Martyrs"
  },
  {
    id: "hamza",
    name: "Hamza ibn Abdul-Muttalib",
    arabicName: "حمزة بن عبد المطلب",
    banglaName: "হামযা ইবনে আবদুল মুত্তালিব (রা.)",
    title: "Asadullah wa Asad Rasulih (Lion of Allah and Lion of His Messenger)",
    birthYear: "570 CE",
    deathYear: "625 CE",
    tribe: "Quraysh (Banu Hashim)",
    relationship: "Uncle of the Prophet",
    notableAchievements: [
      "Given the title 'Chief of the Martyrs' (Sayyid ash-Shuhada)",
      "His acceptance of Islam strengthened the early Muslim community",
      "Brave warrior at the Battle of Badr - fought with two swords",
      "Martyred at the Battle of Uhud by Wahshi's spear",
      "The Prophet wept deeply upon seeing his mutilated body",
      "Known as one of the bravest Arabs of his time"
    ],
    quranReferences: [],
    famousQuotes: [
      "The Prophet said: 'The chief of the martyrs is Hamza ibn Abdul-Muttalib.'"
    ],
    personality: "Known for his extraordinary courage, physical strength, fierce loyalty to the Prophet, and love of justice. His conversion was initially motivated by tribal honor but deepened into genuine faith.",
    category: "Martyrs"
  },
  {
    id: "abu_dharr",
    name: "Abu Dharr Al-Ghifari",
    arabicName: "أبو ذر الغفاري",
    banglaName: "আবু যর আল-গিফারী (রা.)",
    title: "The Truthful Ascetic",
    birthYear: "Unknown",
    deathYear: "652 CE",
    tribe: "Banu Ghifar",
    relationship: "Early companion known for asceticism",
    notableAchievements: [
      "Fourth or fifth person to accept Islam",
      "The Prophet praised him as the most truthful person on earth",
      "Known for speaking truth to power, even after the Prophet's death",
      "Lived an extremely simple life, refusing wealth and luxury",
      "Criticized the wealth accumulation of some later rulers",
      "The Prophet compared his truthfulness to that of Isa ibn Maryam"
    ],
    quranReferences: [],
    famousQuotes: [
      "The Prophet said: 'The earth has not borne nor has the sky covered a man more truthful than Abu Dharr.'",
      "Two loaves of barley bread are enough for Abu Dharr."
    ],
    personality: "Known for his radical honesty, ascetic lifestyle, refusal to accumulate wealth, and courage in speaking truth to those in power. He represents the social justice dimension of Islam.",
    category: "Early Companions"
  }
];

// ============================================================
// ISLAMIC_HISTORY_TIMELINE - Major Events in Islamic History
// ============================================================
const ISLAMIC_HISTORY_TIMELINE = [
  { year: "570 CE", hijriYear: "~53 BH", event: "Birth of Prophet Muhammad (SAW)", banglaEvent: "নবী মুহাম্মাদ (সা.) এর জন্ম", category: "prophetic", significance: "The final prophet was born in Makkah in the Year of the Elephant" },
  { year: "576 CE", hijriYear: "~47 BH", event: "Death of Aminah, the Prophet's mother", banglaEvent: "আমিনা, নবীর মায়ের মৃত্যু", category: "prophetic", significance: "The Prophet became an orphan at a young age" },
  { year: "578 CE", hijriYear: "~45 BH", event: "Death of Abdul-Muttalib, the Prophet's grandfather", banglaEvent: "আবদুল মুত্তালিব, নবীর দাদার মৃত্যু", category: "prophetic", significance: "Abu Talib became the Prophet's guardian" },
  { year: "595 CE", hijriYear: "~28 BH", event: "Marriage of Muhammad to Khadijah", banglaEvent: "মুহাম্মাদ ও খাদিজার বিবাহ", category: "prophetic", significance: "Khadijah was a wealthy merchant who proposed to Muhammad" },
  { year: "610 CE", hijriYear: "~13 BH", event: "First revelation of the Quran in Cave Hira", banglaEvent: "হেরা গুহায় কুরআনের প্রথম ওহী", category: "revelation", significance: "Angel Jibreel revealed the first verses of Surah Al-Alaq" },
  { year: "613 CE", hijriYear: "~10 BH", event: "Public preaching of Islam begins", banglaEvent: "ইসলামের প্রকাশ্য প্রচার শুরু", category: "prophetic", significance: "After 3 years of secret da'wah, Islam was proclaimed publicly" },
  { year: "615 CE", hijriYear: "~8 BH", event: "First migration to Abyssinia", banglaEvent: "আবিসিনিয়ায় প্রথম হিজরত", category: "migration", significance: "Muslims sought refuge with the just Christian king Negus" },
  { year: "619 CE", hijriYear: "~4 BH", event: "Year of Sorrow - Deaths of Khadijah and Abu Talib", banglaEvent: "দুঃখের বছর - খাদিজা ও আবু তালিবের মৃত্যু", category: "prophetic", significance: "The Prophet lost his two greatest supporters in the same year" },
  { year: "620 CE", hijriYear: "~3 BH", event: "The Night Journey and Ascension (Isra and Mi'raj)", banglaEvent: "ইসরা ও মিরাজ (রাত্রি যাত্রা ও ঊর্ধ্বারোহণ)", category: "miraculous", significance: "The Prophet traveled from Makkah to Jerusalem and ascended through the heavens. Five daily prayers were ordained." },
  { year: "622 CE", hijriYear: "1 AH", event: "The Hijrah - Migration to Madinah", banglaEvent: "হিজরত - মদিনায় স্থানান্তর", category: "migration", significance: "The beginning of the Islamic calendar and the establishment of the first Muslim state" },
  { year: "622 CE", hijriYear: "1 AH", event: "Constitution of Madinah established", banglaEvent: "মদিনা সনদ প্রতিষ্ঠিত", category: "governance", significance: "First written constitution establishing a multi-religious state with equal rights" },
  { year: "624 CE", hijriYear: "2 AH", event: "Battle of Badr - First major battle of Islam", banglaEvent: "বদরের যুদ্ধ - ইসলামের প্রথম বড় যুদ্ধ", category: "military", significance: "313 Muslims defeated over 1,000 Quraysh warriors with divine support" },
  { year: "624 CE", hijriYear: "2 AH", event: "Change of Qiblah from Jerusalem to Makkah", banglaEvent: "কিবলা পরিবর্তন - জেরুজালেম থেকে মক্কা", category: "worship", significance: "Muslims began facing the Kaaba in Makkah during prayer" },
  { year: "625 CE", hijriYear: "3 AH", event: "Battle of Uhud", banglaEvent: "উহুদের যুদ্ধ", category: "military", significance: "A test of faith where Muslims initially won but then suffered losses due to disobedience" },
  { year: "627 CE", hijriYear: "5 AH", event: "Battle of the Trench (Khandaq)", banglaEvent: "খন্দকের যুদ্ধ", category: "military", significance: "Muslims dug a trench to defend Madinah against a confederate army of 10,000" },
  { year: "628 CE", hijriYear: "6 AH", event: "Treaty of Hudaybiyyah", banglaEvent: "হুদায়বিয়ার সন্ধি", category: "diplomacy", significance: "A peace treaty that the Quran called a 'clear victory' and allowed Islam to spread peacefully" },
  { year: "629 CE", hijriYear: "7 AH", event: "Battle of Khaybar", banglaEvent: "খায়বারের যুদ্ধ", category: "military", significance: "Muslim victory over the Jewish fortresses of Khaybar" },
  { year: "630 CE", hijriYear: "8 AH", event: "Conquest of Makkah (Fathu Makkah)", banglaEvent: "মক্কা বিজয় (ফাতহু মাক্কাহ)", category: "military", significance: "The Prophet entered Makkah peacefully with 10,000 companions and cleansed the Kaaba of idols" },
  { year: "630 CE", hijriYear: "8 AH", event: "Battle of Hunayn", banglaEvent: "হুনায়নের যুদ্ধ", category: "military", significance: "Victory after initial setback taught reliance on Allah, not on numbers" },
  { year: "631 CE", hijriYear: "9 AH", event: "Year of Delegations (Am al-Wufud)", banglaEvent: "প্রতিনিধি দলের বছর", category: "diplomacy", significance: "Tribes from across Arabia came to accept Islam" },
  { year: "632 CE", hijriYear: "10 AH", event: "The Farewell Pilgrimage (Hajjatul Wada)", banglaEvent: "বিদায় হজ্জ (হাজ্জাতুল ওয়াদা)", category: "worship", significance: "The Prophet's final Hajj where he delivered his farewell sermon on human rights and equality" },
  { year: "632 CE", hijriYear: "11 AH", event: "Death of Prophet Muhammad (SAW)", banglaEvent: "নবী মুহাম্মাদ (সা.) এর ইন্তেকাল", category: "prophetic", significance: "The Prophet passed away in Madinah at age 63, completing his mission" },
  { year: "632-634 CE", hijriYear: "11-13 AH", event: "Caliphate of Abu Bakr", banglaEvent: "আবু বকরের খেলাফত", category: "governance", significance: "Wars of Apostasy fought, Quran compiled into one manuscript" },
  { year: "634-644 CE", hijriYear: "13-23 AH", event: "Caliphate of Umar", banglaEvent: "উমরের খেলাফত", category: "governance", significance: "Rapid expansion of Islam to Persia, Syria, Egypt. Hijri calendar established." },
  { year: "637 CE", hijriYear: "16 AH", event: "Conquest of Jerusalem", banglaEvent: "জেরুজালেম বিজয়", category: "military", significance: "Umar received the keys of Jerusalem and guaranteed safety to all religious communities" },
  { year: "644-656 CE", hijriYear: "23-35 AH", event: "Caliphate of Uthman", banglaEvent: "উসমানের খেলাফত", category: "governance", significance: "Quran standardized into the Uthmanic codex, navy established" },
  { year: "656-661 CE", hijriYear: "35-40 AH", event: "Caliphate of Ali", banglaEvent: "আলীর খেলাফত", category: "governance", significance: "Period of internal challenges, Battle of the Camel and Siffin" },
  { year: "661-750 CE", hijriYear: "41-132 AH", event: "Umayyad Caliphate", banglaEvent: "উমাইয়া খেলাফত", category: "governance", significance: "Islam spread from Spain to Central Asia. Arabic became the administrative language." },
  { year: "680 CE", hijriYear: "61 AH", event: "Battle of Karbala - Martyrdom of Husayn", banglaEvent: "কারবালার যুদ্ধ - হুসাইনের শাহাদাত", category: "military", significance: "A pivotal event in Islamic history that shaped Muslim consciousness about justice and sacrifice" },
  { year: "711 CE", hijriYear: "92 AH", event: "Muslims enter Spain (Al-Andalus)", banglaEvent: "মুসলমানরা স্পেনে (আল-আন্দালুস) প্রবেশ", category: "expansion", significance: "Beginning of 800 years of Islamic civilization in the Iberian Peninsula" },
  { year: "750-1258 CE", hijriYear: "132-656 AH", event: "Abbasid Caliphate", banglaEvent: "আব্বাসীয় খেলাফত", category: "governance", significance: "Golden Age of Islam: advances in science, medicine, mathematics, philosophy, and arts" },
  { year: "762 CE", hijriYear: "145 AH", event: "Baghdad founded as capital of Abbasid Caliphate", banglaEvent: "আব্বাসীয় খেলাফতের রাজধানী হিসেবে বাগদাদ প্রতিষ্ঠিত", category: "governance", significance: "Baghdad became the greatest center of learning in the medieval world" },
  { year: "830 CE", hijriYear: "215 AH", event: "House of Wisdom (Bayt al-Hikmah) established", banglaEvent: "বায়তুল হিকমাহ (জ্ঞানের ঘর) প্রতিষ্ঠিত", category: "scholarship", significance: "Major center of translation and scholarship that preserved Greek, Persian, and Indian knowledge" },
  { year: "1099 CE", hijriYear: "492 AH", event: "First Crusade captures Jerusalem", banglaEvent: "প্রথম ক্রুসেড জেরুজালেম দখল করে", category: "military", significance: "Beginning of the Crusades that lasted nearly 200 years" },
  { year: "1187 CE", hijriYear: "583 AH", event: "Salahuddin recaptures Jerusalem", banglaEvent: "সালাহুদ্দিন জেরুজালেম পুনরুদ্ধার করেন", category: "military", significance: "Salahuddin's chivalrous conduct set a standard for mercy in warfare" },
  { year: "1258 CE", hijriYear: "656 AH", event: "Mongol destruction of Baghdad", banglaEvent: "মঙ্গোলদের বাগদাদ ধ্বংস", category: "military", significance: "End of the Abbasid Caliphate and destruction of the House of Wisdom's library" },
  { year: "1453 CE", hijriYear: "857 AH", event: "Ottoman conquest of Constantinople", banglaEvent: "উসমানীয়দের কনস্টান্টিনোপল বিজয়", category: "military", significance: "Sultan Mehmed II fulfilled the Prophet's prophecy about the conquest of Constantinople" },
  { year: "1492 CE", hijriYear: "897 AH", event: "Fall of Granada - End of Muslim rule in Spain", banglaEvent: "গ্রানাডার পতন - স্পেনে মুসলিম শাসনের সমাপ্তি", category: "governance", significance: "End of 800 years of Islamic civilization in Al-Andalus" },
  { year: "1517-1924 CE", hijriYear: "923-1342 AH", event: "Ottoman Caliphate", banglaEvent: "উসমানীয় খেলাফত", category: "governance", significance: "One of the longest-lasting empires in history, spanning three continents" }
];

// ============================================================
// VERSE_OF_DAY_EXTENDED - Extended Collection for Daily Rotation
// ============================================================
const VERSE_OF_DAY_EXTENDED = [
  { surah: 2, ayah: 152, arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", translation: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.", banglaTranslation: "অতএব তোমরা আমাকে স্মরণ কর, আমিও তোমাদের স্মরণ করব। আর তোমরা আমার কৃতজ্ঞতা প্রকাশ কর এবং অকৃতজ্ঞ হয়ো না।", theme: "Remembrance" },
  { surah: 2, ayah: 186, arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", translation: "And when My servants ask you concerning Me - indeed I am near.", banglaTranslation: "আর আমার বান্দারা যখন তোমাকে আমার সম্পর্কে জিজ্ঞাসা করে, তখন আমি তো নিকটেই।", theme: "Closeness of Allah" },
  { surah: 2, ayah: 216, arabic: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ", translation: "Perhaps you hate a thing and it is good for you.", banglaTranslation: "হতে পারে তোমরা কোনো কিছু অপছন্দ করো অথচ তা তোমাদের জন্য কল্যাণকর।", theme: "Trust in Allah" },
  { surah: 2, ayah: 261, arabic: "مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ", translation: "The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes.", banglaTranslation: "যারা আল্লাহর পথে তাদের সম্পদ ব্যয় করে তাদের উদাহরণ একটি বীজের মতো যা সাতটি শীষ উৎপন্ন করে।", theme: "Charity" },
  { surah: 2, ayah: 286, arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", translation: "Allah does not burden a soul beyond that it can bear.", banglaTranslation: "আল্লাহ কোনো আত্মাকে তার সাধ্যের বাইরে কষ্ট দেন না।", theme: "Mercy" },
  { surah: 3, ayah: 8, arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا", translation: "Our Lord, let not our hearts deviate after You have guided us.", banglaTranslation: "হে আমাদের রব, আমাদের হিদায়াত দানের পর আমাদের অন্তরকে বিপথগামী করবেন না।", theme: "Guidance" },
  { surah: 3, ayah: 26, arabic: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ", translation: "Say: O Allah, Owner of Sovereignty, You give sovereignty to whom You will.", banglaTranslation: "বল, হে আল্লাহ, সার্বভৌমত্বের মালিক, তুমি যাকে ইচ্ছা সার্বভৌমত্ব দাও।", theme: "Sovereignty" },
  { surah: 3, ayah: 139, arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ", translation: "So do not weaken and do not grieve, and you will be superior.", banglaTranslation: "তোমরা দুর্বল হয়ো না এবং দুঃখিত হয়ো না, তোমরাই বিজয়ী।", theme: "Encouragement" },
  { surah: 3, ayah: 159, arabic: "فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ", translation: "And when you have decided, then rely upon Allah.", banglaTranslation: "অতঃপর যখন তুমি সংকল্পবদ্ধ হও, তখন আল্লাহর উপর তাওয়াক্কুল কর।", theme: "Tawakkul" },
  { surah: 3, ayah: 185, arabic: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ", translation: "Every soul will taste death.", banglaTranslation: "প্রতিটি প্রাণ মৃত্যুর স্বাদ গ্রহণ করবে।", theme: "Mortality" },
  { surah: 4, ayah: 36, arabic: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا", translation: "Worship Allah and associate nothing with Him, and to parents do good.", banglaTranslation: "আল্লাহর ইবাদত কর এবং তাঁর সাথে কাউকে শরিক করো না এবং পিতামাতার সাথে সদ্ব্যবহার কর।", theme: "Worship & Parents" },
  { surah: 4, ayah: 135, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ", translation: "O you who believe, be persistently standing firm in justice.", banglaTranslation: "হে মুমিনগণ, তোমরা ইনসাফের উপর দৃঢ়ভাবে প্রতিষ্ঠিত থাক।", theme: "Justice" },
  { surah: 5, ayah: 8, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ", translation: "O you who believe, be persistently standing firm for Allah as witnesses in justice.", banglaTranslation: "হে মুমিনগণ, আল্লাহর জন্য দৃঢ়ভাবে দাঁড়াও, ন্যায়ের সাক্ষী হিসেবে।", theme: "Justice" },
  { surah: 5, ayah: 32, arabic: "مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا", translation: "Whoever kills a soul - it is as if he had slain mankind entirely.", banglaTranslation: "যে কেউ একজন মানুষকে হত্যা করে - সে যেন সমগ্র মানবজাতিকে হত্যা করে।", theme: "Sanctity of Life" },
  { surah: 6, ayah: 59, arabic: "وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ", translation: "And with Him are the keys of the unseen; none knows them except Him.", banglaTranslation: "এবং তাঁর কাছেই অদৃশ্যের চাবি; তিনি ছাড়া কেউ তা জানে না।", theme: "Divine Knowledge" },
  { surah: 7, ayah: 56, arabic: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا", translation: "And cause not corruption upon the earth after its reformation.", banglaTranslation: "পৃথিবীতে তার সংস্কারের পর বিপর্যয় ঘটাবে না।", theme: "Environmental Ethics" },
  { surah: 8, ayah: 46, arabic: "وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا", translation: "And obey Allah and His Messenger, and do not dispute lest you lose courage.", banglaTranslation: "আল্লাহ ও তাঁর রাসূলের আনুগত্য কর এবং পরস্পর বিবাদ করো না, তাহলে তোমরা সাহস হারাবে।", theme: "Unity" },
  { surah: 9, ayah: 51, arabic: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا", translation: "Say: Never will we be struck except by what Allah has decreed for us.", banglaTranslation: "বল, আল্লাহ আমাদের জন্য যা নির্ধারণ করেছেন তা ছাড়া কিছুই আমাদের আঘাত করবে না।", theme: "Qadr" },
  { surah: 10, ayah: 62, arabic: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", translation: "Unquestionably, for the allies of Allah there will be no fear, nor will they grieve.", banglaTranslation: "জেনে রাখ, আল্লাহর বন্ধুদের কোনো ভয় নেই এবং তারা দুঃখিতও হবে না।", theme: "Divine Friendship" },
  { surah: 11, ayah: 6, arabic: "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا", translation: "And there is no creature on earth but that upon Allah is its provision.", banglaTranslation: "পৃথিবীতে এমন কোনো জীব নেই যার রিযিকের দায়িত্ব আল্লাহর উপর নেই।", theme: "Provision" },
  { surah: 12, ayah: 87, arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ", translation: "Do not despair of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.", banglaTranslation: "আল্লাহর রহমত থেকে নিরাশ হয়ো না। নিশ্চয়ই কাফের সম্প্রদায় ছাড়া কেউ আল্লাহর রহমত থেকে নিরাশ হয় না।", theme: "Hope" },
  { surah: 13, ayah: 11, arabic: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ", translation: "Indeed, Allah will not change the condition of a people until they change what is in themselves.", banglaTranslation: "নিশ্চয়ই আল্লাহ কোনো জাতির অবস্থা পরিবর্তন করেন না যতক্ষণ না তারা নিজেদের অবস্থা পরিবর্তন করে।", theme: "Self-Improvement" },
  { surah: 13, ayah: 28, arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", translation: "Unquestionably, by the remembrance of Allah hearts are assured.", banglaTranslation: "জেনে রাখ, আল্লাহর স্মরণেই অন্তর প্রশান্তি লাভ করে।", theme: "Remembrance" },
  { surah: 14, ayah: 7, arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ", translation: "If you are grateful, I will surely increase you.", banglaTranslation: "যদি তোমরা কৃতজ্ঞ হও, আমি অবশ্যই তোমাদের বাড়িয়ে দেব।", theme: "Gratitude" },
  { surah: 16, ayah: 90, arabic: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ", translation: "Indeed, Allah orders justice and good conduct and giving to relatives.", banglaTranslation: "নিশ্চয়ই আল্লাহ ন্যায়বিচার, সদাচার ও আত্মীয়দের দানের আদেশ দেন।", theme: "Justice & Kindness" },
  { surah: 16, ayah: 125, arabic: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ", translation: "Invite to the way of your Lord with wisdom and good instruction.", banglaTranslation: "তোমার রবের পথে আহ্বান কর হিকমত ও সুন্দর উপদেশের মাধ্যমে।", theme: "Da'wah" },
  { surah: 17, ayah: 23, arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا", translation: "And your Lord has decreed that you not worship except Him, and to parents, good treatment.", banglaTranslation: "তোমার রব আদেশ দিয়েছেন যে, তোমরা তাঁকে ছাড়া অন্য কারো ইবাদত করবে না এবং পিতামাতার সাথে সদ্ব্যবহার করবে।", theme: "Parents" },
  { surah: 18, ayah: 10, arabic: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا", translation: "Our Lord, grant us from Yourself mercy and prepare for us right guidance.", banglaTranslation: "হে আমাদের রব, আমাদের তোমার পক্ষ থেকে রহমত দান কর এবং আমাদের জন্য সঠিক পথ প্রস্তুত কর।", theme: "Dua" },
  { surah: 20, ayah: 114, arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا", translation: "And say: My Lord, increase me in knowledge.", banglaTranslation: "এবং বল, হে আমার রব, আমার জ্ঞান বৃদ্ধি করুন।", theme: "Knowledge" },
  { surah: 21, ayah: 87, arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.", banglaTranslation: "তুমি ছাড়া কোনো ইলাহ নেই; তুমি পবিত্র। নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত ছিলাম।", theme: "Repentance" },
  { surah: 23, ayah: 115, arabic: "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا", translation: "Did you think that We created you uselessly?", banglaTranslation: "তোমরা কি মনে করেছিলে যে আমি তোমাদের অনর্থক সৃষ্টি করেছি?", theme: "Purpose" },
  { surah: 24, ayah: 35, arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", translation: "Allah is the Light of the heavens and the earth.", banglaTranslation: "আল্লাহ আসমানসমূহ ও যমীনের নূর।", theme: "Divine Light" },
  { surah: 25, ayah: 63, arabic: "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا", translation: "And the servants of the Most Merciful are those who walk upon the earth easily.", banglaTranslation: "এবং রহমানের বান্দা তারা যারা পৃথিবীতে নম্রভাবে চলাফেরা করে।", theme: "Humility" },
  { surah: 29, ayah: 2, arabic: "أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ", translation: "Do the people think they will be left to say 'We believe' and not be tested?", banglaTranslation: "মানুষ কি মনে করে যে তারা শুধু 'আমরা ঈমান এনেছি' বললেই ছেড়ে দেওয়া হবে, পরীক্ষা করা হবে না?", theme: "Tests of Faith" },
  { surah: 29, ayah: 69, arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا", translation: "And those who strive for Us - We will surely guide them to Our ways.", banglaTranslation: "যারা আমাদের পথে সংগ্রাম করে, আমরা অবশ্যই তাদের আমাদের পথে পরিচালিত করব।", theme: "Striving" },
  { surah: 31, ayah: 17, arabic: "يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ", translation: "O my son, establish prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you.", banglaTranslation: "হে আমার প্রিয় পুত্র, সালাত কায়েম কর, সৎ কাজের আদেশ দাও, অসৎ কাজে নিষেধ কর এবং তোমার উপর যা আসে তাতে ধৈর্য ধর।", theme: "Parental Advice" },
  { surah: 33, ayah: 21, arabic: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ", translation: "There has certainly been for you in the Messenger of Allah an excellent pattern.", banglaTranslation: "নিশ্চয়ই তোমাদের জন্য রাসূলুল্লাহর মধ্যে রয়েছে উত্তম আদর্শ।", theme: "Following the Prophet" },
  { surah: 33, ayah: 56, arabic: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ", translation: "Indeed, Allah confers blessing upon the Prophet, and His angels.", banglaTranslation: "নিশ্চয়ই আল্লাহ ও তাঁর ফেরেশতাগণ নবীর প্রতি দরূদ পাঠান।", theme: "Salawat" },
  { surah: 39, ayah: 10, arabic: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ", translation: "Indeed, the patient will be given their reward without account.", banglaTranslation: "নিশ্চয়ই ধৈর্যশীলদের তাদের প্রতিদান দেওয়া হবে হিসাব ছাড়াই।", theme: "Patience" },
  { surah: 39, ayah: 53, arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ", translation: "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah.", banglaTranslation: "বল, হে আমার বান্দারা যারা নিজেদের প্রতি অবিচার করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না।", theme: "Hope & Mercy" },
  { surah: 40, ayah: 60, arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ", translation: "And your Lord says: Call upon Me; I will respond to you.", banglaTranslation: "তোমাদের রব বলেন, আমাকে ডাক, আমি তোমাদের সাড়া দেব।", theme: "Dua" },
  { surah: 41, ayah: 34, arabic: "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ", translation: "Good and evil are not equal. Repel evil by that which is better.", banglaTranslation: "ভালো ও মন্দ সমান নয়। যা উত্তম তা দিয়ে মন্দকে প্রতিহত কর।", theme: "Good Character" },
  { surah: 42, ayah: 30, arabic: "وَمَا أَصَابَكُم مِّن مُّصِيبَةٍ فَبِمَا كَسَبَتْ أَيْدِيكُمْ وَيَعْفُو عَن كَثِيرٍ", translation: "And whatever strikes you of disaster - it is for what your hands have earned; but He pardons much.", banglaTranslation: "তোমাদের যে বিপদ আসে তা তোমাদের কৃতকর্মের ফলে; এবং তিনি অনেক কিছু ক্ষমা করেন।", theme: "Self-Accountability" },
  { surah: 49, ayah: 10, arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ", translation: "The believers are but brothers, so make settlement between your brothers.", banglaTranslation: "মুমিনরা তো পরস্পর ভাই, অতএব তোমাদের ভাইদের মধ্যে সন্ধি স্থাপন কর।", theme: "Brotherhood" },
  { surah: 49, ayah: 12, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ", translation: "O you who believe, avoid much suspicion.", banglaTranslation: "হে মুমিনগণ, বেশিরভাগ সন্দেহ থেকে বিরত থাক।", theme: "Social Ethics" },
  { surah: 49, ayah: 13, arabic: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا", translation: "O mankind, We have created you from male and female and made you peoples and tribes that you may know one another.", banglaTranslation: "হে মানবজাতি, আমি তোমাদের নারী ও পুরুষ থেকে সৃষ্টি করেছি এবং জাতি ও গোত্রে বিভক্ত করেছি যাতে তোমরা পরস্পরকে চিনতে পার।", theme: "Equality" },
  { surah: 55, ayah: 13, arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", translation: "So which of the favors of your Lord would you deny?", banglaTranslation: "তবে তোমরা তোমাদের রবের কোন অনুগ্রহকে অস্বীকার করবে?", theme: "Gratitude" },
  { surah: 57, ayah: 4, arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ", translation: "And He is with you wherever you are.", banglaTranslation: "এবং তোমরা যেখানেই থাক না কেন তিনি তোমাদের সাথে আছেন।", theme: "Divine Presence" },
  { surah: 59, ayah: 18, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ", translation: "O you who believe, fear Allah. And let every soul look to what it has put forth for tomorrow.", banglaTranslation: "হে মুমিনগণ, আল্লাহকে ভয় কর এবং প্রতিটি আত্মা দেখুক সে আগামীর জন্য কী প্রেরণ করেছে।", theme: "Self-Reflection" },
  { surah: 64, ayah: 16, arabic: "فَاتَّقُوا اللَّهَ مَا اسْتَطَعْتُمْ وَاسْمَعُوا وَأَطِيعُوا", translation: "So fear Allah as much as you are able and listen and obey.", banglaTranslation: "যথাসাধ্য আল্লাহকে ভয় কর এবং শ্রবণ কর ও আনুগত্য কর।", theme: "Taqwa" },
  { surah: 65, ayah: 2, arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", translation: "And whoever fears Allah - He will make for him a way out.", banglaTranslation: "যে আল্লাহকে ভয় করে, তিনি তার জন্য পথ বের করে দেন।", theme: "Taqwa & Relief" },
  { surah: 65, ayah: 3, arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", translation: "And whoever relies upon Allah - then He is sufficient for him.", banglaTranslation: "যে আল্লাহর উপর তাওয়াক্কুল করে, তিনিই তার জন্য যথেষ্ট।", theme: "Reliance on Allah" },
  { surah: 67, ayah: 2, arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا", translation: "He who created death and life to test you as to which of you is best in deed.", banglaTranslation: "যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন তোমাদের পরীক্ষা করতে - কে কর্মে উত্তম।", theme: "Purpose of Life" },
  { surah: 73, ayah: 8, arabic: "وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا", translation: "And remember the name of your Lord and devote yourself to Him with complete devotion.", banglaTranslation: "তোমার রবের নাম স্মরণ কর এবং সম্পূর্ণ নিবেদন সহকারে তাঁর প্রতি একনিষ্ঠ হও।", theme: "Devotion" },
  { surah: 94, ayah: 5, arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "For indeed, with hardship will be ease.", banglaTranslation: "নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে।", theme: "Hope" },
  { surah: 94, ayah: 6, arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "Indeed, with hardship will be ease.", banglaTranslation: "নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে।", theme: "Hope (Repeated)" },
  { surah: 103, ayah: 1, arabic: "وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ", translation: "By time, indeed mankind is in loss.", banglaTranslation: "সময়ের শপথ, নিশ্চয়ই মানুষ ক্ষতিতে আছে।", theme: "Time" },
  { surah: 112, ayah: 1, arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", translation: "Say: He is Allah, the One.", banglaTranslation: "বল, তিনি আল্লাহ, এক।", theme: "Tawheed" }
];

// ============================================================
// ISLAMIC_ETHICS - Ethical Teachings from Quran and Sunnah
// ============================================================
const ISLAMIC_ETHICS = [
  {
    id: "ethics_truthfulness",
    title: "Truthfulness (As-Sidq)",
    arabicTitle: "الصدق",
    banglaTitle: "সততা (আস-সিদক)",
    description: "Truthfulness is one of the most fundamental ethical principles in Islam. It encompasses truthfulness in speech, action, intention, and in fulfilling promises. The Prophet said that truthfulness leads to righteousness, and righteousness leads to Paradise.",
    banglaDescription: "সততা ইসলামের সবচেয়ে মৌলিক নৈতিক নীতিগুলির একটি। এটি কথা, কাজ, নিয়ত এবং প্রতিশ্রুতি পূরণে সততাকে অন্তর্ভুক্ত করে।",
    quranVerses: ["9:119", "33:35", "39:33"],
    hadithReferences: ["A person keeps telling the truth until he is recorded with Allah as truthful. (Muslim)"],
    category: "personal",
    oppositeVice: "Lying (Al-Kidhb)",
    practicalSteps: [
      "Always speak the truth, even when it is against yourself",
      "Be truthful in business transactions",
      "Keep your promises and commitments",
      "Avoid exaggeration and embellishment",
      "Be honest in your intentions and motivations"
    ]
  },
  {
    id: "ethics_justice",
    title: "Justice (Al-Adl)",
    arabicTitle: "العدل",
    banglaTitle: "ন্যায়বিচার (আল-আদল)",
    description: "Justice is a cornerstone of Islamic ethics, commanding fairness in all dealings regardless of personal relationships. The Quran commands justice even when dealing with enemies, and warns against letting hatred lead to injustice.",
    banglaDescription: "ন্যায়বিচার ইসলামী নৈতিকতার একটি মূল স্তম্ভ, ব্যক্তিগত সম্পর্ক নির্বিশেষে সকল লেনদেনে ন্যায্যতার আদেশ দেয়।",
    quranVerses: ["4:135", "5:8", "16:90", "49:9"],
    hadithReferences: ["The just will be seated upon pulpits of light on the Day of Resurrection. (Muslim)"],
    category: "social",
    oppositeVice: "Injustice (Az-Zulm)",
    practicalSteps: [
      "Treat all people fairly regardless of status or relationship",
      "Stand up as witnesses for justice even against yourself or family",
      "Do not let personal dislike lead you to be unjust",
      "Support the oppressed against the oppressor",
      "Be fair in dividing resources and opportunities"
    ]
  },
  {
    id: "ethics_patience",
    title: "Patience (As-Sabr)",
    arabicTitle: "الصبر",
    banglaTitle: "ধৈর্য (আস-সবর)",
    description: "Patience in Islam has three dimensions: patience in obeying Allah, patience in refraining from sin, and patience when facing hardship. The Quran mentions patience over 90 times and promises unlimited reward for those who are patient.",
    banglaDescription: "ইসলামে ধৈর্যের তিনটি মাত্রা রয়েছে: আল্লাহর আনুগত্যে ধৈর্য, পাপ থেকে বিরত থাকায় ধৈর্য এবং কষ্টের মুখোমুখি হলে ধৈর্য।",
    quranVerses: ["2:153", "3:200", "39:10", "103:3"],
    hadithReferences: ["Patience is a light. (Muslim)", "No one is given a gift better and more comprehensive than patience. (Bukhari & Muslim)"],
    category: "personal",
    oppositeVice: "Impatience and Despair (Al-Jaza' wal-Ya's)",
    practicalSteps: [
      "Remember that every hardship is a test that purifies sins",
      "Seek comfort in prayer and Quran recitation during difficulties",
      "Practice gratitude even during challenging times",
      "Avoid making hasty decisions in moments of distress",
      "Remember that the reward for patience is without limit"
    ]
  },
  {
    id: "ethics_gratitude",
    title: "Gratitude (Ash-Shukr)",
    arabicTitle: "الشكر",
    banglaTitle: "কৃতজ্ঞতা (আশ-শুকর)",
    description: "Gratitude in Islam is expressed through the heart (recognizing blessings), the tongue (praising Allah), and the limbs (using blessings in obedience). Allah promises to increase blessings for those who are grateful.",
    banglaDescription: "ইসলামে কৃতজ্ঞতা অন্তর দিয়ে (নিয়ামত স্বীকার), জিহ্বা দিয়ে (আল্লাহর প্রশংসা) এবং অঙ্গ-প্রত্যঙ্গ দিয়ে (আনুগত্যে নিয়ামত ব্যবহার) প্রকাশ করা হয়।",
    quranVerses: ["14:7", "2:152", "31:12", "54:35"],
    hadithReferences: ["He who does not thank people does not thank Allah. (Ahmad, Tirmidhi)"],
    category: "personal",
    oppositeVice: "Ingratitude (Al-Kufran)",
    practicalSteps: [
      "Say Alhamdulillah frequently throughout the day",
      "Keep a gratitude journal noting daily blessings",
      "Thank people who help you as a way of thanking Allah",
      "Use your blessings in ways that please Allah",
      "Never compare your blessings with those who have more"
    ]
  },
  {
    id: "ethics_humility",
    title: "Humility (At-Tawadu)",
    arabicTitle: "التواضع",
    banglaTitle: "বিনয় (আত-তাওয়াদু)",
    description: "Humility is being grounded in the awareness that all good comes from Allah. It means not considering yourself superior to others, walking gently on the earth, and treating all people with respect regardless of their social standing.",
    banglaDescription: "বিনয় হলো এই সচেতনতায় প্রতিষ্ঠিত থাকা যে সকল ভালো আল্লাহর কাছ থেকে আসে। এটি নিজেকে অন্যদের চেয়ে শ্রেষ্ঠ মনে না করা এবং সকলের সাথে সম্মানের সাথে আচরণ করা।",
    quranVerses: ["25:63", "31:18-19", "17:37", "26:215"],
    hadithReferences: ["No one who has an atom's weight of arrogance in his heart will enter Paradise. (Muslim)"],
    category: "personal",
    oppositeVice: "Arrogance (Al-Kibr)",
    practicalSteps: [
      "Remember your origin - created from dust and water",
      "Attribute all success and talents to Allah's grace",
      "Sit, eat, and interact with people of all social classes",
      "Accept criticism gracefully and seek to improve",
      "Lower your wing to the believers (be gentle)"
    ]
  },
  {
    id: "ethics_generosity",
    title: "Generosity (Al-Karam)",
    arabicTitle: "الكرم",
    banglaTitle: "দানশীলতা (আল-কারাম)",
    description: "Generosity in Islam extends beyond charity to include generosity of spirit, time, knowledge, and kindness. The Prophet was the most generous of all people, especially during Ramadan. The Quran describes spending in Allah's cause as a loan to Allah that He will multiply.",
    banglaDescription: "ইসলামে দানশীলতা দান-সদকার বাইরে মনের উদারতা, সময়, জ্ঞান ও সদয়তায় প্রসারিত। নবী সকল মানুষের মধ্যে সবচেয়ে দানশীল ছিলেন।",
    quranVerses: ["2:261", "2:274", "3:92", "76:8-9"],
    hadithReferences: ["The upper hand (giving) is better than the lower hand (receiving). (Bukhari & Muslim)"],
    category: "social",
    oppositeVice: "Miserliness (Al-Bukhl)",
    practicalSteps: [
      "Give regularly in charity, even if small amounts",
      "Share food with neighbors and those in need",
      "Give gifts to strengthen relationships",
      "Volunteer your time and skills for community service",
      "Be generous in forgiving others' mistakes"
    ]
  },
  {
    id: "ethics_forgiveness",
    title: "Forgiveness (Al-Afw)",
    arabicTitle: "العفو",
    banglaTitle: "ক্ষমা (আল-আফও)",
    description: "Islam strongly encourages forgiveness, describing those who forgive as closest to ihsan (excellence). The Quran states that whoever forgives and makes reconciliation, their reward is with Allah. The Prophet forgave even his worst enemies upon the conquest of Makkah.",
    banglaDescription: "ইসলাম দৃঢ়ভাবে ক্ষমাকে উৎসাহিত করে, যারা ক্ষমা করে তাদের ইহসান (শ্রেষ্ঠত্ব) এর নিকটতম বলে বর্ণনা করে। নবী মক্কা বিজয়ে তাঁর সবচেয়ে খারাপ শত্রুদেরও ক্ষমা করেছিলেন।",
    quranVerses: ["42:40", "42:43", "3:134", "7:199", "24:22"],
    hadithReferences: ["Be merciful to others and you will receive mercy. Forgive others and Allah will forgive you. (Ahmad)"],
    category: "social",
    oppositeVice: "Vindictiveness (Al-Intiqam)",
    practicalSteps: [
      "Make dua for those who have wronged you",
      "Remember that forgiving others earns Allah's forgiveness",
      "Let go of grudges and resentments actively",
      "Practice empathy - try to understand others' perspectives",
      "Respond to harshness with gentle words"
    ]
  },
  {
    id: "ethics_honoring_parents",
    title: "Honoring Parents (Birrul Walidayn)",
    arabicTitle: "بر الوالدين",
    banglaTitle: "পিতামাতার প্রতি সদ্ব্যবহার (বিররুল ওয়ালিদাইন)",
    description: "The Quran places honoring parents immediately after the command to worship Allah, indicating its supreme importance. It specifically commands gentleness toward aging parents, prohibiting even saying 'uff' to them. The mother is given three times more right to good companionship than the father.",
    banglaDescription: "কুরআন আল্লাহর ইবাদতের আদেশের পরপরই পিতামাতাকে সম্মান করার কথা রাখে, এটির সর্বোচ্চ গুরুত্ব নির্দেশ করে। মাকে পিতার চেয়ে তিনগুণ বেশি সঙ্গের অধিকার দেওয়া হয়েছে।",
    quranVerses: ["17:23-24", "31:14", "46:15", "29:8", "4:36"],
    hadithReferences: ["Paradise lies at the feet of the mother. (Nasa'i)", "A man asked: O Messenger of Allah, who is most deserving of my good company? He said: Your mother, your mother, your mother, then your father. (Bukhari & Muslim)"],
    category: "family",
    oppositeVice: "Disobedience to Parents (Aq al-Walidayn)",
    practicalSteps: [
      "Speak to parents with utmost respect and gentleness",
      "Never raise your voice or show frustration with them",
      "Serve their needs before they have to ask",
      "Make dua for them regularly, especially after they pass away",
      "Visit them frequently and call them if you live far away"
    ]
  },
  {
    id: "ethics_tawakkul",
    title: "Reliance on Allah (At-Tawakkul)",
    arabicTitle: "التوكل",
    banglaTitle: "আল্লাহর উপর ভরসা (আত-তাওয়াক্কুল)",
    description: "Tawakkul is complete reliance on Allah while taking necessary means and effort. It is not passive fatalism but active trust - taking the rope and tying the camel, then trusting Allah with the outcome. The Prophet taught that true tawakkul combines effort with trust.",
    banglaDescription: "তাওয়াক্কুল হলো প্রয়োজনীয় উপায় ও প্রচেষ্টা নেওয়ার পাশাপাশি আল্লাহর উপর সম্পূর্ণ নির্ভরতা। এটি নিষ্ক্রিয় ভাগ্যবাদ নয় বরং সক্রিয় বিশ্বাস।",
    quranVerses: ["3:159", "65:3", "8:2", "14:12", "12:67"],
    hadithReferences: ["Tie your camel and then trust in Allah. (Tirmidhi)", "If you trusted in Allah truly, He would provide for you as He provides for the birds. (Tirmidhi)"],
    category: "spiritual",
    oppositeVice: "Anxiety and Distrust (Al-Qalaq)",
    practicalSteps: [
      "Make your best effort in everything you do",
      "After taking all means, leave the outcome to Allah",
      "Do not obsess over results you cannot control",
      "Pray Istikhara before major decisions",
      "Remember that whatever happens is from Allah's wisdom"
    ]
  },
  {
    id: "ethics_brotherhood",
    title: "Brotherhood and Unity (Al-Ukhuwwah)",
    arabicTitle: "الأخوة",
    banglaTitle: "ভ্রাতৃত্ব ও ঐক্য (আল-উখুওয়াহ)",
    description: "Islam establishes brotherhood among believers that transcends race, nationality, and social status. The Quran declares all believers as brothers and commands them to reconcile their differences. The Prophet's example of brotherhood in Madinah between the Muhajirun and Ansar remains unparalleled.",
    banglaDescription: "ইসলাম মুমিনদের মধ্যে এমন ভ্রাতৃত্ব প্রতিষ্ঠা করে যা জাতি, জাতীয়তা ও সামাজিক মর্যাদাকে অতিক্রম করে। কুরআন সকল মুমিনকে ভাই ঘোষণা করে।",
    quranVerses: ["49:10", "3:103", "8:63", "49:13"],
    hadithReferences: ["None of you truly believes until he loves for his brother what he loves for himself. (Bukhari & Muslim)"],
    category: "social",
    oppositeVice: "Discord and Division (Al-Furqah)",
    practicalSteps: [
      "Greet fellow Muslims with salam and a smile",
      "Visit the sick, attend funerals, and accept invitations",
      "Reconcile between people who are in dispute",
      "Avoid backbiting, gossip, and suspicion",
      "Help fellow Muslims in their times of need"
    ]
  },
  {
    id: "ethics_modesty",
    title: "Modesty (Al-Haya)",
    arabicTitle: "الحياء",
    banglaTitle: "লজ্জা/শালীনতা (আল-হায়া)",
    description: "Haya (modesty) is described by the Prophet as a branch of faith. It encompasses modesty in dress, speech, behavior, and interactions. It is not shyness or weakness but a noble quality that prevents a person from doing anything that would cause shame before Allah or people.",
    banglaDescription: "হায়া (শালীনতা) কে নবী ঈমানের একটি শাখা হিসেবে বর্ণনা করেছেন। এটি পোশাক, কথা, আচরণ ও মিথস্ক্রিয়ায় শালীনতাকে অন্তর্ভুক্ত করে।",
    quranVerses: ["24:30-31", "33:59", "7:26", "28:25"],
    hadithReferences: ["Haya (modesty) is a branch of faith. (Bukhari & Muslim)", "Every religion has a distinctive quality and the distinctive quality of Islam is modesty. (Ibn Majah)"],
    category: "personal",
    oppositeVice: "Shamelessness (Qillat al-Haya)",
    practicalSteps: [
      "Lower your gaze from what is forbidden",
      "Dress modestly according to Islamic guidelines",
      "Speak with decorum and avoid vulgar language",
      "Be modest in your interactions with the opposite gender",
      "Remember that Allah sees you at all times"
    ]
  },
  {
    id: "ethics_trustworthiness",
    title: "Trustworthiness (Al-Amanah)",
    arabicTitle: "الأمانة",
    banglaTitle: "আমানতদারি (আল-আমানাহ)",
    description: "Amanah encompasses the trust placed in us by Allah, society, and individuals. It includes fulfilling responsibilities, keeping secrets, returning borrowed items, being faithful in marriages, and performing duties properly. The Quran states that the heavens and earth refused to bear the amanah, but humanity accepted it.",
    banglaDescription: "আমানাহ আল্লাহ, সমাজ ও ব্যক্তিদের দ্বারা আমাদের উপর রাখা বিশ্বাসকে অন্তর্ভুক্ত করে। এটি দায়িত্ব পালন, গোপনীয়তা রক্ষা ও কর্তব্য সঠিকভাবে পালনকে অন্তর্ভুক্ত করে।",
    quranVerses: ["33:72", "4:58", "8:27", "23:8"],
    hadithReferences: ["The signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is entrusted he betrays. (Bukhari & Muslim)"],
    category: "social",
    oppositeVice: "Betrayal of Trust (Al-Khiyanah)",
    practicalSteps: [
      "Fulfill all promises and commitments you make",
      "Return borrowed items in better condition",
      "Keep secrets that people confide in you",
      "Be honest in all financial transactions",
      "Perform your job duties to the best of your ability"
    ]
  },
  {
    id: "ethics_ihsan",
    title: "Excellence in Worship (Al-Ihsan)",
    arabicTitle: "الإحسان",
    banglaTitle: "ইবাদতে শ্রেষ্ঠত্ব (আল-ইহসান)",
    description: "Ihsan is the highest level of faith, defined by the Prophet as worshipping Allah as though you see Him, and although you do not see Him, knowing that He sees you. It represents the pinnacle of spiritual consciousness and perfection in all aspects of life.",
    banglaDescription: "ইহসান ঈমানের সর্বোচ্চ স্তর, নবী এটিকে সংজ্ঞায়িত করেছেন আল্লাহর ইবাদত এমনভাবে করা যেন তুমি তাঁকে দেখছ, এবং যদিও তুমি তাঁকে দেখতে পাচ্ছ না, জেনে রাখা যে তিনি তোমাকে দেখছেন।",
    quranVerses: ["16:90", "2:195", "5:93", "55:60"],
    hadithReferences: ["It is that you worship Allah as though you see Him, and while you do not see Him, truly He sees you. (Muslim - Hadith of Jibreel)"],
    category: "spiritual",
    oppositeVice: "Heedlessness (Al-Ghaflah)",
    practicalSteps: [
      "Pray each prayer as if it were your last",
      "Perfect every act of worship with full concentration",
      "Be excellent in your dealings with all people",
      "Do good deeds without expecting anything in return",
      "Strive for quality over quantity in everything"
    ]
  },
  {
    id: "ethics_environmental",
    title: "Environmental Stewardship (Khilafatul Ard)",
    arabicTitle: "خلافة الأرض",
    banglaTitle: "পরিবেশ রক্ষা (খিলাফাতুল আরদ)",
    description: "Islam teaches that humans are stewards (khalifah) of the earth, not its owners. The Quran warns against corruption and waste on earth. The Prophet emphasized kindness to animals, conserving water, and planting trees. Wastefulness is considered a brother of Shaytan.",
    banglaDescription: "ইসলাম শিক্ষা দেয় যে মানুষ পৃথিবীর খলিফা (প্রতিনিধি), মালিক নয়। কুরআন পৃথিবীতে অপচয় ও বিশৃঙ্খলার বিরুদ্ধে সতর্ক করে।",
    quranVerses: ["2:30", "7:56", "6:141", "30:41"],
    hadithReferences: ["If the Final Hour comes while you have a shoot of a plant in your hands, plant it. (Ahmad)", "Do not waste water even if performing ablution on the bank of a flowing river. (Ibn Majah)"],
    category: "social",
    oppositeVice: "Corruption and Waste (Al-Fasad wal-Israf)",
    practicalSteps: [
      "Conserve water in all situations, including wudu",
      "Plant trees and maintain green spaces",
      "Treat animals with kindness and compassion",
      "Avoid wastefulness in food and resources",
      "Clean and preserve the environment as an act of worship"
    ]
  },
  {
    id: "ethics_knowledge",
    title: "Pursuit of Knowledge (Talab al-Ilm)",
    arabicTitle: "طلب العلم",
    banglaTitle: "জ্ঞান অন্বেষণ (তলবুল ইলম)",
    description: "The first word revealed in the Quran was 'Read' (Iqra), establishing knowledge as a foundational Islamic value. The Prophet declared seeking knowledge obligatory for every Muslim. Islam encourages both religious and worldly knowledge, and scholars are considered the heirs of the prophets.",
    banglaDescription: "কুরআনে নাযিলকৃত প্রথম শব্দ ছিল 'পড়' (ইকরা), জ্ঞানকে ইসলামের মৌলিক মূল্যবোধ হিসেবে প্রতিষ্ঠিত করে। নবী জ্ঞান অন্বেষণকে প্রতিটি মুসলিমের জন্য ফরজ ঘোষণা করেছেন।",
    quranVerses: ["96:1-5", "20:114", "39:9", "35:28", "58:11"],
    hadithReferences: ["Seeking knowledge is an obligation upon every Muslim. (Ibn Majah)", "Whoever treads a path seeking knowledge, Allah will make easy for him the path to Paradise. (Muslim)"],
    category: "intellectual",
    oppositeVice: "Ignorance (Al-Jahl)",
    practicalSteps: [
      "Read and study the Quran daily with understanding",
      "Attend Islamic lectures and study circles regularly",
      "Pursue education in both religious and worldly sciences",
      "Share knowledge with others - do not hoard it",
      "Act upon what you learn before seeking more knowledge"
    ]
  }
];

// ============================================================
// QURAN_PARABLES - Parables and Metaphors from the Quran
// ============================================================
const QURAN_PARABLES = [
  {
    id: "parable_light",
    title: "The Parable of Allah's Light",
    arabicTitle: "مثل نور الله",
    banglaTitle: "আল্লাহর নূরের দৃষ্টান্ত",
    surah: 24,
    ayah: "35",
    description: "Allah's light is compared to a niche containing a lamp, the lamp enclosed in glass like a brilliant star, lit from olive oil that almost glows on its own. This layered metaphor illustrates how divine guidance illuminates the heart of the believer.",
    banglaDescription: "আল্লাহর নূরকে একটি কুলুঙ্গিতে রাখা প্রদীপের সাথে তুলনা করা হয়েছে, প্রদীপটি কাঁচের মধ্যে উজ্জ্বল তারার মতো, জলপাইয়ের তেল থেকে প্রজ্বলিত যা নিজেই প্রায় জ্বলে ওঠে।",
    lesson: "Divine guidance has multiple layers of illumination, each amplifying the other. The heart of the believer is the niche, faith is the lamp, knowledge is the glass, and sincerity is the oil.",
    category: "faith"
  },
  {
    id: "parable_spider",
    title: "The Parable of the Spider's Web",
    arabicTitle: "مثل بيت العنكبوت",
    banglaTitle: "মাকড়সার জালের দৃষ্টান্ত",
    surah: 29,
    ayah: "41",
    description: "Those who take protectors other than Allah are compared to a spider building a house - the flimsiest of all houses. This parable illustrates the fragility and worthlessness of relying on anything or anyone other than Allah.",
    banglaDescription: "যারা আল্লাহ ছাড়া অন্য রক্ষাকর্তা গ্রহণ করে তাদের তুলনা করা হয়েছে মাকড়সার সাথে যে ঘর বানায় - সবচেয়ে দুর্বল ঘর। এই দৃষ্টান্ত আল্লাহ ছাড়া অন্য কারো উপর নির্ভর করার ভঙ্গুরতা দেখায়।",
    lesson: "Worldly support systems without Allah are as fragile as a spider's web. Only Allah provides true protection and security.",
    category: "tawheed"
  },
  {
    id: "parable_rain",
    title: "The Parable of Rain and Vegetation",
    arabicTitle: "مثل المطر والنبات",
    banglaTitle: "বৃষ্টি ও উদ্ভিদের দৃষ্টান্ত",
    surah: 18,
    ayah: "45",
    description: "The life of this world is compared to rain that falls from the sky, causing plants to grow lush and green. Then the plants become dry stubble scattered by the winds. This parable vividly illustrates the temporary and deceptive nature of worldly life.",
    banglaDescription: "এই পৃথিবীর জীবনকে আকাশ থেকে বৃষ্টির সাথে তুলনা করা হয়েছে যা গাছপালাকে সবুজ ও সতেজ করে। তারপর গাছপালা শুকিয়ে বাতাসে উড়ে যায়। এই দৃষ্টান্ত পার্থিব জীবনের ক্ষণস্থায়ী প্রকৃতি দেখায়।",
    lesson: "Worldly beauty and prosperity are temporary like vegetation that flourishes after rain but quickly withers. The Hereafter is the permanent abode.",
    category: "worldly_life"
  },
  {
    id: "parable_fly",
    title: "The Parable of the Fly",
    arabicTitle: "مثل الذباب",
    banglaTitle: "মাছির দৃষ্টান্ত",
    surah: 22,
    ayah: "73",
    description: "Those who worship idols are told that if a fly were to snatch something from their offerings, the idols could not retrieve it. Both the seeker and the sought are weak. This parable demonstrates the utter powerlessness of false deities.",
    banglaDescription: "যারা মূর্তিপূজা করে তাদের বলা হয়েছে যে একটি মাছি যদি তাদের নৈবেদ্য থেকে কিছু ছিনিয়ে নেয়, মূর্তিরা তা ফিরিয়ে আনতে পারবে না। অন্বেষণকারী ও অন্বেষিত উভয়ই দুর্বল।",
    lesson: "False deities cannot even protect their offerings from a tiny fly. How then can they protect or help their worshippers?",
    category: "tawheed"
  },
  {
    id: "parable_donkey",
    title: "The Parable of the Donkey Carrying Books",
    arabicTitle: "مثل الحمار يحمل أسفارا",
    banglaTitle: "গ্রন্থ বহনকারী গাধার দৃষ্টান্ত",
    surah: 62,
    ayah: "5",
    description: "Those who were given the Torah but did not practice it are compared to a donkey carrying books. The donkey carries the weight but does not benefit from the knowledge contained within. This parable warns against having knowledge without implementation.",
    banglaDescription: "যাদের তাওরাত দেওয়া হয়েছিল কিন্তু তারা তা অনুসরণ করেনি, তাদের তুলনা করা হয়েছে গ্রন্থ বহনকারী গাধার সাথে। গাধা ভার বহন করে কিন্তু ভেতরের জ্ঞান থেকে উপকৃত হয় না।",
    lesson: "Knowledge without practice is a burden, not a blessing. The purpose of divine knowledge is transformation, not mere possession.",
    category: "knowledge"
  },
  {
    id: "parable_garden_owners",
    title: "The Parable of the Garden Owners",
    arabicTitle: "مثل أصحاب الجنة",
    banglaTitle: "বাগানের মালিকদের দৃষ্টান্ত",
    surah: 68,
    ayah: "17-33",
    description: "Two garden owners - one grateful who shared his harvest with the poor, and others who plotted to harvest secretly at dawn to avoid giving charity. Their garden was destroyed overnight. This parable warns against miserliness and ingratitude.",
    banglaDescription: "বাগানের মালিকরা ভোরে গোপনে ফসল তুলে গরিবদের দান এড়াতে ষড়যন্ত্র করে। তাদের বাগান রাতারাতি ধ্বংস হয়ে যায়। এই দৃষ্টান্ত কৃপণতা ও অকৃতজ্ঞতার বিরুদ্ধে সতর্ক করে।",
    lesson: "Hoarding wealth and refusing to share with the needy leads to loss of blessings. Allah can take away what He has given at any moment.",
    category: "charity"
  },
  {
    id: "parable_two_men",
    title: "The Parable of Two Men and Two Gardens",
    arabicTitle: "مثل صاحب الجنتين",
    banglaTitle: "দুই বাগানের মালিকের দৃষ্টান্ত",
    surah: 18,
    ayah: "32-44",
    description: "One man was given two lush gardens but became arrogant, saying they would never perish. His humble friend warned him. Eventually, all his produce was destroyed. He regretted his arrogance, saying 'I wish I had not associated anyone with my Lord.'",
    banglaDescription: "একজনকে দুটি সমৃদ্ধ বাগান দেওয়া হয় কিন্তু সে অহংকারী হয়ে বলে এগুলো কখনো ধ্বংস হবে না। তার বিনয়ী বন্ধু তাকে সতর্ক করে। অবশেষে তার সব ফসল ধ্বংস হয়ে যায়।",
    lesson: "Worldly success is a test. Arrogance about blessings leads to their destruction. Always say 'MashaAllah, la quwwata illa billah' when seeing blessings.",
    category: "worldly_life"
  },
  {
    id: "parable_blind_seeing",
    title: "The Parable of the Blind and the Seeing",
    arabicTitle: "مثل الأعمى والبصير",
    banglaTitle: "অন্ধ ও দৃষ্টিমানের দৃষ্টান্ত",
    surah: 11,
    ayah: "24",
    description: "The example of the two groups - disbelievers and believers - is like the blind and deaf versus the seeing and hearing. Are they equal in comparison? This parable contrasts spiritual blindness with the clarity of faith.",
    banglaDescription: "দুটি দলের উদাহরণ - অবিশ্বাসী ও বিশ্বাসী - অন্ধ ও বধির বনাম দৃষ্টিমান ও শ্রবণকারীর মতো। তারা কি তুলনায় সমান?",
    lesson: "Disbelief renders a person spiritually blind and deaf, unable to perceive the truth that is clear to the eyes of faith.",
    category: "faith"
  },
  {
    id: "parable_good_tree",
    title: "The Parable of the Good Word as a Good Tree",
    arabicTitle: "مثل الكلمة الطيبة",
    banglaTitle: "উত্তম বৃক্ষ হিসেবে উত্তম কথার দৃষ্টান্ত",
    surah: 14,
    ayah: "24-26",
    description: "A good word is compared to a good tree whose root is firmly fixed and branches reach the sky, bearing fruit in every season. A bad word is like a bad tree uprooted from the earth, having no stability. This parable shows the lasting impact of truth versus falsehood.",
    banglaDescription: "উত্তম কথাকে একটি উত্তম বৃক্ষের সাথে তুলনা করা হয়েছে যার মূল দৃঢ়ভাবে প্রোথিত এবং শাখা আকাশে পৌঁছায়, প্রতি মৌসুমে ফল দেয়। খারাপ কথা মূলহীন খারাপ গাছের মতো।",
    lesson: "The declaration of faith (La ilaha illallah) is like a deeply rooted tree that continuously bears fruit. Truth has permanence while falsehood has no foundation.",
    category: "faith"
  },
  {
    id: "parable_ashes",
    title: "The Parable of Deeds Like Ashes",
    arabicTitle: "مثل أعمالهم كرماد",
    banglaTitle: "ছাইয়ের মতো কর্মের দৃষ্টান্ত",
    surah: 14,
    ayah: "18",
    description: "The deeds of those who disbelieve are compared to ashes blown fiercely by the wind on a stormy day. They cannot gain anything from what they earned. This parable illustrates the worthlessness of good deeds without faith.",
    banglaDescription: "যারা অবিশ্বাস করে তাদের কর্মকে ঝোড়ো দিনে বাতাসে উড়ে যাওয়া ছাইয়ের সাথে তুলনা করা হয়েছে। তারা তাদের উপার্জন থেকে কিছুই অর্জন করতে পারে না।",
    lesson: "Without the foundation of faith, even seemingly good deeds have no weight or value on the Day of Judgment.",
    category: "deeds"
  },
  {
    id: "parable_mirage",
    title: "The Parable of the Mirage",
    arabicTitle: "مثل السراب",
    banglaTitle: "মরীচিকার দৃষ্টান্ত",
    surah: 24,
    ayah: "39",
    description: "The deeds of disbelievers are like a mirage in a desert. The thirsty person thinks it is water until he comes to it and finds nothing. This parable powerfully depicts the deception of relying on anything other than Allah.",
    banglaDescription: "অবিশ্বাসীদের কর্ম মরুভূমিতে মরীচিকার মতো। তৃষ্ণার্ত ব্যক্তি একে পানি মনে করে যতক্ষণ না সে কাছে গিয়ে দেখে কিছুই নেই।",
    lesson: "Worldly pursuits without faith are an illusion. They appear substantial from a distance but dissolve into nothingness upon arrival.",
    category: "worldly_life"
  },
  {
    id: "parable_ocean_depths",
    title: "The Parable of Depths of Darkness in the Ocean",
    arabicTitle: "مثل ظلمات في بحر لجي",
    banglaTitle: "সমুদ্রের গভীর অন্ধকারের দৃষ্টান্ত",
    surah: 24,
    ayah: "40",
    description: "The state of disbelievers is like layers of darkness in a deep ocean, covered by waves upon waves upon clouds. If one holds out their hand, they can barely see it. This parable describes the hopelessness of spiritual darkness without divine guidance.",
    banglaDescription: "অবিশ্বাসীদের অবস্থা গভীর সমুদ্রে অন্ধকারের স্তরের মতো, ঢেউয়ের উপর ঢেউ এবং মেঘে আচ্ছাদিত। হাত বাড়ালেও প্রায় দেখা যায় না।",
    lesson: "Without Allah's guidance, a person is lost in layers of darkness - darkness of ignorance, desire, and heedlessness, each compounding the other.",
    category: "faith"
  },
  {
    id: "parable_rock",
    title: "The Parable of Charity Like Seeds on a Rock",
    arabicTitle: "مثل الصدقة كمثل صفوان",
    banglaTitle: "পাথরে বীজের মতো দানের দৃষ্টান্ত",
    surah: 2,
    ayah: "264",
    description: "Spending in charity followed by reminders and insults is like soil on a smooth rock - when heavy rain falls, it leaves the rock bare. Such people cannot retain anything from their charity. This parable warns against showing off and reminding others of favors.",
    banglaDescription: "দানের পর খোটা দেওয়া এবং অপমান করা মসৃণ পাথরের উপর মাটির মতো - ভারী বৃষ্টি পড়লে পাথর খালি হয়ে যায়। এসব লোক তাদের দান থেকে কিছুই রাখতে পারে না।",
    lesson: "Charity done with sincerity takes root in the heart like seeds in fertile soil. Charity done for show or followed by harm is washed away like soil from a rock.",
    category: "charity"
  },
  {
    id: "parable_fertile_garden",
    title: "The Parable of the Fertile Garden on a Hill",
    arabicTitle: "مثل جنة بربوة",
    banglaTitle: "টিলার উপর উর্বর বাগানের দৃষ্টান্ত",
    surah: 2,
    ayah: "265",
    description: "Those who spend their wealth seeking Allah's pleasure and out of firm conviction are like a garden on a hilltop - when heavy rain falls it produces double fruit, and if no heavy rain, then even light moisture suffices. This parable describes sincere charity.",
    banglaDescription: "যারা আল্লাহর সন্তুষ্টি ও দৃঢ় প্রত্যয়ে সম্পদ ব্যয় করে তারা টিলার উপর বাগানের মতো - ভারী বৃষ্টিতে দ্বিগুণ ফল দেয়, হালকা আর্দ্রতাতেও যথেষ্ট।",
    lesson: "Sincere charity is always productive. Like a well-positioned garden, it thrives regardless of conditions because its foundation is strong (sincerity and faith).",
    category: "charity"
  },
  {
    id: "parable_dog",
    title: "The Parable of the Dog that Pants",
    arabicTitle: "مثل الكلب يلهث",
    banglaTitle: "হাঁপানো কুকুরের দৃষ্টান্ত",
    surah: 7,
    ayah: "176",
    description: "A person who was given knowledge but cast it aside is compared to a dog that pants whether you chase it or leave it alone. This parable describes those who have knowledge of the truth but choose to follow their desires instead.",
    banglaDescription: "যাকে জ্ঞান দেওয়া হয়েছিল কিন্তু সে তা ত্যাগ করেছে তাকে কুকুরের সাথে তুলনা করা হয়েছে যে তাড়ালেও হাঁপায় এবং ছেড়ে দিলেও হাঁপায়।",
    lesson: "Having knowledge of truth does not benefit if one refuses to act upon it. Such a person remains in a constant state of spiritual restlessness, unable to find peace.",
    category: "knowledge"
  }
];

// ============================================================
// MEMORIZATION_TIPS - Quran Memorization Strategies
// ============================================================
const MEMORIZATION_TIPS = [
  {
    id: "tip_consistency",
    title: "Consistency Over Quantity",
    banglaTitle: "পরিমাণের চেয়ে ধারাবাহিকতা",
    description: "Memorize a small amount daily rather than large chunks occasionally. Even 3-5 verses daily consistently is better than memorizing a page once a week. The Prophet said the most beloved deeds to Allah are those done consistently, even if small.",
    banglaDescription: "মাঝে মাঝে বড় অংশের বদলে প্রতিদিন অল্প পরিমাণ মুখস্থ কর। প্রতিদিন ধারাবাহিকভাবে ৩-৫ আয়াত সপ্তাহে একবার এক পৃষ্ঠার চেয়ে ভালো।",
    category: "habit",
    difficulty: "beginner",
    icon: "fa-sync"
  },
  {
    id: "tip_fajr_time",
    title: "Memorize After Fajr Prayer",
    banglaTitle: "ফজরের নামাজের পর মুখস্থ কর",
    description: "The time after Fajr prayer is the best time for memorization. The mind is fresh, the world is quiet, and there are fewer distractions. The Prophet made dua for barakah in the early morning hours for his ummah.",
    banglaDescription: "ফজরের নামাজের পরের সময় মুখস্থ করার জন্য সেরা। মন তাজা, পরিবেশ শান্ত এবং বিভ্রান্তি কম। নবী তাঁর উম্মতের জন্য ভোরের সময়ে বরকতের দোয়া করেছেন।",
    category: "timing",
    difficulty: "beginner",
    icon: "fa-sun"
  },
  {
    id: "tip_repetition",
    title: "The Power of Repetition",
    banglaTitle: "পুনরাবৃত্তির শক্তি",
    description: "Repeat each verse at least 20-30 times when first memorizing it. Then repeat the entire page 10-15 times. Repetition moves the verses from short-term to long-term memory. The companions used to not move to new verses until they had firmly memorized and acted upon the current ones.",
    banglaDescription: "প্রথম মুখস্থ করার সময় প্রতিটি আয়াত কমপক্ষে ২০-৩০ বার পুনরাবৃত্তি কর। তারপর পুরো পৃষ্ঠা ১০-১৫ বার পুনরাবৃত্তি কর। পুনরাবৃত্তি আয়াতগুলোকে স্বল্পমেয়াদী থেকে দীর্ঘমেয়াদী স্মৃতিতে স্থানান্তর করে।",
    category: "technique",
    difficulty: "beginner",
    icon: "fa-redo"
  },
  {
    id: "tip_mushaf",
    title: "Use One Mushaf Consistently",
    banglaTitle: "ধারাবাহিকভাবে একটি মুসহাফ ব্যবহার কর",
    description: "Always memorize from the same physical copy (Mushaf) of the Quran. Your visual memory will associate verses with their positions on the page, making recall much easier. This technique, known as 'photographic memorization,' has been used by huffaz for centuries.",
    banglaDescription: "সবসময় কুরআনের একই ফিজিক্যাল কপি (মুসহাফ) থেকে মুখস্থ কর। তোমার দৃশ্য স্মৃতি আয়াতগুলোকে পৃষ্ঠায় তাদের অবস্থানের সাথে সংযুক্ত করবে, যা স্মরণ অনেক সহজ করে তোলে।",
    category: "technique",
    difficulty: "beginner",
    icon: "fa-book-open"
  },
  {
    id: "tip_listen",
    title: "Listen to Recitation Frequently",
    banglaTitle: "ঘন ঘন তিলাওয়াত শোন",
    description: "Listen to a skilled reciter reading the verses you are memorizing. Play the audio repeatedly during commutes, chores, and before sleeping. Hearing the correct pronunciation and melody helps engrain the verses in memory. Choose a reciter whose style resonates with you.",
    banglaDescription: "তুমি যেসব আয়াত মুখস্থ করছ সেগুলো একজন দক্ষ কারীর তিলাওয়াত শোন। যাতায়াত, ঘরের কাজ ও ঘুমানোর আগে বারবার চালাও।",
    category: "technique",
    difficulty: "beginner",
    icon: "fa-headphones"
  },
  {
    id: "tip_understanding",
    title: "Understand the Meaning First",
    banglaTitle: "প্রথমে অর্থ বোঝ",
    description: "Read the tafsir (explanation) of the verses before memorizing them. Understanding the context, meaning, and lessons makes memorization much easier and more lasting. When you know what you are reciting, the words have deeper roots in your memory.",
    banglaDescription: "মুখস্থ করার আগে আয়াতের তাফসীর (ব্যাখ্যা) পড়। প্রসঙ্গ, অর্থ ও শিক্ষা বোঝা মুখস্থ করা অনেক সহজ ও দীর্ঘস্থায়ী করে।",
    category: "technique",
    difficulty: "intermediate",
    icon: "fa-brain"
  },
  {
    id: "tip_review",
    title: "Daily Review is Non-Negotiable",
    banglaTitle: "দৈনিক পুনরালোচনা অপরিহার্য",
    description: "The Prophet warned that the Quran will escape from memory faster than a camel from its tether. Allocate at least twice the time for review as you do for new memorization. A common schedule is: 1 new page per day, 5 pages review per day.",
    banglaDescription: "নবী সতর্ক করেছেন যে কুরআন উটকে বাঁধন থেকে খুলে যাওয়ার চেয়ে দ্রুত স্মৃতি থেকে বের হয়ে যায়। নতুন মুখস্থের দ্বিগুণ সময় পুনরালোচনার জন্য বরাদ্দ কর।",
    category: "habit",
    difficulty: "beginner",
    icon: "fa-history"
  },
  {
    id: "tip_prayer",
    title: "Recite New Memorization in Prayers",
    banglaTitle: "নামাজে নতুন মুখস্থ তিলাওয়াত কর",
    description: "Use your newly memorized verses in your five daily prayers and voluntary (nawafil) prayers. Praying with the verses solidifies them in memory because you are reciting without looking at the Mushaf. The pressure of reciting in salah strengthens recall.",
    banglaDescription: "তোমার নতুন মুখস্থ আয়াতগুলো পাঁচ ওয়াক্ত ফরজ ও নফল নামাজে ব্যবহার কর। মুসহাফ না দেখে তিলাওয়াত করায় আয়াতগুলো স্মৃতিতে দৃঢ় হয়।",
    category: "practice",
    difficulty: "beginner",
    icon: "fa-praying-hands"
  },
  {
    id: "tip_connection",
    title: "Connect Verses with Visual and Thematic Links",
    banglaTitle: "দৃশ্যমান ও বিষয়ভিত্তিক সংযোগ দিয়ে আয়াত সংযুক্ত কর",
    description: "Notice how verses connect thematically. Identify the flow of ideas, recurring words, and logical transitions between verses. Creating mental connections between verse contents helps you remember the sequence. Map out the structure of each surah.",
    banglaDescription: "আয়াতগুলো কিভাবে বিষয়ভিত্তিকভাবে সংযুক্ত তা লক্ষ্য কর। ধারণার প্রবাহ, পুনরাবৃত্ত শব্দ ও আয়াতের মধ্যে যৌক্তিক রূপান্তর চিহ্নিত কর।",
    category: "technique",
    difficulty: "intermediate",
    icon: "fa-link"
  },
  {
    id: "tip_teacher",
    title: "Find a Qualified Teacher",
    banglaTitle: "একজন যোগ্য শিক্ষক খোঁজ",
    description: "Having a teacher or memorization partner is crucial. They can correct your pronunciation, test your recall, hold you accountable, and motivate you. The Quran was transmitted teacher-to-student, and this tradition should be maintained.",
    banglaDescription: "একজন শিক্ষক বা মুখস্থের সঙ্গী থাকা অত্যন্ত গুরুত্বপূর্ণ। তারা তোমার উচ্চারণ সংশোধন, স্মৃতি পরীক্ষা ও অনুপ্রাণিত করতে পারেন।",
    category: "support",
    difficulty: "beginner",
    icon: "fa-chalkboard-teacher"
  },
  {
    id: "tip_dua",
    title: "Make Dua for Memorization",
    banglaTitle: "মুখস্থের জন্য দোয়া কর",
    description: "Ask Allah sincerely to make the Quran easy for you to memorize and to keep it firm in your heart. The Quran states that Allah has made the Quran easy for remembrance. Rely on Allah's help alongside your effort.",
    banglaDescription: "আল্লাহর কাছে আন্তরিকভাবে চাও যেন কুরআন তোমার জন্য মুখস্থ করা সহজ হয় এবং তোমার হৃদয়ে দৃঢ় থাকে।",
    category: "spiritual",
    difficulty: "beginner",
    icon: "fa-hands"
  },
  {
    id: "tip_write",
    title: "Write What You Memorize",
    banglaTitle: "যা মুখস্থ কর তা লেখ",
    description: "Writing the verses by hand after memorizing them engages multiple senses and significantly improves retention. The early Muslims preserved the Quran through writing alongside oral memorization. Try writing without looking at the Mushaf as a test.",
    banglaDescription: "মুখস্থ করার পর হাতে আয়াত লেখা একাধিক ইন্দ্রিয়কে সম্পৃক্ত করে এবং স্মৃতিশক্তি উল্লেখযোগ্যভাবে উন্নত করে। মুসহাফ না দেখে লেখার চেষ্টা কর।",
    category: "technique",
    difficulty: "intermediate",
    icon: "fa-pen"
  },
  {
    id: "tip_night_prayer",
    title: "Use Qiyam al-Layl for Lengthy Review",
    banglaTitle: "দীর্ঘ পুনরালোচনার জন্য কিয়ামুল লাইল ব্যবহার কর",
    description: "The night prayer (Tahajjud) is the perfect time for extensive Quran review. The quiet of the night, the spiritual atmosphere, and the extended standing provide ideal conditions for reciting large portions from memory.",
    banglaDescription: "রাতের নামাজ (তাহাজ্জুদ) ব্যাপক কুরআন পুনরালোচনার জন্য নিখুঁত সময়। রাতের নীরবতা, আধ্যাত্মিক পরিবেশ ও দীর্ঘ দাঁড়ানো স্মৃতি থেকে বড় অংশ তিলাওয়াতের জন্য আদর্শ পরিস্থিতি তৈরি করে।",
    category: "practice",
    difficulty: "advanced",
    icon: "fa-moon"
  },
  {
    id: "tip_sincerity",
    title: "Purify Your Intention",
    banglaTitle: "তোমার নিয়ত বিশুদ্ধ কর",
    description: "Memorize the Quran solely for Allah's pleasure, not for fame, competition, or showing off. The Prophet warned that the Quran can be either a proof for you or against you. Sincerity (ikhlas) is the key that unlocks divine assistance in memorization.",
    banglaDescription: "শুধুমাত্র আল্লাহর সন্তুষ্টির জন্য কুরআন মুখস্থ কর, খ্যাতি, প্রতিযোগিতা বা দেখানোর জন্য নয়। ইখলাস (আন্তরিকতা) মুখস্থে ঐশ্বরিক সাহায্যের চাবি।",
    category: "spiritual",
    difficulty: "beginner",
    icon: "fa-heart"
  },
  {
    id: "tip_avoid_sin",
    title: "Avoid Sin to Preserve Memory",
    banglaTitle: "স্মৃতি সংরক্ষণে পাপ এড়িয়ে চল",
    description: "Imam Ash-Shafi'i famously said: 'I complained to my teacher Waki about my poor memory, so he advised me to abandon sin. He informed me that knowledge is a light from Allah, and the light of Allah is not given to a sinner.' Sins create a veil over the heart that obstructs memorization.",
    banglaDescription: "ইমাম শাফিঈ বিখ্যাতভাবে বলেছেন: 'আমি আমার শিক্ষক ওয়াকীর কাছে দুর্বল স্মৃতিশক্তির অভিযোগ করি, তিনি আমাকে পাপ ত্যাগ করার পরামর্শ দেন।'",
    category: "spiritual",
    difficulty: "beginner",
    icon: "fa-shield-alt"
  }
];

// ============================================================
// QURAN_SCIENCES - Introduction to Ulum al-Quran
// ============================================================
const QURAN_SCIENCES = [
  {
    id: "science_wahy",
    title: "The Science of Revelation (Ilm al-Wahy)",
    arabicTitle: "علم الوحي",
    banglaTitle: "ওহীর বিজ্ঞান",
    description: "The study of how the Quran was revealed to Prophet Muhammad through Angel Jibreel. This includes the different modes of revelation, the first and last verses revealed, and the circumstances under which specific verses were sent down.",
    banglaDescription: "ফেরেশতা জিবরীলের মাধ্যমে কিভাবে কুরআন নবী মুহাম্মাদের কাছে নাযিল হয়েছিল তার অধ্যয়ন।",
    subtopics: [
      "Modes of revelation (dreams, direct speech, through Jibreel)",
      "First revelation (Surah Al-Alaq 96:1-5)",
      "Last revelation (debated - 2:281, 5:3, or 110:1-3)",
      "Makki vs Madani revelations",
      "Asbab an-Nuzul (occasions of revelation)"
    ],
    keyScholars: ["Ibn Abbas", "As-Suyuti", "Az-Zarkashi"],
    category: "revelation"
  },
  {
    id: "science_naskh",
    title: "Abrogation (An-Naskh wal-Mansukh)",
    arabicTitle: "الناسخ والمنسوخ",
    banglaTitle: "নাসখ ও মানসূখ (রহিতকরণ)",
    description: "The study of verses that have been abrogated (superseded) by later revelations. This is a delicate science that requires deep knowledge, as scholars differ on the number of abrogated verses. Understanding naskh is essential for deriving correct legal rulings.",
    banglaDescription: "পরবর্তী ওহী দ্বারা রহিত (প্রতিস্থাপিত) আয়াতসমূহের অধ্যয়ন। এটি একটি সূক্ষ্ম বিজ্ঞান যা গভীর জ্ঞানের প্রয়োজন।",
    subtopics: [
      "Definition and types of abrogation",
      "Conditions for valid abrogation",
      "Abrogation of ruling but not recitation",
      "Abrogation of recitation but not ruling",
      "Scholarly differences on specific cases"
    ],
    keyScholars: ["Ibn al-Arabi", "An-Nahhas", "As-Suyuti"],
    category: "jurisprudence"
  },
  {
    id: "science_qiraat",
    title: "The Science of Quranic Readings (Ilm al-Qira'at)",
    arabicTitle: "علم القراءات",
    banglaTitle: "কিরাআতের বিজ্ঞান",
    description: "The study of the different authenticated ways of reciting the Quran. There are 7 major and 3 additional canonical readings (qira'at), each transmitted through an unbroken chain back to the Prophet. These variant readings affect pronunciation and sometimes meaning, enriching the text.",
    banglaDescription: "কুরআন তিলাওয়াতের বিভিন্ন প্রমাণিত পদ্ধতির অধ্যয়ন। ৭টি প্রধান ও ৩টি অতিরিক্ত প্রামাণিক কিরাআত রয়েছে।",
    subtopics: [
      "The 7 canonical readings (Sab'a)",
      "The 3 additional readings (Asharah)",
      "Chain of transmission for each reading",
      "Differences between readings",
      "Hafs an Asim - the most widely used reading today"
    ],
    keyScholars: ["Ibn Mujahid", "Abu Amr ad-Dani", "Ibn al-Jazari"],
    category: "recitation"
  },
  {
    id: "science_tajweed_ilm",
    title: "The Science of Tajweed (Ilm at-Tajweed)",
    arabicTitle: "علم التجويد",
    banglaTitle: "তাজউইদের বিজ্ঞান",
    description: "The science of correct Quran recitation, including proper pronunciation of each letter from its point of articulation (makhraj), application of characteristics (sifaat), and rules governing the interaction between letters. Tajweed is considered obligatory for every Muslim who recites the Quran.",
    banglaDescription: "সঠিক কুরআন তিলাওয়াতের বিজ্ঞান, প্রতিটি অক্ষরের সঠিক মাখরাজ (উচ্চারণস্থল), সিফাত (বৈশিষ্ট্য) এবং অক্ষরের মধ্যকার নিয়ম সহ।",
    subtopics: [
      "Points of articulation (Makharij al-Huruf)",
      "Letter characteristics (Sifaat al-Huruf)",
      "Rules of Noon Sakinah and Tanween",
      "Rules of Meem Sakinah",
      "Madd (elongation) rules",
      "Waqf (stopping) and Ibtida (starting) rules"
    ],
    keyScholars: ["Al-Khalil ibn Ahmad", "Ibn al-Jazari", "Imam Hafs"],
    category: "recitation"
  },
  {
    id: "science_tafsir",
    title: "The Science of Quranic Exegesis (Ilm at-Tafsir)",
    arabicTitle: "علم التفسير",
    banglaTitle: "তাফসীরের বিজ্ঞান",
    description: "The science of explaining and interpreting the Quran. It involves understanding the Arabic language, knowing the occasions of revelation, understanding abrogation, and familiarity with hadith. There are several methodologies including tafsir by the Quran itself, by hadith, by companion reports, and by linguistic analysis.",
    banglaDescription: "কুরআনের ব্যাখ্যা ও তাফসীরের বিজ্ঞান। এটি আরবি ভাষা বোঝা, নাযিলের প্রেক্ষাপট জানা, নাসখ বোঝা এবং হাদিসের সাথে পরিচিতি অন্তর্ভুক্ত করে।",
    subtopics: [
      "Tafsir bil-Ma'thur (by transmitted reports)",
      "Tafsir bil-Ra'y (by scholarly opinion)",
      "Tafsir Ishari (spiritual interpretation)",
      "Conditions for a valid Mufassir",
      "Major tafsir works throughout history",
      "Modern approaches to tafsir"
    ],
    keyScholars: ["Ibn Abbas", "At-Tabari", "Ibn Kathir", "Al-Qurtubi", "Ar-Razi"],
    category: "interpretation"
  },
  {
    id: "science_i3jaz",
    title: "The Inimitability of the Quran (I'jaz al-Quran)",
    arabicTitle: "إعجاز القرآن",
    banglaTitle: "কুরআনের অলৌকিকতা (ইজাযুল কুরআন)",
    description: "The study of the miraculous nature of the Quran that renders it impossible for humans or jinn to produce anything like it. This includes linguistic miracles, scientific references, historical accuracy, numerical patterns, legislative wisdom, and the effect of its recitation on hearts.",
    banglaDescription: "কুরআনের অলৌকিক প্রকৃতির অধ্যয়ন যা মানুষ বা জিনের পক্ষে এর অনুরূপ কিছু তৈরি করা অসম্ভব করে। এটি ভাষাগত অলৌকিকতা, বৈজ্ঞানিক উল্লেখ ও সংখ্যাগত প্যাটার্ন অন্তর্ভুক্ত করে।",
    subtopics: [
      "Linguistic inimitability (Balagha)",
      "Scientific references and accuracy",
      "Historical predictions fulfilled",
      "Numerical patterns and symmetry",
      "Legislative wisdom and justice",
      "The Challenge (Tahaddi) - produce one surah like it"
    ],
    keyScholars: ["Al-Baqillani", "Al-Jurjani", "Az-Zamakhshari", "Ar-Rafi'i"],
    category: "miraculous"
  },
  {
    id: "science_muhkam",
    title: "Clear and Allegorical Verses (Al-Muhkam wal-Mutashabih)",
    arabicTitle: "المحكم والمتشابه",
    banglaTitle: "মুহকাম ও মুতাশাবিহ (স্পষ্ট ও রূপকাত্মক আয়াত)",
    description: "The classification of Quranic verses into clear, unambiguous verses (muhkam) that form the foundation of the Book, and allegorical or ambiguous verses (mutashabih) whose exact meaning is known only to Allah. This science prevents misinterpretation and guides scholars in understanding the Quran correctly.",
    banglaDescription: "কুরআনের আয়াতকে স্পষ্ট, দ্ব্যর্থহীন আয়াত (মুহকাম) যা কিতাবের ভিত্তি এবং রূপকাত্মক বা অস্পষ্ট আয়াত (মুতাশাবিহ) যার সঠিক অর্থ শুধু আল্লাহই জানেন - এভাবে শ্রেণীবিভাগ।",
    subtopics: [
      "Definition and examples of Muhkam verses",
      "Definition and examples of Mutashabih verses",
      "Scholarly approaches to Mutashabih",
      "The danger of following only Mutashabih (Quran 3:7)",
      "Letters at the beginning of surahs as Mutashabih"
    ],
    keyScholars: ["Ibn Qutaybah", "Ar-Raghib al-Asfahani", "As-Suyuti"],
    category: "interpretation"
  },
  {
    id: "science_asbab",
    title: "Occasions of Revelation (Asbab an-Nuzul)",
    arabicTitle: "أسباب النزول",
    banglaTitle: "নাযিলের প্রেক্ষাপট (আসবাবুন নুযূল)",
    description: "The study of the specific events, questions, or circumstances that prompted the revelation of particular verses or surahs. Understanding the occasion of revelation is crucial for correct interpretation, as it provides the context within which the verses should be understood.",
    banglaDescription: "নির্দিষ্ট ঘটনা, প্রশ্ন বা পরিস্থিতি যা বিশেষ আয়াত বা সূরা নাযিলের কারণ হয়েছিল তার অধ্যয়ন। সঠিক ব্যাখ্যার জন্য নাযিলের প্রেক্ষাপট বোঝা অত্যন্ত গুরুত্বপূর্ণ।",
    subtopics: [
      "Definition and importance of Asbab an-Nuzul",
      "Methodology for authenticating occasions of revelation",
      "General versus specific application of verses",
      "Verses with multiple occasions of revelation",
      "Verses revealed without a specific occasion"
    ],
    keyScholars: ["Al-Wahidi", "As-Suyuti", "Ibn Hajar al-Asqalani"],
    category: "revelation"
  },
  {
    id: "science_makki_madani",
    title: "Makki and Madani Revelations",
    arabicTitle: "المكي والمدني",
    banglaTitle: "মাক্কী ও মাদানী ওহী",
    description: "The classification of Quranic chapters based on whether they were revealed in Makkah (before Hijrah) or Madinah (after Hijrah). Makki surahs typically focus on beliefs, monotheism, and the Hereafter, while Madani surahs address legislation, social rules, and community building.",
    banglaDescription: "কুরআনের অধ্যায়গুলোকে মক্কায় (হিজরতের আগে) বা মদীনায় (হিজরতের পরে) নাযিল হওয়ার ভিত্তিতে শ্রেণীবিভাগ। মাক্কী সূরা সাধারণত বিশ্বাস ও আখিরাতের উপর এবং মাদানী সূরা আইন ও সমাজ গঠনের উপর ফোকাস করে।",
    subtopics: [
      "Characteristics of Makki surahs (short, powerful, creed-focused)",
      "Characteristics of Madani surahs (longer, legislative, detailed)",
      "Surahs with both Makki and Madani verses",
      "The wisdom behind the chronological order of revelation",
      "How the Prophet arranged surahs differently from revelation order"
    ],
    keyScholars: ["Ibn Abbas", "As-Suyuti", "Az-Zarkashi"],
    category: "classification"
  },
  {
    id: "science_jam",
    title: "The Compilation of the Quran (Jam al-Quran)",
    arabicTitle: "جمع القرآن",
    banglaTitle: "কুরআন সংকলন (জামউল কুরআন)",
    description: "The history of how the Quran was compiled from individual writings and memorizations into a single, standardized book. This process occurred in three main stages: during the Prophet's lifetime, during Abu Bakr's caliphate, and during Uthman's caliphate. The meticulous methodology ensures the Quran's preservation.",
    banglaDescription: "কিভাবে কুরআন পৃথক লিখিত উপকরণ ও মুখস্থ থেকে একটি একক, মানসম্মত গ্রন্থে সংকলিত হয়েছিল তার ইতিহাস।",
    subtopics: [
      "Writing during the Prophet's lifetime (scribes of revelation)",
      "Abu Bakr's compilation after the Battle of Yamama",
      "Uthman's standardization into one official text",
      "The seven ahruf (modes) of the Quran",
      "Distribution of copies to major cities",
      "Burning of unofficial copies to prevent confusion"
    ],
    keyScholars: ["Zayd ibn Thabit", "Abu Bakr", "Uthman", "Ibn Abi Dawud"],
    category: "history"
  }
];

// ============================================================
// EXPORT HELPER - Make all constants globally accessible
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SURAH_DATA,
    JUZ_DATA,
    DUA_DATA,
    ISLAMIC_EVENTS,
    RECITERS,
    DAILY_VERSES,
    SURAH_CATEGORIES,
    ASMA_UL_HUSNA,
    PRAYER_NAMES,
    HIJRI_MONTHS,
    PILLARS_OF_ISLAM,
    ARTICLES_OF_FAITH,
    QURAN_STATS,
    TAFSIR_SOURCES,
    TRANSLATION_EDITIONS,
    PROPHETS_IN_QURAN,
    COMMON_DHIKR,
    READING_PLAN_30_DAYS,
    SPECIAL_PASSAGES,
    ADDITIONAL_VERSES,
    TAJWEED_RULES
  };
}
