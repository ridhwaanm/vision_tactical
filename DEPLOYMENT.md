# Vision Tactical — Deployment Guide

## Production Deployment Checklist

### Prerequisites

- [ ] xneelo dedicated server with Ubuntu 24.04
- [ ] Domain configured: visiontactical.co.za
- [ ] Cloudflare account with DNS configured
- [ ] Resend API key for email sending
- [ ] SSH access to server

### Server Setup

1. **Install Docker and Docker Compose**
   ```bash
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   
   # Install Docker Compose
   apt-get install docker-compose-plugin
   ```

2. **Configure Firewall**
   ```bash
   ufw allow 22/tcp    # SSH
   ufw allow 80/tcp    # HTTP
   ufw allow 443/tcp   # HTTPS
   ufw enable
   ```

3. **Clone Repository**
   ```bash
   cd /opt
   git clone https://github.com/your-org/vision-tactical.git
   cd vision-tactical
   ```

4. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   nano .env  # Edit with production values
   ```

   Required environment variables:
   ```env
   PUBLIC_SITE_URL=https://visiontactical.co.za
   PUBLIC_SITE_NAME=Vision Tactical
   PUBLIC_CONTACT_PHONE=0842222222
   PUBLIC_CONTACT_EMAIL=info@visiontactical.co.za
   PUBLIC_WHATSAPP_NUMBER=27842222222
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   CONTACT_FORM_TO_EMAIL=info@visiontactical.co.za
   PORT=3000
   NODE_ENV=production
   ```

5. **Build and Start**
   ```bash
   docker compose build
   docker compose up -d
   ```

6. **Verify Deployment**
   ```bash
   docker compose ps
   docker compose logs -f
   ```

### Cloudflare Configuration

1. **DNS Settings**
   - A record: `visiontactical.co.za` → [your server IP] (Proxied)
   - A record: `www.visiontactical.co.za` → [your server IP] (Proxied)

2. **SSL/TLS**
   - Mode: Full (Strict)
   - Origin Certificate: Install on server

3. **Page Rules**
   - `visiontactical.co.za/cache/*`: Cache Level = Cache Everything, Edge TTL = 1 month
   - `visiontactical.co.za/_app/*`: Cache Level = Cache Everything, Edge TTL = 1 year

4. **WAF**
   - Enable managed ruleset
   - Add rate limiting rule for forms

5. **Speed Optimization**
   - Auto Minify: HTML, CSS, JS (enabled)
   - Polish: Lossy (enabled)
   - Brotli: enabled

### GitHub Actions Setup

1. **Add Repository Secrets**
   - `SERVER_HOST`: Your server IP
   - `SERVER_USER`: SSH username (e.g., `root`)
   - `SERVER_SSH_KEY`: SSH private key
   - `SLACK_WEBHOOK_URL`: (optional) Slack webhook for notifications

2. **Test Deployment**
   ```bash
   git push origin main
   ```

### Post-Deployment Tasks

1. **Verify Site Functionality**
   - [ ] Homepage loads correctly
   - [ ] All navigation links work
   - [ ] Contact form sends email
   - [ ] Quote wizard submits successfully
   - [ ] Blog posts display correctly
   - [ ] Mobile responsive design works

2. **SEO Verification**
   - [ ] Submit sitemap to Google Search Console
   - [ ] Verify robots.txt is accessible
   - [ ] Test structured data with Google Rich Results Test
   - [ ] Check Open Graph tags with Facebook Sharing Debugger

3. **Performance Testing**
   - [ ] Run Lighthouse audit (target: 90+ all categories)
   - [ ] Test Core Web Vitals in PageSpeed Insights
   - [ ] Verify CDN caching is working

4. **Security Checks**
   - [ ] HTTPS redirect working
   - [ ] Security headers present
   - [ ] Forms have rate limiting
   - [ ] No sensitive data exposed in client bundle

### Monitoring

1. **Uptime Monitoring**
   - Set up uptime monitoring (e.g., UptimeRobot, Pingdom)
   - Configure alerts for downtime

2. **Error Tracking**
   - Consider adding Sentry or similar for error tracking
   - Monitor server logs regularly

3. **Analytics**
   - Add Google Analytics 4 or similar
   - Set up conversion tracking for quote submissions

### Backup Strategy

1. **Database** (if added in Phase 3)
   - Daily automated backups
   - Off-site backup storage

2. **Content**
   - Blog posts backed up via Git
   - Regular exports of form submissions

3. **Disaster Recovery**
   - Document recovery procedures
   - Test restore process quarterly

### Maintenance

1. **Regular Updates**
   - Weekly: Check for security updates
   - Monthly: Update dependencies (`npm update`)
   - Quarterly: Review and update content

2. **Performance Optimization**
   - Monthly: Review Lighthouse scores
   - Quarterly: Audit and remove unused code
   - As needed: Optimize images and assets

### Troubleshooting

**Container won't start:**
```bash
docker compose logs
docker compose down && docker compose up -d
```

**Site returns 502:**
```bash
# Check if container is running
docker compose ps

# Check container logs
docker compose logs web

# Restart container
docker compose restart
```

**Email not sending:**
- Verify RESEND_API_KEY is correct
- Check Resend dashboard for errors
- Verify FROM email domain is verified in Resend

**High memory usage:**
```bash
# Check container resource usage
docker stats

# Restart if needed
docker compose restart
```

### Contact Information

For deployment issues:
- Technical Lead: [Name]
- Email: tech@visiontactical.co.za
- Emergency: 084 222 2222

---

**Last Updated:** 17 March 2026
**Version:** 1.0.0
