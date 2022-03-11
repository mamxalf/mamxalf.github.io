---
layout: post
title:  "Refactor Conditional Statement (if else & switch case) & Performanya"
author: "Hammam Firdaus"
tags: Notes Ruby
---

Pernah suatu waktu saya menulis code dengan conditional statements `if else` tetapi panjang sekali, dan setelah saya lihat lihat, ternyata terlihat buruk. Maka saya berpikir untuk menulis ke `switch case`, ketika sudah selesai dan saya commit ke repository ternyata code tersebut dihadang oleh `codefactor`. Untuk mengelabuhi tanda merah dari `codefactor` saya berinisiatif untuk bertanya kepada google, lalu bertemulah beberapa solusi sebagai berikut :

## Solusi Code
### Menggunakan Hash
```ruby
hash = {
  key: 'value'
}
hash[:key]
```
#### Example :
```ruby
lists = {
  one:   'satu',
  two:   'dua',
  three: 'tiga'
}
lists[:one] # => 'satu'
```
Dengan contoh seperti diatas masalah `codefactor` sudah teratasi, tetapi dengan seperti itu saya jadi penasaran dengan performanya, mari kita coba :muscle:

* Percobaan ini saya menguji menggunakan macbook pro 2020 (16gb)
  
```ruby
require 'benchmark'

class MatchOne
  def self.match?(variable)
    variable == 'one'
  end
end

class MatchTwo
  def self.match?(variable)
    variable == 'two'
  end
end

class MatchThree
  def self.match?(variable)
    variable == 'three'
  end
end

class FactoryMatch
  LIST_MATCH = [
    MatchOne,
    MatchTwo,
    MatchThree
  ]
  def self.build(value)
    LIST_MATCH.find { |x| x.match?(value) }
  end
end

def if_else variable
    if variable == 'one'
        'satu'
    elsif variable == 'two'
        'dua'
    elsif variable == 'three'
        'tiga'
    end
end

def switch_case variable
    case variable
    when 'one'
        'satu'
    when "two"
        'dua'
    when 'three'
        'tiga'
    end
end

def hash_match variable
    lists = {
        one:   'satu',
        two:   'dua',
        three: 'tiga'
    }
    lists[variable]
end

n = 1_000_000
value = 'three'
Benchmark.bm do |x|
  x.report('Factory Class :') { n.times { FactoryMatch.build('three') } }
  x.report('If Else       :') { n.times { if_else value } }
  x.report('Switch Case   :') { n.times { switch_case value } }
  x.report('Hash          :') { n.times { hash_match value } }
end
```

#### Result

```bash
····································································································
❯ ruby test.rb
       user     system      total        real
Factory Class :  0.627650   0.000389   0.628039 (  0.628466)
If Else       :  0.150378   0.000073   0.150451 (  0.150587)
Switch Case   :  0.105162   0.000126   0.105288 (  0.105434)
Hash          :  0.204662   0.000135   0.204797 (  0.204850)
····································································································
❯ ruby test.rb
       user     system      total        real
Factory Class :  0.628762   0.000394   0.629156 (  0.629469)
If Else       :  0.156706   0.000128   0.156834 (  0.157027)
Switch Case   :  0.106854   0.000200   0.107054 (  0.107371)
Hash          :  0.213856   0.000136   0.213992 (  0.214116)
····································································································
❯ ruby test.rb
       user     system      total        real
Factory Class :  0.622062   0.000448   0.622510 (  0.622954)
If Else       :  0.158783   0.000089   0.158872 (  0.159022)
Switch Case   :  0.106068   0.000153   0.106221 (  0.106560)
Hash          :  0.206783   0.000266   0.207049 (  0.207448)
```

## Kesimpulan menurut Penulis
1. Untuk performa paling cepat ternyata ada pada `Switch Case`
2. Gunakan `If Else` untuk (max) 3 conditional statement
3. Gunakan `Factory Class` untuk case dimana perlu membandingkan OOP atau antar Class
4. Gunakan `Switch Case` untuk conditional statement dmn merujuk ke proses fungsi selanjutnya
5. Gunakan `Hash` jika case conditional statement untuk mencari sebuah nilai dan tidak merujuk ke proses fungsi selanjutnya
**Note** Pada dasarnya semua ada plus minus-nya tinggal menyesuaikan kebutuhan saja, akan tetapi untuk level code conditional statement seperti ini bisa dipilih solusi untuk kerapian & kejelasan dari code itu sendiri #CMIIW


Thanks!

<br>
<br>
<br>

**Let me know if something goes wrong**
### My Contact
Telegram : @mamxalf<br>
Email : hammamxalf@gmail.com