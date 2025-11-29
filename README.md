# DevLab - Programming Patterns Practice Lab

## Overview

DevLab is a professional practice platform designed to help developers practice the most common programming patterns found in technical interviews and real-world software development. It combines structured exercises in JavaScript and TypeScript with a learning methodology based on spaced repetition and mental pattern recognition.

The repository is designed to continuously grow with new exercises and patterns, providing a solid foundation for developers looking to improve their skills in pair programming, coding challenges, and algorithmic problem solving.

## Architecture

The system is organized in a modular structure that enables:

**Dual Exercises**: Each pattern is implemented in both JavaScript and TypeScript, allowing you to understand the logic first and then add type safety.

**Practice System**: Separate `practice.js` and `practice.ts` files from solutions, encouraging active practice without the temptation to copy.

**Comprehensive Testing**: Tests with multiple samples covering edge cases, validating robustness and correctness.

**Structured Documentation**: Each exercise includes a README with problem statement, explained solution, and scripts for creating educational content.

## Exercise Categories

### Data Manipulation

Exercises focused on transformation, filtering, and organization of data structures:

- **Filter & Transform**: List processing with validation, filtering, sorting, and transformation
- **Group By**: Data grouping by dynamic criteria
- **Normalize**: Normalization of complex data structures
- **Flatten**: Flattening of multidimensional structures
- **Unique**: Duplicate removal with different strategies
- **Top N**: Frequency analysis and selection of most common elements

### Advanced Object Operations

Patterns for working with complex data structures:

- **Merge Config**: Intelligent configuration merging with conflict resolution
- **Deep Clone**: Deep cloning of objects and arrays
- **Deep Equal**: Deep comparison of nested structures
- **Filter Multidimensional**: Advanced filtering in complex structures

### Higher-Order Functions

Functional patterns for code composition and reuse:

- **Currying**: Transformation of multi-parameter functions into partial functions
- **Pipe & Compose**: Function composition for transformation pipelines
- **Memoize**: Optimization through function result caching
- **Debounce**: Execution frequency control for events
- **Throttle**: Execution rate limiting

### Utilities and Tools

Practical implementations of common utilities:

- **Template Engine**: Template system with variable interpolation
- **Validator**: Schema and data structure validation
- **Text Search**: Search with scoring and result ranking
- **JSON ↔ CSV**: Bidirectional conversion between data formats
- **Permissions System**: Permissions and authorization system

### Asynchronous Programming

Patterns for handling asynchronous operations and concurrency:

- **Fetch Retry**: Robust HTTP request handling with retries
- **Custom Promise.all**: Advanced control of parallel promises
- **Custom Promise.race**: Implementation of timeouts and races
- **Queue Concurrency**: Queues with concurrency limits
- **Rate Limiter**: Request rate limiting

### Backend Architecture

Architectural patterns for server-side applications:

- **Middleware Runner**: Chainable middleware system
- **Scheduler**: Task and job scheduling
- **Configurable Logger**: Logging system with levels and formatting
- **Cache TTL**: Cache system with temporal expiration
- **Saga/Transactional Workflow**: Distributed transaction handling

### Code Quality and Architecture

Patterns for improving code quality and maintainability:

- **Test Runner**: Minimalist testing framework
- **Refactor**: Legacy code refactoring techniques
- **Adapter**: Adapter pattern between different APIs
- **DI Container**: Dependency injection container
- **i18n**: Basic internationalization system
- **Event Emitter**: Pub/sub event system
- **Form Validator**: Multi-step form validation
- **Error Transformer**: Error transformation and normalization
- **Performance Measurement**: Performance measurement and analysis
- **Intentional Debugging**: Advanced debugging techniques

## Key Features

### Learning Methodology

**Spaced Repetition**: System designed to strengthen long-term memory through distributed practice over time.

**Pattern Recognition**: Focus on understanding mental patterns rather than memorizing literal code, allowing knowledge application in new contexts.

**Active Practice**: Separate practice files that encourage writing code from scratch rather than passive reading.

### Comprehensive Testing

**Multiple Samples**: Each exercise includes several test cases covering common scenarios and edge cases.

**Robust Validation**: Tests that verify error handling, input validation, and behavior with invalid data.

**Complete Coverage**: Unit tests that guarantee the correctness of each implementation.

### Professional Documentation

**Clear Problem Statements**: Each exercise includes a README with problem description, requirements, and examples.

**Pattern Explanations**: Documentation explaining the mental pattern behind each solution.

**Content Scripts**: Guides for creating educational videos explaining each pattern.

### Dual Language Support

**JavaScript First**: Learn the logic first in JavaScript without type complexity.

**TypeScript Enhancement**: Reinforce learning by adding types, interfaces, and generics.

**Direct Comparison**: Parallel structure allowing comparison of JS vs TS implementations.

## Technology Stack

**Base Language**: JavaScript (ES6+) and TypeScript

**Testing Framework**: Jest with support for JavaScript and TypeScript

**Build Tools**: TypeScript Compiler, Jest with ts-jest

**Dependency Management**: npm

**Structure**: Monorepo with modular organization by exercises

## Prerequisites

- Node.js 16 or higher
- npm 7 or higher
- TypeScript 5.3+ (included as dependency)

## Quick Start

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/your-username/devlab.git
cd devlab

