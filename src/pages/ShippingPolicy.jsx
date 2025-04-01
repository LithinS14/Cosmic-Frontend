"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import "../styles/pages/terms-policy.css"

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="terms-policy-page"
    >
      <section className="terms-policy-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Shipping Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Information about our shipping methods, delivery times, and costs
          </motion.p>
        </div>
      </section>

      <section className="terms-policy-content">
        <div className="container">
          <div className="terms-policy-container">
            <div className="last-updated">
              <p>Last Updated: April 1, 2025</p>
            </div>

            <div className="terms-policy-section">
              <h2>1. Shipping Methods</h2>
              <p>
                At COSMIC, we offer several shipping methods to ensure your order reaches you in a timely manner. Our
                available shipping options may vary based on your location and the items in your order.
              </p>
              <h3>Domestic Shipping (United States)</h3>
              <ul>
                <li>Standard Shipping: 3-5 business days ($5.99 or free on orders over $75)</li>
                <li>Express Shipping: 2-3 business days ($12.99)</li>
                <li>Next Day Shipping: 1 business day ($19.99)</li>
              </ul>
              <h3>International Shipping</h3>
              <ul>
                <li>Standard International: 7-14 business days ($15.99 or free on orders over $150)</li>
                <li>Express International: 3-5 business days ($29.99)</li>
              </ul>
            </div>

            <div className="terms-policy-section">
              <h2>2. Processing Time</h2>
              <p>
                All orders are processed within 1-2 business days (Monday-Friday, excluding holidays) after receiving
                your order confirmation email. Orders placed after 12 PM EST may be processed the following business
                day.
              </p>
              <p>
                During high-volume periods (such as holidays or special promotions), processing times may be slightly
                longer. We will notify you if there are any unexpected delays in processing your order.
              </p>
            </div>

            <div className="terms-policy-section">
              <h2>3. Shipping Confirmation & Tracking</h2>
              <p>
                Once your order has been processed and shipped, you will receive a shipping confirmation email with a
                tracking number. You can use this tracking number to monitor the status of your delivery.
              </p>
              <p>
                Please note that tracking information may not be available immediately and can take up to 24 hours to
                update in the carrier's system.
              </p>
            </div>

            <div className="terms-policy-section">
              <h2>4. Shipping Restrictions</h2>
              <p>
                We currently ship to most countries worldwide; however, there may be restrictions on shipping certain
                products to specific international destinations due to local laws and regulations.
              </p>
              <p>
                If you are unsure whether we ship to your country, please contact our customer service team before
                placing your order.
              </p>
            </div>

            <div className="terms-policy-section">
              <h2>5. Customs & Import Duties</h2>
              <p>
                For international orders, please note that you may be responsible for paying customs fees, import
                duties, and taxes imposed by your country's government. These fees are not included in the purchase
                price or shipping cost and are the responsibility of the recipient.
              </p>
              <p>
                COSMIC is not responsible for any customs delays, fees, or confiscation of merchandise by customs
                agencies. We recommend contacting your local customs office for more information before placing your
                order.
              </p>
            </div>

            <div className="terms-policy-section">
              <h2>6. Delivery Issues</h2>
              <p>
                If your package is returned to us due to an incorrect address, refused delivery, or failure to claim
                from the carrier, you will be responsible for the original shipping charges as well as any additional
                charges incurred for reshipping the order.
              </p>
              <p>
                In the event that your package is lost or damaged during transit, please contact our customer service
                team within 7 days of the expected delivery date. We will work with the shipping carrier to resolve the
                issue as quickly as possible.
              </p>
            </div>

            <div className="terms-policy-section">
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions or concerns about our shipping policy, please contact our customer service
                team at:
              </p>
              <p>
                Email: shipping@cosmic.com
                <br />
                Phone: (555) 123-4567
                <br />
                Hours: Monday-Friday, 9 AM - 5 PM EST
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default ShippingPolicy

