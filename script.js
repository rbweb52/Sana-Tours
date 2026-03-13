<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sana Tours & Travels - Premium Hajj & Umrah Services. 25+ Years of Excellence">
    <meta name="keywords" content="Hajj, Umrah, Islamic Tourism, Pilgrimage">
    <meta name="author" content="Sana Tours & Travels">
    <title>Sana Tours & Travels | Premium Hajj & Umrah Services</title>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- AOS Animate On Scroll -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">

    <style>
        /* ============ CSS VARIABLES ============ */
        :root {
            --primary: #1a5f4a;
            --secondary: #d4af37;
            --dark: #0e3b2e;
            --light: #f4f9f7;
            --text: #333;
            --light-text: #666;
            --border-color: #e0e0e0;
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
            --shadow-md: 0 5px 20px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 15px 40px rgba(0, 0, 0, 0.15);
            --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #fff;
            color: var(--text);
            overflow-x: hidden;
            line-height: 1.6;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Amiri', serif;
            font-weight: 700;
        }

        img {
            max-width: 100%;
            height: auto;
        }

        a {
            text-decoration: none;
            transition: var(--transition);
        }

        /* ============ PRELOADER ============ */
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 30px;
            animation: fadeOut 0.5s ease-in 2.5s forwards;
        }

        .preloader-content {
            text-align: center;
            color: #fff;
        }

        .spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top-color: var(--secondary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        .preloader-text {
            font-size: 1.1rem;
            letter-spacing: 2px;
            font-weight: 600;
            animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        @keyframes fadeOut {
            to { opacity: 0; visibility: hidden; }
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        /* ============ NAVIGATION ============ */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            padding: 15px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: transparent;
            transition: var(--transition);
        }

        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-md);
            padding: 10px 5%;
        }

        .logo {
            font-family: 'Amiri', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #fff;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .navbar.scrolled .logo {
            color: var(--primary);
        }

        .logo-icon {
            width: 45px;
            height: 45px;
            background: var(--secondary);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--dark);
            font-weight: 700;
        }

        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }

        .nav-links a {
            color: #fff;
            font-weight: 500;
            position: relative;
        }

        .navbar.scrolled .nav-links a {
            color: var(--text);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--secondary);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .nav-btn {
            background: linear-gradient(135deg, var(--secondary) 0%, #c9a227 100%);
            color: var(--dark);
            padding: 12px 30px;
            border-radius: 25px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .nav-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 25px rgba(212, 175, 55, 0.4);
        }

        .navbar.scrolled .nav-btn {
            background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
            color: #fff;
        }

        /* Mobile Menu Toggle */
        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 6px;
            background: none;
            border: none;
            cursor: pointer;
        }

        .menu-toggle span {
            width: 25px;
            height: 3px;
            background: #fff;
            border-radius: 2px;
            transition: var(--transition);
        }

        .navbar.scrolled .menu-toggle span {
            background: var(--text);
        }

        /* ============ HERO SECTION ============ */
        .hero {
            position: relative;
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin-top: -70px;
            padding-top: 70px;
        }

        .hero-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            animation: slideShow 12s infinite;
        }

        .hero-slide:nth-child(1) {
            background-image: url('https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=1200&h=800&fit=crop');
            animation-delay: 0s;
        }

        .hero-slide:nth-child(2) {
            background-image: url('https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1200&h=800&fit=crop');
            animation-delay: 4s;
        }

        .hero-slide:nth-child(3) {
            background-image: url('https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=800&fit=crop');
            animation-delay: 8s;
        }

        @keyframes slideShow {
            0% { opacity: 0; }
            10% { opacity: 1; }
            33% { opacity: 1; }
            43% { opacity: 0; }
            100% { opacity: 0; }
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(26, 95, 74, 0.75) 0%, rgba(14, 59, 46, 0.85) 100%);
            z-index: 2;
        }

        .hero-content {
            position: relative;
            z-index: 3;
            text-align: center;
            color: #fff;
            max-width: 900px;
            padding: 0 20px;
            animation: heroFadeIn 0.8s ease-out;
        }

        @keyframes heroFadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero-badge {
            display: inline-block;
            background: rgba(212, 175, 55, 0.2);
            border: 1px solid var(--secondary);
            color: var(--secondary);
            padding: 12px 25px;
            border-radius: 50px;
            margin-bottom: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 2px;
            animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero-content h1 {
            font-size: 4.5rem;
            line-height: 1.1;
            margin-bottom: 20px;
            text-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.8s ease-out 0.2s both;
        }

        .hero-content p {
            font-size: 1.3rem;
            max-width: 700px;
            margin: 0 auto 40px;
            opacity: 0.95;
            animation: slideUp 0.8s ease-out 0.4s both;
        }

        .hero-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            animation: slideUp 0.8s ease-out 0.6s both;
        }

        .btn {
            padding: 15px 35px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: var(--transition);
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--secondary) 0%, #c9a227 100%);
            color: var(--dark);
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(212, 175, 55, 0.4);
        }

        .btn-secondary {
            background: transparent;
            border: 2px solid #fff;
            color: #fff;
        }

        .btn-secondary:hover {
            background: #fff;
            color: var(--primary);
        }

        /* Floating Booking Form */
        .booking-form-container {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 95%;
            max-width: 1100px;
            z-index: 4;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 35px;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            align-items: flex-end;
            animation: slideUp 0.8s ease-out 0.8s both;
        }

        .form-group {
            flex: 1;
            min-width: 200px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--primary);
            font-size: 0.9rem;
        }

        .form-control {
            width: 100%;
            padding: 13px 15px;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            font-family: 'Poppins', sans-serif;
            font-size: 0.95rem;
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(26, 95, 74, 0.1);
        }

        .btn-submit {
            padding: 13px 35px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
            color: #fff;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            font-size: 0.95rem;
            transition: var(--transition);
            height: 48px;
            box-shadow: var(--shadow-md);
        }

        .btn-submit:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(26, 95, 74, 0.3);
        }

        /* ============ SECTIONS ============ */
        section {
            padding: 80px 5%;
        }

        .section-title {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-title h2 {
            font-size: 3rem;
            color: var(--primary);
            position: relative;
            display: inline-block;
            padding-bottom: 15px;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, var(--secondary), #c9a227);
            border-radius: 2px;
        }

        .section-title p {
            color: var(--light-text);
            font-size: 1.1rem;
            margin-top: 15px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        /* ============ ABOUT SECTION ============ */
        .about-section {
            display: flex;
            align-items: center;
            gap: 60px;
            flex-wrap: wrap;
            background: linear-gradient(135deg, #f4f9f7 0%, rgba(212, 175, 55, 0.05) 100%);
        }

        .about-image {
            flex: 1;
            min-width: 300px;
            position: relative;
        }

        .about-image img {
            width: 100%;
            border-radius: 12px;
            box-shadow: var(--shadow-lg);
            animation: imageZoom 0.8s ease-out;
        }

        @keyframes imageZoom {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .about-image::before {
            content: '';
            position: absolute;
            top: -20px;
            left: -20px;
            width: 100%;
            height: 100%;
            border: 3px solid var(--secondary);
            border-radius: 12px;
            z-index: -1;
        }

        .about-content {
            flex: 1;
            min-width: 300px;
        }

        .about-content h2 {
            font-size: 2.8rem;
            color: var(--primary);
            margin-bottom: 25px;
            line-height: 1.2;
        }

        .about-content p {
            color: var(--light-text);
            margin-bottom: 20px;
            font-size: 1.05rem;
            line-height: 1.8;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 40px;
        }

        .stat-card {
            background: #fff;
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }

        .stat-number {
            font-size: 2.5rem;
            color: var(--secondary);
            font-weight: 700;
        }

        .stat-label {
            color: var(--light-text);
            font-size: 0.95rem;
            margin-top: 8px;
        }

        /* ============ SERVICES SECTION ============ */
        .services-section {
            background: linear-gradient(135deg, #f4f9f7 0%, rgba(212, 175, 55, 0.05) 100%);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            gap: 30px;
        }

        .service-card {
            background: #fff;
            padding: 35px 25px;
            text-align: center;
            border-radius: 12px;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
            border-top: 4px solid transparent;
            position: relative;
            overflow: hidden;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .service-card:hover::before {
            left: 100%;
        }

        .service-card:hover {
            transform: translateY(-10px);
            border-top-color: var(--secondary);
            box-shadow: var(--shadow-lg);
        }

        .service-icon {
            font-size: 3.5rem;
            color: var(--primary);
            margin-bottom: 20px;
            transition: var(--transition);
        }

        .service-card:hover .service-icon {
            color: var(--secondary);
            transform: scale(1.1);
        }

        .service-card h3 {
            color: var(--primary);
            margin-bottom: 15px;
            font-size: 1.3rem;
        }

        .service-card p {
            color: var(--light-text);
            line-height: 1.7;
        }

        /* ============ PACKAGES SECTION ============ */
        .packages-section {
            background: linear-gradient(to bottom, #fff, #f4f9f7);
        }

        .packages-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .package-card {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
            position: relative;
        }

        .package-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
        }

        .package-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: var(--shadow-lg);
        }

        .package-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
            color: #fff;
            padding: 30px 25px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .package-header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, 20px); }
        }

        .package-badge {
            display: inline-block;
            background: var(--secondary);
            color: var(--dark);
            padding: 6px 15px;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 700;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .package-badge.featured {
            background: #ffd700;
            animation: pulse-badge 2s ease-in-out infinite;
        }

        @keyframes pulse-badge {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .package-header h3 {
            color: var(--secondary);
            font-size: 1.8rem;
            position: relative;
            z-index: 2;
            margin: 10px 0;
        }

        .package-duration {
            font-size: 0.95rem;
            opacity: 0.9;
            position: relative;
            z-index: 2;
        }

        .package-body {
            padding: 30px;
        }

        .package-price {
            font-size: 2.2rem;
            color: var(--secondary);
            font-weight: 700;
            margin-bottom: 20px;
            display: flex;
            align-items: baseline;
            gap: 8px;
        }

        .package-price span:first-child {
            font-size: 1.1rem;
        }

        .features {
            list-style: none;
            margin-bottom: 25px;
        }

        .features li {
            padding: 12px 0;
            border-bottom: 1px dashed var(--border-color);
            color: var(--light-text);
            display: flex;
            align-items: center;
            gap: 12px;
            transition: var(--transition);
        }

        .features li:hover {
            padding-left: 10px;
            color: var(--primary);
        }

        .features i {
            color: var(--secondary);
            width: 20px;
            text-align: center;
        }

        .features li:last-child {
            border-bottom: none;
        }

        /* ============ GALLERY SECTION ============ */
        .gallery-section {
            background: linear-gradient(135deg, #f4f9f7 0%, rgba(212, 175, 55, 0.05) 100%);
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .gallery-item {
            position: relative;
            height: 280px;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .gallery-item:hover img {
            transform: scale(1.1) rotate(1deg);
        }

        .gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
            display: flex;
            align-items: flex-end;
            padding: 25px;
            color: #fff;
            opacity: 0;
            transition: var(--transition);
        }

        .gallery-item:hover .gallery-overlay {
            opacity: 1;
        }

        .gallery-overlay h3 {
            font-size: 1.3rem;
            margin-bottom: 5px;
        }

        .gallery-overlay p {
            font-size: 0.95rem;
            opacity: 0.9;
        }

        /* ============ TESTIMONIALS SECTION ============ */
        .testimonials-section {
            background: linear-gradient(to bottom, #fff, #f4f9f7);
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .testimonial-card {
            background: #fff;
            padding: 35px;
            border-radius: 12px;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
            border-left: 4px solid transparent;
        }

        .testimonial-card:hover {
            transform: translateY(-5px);
            border-left-color: var(--secondary);
            box-shadow: var(--shadow-lg);
        }

        .quote-icon {
            font-size: 3rem;
            color: var(--secondary);
            opacity: 0.3;
            margin-bottom: 10px;
        }

        .testimonial-text {
            color: var(--light-text);
            font-size: 1.05rem;
            margin-bottom: 20px;
            line-height: 1.8;
            font-style: italic;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .author-avatar {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 700;
            font-size: 1.2rem;
        }

        .author-info h4 {
            color: var(--primary);
            margin-bottom: 3px;
        }

        .author-info p {
            color: var(--light-text);
            font-size: 0.9rem;
        }

        .star-rating {
            color: var(--secondary);
            margin-bottom: 15px;
            font-size: 1.1rem;
        }

        /* ============ CTA SECTION ============ */
        .cta-section {
            background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
            color: #fff;
            text-align: center;
            padding: 80px 5%;
        }

        .cta-section h2 {
            font-size: 3rem;
            margin-bottom: 25px;
            color: #fff;
        }

        .cta-section p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto 40px;
            opacity: 0.95;
        }

        /* ============ FOOTER ============ */
        footer {
            background: var(--dark);
            color: #fff;
            padding: 60px 5% 30px;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-col h3 {
            color: var(--secondary);
            margin-bottom: 20px;
            font-size: 1.3rem;
        }

        .footer-col p,
        .footer-col a {
            color: #aaa;
            margin-bottom: 12px;
            display: block;
            transition: var(--transition);
        }

        .footer-col a:hover {
            color: var(--secondary);
            padding-left: 8px;
        }

        .footer-contact {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            margin-bottom: 15px;
        }

        .footer-contact i {
            color: var(--secondary);
            min-width: 20px;
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 30px;
            text-align: center;
            color: #888;
        }

        .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-icons a {
            width: 45px;
            height: 45px;
            background: rgba(212, 175, 55, 0.2);
            border: 2px solid var(--secondary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
            transition: var(--transition);
        }

        .social-icons a:hover {
            background: var(--secondary);
            color: var(--dark);
            transform: translateY(-5px);
        }

        /* ============ FLOATING BUTTONS ============ */
        .whatsapp-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #25D366 0%, #20BA5D 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            z-index: 999;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            transition: var(--transition);
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .whatsapp-btn:hover {
            transform: scale(1.1) translateY(-10px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 100px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--secondary), #c9a227);
            border: none;
            border-radius: 50%;
            color: var(--dark);
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 999;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
            opacity: 0;
            visibility: hidden;
        }

        .back-to-top.show {
            opacity: 1;
            visibility: visible;
        }

        .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }

        /* ============ MODAL ============ */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            z-index: 2000;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
        }

        .modal.active {
            display: flex;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-content {
            background: #fff;
            padding: 45px;
            border-radius: 12px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
            animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .close-btn {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 2rem;
            color: #888;
            cursor: pointer;
            transition: var(--transition);
        }

        .close-btn:hover {
            color: var(--primary);
        }

        .modal h2 {
            color: var(--primary);
            margin-bottom: 25px;
            font-size: 1.8rem;
        }

        .modal .form-group {
            margin-bottom: 15px;
        }

        .modal .form-control {
            width: 100%;
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .menu-toggle {
                display: flex;
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }

            .hero-content p {
                font-size: 1.1rem;
            }

            .booking-form-container {
                flex-direction: column;
                align-items: stretch;
                bottom: 20px;
                padding: 25px;
            }

            .form-group {
                min-width: unset;
            }

            .btn-submit {
                width: 100%;
            }

            .section-title h2 {
                font-size: 2.2rem;
            }

            .about-section {
                gap: 30px;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .gallery-grid {
                grid-template-columns: 1fr 1fr;
            }

            .services-grid,
            .packages-grid,
            .testimonials-grid {
                grid-template-columns: 1fr;
            }

            .hero-buttons {
                flex-direction: column;
            }

            .btn {
                width: 100%;
                justify-content: center;
            }

            .navbar.scrolled .nav-btn {
                width: auto;
            }

            .whatsapp-btn {
                width: 50px;
                height: 50px;
                font-size: 1.5rem;
                bottom: 20px;
                right: 20px;
            }

            .back-to-top {
                bottom: 85px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 1.2rem;
            }
        }

        @media (max-width: 480px) {
            section {
                padding: 40px 3%;
            }

            .hero {
                min-height: 80vh;
            }

            .hero-content h1 {
                font-size: 1.8rem;
            }

            .hero-content p {
                font-size: 1rem;
            }

            .section-title h2 {
                font-size: 1.8rem;
            }

            .about-image::before {
                display: none;
            }

            .modal-content {
                padding: 30px;
                width: 95%;
            }
        }
    </style>
</head>
<body>
    <!-- Preloader -->
    <div id="preloader">
        <div class="preloader-content">
            <div class="spinner"></div>
            <p class="preloader-text">Loading Sacred Journey...</p>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <a href="#home" class="logo">
            <div class="logo-icon">☪</div>
            Sana Tours
        </a>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="nav-btn" onclick="openBookingModal()">Book Now</button>
        <button class="menu-toggle" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-slide"></div>
        <div class="hero-slide"></div>
        <div class="hero-slide"></div>
        <div class="hero-overlay"></div>

        <div class="hero-content">
            <span class="hero-badge">☪ Your Sacred Journey Begins Here</span>
            <h1>Experience the Holy Journey of a Lifetime</h1>
            <p>25+ Years of Excellence in Hajj & Umrah Services</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" onclick="openBookingModal()">
                    <i class="fas fa-calendar"></i> Book Now
                </button>
                <button class="btn btn-secondary" onclick="document.getElementById('packages').scrollIntoView()">
                    <i class="fas fa-arrow-down"></i> View Packages
                </button>
            </div>
        </div>

        <!-- Floating Booking Form -->
        <div class="booking-form-container">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control" placeholder="Your Name">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="tel" class="form-control" placeholder="+92 300 XXXXXXX">
            </div>
            <div class="form-group">
                <label>Package Type</label>
                <select class="form-control">
                    <option>Select Package</option>
                    <option>Hajj Package</option>
                    <option>Umrah Package</option>
                    <option>Ramzan Special</option>
                </select>
            </div>
            <div class="form-group">
                <button class="btn-submit">Send Inquiry</button>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="about-image" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=700&fit=crop" alt="Pilgrims at Sacred Journey">
        </div>
        <div class="about-content" data-aos="fade-left">
            <h2>Why Choose Sana Tours?</h2>
            <p>With over 25 years of distinguished experience, Sana Tours & Travels has earned a reputation as a trusted name in Hajj and Umrah services. We are a government-authorized agency dedicated to providing a seamless, spiritually fulfilling journey.</p>
            <p>Our team of experts ensures every aspect of your pilgrimage is handled with utmost care and professionalism. From visa processing to accommodation and spiritual guidance, we've got you covered.</p>
            
            <div class="stats-grid">
                <div class="stat-card" data-aos="fade-up">
                    <div class="stat-number">25+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="stat-number">15K+</div>
                    <div class="stat-label">Happy Pilgrims</div>
                </div>
                <div class="stat-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="stat-number">99%</div>
                    <div class="stat-label">Satisfaction Rate</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
        <div class="section-title" data-aos="fade-down">
            <h2>Our Services</h2>
            <p>Comprehensive pilgrimage solutions tailored to your needs</p>
        </div>
        <div class="services-grid">
            <div class="service-card" data-aos="fade-up">
                <i class="fas fa-passport service-icon"></i>
                <h3>Visa Processing</h3>
                <p>100% Success Rate with complete documentation support and expert guidance.</p>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                <i class="fas fa-hotel service-icon"></i>
                <h3>Premium Hotels</h3>
                <p>5-Star accommodations walking distance from Haram with all amenities.</p>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                <i class="fas fa-plane service-icon"></i>
                <h3>Flight Booking</h3>
                <p>Direct flights from all major cities with flexible scheduling options.</p>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                <i class="fas fa-book-quran service-icon"></i>
                <h3>Religious Guidance</h3>
                <p>Experienced Islamic scholars accompany every group throughout the journey.</p>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="400">
                <i class="fas fa-bus service-icon"></i>
                <h3>Ground Transport</h3>
                <p>Comfortable AC buses and private vehicles for safe travel and convenience.</p>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                <i class="fas fa-headset service-icon"></i>
                <h3>24/7 Support</h3>
                <p>Round-the-clock customer support for any queries or emergencies.</p>
            </div>
        </div>
    </section>

    <!-- Packages Section -->
    <section id="packages" class="packages-section">
        <div class="section-title" data-aos="fade-down">
            <h2>Our Packages</h2>
            <p>Choose the perfect package for your sacred journey</p>
        </div>
        <div class="packages-grid">
            <!-- Silver Package -->
            <div class="package-card" data-aos="fade-up">
                <div class="package-header">
                    <span class="package-badge">BUDGET FRIENDLY</span>
                    <h3>Silver Umrah</h3>
                    <div class="package-duration">14 Days</div>
                </div>
                <div class="package-body">
                    <div class="package-price">
                        <span>PKR</span>
                        <span>350,000</span>
                    </div>
                    <ul class="features">
                        <li><i class="fas fa-check-circle"></i> 3-Star Hotel Near Haram</li>
                        <li><i class="fas fa-check-circle"></i> Breakfast Included</li>
                        <li><i class="fas fa-check-circle"></i> Group Transport</li>
                        <li><i class="fas fa-check-circle"></i> Islamic Scholar Guide</li>
                        <li><i class="fas fa-check-circle"></i> Visa Assistance</li>
                    </ul>
                    <button class="btn btn-primary" style="width: 100%;" onclick="openBookingModal()">Book Now</button>
                </div>
            </div>

            <!-- Gold Package -->
            <div class="package-card" data-aos="fade-up" data-aos-delay="100">
                <div class="package-header">
                    <span class="package-badge featured">RECOMMENDED</span>
                    <h3>Gold Hajj</h3>
                    <div class="package-duration">30 Days</div>
                </div>
                <div class="package-body">
                    <div class="package-price">
                        <span>PKR</span>
                        <span>1,200,000</span>
                    </div>
                    <ul class="features">
                        <li><i class="fas fa-check-circle"></i> 5-Star Hotel with Haram View</li>
                        <li><i class="fas fa-check-circle"></i> All Meals Included</li>
                        <li><i class="fas fa-check-circle"></i> Direct Flights</li>
                        <li><i class="fas fa-check-circle"></i> Senior Scholar Guide</li>
                        <li><i class="fas fa-check-circle"></i> Complete Ziarat Tours</li>
                    </ul>
                    <button class="btn btn-primary" style="width: 100%;" onclick="openBookingModal()">Book Now</button>
                </div>
            </div>

            <!-- Platinum Package -->
            <div class="package-card" data-aos="fade-up" data-aos-delay="200">
                <div class="package-header">
                    <span class="package-badge">LUXURY</span>
                    <h3>Platinum Hajj</h3>
                    <div class="package-duration">35 Days</div>
                </div>
                <div class="package-body">
                    <div class="package-price">
                        <span>PKR</span>
                        <span>1,800,000</span>
                    </div>
                    <ul class="features">
                        <li><i class="fas fa-check-circle"></i> Luxury 5-Star Suites</li>
                        <li><i class="fas fa-check-circle"></i> Gourmet Dining Included</li>
                        <li><i class="fas fa-check-circle"></i> Private Transport</li>
                        <li><i class="fas fa-check-circle"></i> Personal Scholar Companion</li>
                        <li><i class="fas fa-check-circle"></i> VIP Ziarat Experiences</li>
                    </ul>
                    <button class="btn btn-primary" style="width: 100%;" onclick="openBookingModal()">Book Now</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery-section">
        <div class="section-title" data-aos="fade-down">
            <h2>Sacred Moments</h2>
            <p>Beautiful glimpses of the holy journey</p>
        </div>
        <div class="gallery-grid">
            <div class="gallery-item" data-aos="fade-up">
                <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=400&fit=crop" alt="Holy Kaaba">
                <div class="gallery-overlay">
                    <h3>The Holy Kaaba</h3>
                    <p>Center of spiritual devotion</p>
                </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
                <img src="https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=400&fit=crop" alt="Sacred Mosque">
                <div class="gallery-overlay">
                    <h3>Masjid Al-Haram</h3>
                    <p>Architectural marvel</p>
                </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
                <img src="https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=500&h=400&fit=crop" alt="Prayer Gathering">
                <div class="gallery-overlay">
                    <h3>United in Prayer</h3>
                    <p>Spiritual unity</p>
                </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="300">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop" alt="Night View">
                <div class="gallery-overlay">
                    <h3>Night Illumination</h3>
                    <p>Divine beauty</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials-section">
        <div class="section-title" data-aos="fade-down">
            <h2>What Our Pilgrims Say</h2>
            <p>Real experiences from our valued clients</p>
        </div>
        <div class="testimonials-grid">
            <div class="testimonial-card" data-aos="fade-up">
                <div class="star-rating">★★★★★</div>
                <p class="testimonial-text">"Alhamdulillah, Sana Tours made our Hajj journey absolutely seamless. The arrangements were impeccable, and the scholars were incredibly knowledgeable."</p>
                <div class="testimonial-author">
                    <div class="author-avatar">MA</div>
                    <div class="author-info">
                        <h4>Muhammad Ahmed</h4>
                        <p>Hajj 2023</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
                <div class="star-rating">★★★★★</div>
                <p class="testimonial-text">"Our family Umrah trip was perfectly organized. The hotel was walking distance from Haram, and the staff was always available for assistance."</p>
                <div class="testimonial-author">
                    <div class="author-avatar">FK</div>
                    <div class="author-info">
                        <h4>Fatima Khan</h4>
                        <p>Umrah 2024</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                <div class="star-rating">★★★★★</div>
                <p class="testimonial-text">"The Ramzan Umrah package exceeded all expectations. The night prayers in Haram were spiritually uplifting and transformative."</p>
                <div class="testimonial-author">
                    <div class="author-avatar">AR</div>
                    <div class="author-info">
                        <h4>Abdul Rahman</h4>
                        <p>Ramzan 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" data-aos="fade-down">
        <h2>Ready to Begin Your Sacred Journey?</h2>
        <p>Don't miss the opportunity to experience the spiritual fulfillment of a lifetime. Book your package today!</p>
        <button class="btn btn-secondary" onclick="openBookingModal()">
            <i class="fas fa-book"></i> Book Your Package
        </button>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="footer-grid">
            <div class="footer-col">
                <h3>Sana Tours & Travels</h3>
                <p>Government Authorized Agent providing premium pilgrimage services with dedication and excellence.</p>
                <div class="social-icons">
                    <a href="#facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#instagram" title="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#twitter" title="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#youtube" title="YouTube"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#packages">Packages</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="footer-col">
                <h3>Services</h3>
                <a href="#services">Visa Processing</a>
                <a href="#services">Hotel Booking</a>
                <a href="#services">Flight Booking</a>
                <a href="#services">Transport</a>
            </div>
            <div class="footer-col">
                <h3>Contact Us</h3>
                <div class="footer-contact">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>123 Travel Plaza, Main Boulevard<br>Lahore, Pakistan</span>
                </div>
                <div class="footer-contact">
                    <i class="fas fa-phone"></i>
                    <span>+92 300 1234567<br>+92 42 35678901</span>
                </div>
                <div class="footer-contact">
                    <i class="fas fa-envelope"></i>
                    <span>info@sanatours.pk<br>bookings@sanatours.pk</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Sana Tours & Travels. All Rights Reserved. | <a href="#" style="color: var(--secondary);">Privacy Policy</a> | <a href="#" style="color: var(--secondary);">Terms & Conditions</a></p>
        </div>
    </footer>

    <!-- Floating Buttons -->
    <a href="https://wa.me/923001234567" class="whatsapp-btn" target="_blank" title="Chat on WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
    <button class="back-to-top" id="backToTop" onclick="scrollToTop()" title="Back to Top">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Booking Modal -->
    <div class="modal" id="bookingModal">
        <div class="modal-content">
            <button class="close-btn" onclick="closeBookingModal()">&times;</button>
            <h2>Book Your Sacred Journey</h2>
            <form onsubmit="submitBooking(event)">
                <div class="form-group">
                    <label>Full Name *</label>
                    <input type="text" class="form-control" placeholder="Your Full Name" required>
                </div>
                <div class="form-group">
                    <label>Email Address *</label>
                    <input type="email" class="form-control" placeholder="your@email.com" required>
                </div>
                <div class="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" class="form-control" placeholder="+92 300 XXXXXXX" required>
                </div>
                <div class="form-group">
                    <label>Package Type *</label>
                    <select class="form-control" required>
                        <option value="">Select a package</option>
                        <option value="silver">Silver Umrah - PKR 350,000</option>
                        <option value="gold">Gold Hajj - PKR 1,200,000</option>
                        <option value="platinum">Platinum Hajj - PKR 1,800,000</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Number of Travelers *</label>
                    <input type="number" class="form-control" placeholder="1" min="1" required>
                </div>
                <div class="form-group">
                    <label>Special Requirements</label>
                    <textarea class="form-control" placeholder="Any special requests..." rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 20px;">
                    <i class="fas fa-check"></i> Submit Inquiry
                </button>
            </form>
        </div>
    </div>

    <!-- AOS Animate On Scroll Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    
    <script>
        // Initialize AOS
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true
        });

        // Preloader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('preloader').style.display = 'none';
            }, 2500);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Back to Top Button
            const backToTop = document.getElementById('backToTop');
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        // Scroll to Top
        function scrollToTop() {
            window.scrollTo({ top: 