# EXPERIENCE.md – Vibe Coding Development Reflection

## Tool Selection Justification

I selected ChatGPT as my vibe coding tool because I wanted an AI assistant that could respond conversationally and help generate and refine code while I worked inside VS Code. Although many vibe coding tools are integrated directly into development IDEs, ChatGPT in a separate window still offers contextual assistance and real-time iteration. It also aligns with the assignment objective of comparing different AI-powered workflows, including external assistants versus embedded copilots.

## Development Process

I built the Todo List application step by step using prompts. I asked ChatGPT to generate clean, beginner-friendly code for HTML, CSS, and JavaScript files, including localStorage support for persistence. I pasted the generated code into VS Code, tested functionality in the browser, and made small adjustments when needed. For each change, I repeated several cycles of prompting, copying, pasting, testing, and refining. It took a few iterations to get everything connected correctly, especially JavaScript functions that interact with the DOM.

## Challenges and Solutions

The first major challenge was Git setup in PowerShell. I had to configure my username and email and learn how to create files with PowerShell instead of Linux-style commands. Another challenge occurred when I opened the project in the browser and saw a directory view instead of the rendered app. I learned that I had opened the folder, not the index.html file, and corrected it.

In JavaScript, persistence required storing tasks with localStorage and then loading them on DOMContentLoaded. At first, tasks were not marked completed consistently; ChatGPT helped me identify a missing state update and suggested a toggle function. I also manually reorganized styling to improve readability.

## Reflection

This assignment showed me the real value of vibe coding. Instead of only autocompleting code, ChatGPT generated complete components, explained logic, and guided debugging steps. I was surprised how quickly I could build a working prototype. The workflow felt more collaborative and conversational, similar to pair-programming with an expert developer.

However, I needed to think critically about the generated code and test it thoroughly. Sometimes ChatGPT provided logically correct steps but missed practical file relationships or browser behavior. I still needed foundational understanding to evaluate suggestions.

I would use this tool again for rapid prototyping and learning new frameworks. Vibe coding will continue shaping the future of software development because it reduces repetitive work, accelerates learning, and democratizes programming by lowering barriers for beginners. Developers shift from writing every line to supervising and reasoning about code generated collaboratively with AI tools.
