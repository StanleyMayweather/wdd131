"""
Windchill Calculator
Author: Stan
Description:
    This program calculates windchill for a given temperature (in Fahrenheit or Celsius)
    for wind speeds ranging from 5 to 60 mph in increments of 5 mph.
    Formula: 
        WindChill (°F) = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
    where:
        T = temperature in Fahrenheit
        V = wind speed in mph
"""

def celsius_to_fahrenheit(temp_c):
    """Convert Celsius to Fahrenheit."""
    return temp_c * (9 / 5) + 32

def calculate_windchill(temp_f, wind_speed):
    """Calculate windchill based on Fahrenheit temperature and wind speed."""
    return (35.74
            + 0.6215 * temp_f
            - 35.75 * (wind_speed ** 0.16)
            + 0.4275 * temp_f * (wind_speed ** 0.16))

def display_results(temp_f):
    """Display windchill for wind speeds from 5 to 60 mph."""
    print("\nWindchill Results:")
    for speed in range(5, 65, 5):
        chill = calculate_windchill(temp_f, speed)
        print(f"At temperature {temp_f:.1f}F, and wind speed {speed} mph, the windchill is: {chill:.2f}F")

def main():
    print(" Welcome to the Windchill Calculator \n")
    temp_input = float(input("What is the temperature? "))
    scale = input("Fahrenheit or Celsius (F/C)? ").strip().upper()

    # Convert if needed
    if scale == "C":
        temp_f = celsius_to_fahrenheit(temp_input)
        print(f"Converted temperature: {temp_f:.1f}F")
    elif scale == "F":
        temp_f = temp_input
    else:
        print("Invalid scale. Please enter 'F' or 'C'.")
        return

    display_results(temp_f)

if __name__ == "__main__":
    main()