# Install dependencies
npm install
```

### 2. Run Tests

```bash
# Run all tests
npm test

# JavaScript tests only
npm run test:js

# TypeScript tests only
npm run test:ts

# Watch mode (development)
npm run test:watch

# With coverage
npm run test:coverage
```

### 3. Practice an Exercise

```bash
# 1. Read the problem statement
cat js/01-filter-transform/README.md

# 2. Study the solution (optional at first)
cat js/01-filter-transform/solution.md

# 3. Write your solution in practice.js
# Edit: js/01-filter-transform/practice.js

# 4. Run tests
npm test js/01-filter-transform

# 5. Compare with solution if tests fail
cat js/01-filter-transform/index.js
```

### 4. Add New Samples

When you've practiced an exercise enough, add more test cases:

```bash
# Create new sample
echo '{"users": [...]}' > js/01-filter-transform/samples/sample-5-custom.json

# Add corresponding test in index.test.js
```

## Recommended Learning Methodology

### Phase 1: Initial Learning (Days 1-3)

**Day 1**: Understand the problem
- Read the README with the problem statement
- Study the explained solution
- Run tests to see the behavior
- Don't write code yet

**Day 2**: Practice with guidance
- Try writing the solution while looking at the mental pattern
- Compare with the solution when finished
- Repeat 2-3 times until it flows

**Day 3**: Write without looking
- Write the function based only on the mental pattern
- Run tests until they all pass
- When all tests pass, you've practiced the exercise

### Phase 2: Consolidation (Days 4-7)

**Day 4**: Repetition with different samples
- Write the function from memory
- Run tests with different cases

**Day 5**: Variations
- Create your own sample
- Add a test for your case
- Solve your own problem

**Day 6**: Under pressure
- 10-minute timer
- Write the function before time runs out

**Day 7**: Mastery
- 5-minute timer
- Must pass all tests
- Ready to create educational content

### Phase 3: Create Content

Use the `EXPLICAR-PATRON.md` script from each exercise to:
- Record videos explaining the pattern
- Share knowledge on LinkedIn
- Reinforce your own learning

## Project Structure

```
devlab/
├── js/                          # JavaScript exercises
│   ├── 01-filter-transform/
│   │   ├── README.md            # Exercise problem statement
│   │   ├── practice.js          # File to practice (empty)
│   │   ├── index.js             # Complete solution
│   │   ├── index.test.js        # Tests with multiple samples
│   │   ├── solution.md          # Pattern explanation
│   │   ├── EXPLICAR-PATRON.md   # Script for educational video
│   │   └── samples/              # Test data
│   │       ├── sample-1.json
│   │       ├── sample-2.json
│   │       └── ...
│
├── ts/                          # TypeScript exercises
│   ├── 01-filter-transform/
│   │   ├── README.md            # Problem statement (TypeScript focus)
│   │   ├── practice.ts          # File to practice with types
│   │   ├── index.ts             # Solution with types and interfaces
│   │   ├── index.test.ts        # Tests with types
│   │   ├── EXPLICAR-PATRON.md   # Script for video (TypeScript)
│   │   └── samples/             # Same samples as JS
│
├── package.json                 # Project configuration
├── jest.config.js               # Jest configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## Available Commands

```bash
# Testing
npm test                        # Run all tests
npm run test:js                 # JavaScript tests only
npm run test:ts                 # TypeScript tests only
npm run test:watch              # Watch mode for development
npm run test:coverage           # With coverage report

# Specific testing
npm test js/01-filter-transform # Test specific JS exercise
npm test ts/01-filter-transform # Test specific TS exercise
```

## Contributing

This repository is designed to grow. You can contribute by:

1. **Adding new exercises**: Follow the existing structure and create new patterns
2. **Improving samples**: Add more test cases to existing exercises
3. **Improving documentation**: Make exercises clearer and more accessible
4. **Sharing knowledge**: Create educational content based on the exercises

### Contribution Process

1. Fork the repository
2. Create a branch: `git checkout -b feature/new-exercise`
3. Follow the existing structure for new exercises
4. Add comprehensive tests
5. Document the mental pattern
6. Commit: `git commit -m 'Add exercise: new-pattern'`
7. Push: `git push origin feature/new-exercise`
8. Create a Pull Request

## Project Philosophy

### Pattern Recognition vs Code Memorization

The goal is not to memorize literal code, but to develop **mental patterns** that you can recognize and apply instantly when you see similar problems.

Example of mental pattern:
- "Validate → Filter → Transform → Return"

Instead of memorizing:
- `if (!Array.isArray(items)) return []`

### Active Learning

Each exercise requires writing code from scratch. The `practice.js` and `practice.ts` files are intentionally empty to encourage active practice.

### Spaced Repetition

The methodology is designed to strengthen long-term memory through distributed practice over time, not through marathon sessions.

## Roadmap

The repository is constantly growing. Expansion areas include:

- **New Patterns**: Additional exercises in existing categories
- **New Categories**: Design patterns, advanced algorithms, optimization
- **Interactive Exercises**: Web versions for online practice
- **Community**: Discussion forums and peer code review
- **CI/CD Integration**: Automated solution validation

## License

MIT License - see LICENSE for details.

---

**Remember**: The key to success is not memorizing code, but developing the ability to recognize patterns and apply them fluently under pressure. Practice consistently and you'll see results!
