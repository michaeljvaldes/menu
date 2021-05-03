INSERT INTO recipe(`id`,`name`, `lucy_rating`, `michael_rating`)
VALUES
    (1, 'Grilled pork chops with plums, halloumi, and lemon', 5, 5),
    (2, 'Pizza with shiitake mushrooms, roasted garlic, thyme, and taleggio', 3, 5);


INSERT INTO ingredient(`amount`, `name`, `recipe_id`)
VALUES
    ('3 tablespoons', 'extra virgin olive oil', 1),
    ('2 cups', 'sliced shiitake mushrooms', 1),
    ('4 to 6 cloves', 'garlic, peeled and smashed', 1),
    (null, 'sea salt', 1),
    (null, 'freshly ground pepper', 1),
    ('4 to 5 sprigs', 'fresh thyme', 1),
    ('1 ball', 'pizza dough', 1),
    ('3 oz', 'Taleggio cheese', 1);



INSERT INTO coffee(`id`, `roaster`, `name`, `country`)
VALUES
    (1, 'Greater Goods Coffee Co.', 'Fresh Perspective', 'Ethiopia'),
    (2, 'Greater Goods Coffee Co.', 'Kinini Village', 'Rwanda'),
    (3, 'Greater Goods Coffee Co.', 'Take Me Home', 'Costa Rica'),
    (4, '1000 Faces Coffee', 'Ngoma Bikunda Island', 'Rwanda');


