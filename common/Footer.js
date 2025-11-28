export default function RenderFooter()
{
    const footer = document.getElementById("footer");
    footer.innerHTML = `
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="mb-4">About ICES</h3>
                <p class="text-white/80 text-sm">
                    Innovation in Civil Engineering Society is dedicated to fostering
                    excellence in civil engineering education and research.
                </p>
            </div>
            <div>
                <h3 class="mb-4">Quick Links</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="../index.html" class="text-white/80 hover:text-[#fe7701] transition-colors">Home</a></li>
                    <li><a href="#" class="text-white/80 hover:text-[#fe7701] transition-colors">About</a></li>
                    <li><a href="#" class="text-white/80 hover:text-[#fe7701] transition-colors">Programs</a></li>
                    <li><a href="#" class="text-white/80 hover:text-[#fe7701] transition-colors">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 class="mb-4">Contact Us</h3>
                <p class="text-white/80 text-sm">
                    Innovation In Civil Engineering Society<br>
                    Email: <a href="mailto:mubasices@gmail.com">mubasices@gmail.com</a><br>
                    Phone: <a href="tel:+265 997 726 410">+265 997 726 410</a>
                </p>
            </div>
        </div>
        <div class="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © <span id="currentYear"></span> Innovation in Civil Engineering Society. All rights reserved.
        </div>
    
    `
}