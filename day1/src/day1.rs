use std::fs::read_to_string;
pub fn run() {
    let contents = read_to_string("day1.txt")
        .expect("Panick");
    
    let mut nums: Vec<i32> = Vec::new();

    // Part One
    for x in contents.split_ascii_whitespace() {
        nums.push(x.parse::<i32>().unwrap())
    }

    for i in &nums {
        for j in &nums {
            if i + j == 2020 {
                println!("{}", i * j)
            } 
        }
    }

    // Part Two

    for i in &nums {
        for j in &nums {
            for k in &nums {
                if i + j + k == 2020 {
                    println!("{}", i * j * k);
                }
            }
        }
    }
}