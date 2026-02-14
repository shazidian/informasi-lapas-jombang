// Carousel
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// Auto slide
setInterval(() => {
    moveSlide(1);
}, 5000);

// Navigation
function showSection(sectionId) {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('detailPage').style.display = 'block';
    document.getElementById('btnKembali').style.display = 'block';

    const detailContent = document.querySelector('.detail-content');
    detailContent.innerHTML = getSectionContent(sectionId);

    window.scrollTo(0, 0);
}

document.getElementById('btnKembali').addEventListener('click', function () {
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('detailPage').style.display = 'none';
    this.style.display = 'none';
    window.scrollTo(0, 0);
});

// Content Generator
function getSectionContent(sectionId) {
    const contents = {
        'makanan': `
            <div class="detail-header">
                <div class="icon">⚠️</div>
                <h2>Makanan yang Tidak Diperbolehkan</h2>
            </div>
            <p class="intro-text">
                Untuk menjaga keamanan dan kesehatan WBP, terdapat beberapa jenis makanan yang tidak diperbolehkan dibawa saat berkunjung. Silakan perhatikan poster informasi berikut untuk mengetahui detail lengkap makanan yang dilarang.
            </p>
            <div class="poster-area">
                <div class="poster-placeholder">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p style="font-size: 1.125rem; font-weight: 600;">Area Poster/Gambar Informasi</p>
                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">Poster akan ditampilkan di sini</p>
                </div>
            </div>
            <div class="note-box">
                <p><strong>💡 Info:</strong> Untuk informasi lebih detail, silakan lihat poster di atas atau hubungi petugas di bagian informasi.</p>
            </div>
        `,

        'pakaian': `
            <div class="detail-header">
                <div class="icon">👔</div>
                <h2>Ketentuan Pakaian Pengunjung</h2>
            </div>
            <p class="intro-text">
                Pengunjung wajib mengenakan pakaian yang sopan dan sesuai dengan ketentuan yang berlaku. Lihat poster informasi di bawah ini untuk mengetahui aturan berpakaian lengkap saat berkunjung ke Lapas.
            </p>
            <div class="poster-area">
                <div class="poster-placeholder">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p style="font-size: 1.125rem; font-weight: 600;">Area Poster/Gambar Informasi</p>
                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">Poster akan ditampilkan di sini</p>
                </div>
            </div>
            <div class="note-box">
                <p><strong>💡 Info:</strong> Untuk informasi lebih detail, silakan lihat poster di atas atau hubungi petugas di bagian informasi.</p>
            </div>
        `,

        'cb-pb': `
            <div class="detail-header">
                <div class="icon">📋</div>
                <h2>Pengurusan CB/PB WBP</h2>
            </div>
            <p class="intro-text">
                Cuti Bersyarat (CB) dan Pembebasan Bersyarat (PB) adalah hak WBP yang telah memenuhi syarat.
            </p>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">📋</div>
                        <div>
                            <h3>📋 Syarat CB/PB</h3>
                            <p>WBP telah menjalani 2/3 masa pidana dengan berkelakuan baik</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">📋</div>
                        <div>
                            <h3>📄 Dokumen Diperlukan</h3>
                            <p>Surat permohonan, KTP, surat domisili, surat jaminan keluarga, pas foto</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">📋</div>
                        <div>
                            <h3>📝 Proses Pengajuan</h3>
                            <p>Ajukan permohonan ke bagian registrasi dengan dokumen lengkap</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">📋</div>
                        <div>
                            <h3>🔍 Verifikasi TPP</h3>
                            <p>Berkas diverifikasi dan diajukan ke Tim Pengamat Pemasyarakatan</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">📋</div>
                        <div>
                            <h3>✅ Keputusan</h3>
                            <p>Hasil TPP diajukan ke Kanwil lalu Ditjen Pemasyarakatan</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">📋</div>
                        <div>
                            <h3>⏱️ Waktu Proses</h3>
                            <p>Proses memakan waktu 1-3 bulan tergantung kelengkapan dokumen</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="note-box">
                <p><strong>💡 Catatan Penting:</strong> Hubungi bagian registrasi atau petugas pendidikan untuk informasi lebih lanjut.</p>
            </div>
        `,

        'integrasi': `
            <div class="detail-header">
                <div class="icon">❤️</div>
                <h2>Hak Integrasi WBP</h2>
            </div>
            <p class="intro-text">
                Hak Integrasi adalah hak WBP untuk mendapatkan pembinaan dan reintegrasi ke masyarakat.
            </p>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">❤️</div>
                        <div>
                            <h3>🏢 Asimilasi</h3>
                            <p>Pembinaan di luar Lapas dengan pengawasan, seperti bekerja atau kegiatan sosial</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">❤️</div>
                        <div>
                            <h3>👨‍👩‍👧 Cuti Keluarga</h3>
                            <p>WBP dapat mengunjungi keluarga pada waktu tertentu dengan pengawalan</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">❤️</div>
                        <div>
                            <h3>🏠 Cuti Menjelang Bebas</h3>
                            <p>Diberikan kepada WBP yang akan bebas untuk persiapan reintegrasi</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">❤️</div>
                        <div>
                            <h3>📅 Cuti Bersyarat (CB)</h3>
                            <p>Menjalani sisa pidana di luar Lapas dengan ketentuan dan pengawasan</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">❤️</div>
                        <div>
                            <h3>🆓 Pembebasan Bersyarat</h3>
                            <p>Pembebasan sebelum masa pidana berakhir dengan syarat tertentu</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">❤️</div>
                        <div>
                            <h3>⚖️ Remisi</h3>
                            <p>Pengurangan masa pidana bagi WBP yang berkelakuan baik</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="note-box">
                <p><strong>💡 Catatan Penting:</strong> Semua hak integrasi diberikan berdasarkan penilaian perilaku dan rekomendasi TPP.</p>
            </div>
        `,

        'obat': `
            <div class="detail-header">
                <div class="icon">💊</div>
                <h2>SOP Permintaan Obat WBP</h2>
            </div>
            <p class="intro-text">
                Untuk menjaga kesehatan WBP, berikut adalah prosedur standar permintaan obat:
            </p>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">💊</div>
                        <div>
                            <h3>🏥 Pemeriksaan Kesehatan</h3>
                            <p>WBP sakit mendaftar ke poliklinik untuk pemeriksaan petugas kesehatan</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">💊</div>
                        <div>
                            <h3>👨‍⚕️ Resep Dokter</h3>
                            <p>Obat hanya diberikan berdasarkan resep dokter atau tenaga medis Lapas</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">💊</div>
                        <div>
                            <h3>💊 Pengambilan Obat</h3>
                            <p>Obat diambil di apotek Lapas sesuai dengan resep yang diberikan</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">💊</div>
                        <div>
                            <h3>📋 Obat dari Luar</h3>
                            <p>Keluarga bisa bawa obat HANYA dengan surat dokter asli dan resep berlaku</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">💊</div>
                        <div>
                            <h3>✔️ Verifikasi Obat</h3>
                            <p>Semua obat dari luar akan diperiksa petugas kesehatan Lapas</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">💊</div>
                        <div>
                            <h3>⛔ Obat Terlarang</h3>
                            <p>Obat psikotropika, narkotika, atau yang dapat disalahgunakan DILARANG</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="note-box">
                <p><strong>💡 Catatan Penting:</strong> Untuk kasus darurat medis, segera hubungi petugas dan keluarga akan dihubungi.</p>
            </div>
        `,

        'jadwal': `
            <div class="detail-header">
                <div class="icon">🕐</div>
                <h2>Jadwal Kunjungan</h2>
            </div>
            <p class="intro-text">
                Jadwal kunjungan di Lapas Jombang Kelas IIB telah diatur untuk kenyamanan pengunjung dan WBP.
            </p>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">🕐</div>
                        <div>
                            <h3>📅 Hari Kunjungan</h3>
                            <p>Senin - Jumat (hari kerja). Tidak ada kunjungan Sabtu, Minggu, dan libur nasional</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">🕐</div>
                        <div>
                            <h3>🕐 Jam Kunjungan</h3>
                            <p>Pukul 09.00 - 15.00 WIB. Datang sebelum pukul 14.00 WIB</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">🕐</div>
                        <div>
                            <h3>⏰ Durasi Kunjungan</h3>
                            <p>Maksimal 30 menit per kunjungan untuk semua pengunjung</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">🕐</div>
                        <div>
                            <h3>👥 Kuota Pengunjung</h3>
                            <p>Maksimal 2 orang pengunjung per WBP dalam satu waktu kunjungan</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">🕐</div>
                        <div>
                            <h3>📝 Registrasi</h3>
                            <p>Wajib registrasi dengan membawa KTP/identitas asli dan kartu keluarga</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-header">
                        <div class="info-item-icon">🕐</div>
                        <div>
                            <h3>🎯 Persiapan</h3>
                            <p>Datang lebih awal untuk registrasi dan pemeriksaan. Siapkan identitas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="note-box">
                <p><strong>💡 Catatan Penting:</strong> Jadwal dapat berubah sewaktu-waktu. Hubungi kontak Lapas untuk info terkini.</p>
            </div>
        `,

        'kontak': `
            <div class="detail-header">
                <div class="icon">📞</div>
                <h2>Kontak Lapas Jombang</h2>
            </div>
            <p class="intro-text">
                Untuk informasi lebih lanjut atau pertanyaan mengenai kunjungan, silakan hubungi kami melalui:
            </p>
            <div class="contact-grid">
                <div class="contact-box blue">
                    <h3>Alamat</h3>
                    <p>
                        Lembaga Pemasyarakatan Kelas IIB Jombang<br>
                        Jl. Dr. Sutomo No. 1, Jombang<br>
                        Kabupaten Jombang, Jawa Timur 61419
                    </p>
                </div>
                <div class="contact-box green">
                    <h3>Telepon</h3>
                    <p>
                        <strong>Kantor:</strong> (0321) 861234<br>
                        <strong>Bagian Informasi:</strong> (0321) 861235
                    </p>
                </div>
                <div class="contact-box purple">
                    <h3>Email</h3>
                    <p>lapasjombang@lapas.go.id</p>
                </div>
                <div class="contact-box orange">
                    <h3>Jam Pelayanan</h3>
                    <p>
                        <strong>Senin - Kamis:</strong> 08.00 - 16.00 WIB<br>
                        <strong>Jumat:</strong> 08.00 - 16.30 WIB
                    </p>
                </div>
            </div>
            <div class="note-box">
                <p><strong>Catatan:</strong> Untuk keperluan mendesak di luar jam pelayanan, hubungi petugas piket yang bertugas.</p>
            </div>
        `,

        'faq': `
            <div class="detail-header">
                <div class="icon">❓</div>
                <h2>Pertanyaan yang Sering Diajukan (FAQ)</h2>
            </div>
            <p class="intro-text">
                Berikut adalah jawaban atas pertanyaan yang sering diajukan oleh pengunjung:
            </p>
            <div class="faq-list">
                <div class="faq-item">
                    <h3>Apakah saya perlu membuat janji sebelum berkunjung?</h3>
                    <p>Tidak perlu membuat janji. Anda dapat langsung datang pada jam kunjungan yang telah ditentukan. Namun, pastikan membawa identitas diri yang masih berlaku.</p>
                </div>
                <div class="faq-item">
                    <h3>Siapa saja yang boleh berkunjung?</h3>
                    <p>Keluarga inti (orang tua, saudara kandung, pasangan, anak), keluarga dekat, atau teman yang sudah mendapat persetujuan dari pihak WBP dan Lapas. Pengunjung anak di bawah 17 tahun harus didampingi orang tua/wali.</p>
                </div>
                <div class="faq-item">
                    <h3>Apa saja yang tidak boleh dibawa saat berkunjung?</h3>
                    <p>Handphone, kamera, senjata tajam, korek api/lighter, rokok, uang dalam jumlah besar, makanan/minuman terlarang, dan barang elektronik lainnya. Loker tersedia untuk menyimpan barang bawaan.</p>
                </div>
                <div class="faq-item">
                    <h3>Bisakah saya memberikan uang kepada WBP?</h3>
                    <p>Ya, tetapi tidak boleh diserahkan langsung. Uang harus disetor melalui bagian keuangan Lapas dan akan dicatat dalam rekening WBP yang bersangkutan.</p>
                </div>
                <div class="faq-item">
                    <h3>Berapa lama proses registrasi pengunjung?</h3>
                    <p>Proses registrasi memakan waktu sekitar 15-30 menit tergantung jumlah antrian. Disarankan datang lebih awal untuk menghindari waktu tunggu yang lama.</p>
                </div>
                <div class="faq-item">
                    <h3>Apakah ada biaya untuk berkunjung?</h3>
                    <p>Tidak ada biaya resmi untuk berkunjung. Semua pelayanan kunjungan di Lapas Jombang adalah GRATIS. Waspadalah terhadap pungutan liar.</p>
                </div>
                <div class="faq-item">
                    <h3>Bagaimana jika WBP sedang sakit dan tidak bisa menerima kunjungan?</h3>
                    <p>Petugas akan menginformasikan kondisi WBP. Keluarga dapat berkonsultasi dengan petugas kesehatan atau bagian informasi untuk mendapat update kondisi WBP.</p>
                </div>
                <div class="faq-item">
                    <h3>Berapa kali dalam seminggu saya bisa berkunjung?</h3>
                    <p>Tidak ada batasan jumlah kunjungan per minggu, namun setiap kunjungan dibatasi maksimal 30 menit. Pastikan untuk berbagi waktu dengan pengunjung lain yang ingin bertemu WBP.</p>
                </div>
                <div class="faq-item">
                    <h3>Apakah pengunjung akan diperiksa?</h3>
                    <p>Ya, semua pengunjung akan melewati pemeriksaan keamanan (body check) dan barang bawaan akan diperiksa untuk menjaga keamanan Lapas. Mohon kerja sama pengunjung.</p>
                </div>
                <div class="faq-item">
                    <h3>Bagaimana cara mengirim paket/barang untuk WBP?</h3>
                    <p>Paket dapat dititipkan di bagian penerimaan barang. Semua barang akan diperiksa terlebih dahulu. Barang yang diperbolehkan: pakaian, alat mandi, buku bacaan (non-politik), dan makanan sesuai ketentuan.</p>
                </div>
            </div>
            <div class="info-box">
                <p><strong>Masih ada pertanyaan?</strong> Hubungi bagian informasi di (0321) 861235 atau datang langsung ke kantor Lapas Jombang pada jam pelayanan.</p>
            </div>
        `
    };

    return contents[sectionId] || '<p>Konten tidak ditemukan.</p>';
}
