# Set the CMake version required
cmake_minimum_required(VERSION 3.31.2)

# Set the project name and version
project(MyPortfolioBackend VERSION 1.0)

# Specify the C++ standard
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Include directories for Crow and other dependencies
include_directories("${CMAKE_SOURCE_DIR}/Crow")

# Find necessary libraries (example: Boost and OpenSSL)
find_package(Boost REQUIRED)
find_package(OpenSSL REQUIRED)

# Add the executable
add_executable(${PROJECT_NAME} main.cpp)

# Link required libraries
target_link_libraries(${PROJECT_NAME} Boost::Boost OpenSSL::SSL OpenSSL::Crypto)

# Add installation rules
install(TARGETS ${PROJECT_NAME} DESTINATION bin)

# Add tests (if any)
enable_testing()
add_test(NAME MyTest COMMAND ${PROJECT_NAME})

# Add compiler warnings
target_compile_options(${PROJECT_NAME} PRIVATE -Wall -Wextra -pedantic)

# Check for CMake version compatibility
if (CMAKE_VERSION VERSION_LESS "3.8")
    message(WARNING "CMake version is below 3.8, ensure to upgrade to access all features.")
endif()

# Add custom targets
# add_custom_target(run ./myExecutable)
